"use client";
import { useSearchParams } from "next/navigation";
import { Suspense } from "react";
import { motion } from "framer-motion";

function ApplyForm() {
  const searchParams = useSearchParams();
  const program = searchParams.get("program")?.replace(/-/g, ' ') || "General Inquiry";
  
  const googleFormUrl = `https://docs.google.com/forms/d/e/1FAIpQLSeo2MOcEcKzjmHnhjJLGF6PTiC-Az1YyZwkB4va6MnWak0qwA/viewform?usp=pp_url&entry.187339929=${encodeURIComponent(program)}`;

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }} 
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
      // Added slightly more opacity to bg so the dust is visible behind it
      className="w-full max-w-2xl bg-black/40 backdrop-blur-md p-6 md:p-12 rounded-3xl border border-white/10 shadow-2xl"
    >
      <div className="text-center mb-10">
        <h1 className="text-3xl font-bold text-white mb-2">Apply for:</h1>
        <h2 className="text-amber-500 text-2xl font-black uppercase tracking-widest">{program}</h2>
      </div>

      <div className="w-full h-[600px] overflow-hidden rounded-2xl bg-white">
        <iframe 
          src={googleFormUrl}
          className="w-full h-full border-0"
          title="Application Form"
          // Crucial for performance
          loading="lazy" 
        />
      </div>
    </motion.div>
  );
}

export default function ApplyPage() {
  return (
    // Changed bg to transparent to let the Layout GoldDust show through
    <main className="min-h-screen bg-transparent flex items-center justify-center p-4 w-full overflow-hidden pt-32 pb-12">
      {/* Background ambient light */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] md:w-[600px] md:h-[600px] bg-amber-500/5 blur-[150px] rounded-full -z-0" />
      
      <Suspense fallback={<div className="text-white">Loading Application...</div>}>
        <ApplyForm />
      </Suspense>
    </main>
  );
}