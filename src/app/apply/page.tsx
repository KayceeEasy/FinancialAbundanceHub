"use client";

import { useSearchParams } from "next/navigation";
import { Suspense, useState, useTransition } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import PhoneInputWithCountrySelect from "react-phone-number-input";
import "react-phone-number-input/style.css";
import { submitApplication } from "../actions";

function ApplyForm() {
  const searchParams = useSearchParams();
  const rawProgram = searchParams.get("program")?.replace(/-/g, ' ') || "General Inquiry";

  const [phone, setPhone] = useState<string>("");
  const [isPending, startTransition] = useTransition();
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setErrorMessage(null);

    const formData = new FormData(e.currentTarget);
    formData.set("program", rawProgram);
    formData.set("phone", phone);

    startTransition(async () => {
      const res = await submitApplication(formData);
      if (res.success) {
        setIsSubmitted(true);
      } else {
        setErrorMessage(res.error || "Submission failed. Please check your details and try again.");
      }
    });
  };

  if (isSubmitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="w-full max-w-2xl bg-black/60 backdrop-blur-xl p-8 md:p-12 rounded-3xl border border-amber-500/30 text-center shadow-2xl space-y-6"
      >
        <div className="w-16 h-16 bg-amber-500/20 text-amber-500 rounded-full flex items-center justify-center mx-auto text-3xl">
          ✓
        </div>
        <h2 className="text-3xl font-black text-white">Application Received!</h2>
        <p className="text-slate-300 text-sm md:text-base leading-relaxed">
          Thank you for applying for <span className="text-amber-500 font-bold">{rawProgram}</span>. Our advisory team will review your application and contact you within 24-48 hours.
        </p>
        <div className="pt-4">
          <Link
            href="/"
            className="inline-block bg-amber-500 text-black font-bold px-8 py-3 rounded-full hover:bg-amber-400 transition shadow-lg hover:shadow-amber-500/20"
          >
            Return to Homepage
          </Link>
        </div>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className="w-full max-w-2xl bg-black/60 backdrop-blur-xl p-6 md:p-10 rounded-3xl border border-white/10 shadow-2xl"
    >
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-white mb-2">Apply for:</h1>
        <h2 className="text-amber-500 text-xl md:text-2xl font-black uppercase tracking-widest">
          {rawProgram}
        </h2>
      </div>

      {errorMessage && (
        <div className="mb-6 p-4 bg-red-500/10 border border-red-500/30 rounded-xl text-red-400 text-sm text-center">
          {errorMessage}
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-5">
        <div>
          <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
            Full Name <span className="text-amber-500">*</span>
          </label>
          <input
            type="text"
            name="name"
            required
            placeholder="John Doe"
            className="w-full bg-zinc-900/80 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:border-amber-500 transition text-sm"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div>
            <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
              Email Address <span className="text-amber-500">*</span>
            </label>
            <input
              type="email"
              name="email"
              required
              placeholder="john@example.com"
              className="w-full bg-zinc-900/80 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:border-amber-500 transition text-sm"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
              Phone Number / WhatsApp
            </label>
            <PhoneInputWithCountrySelect
              defaultCountry="NG"
              international
              countryCallingCodeEditable={false}
              name="phone"
              placeholder="Enter phone number"
              value={phone}
              onChange={(value) => setPhone(value ?? "")}
              className="phone-picker w-full bg-zinc-900/80 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-slate-500 focus-within:border-amber-500 transition text-sm flex items-center gap-2"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div>
            <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
              Company / Organization (Optional)
            </label>
            <input
              type="text"
              name="companyName"
              placeholder="Acme Corp"
              className="w-full bg-zinc-900/80 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:border-amber-500 transition text-sm"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
              Industry / Occupation
            </label>
            <input
              type="text"
              name="industry"
              placeholder="e.g. Finance, Tech, Real Estate"
              className="w-full bg-zinc-900/80 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:border-amber-500 transition text-sm"
            />
          </div>
        </div>

        <div>
          <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
            Primary Financial Goal / Challenge
          </label>
          <textarea
            name="primaryChallenge"
            rows={3}
            placeholder="Tell us what you hope to achieve through this program..."
            className="w-full bg-zinc-900/80 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:border-amber-500 transition text-sm resize-none"
          />
        </div>

        {/* GoHighLevel & Legal Form Note */}
        <p className="text-[11px] text-slate-500 leading-relaxed border-t border-white/10 pt-4">
          By submitting this application, you acknowledge that all information provided by Financial Abundance Hub is strictly for educational and informational purposes and does not constitute financial or legal advice. You agree to our{" "}
          <Link href="/privacy" className="text-amber-500 hover:underline" target="_blank">
            Privacy Policy
          </Link>{" "}
          and{" "}
          <Link href="/terms" className="text-amber-500 hover:underline" target="_blank">
            Terms of Service
          </Link>.
        </p>

        <button
          type="submit"
          disabled={isPending}
          className="w-full bg-amber-500 text-black font-bold py-4 rounded-xl hover:bg-amber-400 transition shadow-lg hover:shadow-amber-500/20 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 text-base"
        >
          {isPending ? (
            <span>Submitting Application...</span>
          ) : (
            <span>Submit Application</span>
          )}
        </button>
      </form>
    </motion.div>
  );
}

export default function ApplyPage() {
  return (
    <main className="min-h-screen bg-transparent flex items-center justify-center p-4 w-full overflow-hidden pt-32 pb-12">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] md:w-[600px] md:h-[600px] bg-amber-500/5 blur-[150px] rounded-full -z-0" />
      
      <Suspense fallback={<div className="text-white">Loading Application...</div>}>
        <ApplyForm />
      </Suspense>
    </main>
  );
}