"use client";
import { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  // Defined programs with their specific destination URLs
  const programs = [
    { name: "6-Month Wealth Accelerator", url: "/apply?program=6-Month-Wealth-Accelerator" },
    { name: "12-Month Legacy Mentorship", url: "/apply?program=12-Month-Legacy-Mentorship" },
    { name: "21-Day Challenge", url: "https://selar.com/p/66162y611m?affiliate=e3467547b6" },
    { name: "Financial Intelligence", url: "https://app.lifecarduniversity.org/courses/financial-intelligence/" },
    { name: "Wealth Creation Digital Library", url: "https://lifecarduniversity.org/courses/wealth-creation-digital-library/" },
    { name: "9 to 5 Is Not a Scam", url: "https://selar.com/0x310v" },
    { name: "All Courses", url: "https://lifecarduniversity.org/courses/" }
  ];

  return (
    <nav className="fixed w-full z-[100] px-8 py-6 backdrop-blur-md bg-black/75 border-b border-white/10 flex justify-between items-center">
      {/* Title as Home Link */}
      <Link href="/" className="text-xl font-bold tracking-tighter text-white">
        FINANCIAL <span className="text-amber-500">ABUNDANCE </span>HUB
      </Link>
      
      {/* Desktop Menu */}
      <div className="hidden md:flex space-x-8 text-sm font-medium text-white items-center">
        <Link href="/" className="hover:text-amber-500 transition">Home</Link>
        <div className="relative" onMouseEnter={() => setDropdownOpen(true)} onMouseLeave={() => setDropdownOpen(false)}>
          <button className="hover:text-amber-500 transition flex items-center gap-1">Programs ▾</button>
          <AnimatePresence>
            {dropdownOpen && (
              <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} className="absolute top-full left-0 w-72 bg-black border border-white/10 p-4 mt-2 rounded-xl shadow-2xl z-[110]">
                {programs.map(p => (
                  <a key={p.name} href={p.url} target={p.url.startsWith('http') ? "_blank" : undefined} className="block py-2 text-xs text-slate-300 hover:text-amber-500 transition">
                    {p.name}
                  </a>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
        <Link href="/blog" className="hover:text-amber-500 transition">Blog</Link>
        <Link href="/apply" className="bg-amber-500 text-black px-6 py-2 rounded-full font-bold hover:bg-amber-400 transition">Apply Now</Link>
      </div>

      {/* Mobile Toggle */}
      <button className="md:hidden text-white text-3xl z-[101] relative" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? "✕" : "☰"}
      </button>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} 
            className="absolute top-0 left-0 w-full h-screen bg-black flex flex-col items-center justify-center space-y-6 md:hidden z-[100]"
          >
            <Link href="/" className="text-2xl font-bold" onClick={() => setIsOpen(false)}>Home</Link>
            
            {/* Accordion for Programs */}
            <div className="w-full text-center">
              <button 
                className="text-xl font-semibold text-slate-300"
                onClick={() => setDropdownOpen(!dropdownOpen)}
              >
                Programs {dropdownOpen ? '▲' : '▼'}
              </button>
              <AnimatePresence>
                {dropdownOpen && (
                  <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0 }} className="overflow-hidden flex flex-col mt-4 space-y-3">
                    {programs.map(p => (
                      <a key={p.name} href={p.url} target={p.url.startsWith('http') ? "_blank" : undefined} className="text-sm text-slate-400 block" onClick={() => setIsOpen(false)}>
                        {p.name}
                      </a>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <Link href="/blog" className="text-xl font-bold" onClick={() => setIsOpen(false)}>Blog</Link>
            <Link href="/apply" className="text-amber-500 font-bold text-2xl" onClick={() => setIsOpen(false)}>Apply Now</Link>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}