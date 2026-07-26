"use server";
import { z } from "zod";
import { headers } from "next/headers";

// Simple in-memory rate limiting map for edge/server instances
// Key: Client IP, Value: Array of submission timestamps
const rateLimitMap = new Map<string, number[]>();
const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000; // 10 minutes
const MAX_SUBMISSIONS_PER_WINDOW = 3;

// Helper to strip HTML tags and potentially dangerous script tags
function sanitizeInput(str?: unknown): string {
  if (typeof str !== "string") return "";
  return str
    .replace(/<[^>]*>?/gm, "") // Strip HTML tags
    .replace(/javascript:/gi, "") // Remove inline scripts
    .trim();
}

// Zod Schema for Application / Inquiry submission
const ApplicationSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters long").max(100, "Name is too long"),
  email: z.string().email("Please provide a valid email address").max(150, "Email is too long"),
  phone: z.string().min(6, "Please provide a valid phone number").max(30, "Phone number is too long").optional().or(z.literal("")),
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
        error: "Too many submission attempts. Please wait 10 minutes before trying again." 
      };
    }

    // 2. Data Extraction & Sanitization
    const rawData = {
      name: sanitizeInput(formData.get("name") ?? formData.get("fullName")),
      email: sanitizeInput(formData.get("email")),
      phone: sanitizeInput(formData.get("phone")),
      program: sanitizeInput(formData.get("program") || "General Inquiry"),
      companyName: sanitizeInput(formData.get("companyName")),
      workforceSize: sanitizeInput(formData.get("workforceSize")),
      industry: sanitizeInput(formData.get("industry")),
      primaryChallenge: sanitizeInput(formData.get("primaryChallenge")),
    };

    // 3. Server-side Zod Schema Validation
    const validated = ApplicationSchema.parse(rawData);

    // Update rate limit tracking
    validTimestamps.push(now);
    rateLimitMap.set(clientIp, validTimestamps);

    // 4. Send Sanitized & Validated Payload to Google Apps Script Web App
    const SHEET_URL = "https://script.google.com/macros/s/AKfycbyU9V0GscMfOPYXhH_BZ_QGZoGcLB6m2ARnTo_lh7m9RBNoJlTI6tszd91u3JGJRDLR/exec";

    const response = await fetch(SHEET_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: validated.name,
        email: validated.email,
        phone: validated.phone || "",
        program: validated.program,
        companyName: validated.companyName || "",
        workforceSize: validated.workforceSize || "",
        industry: validated.industry || "",
        primaryChallenge: validated.primaryChallenge || "",
        submittedAt: new Date().toISOString(),
      }),
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
