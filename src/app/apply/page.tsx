"use client";

import { useSearchParams } from "next/navigation";
import { Suspense, useState, useTransition, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import PhoneInputWithCountrySelect from "react-phone-number-input";
import "react-phone-number-input/style.css";
import { submitApplication } from "../actions";

const INDUSTRIES = [
  "Artificial Intelligence (AI) & Machine Learning",
  "Accounting & Finance",
  "Agriculture & Agribusiness",
  "Arts, Entertainment & Recreation",
  "Automotive",
  "Construction & Contracting",
  "Education & Training",
  "Energy, Oil & Gas / Utilities",
  "Engineering & Architecture",
  "Government & Public Sector",
  "Healthcare & Life Sciences",
  "Hospitality, Travel & Food Service",
  "Information Technology & Software (SaaS)",
  "Insurance",
  "Legal Services",
  "Manufacturing & Industrial",
  "Marketing, Advertising & PR",
  "Non-Profit & Civic Organization",
  "Real Estate & Housing",
  "Retail & Consumer Goods",
  "Telecommunications",
  "Transportation & Logistics",
  "Other",
];

function ApplyForm() {
  const searchParams = useSearchParams();
  const rawProgram = searchParams.get("program")?.replace(/-/g, ' ') || "General Inquiry";

  const [phone, setPhone] = useState<string>("");
  const [selectedIndustry, setSelectedIndustry] = useState<string>("");
  const [otherIndustry, setOtherIndustry] = useState<string>("");
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const [isPending, startTransition] = useTransition();
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const filteredIndustries = INDUSTRIES.filter((ind) =>
    ind.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setErrorMessage(null);

    const formData = new FormData(e.currentTarget);
    formData.set("program", rawProgram);
    formData.set("phone", phone);
    formData.set(
      "industry",
      selectedIndustry === "Other" ? (otherIndustry.trim() || "Other") : selectedIndustry
    );

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
              Workforce Size (Optional)
            </label>
            <select
              name="workforceSize"
              className="w-full bg-zinc-900/80 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-amber-500 transition text-sm"
            >
              <option value="" className="bg-zinc-900 text-slate-400">Select workforce size (if applicable)</option>
              <option value="Individual / Solo" className="bg-zinc-900">Individual / Solo Practitioner</option>
              <option value="1-5 staff" className="bg-zinc-900">1 – 5 Team Members</option>
              <option value="6-20 staff" className="bg-zinc-900">6 – 20 Staff (SME)</option>
              <option value="21-50 staff" className="bg-zinc-900">21 – 50 Staff (Growth)</option>
              <option value="51-100 staff" className="bg-zinc-900">51 – 100 Staff (Scale)</option>
              <option value="100+ staff" className="bg-zinc-900">100+ Staff (Enterprise)</option>
            </select>
          </div>
        </div>

        {/* Searchable Industry Combobox */}
        <div ref={dropdownRef} className="relative">
          <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
            Industry / Occupation
          </label>

          <button
            type="button"
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            className="w-full bg-zinc-900/80 border border-white/10 rounded-xl px-4 py-3 text-left text-white focus:outline-none focus:border-amber-500 transition text-sm flex justify-between items-center"
          >
            <span className={selectedIndustry ? "text-white font-medium" : "text-slate-500"}>
              {selectedIndustry === "Other" && otherIndustry.trim()
                ? otherIndustry.trim()
                : (selectedIndustry || "Search or select your industry...")}
            </span>
            <span className="text-slate-400 text-xs">{isDropdownOpen ? "▲" : "▼"}</span>
          </button>

          <AnimatePresence>
            {isDropdownOpen && (
              <motion.div
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 5 }}
                className="absolute z-50 left-0 top-full mt-2 w-full bg-zinc-950 border border-amber-500/30 rounded-2xl p-3 shadow-2xl max-h-64 overflow-hidden flex flex-col"
              >
                {/* Search Bar */}
                <input
                  type="text"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  placeholder="Type to filter (e.g. AI, Media, Legal)..."
                  className="w-full bg-zinc-900 border border-white/10 rounded-xl px-3 py-2 text-white placeholder-slate-500 text-xs focus:outline-none focus:border-amber-500 mb-2"
                  autoFocus
                />

                {/* Filtered Options List */}
                <div className="overflow-y-auto space-y-1 pr-1 custom-scrollbar">
                  {filteredIndustries.map((ind) => (
                    <button
                      key={ind}
                      type="button"
                      onClick={() => {
                        setSelectedIndustry(ind);
                        if (ind === "Other" && searchTerm.trim()) {
                          setOtherIndustry(searchTerm.trim());
                        }
                        setIsDropdownOpen(false);
                        setSearchTerm("");
                      }}
                      className={`w-full text-left px-3 py-2 rounded-lg text-xs transition flex items-center justify-between ${
                        selectedIndustry === ind
                          ? "bg-amber-500 text-black font-bold"
                          : "text-slate-300 hover:bg-white/10 hover:text-white"
                      }`}
                    >
                      <span>{ind}</span>
                      {selectedIndustry === ind && <span>✓</span>}
                    </button>
                  ))}

                  {/* Dynamic 'Use Custom Industry' Option when search has no exact match */}
                  {searchTerm.trim().length > 0 && !filteredIndustries.some(i => i.toLowerCase() === searchTerm.trim().toLowerCase()) && (
                    <button
                      type="button"
                      onClick={() => {
                        setSelectedIndustry("Other");
                        setOtherIndustry(searchTerm.trim());
                        setIsDropdownOpen(false);
                        setSearchTerm("");
                      }}
                      className="w-full text-left px-3 py-2.5 rounded-lg text-xs font-semibold bg-amber-500/20 text-amber-300 border border-amber-500/40 hover:bg-amber-500/30 transition flex items-center justify-between mt-1"
                    >
                      <span>+ Use "{searchTerm.trim()}" as Industry</span>
                      <span className="text-[10px] bg-amber-500 text-black px-1.5 py-0.5 rounded font-bold">Select Custom</span>
                    </button>
                  )}
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Conditional Custom Text Input for Other */}
          {selectedIndustry === "Other" && (
            <motion.input
              initial={{ opacity: 0, y: -5 }}
              animate={{ opacity: 1, y: 0 }}
              type="text"
              value={otherIndustry}
              onChange={(e) => setOtherIndustry(e.target.value)}
              placeholder="Please specify your industry..."
              className="w-full mt-3 bg-zinc-900/80 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:border-amber-500 transition text-sm"
              required
            />
          )}
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