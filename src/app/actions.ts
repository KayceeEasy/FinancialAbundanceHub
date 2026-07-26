"use server";
import { z } from "zod";
import { headers } from "next/headers";

// Simple in-memory rate limiting map for edge/server instances
const rateLimitMap = new Map<string, number[]>();
const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000; // 10 minutes
const MAX_SUBMISSIONS_PER_WINDOW = 5;

// Helper to strip HTML tags and potentially dangerous script tags
function sanitizeInput(str?: unknown): string {
  if (typeof str !== "string") return "";
  return str
    .replace(/<[^>]*>?/gm, "") // Strip HTML tags
    .replace(/javascript:/gi, "") // Remove inline scripts
    .trim();
}

// Helper to check multiple FormData key aliases safely
function getFormField(formData: FormData, ...keys: string[]): string {
  for (const key of keys) {
    const val = formData.get(key);
    if (typeof val === "string" && val.trim().length > 0) {
      return sanitizeInput(val);
    }
  }
  return "";
}

// Zod Schema for Application / Inquiry submission
const ApplicationSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters long").max(100, "Name is too long"),
  email: z.string().email("Please provide a valid email address").max(150, "Email is too long"),
  phone: z.string().max(35, "Phone number is too long").optional().or(z.literal("")),
  program: z.string().min(1, "Program choice is required").max(150),
  companyName: z.string().max(150).optional().or(z.literal("")),
  workforceSize: z.string().max(50).optional().or(z.literal("")),
  industry: z.string().max(100).optional().or(z.literal("")),
  primaryChallenge: z.string().max(1000).optional().or(z.literal("")),
});

export async function submitApplication(formData: FormData) {
  try {
    // 1. IP-based Rate Limiting
    const reqHeaders = await headers();
    const clientIp = reqHeaders.get("x-forwarded-for")?.split(",")[0]?.trim() || 
                     reqHeaders.get("x-real-ip") || 
                     "anonymous_client";

    const now = Date.now();
    const timestamps = rateLimitMap.get(clientIp) || [];
    const validTimestamps = timestamps.filter(t => now - t < RATE_LIMIT_WINDOW_MS);

    if (validTimestamps.length >= MAX_SUBMISSIONS_PER_WINDOW) {
      return { 
        success: false, 
        error: "Too many submission attempts. Please wait a few minutes before trying again." 
      };
    }

    // 2. Multi-alias Data Extraction & Sanitization
    const rawData = {
      name: getFormField(formData, "name", "fullName", "Full Name", "Name"),
      email: getFormField(formData, "email", "Email"),
      phone: getFormField(formData, "phone", "Phone", "whatsapp", "phoneNumber"),
      program: getFormField(formData, "program", "Program") || "General Inquiry",
      companyName: getFormField(formData, "companyName", "company", "Company", "company_name"),
      workforceSize: getFormField(formData, "workforceSize", "workforce", "workforce_size"),
      industry: getFormField(formData, "industry", "occupation", "Industry"),
      primaryChallenge: getFormField(formData, "primaryChallenge", "primaryGoal", "challenge", "goal", "primary_challenge", "primary_goal"),
    };

    // 3. Server-side Zod Schema Validation
    const validated = ApplicationSchema.parse(rawData);

    // Update rate limit tracking
    validTimestamps.push(now);
    rateLimitMap.set(clientIp, validTimestamps);

    // 4. Send Payload with All Field Aliases via both URL query params and POST body for Google Apps Script 302 redirect compatibility
    const SHEET_URL = "https://script.google.com/macros/s/AKfycbyU9V0GscMfOPYXhH_BZ_QGZoGcLB6m2ARnTo_lh7m9RBNoJlTI6tszd91u3JGJRDLR/exec";

    const payload: Record<string, string> = {
      // Primary keys
      name: validated.name,
      email: validated.email,
      phone: validated.phone || "",
      program: validated.program,
      companyName: validated.companyName || "",
      workforceSize: validated.workforceSize || "",
      industry: validated.industry || "",
      primaryChallenge: validated.primaryChallenge || "",

      // Comprehensive aliases for Google Apps Script column/property matching
      fullName: validated.name,
      company: validated.companyName || "",
      occupation: validated.industry || "",
      primaryGoal: validated.primaryChallenge || "",
      challenge: validated.primaryChallenge || "",
      goal: validated.primaryChallenge || "",
      submittedAt: new Date().toISOString(),
    };

    const urlParams = new URLSearchParams();
    Object.entries(payload).forEach(([k, v]) => {
      urlParams.append(k, v);
    });

    const targetUrl = `${SHEET_URL}?${urlParams.toString()}`;

    const response = await fetch(targetUrl, {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: urlParams.toString(),
    });

    if (!response.ok) {
      throw new Error(`Google Sheet API returned status ${response.status}`);
    }

    return { success: true };
  } catch (error) {
    if (error instanceof z.ZodError) {
      const firstIssue = error.issues[0]?.message || "Invalid input data provided.";
      return { success: false, error: firstIssue };
    }
    console.error("Submission Error:", error);
    return { success: false, error: "Failed to submit application. Please try again later." };
  }
}

