import Link from 'next/link';

export default function Footer() {
  const whatsappUrl = "https://wa.me/2348068067298?text=Hello,%20I%20am%20contacting%20you%20from%20Financial%20Abundance%20Hub.";
  const mailtoUrl = "mailto:blessingjoy@lifecardcompany.com?subject=Financial%20Abundance%20Hub%20Inquiry";

  return (
    <footer className="w-full bg-black/90 border-t border-white/10 text-slate-400 text-xs py-12 px-6 md:px-16 mt-20 relative z-10">
      <div className="max-w-6xl mx-auto space-y-8">
        
        {/* Top Header, Contact Channels & Navigation */}
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

        {/* Official Inquiry Channels (Hidden raw email/phone) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 bg-white/5 border border-white/10 rounded-2xl p-6 text-slate-300 text-xs">
          <div>
            <h4 className="text-white font-semibold mb-1 uppercase tracking-wider text-[11px] text-amber-500">Official Inquiries & Support</h4>
            <p className="text-slate-400">Have questions about our programs, privacy rights, or advisory services?</p>
          </div>
          <div className="space-y-2">
            <div>
              <h5 className="text-slate-200 font-semibold mb-0.5">Email Support</h5>
              <a href={mailtoUrl} className="text-amber-500 hover:underline">
                Contact Support via Email →
              </a>
            </div>
            <div>
              <h5 className="text-slate-200 font-semibold mb-0.5">Direct Messaging</h5>
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="text-amber-500 hover:underline">
                Chat with Advisory via WhatsApp →
              </a>
            </div>
          </div>
          <div>
            <h5 className="text-slate-200 font-semibold mb-1">Online Inquiry Form</h5>
            <Link href="/apply?program=General-Inquiry" className="text-amber-500 hover:underline">
              Submit an Application / Inquiry →
            </Link>
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
