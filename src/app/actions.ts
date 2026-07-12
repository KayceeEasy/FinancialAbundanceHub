"use server";

export async function submitApplication(formData: FormData) {
  const data = Object.fromEntries(formData.entries());
  
  // Replace with your actual Google Apps Script Web App URL
  const SHEET_URL = "https://script.google.com/macros/s/AKfycbyU9V0GscMfOPYXhH_BZ_QGZoGcLB6m2ARnTo_lh7m9RBNoJlTI6tszd91u3JGJRDLR/exec";

  try {
    const response = await fetch(SHEET_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: data.name ?? data.fullName,
        email: data.email,
        phone: data.phone,
        program: data.program ?? '9 to 5 Is Not a Scam — Enterprise Quote',
        companyName: data.companyName,
        workforceSize: data.workforceSize,
        industry: data.industry,
        primaryChallenge: data.primaryChallenge,
      }),
    });

    if (!response.ok) throw new Error("Sheet API Error");
    return { success: true };
  } catch (error) {
    console.error("Submission Error:", error);
    return { success: false, error: "Failed to submit" };
  }
}
