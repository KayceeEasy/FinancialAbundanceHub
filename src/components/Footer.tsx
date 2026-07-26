import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="w-full bg-black/90 border-t border-white/10 text-slate-400 text-xs py-12 px-6 md:px-16 mt-20 relative z-10">
      <div className="max-w-6xl mx-auto space-y-8">
        
        {/* Top Header & Navigation */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 pb-6 border-b border-white/10">
          <div>
            <Link href="/" className="text-lg font-bold tracking-tighter text-white">
              FINANCIAL <span className="text-amber-500">ABUNDANCE </span>HUB
            </Link>
            <p className="text-xs text-slate-500 mt-1">
              Empowering your journey to financial freedom, wealth creation, and enterprise success.
            </p>
          </div>

          <div className="flex flex-wrap gap-6 text-sm font-medium text-slate-300">
            <Link href="/" className="hover:text-amber-500 transition">Home</Link>
            <Link href="/blog" className="hover:text-amber-500 transition">Blog</Link>
            <Link href="/apply" className="hover:text-amber-500 transition">Apply</Link>
            <Link href="/privacy" className="hover:text-amber-500 transition">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-amber-500 transition">Terms of Service</Link>
          </div>
        </div>

        {/* Global Financial & Legal Disclaimer */}
        <div className="space-y-3 text-slate-500 leading-relaxed text-[11px]">
          <p>
            <strong className="text-slate-400">Financial & Earnings Disclaimer:</strong> The content provided on Financial Abundance Hub (including all written materials, courses, challenge programs, and mentorship offerings) is for educational and informational purposes only and does not constitute financial, investment, legal, or tax advice. Financial markets, real estate investments, and wealth strategies carry risk. Past performance does not guarantee future results.
          </p>
          <p>
            Before making any financial or investment decision, you should conduct your own due diligence and consult with a qualified, licensed financial advisor or professional. Financial Abundance Hub and its creators, instructors, and affiliates are not responsible for any personal or financial decisions made based on the information provided on this site or in our programs.
          </p>
        </div>

        {/* Bottom Copyright */}
        <div className="flex flex-col md:flex-row justify-between items-center text-[11px] text-slate-600 pt-4 border-t border-white/5 gap-4">
          <p>© {new Date().getFullYear()} Financial Abundance Hub. All rights reserved.</p>
          <div className="flex gap-4">
            <Link href="/privacy" className="hover:text-slate-400 transition">Privacy Policy</Link>
            <span>•</span>
            <Link href="/terms" className="hover:text-slate-400 transition">Terms of Service</Link>
          </div>
        </div>

      </div>
    </footer>
  );
}
