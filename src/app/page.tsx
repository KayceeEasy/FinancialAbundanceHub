"use client";
import { motion, Variants } from "framer-motion"; // 1. Import Variants type
import Link from "next/link";

// 2. Explicitly type the object as Variants
const reveal: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 1.0, ease: "easeInOut" as const } // 3. Use 'as const'
  }
};

export default function Home() {
  const testimonials = [
    { name: "Okiemute S.", text: "This mentorship changed my financial trajectory in just 3 months.", img: "https://ui-avatars.com/api/?name=Okiemute+S&background=random" },
    { name: "Ngozi S. A.", text: "The real estate strategies are second to none. I'm finally building assets.", img: "https://ui-avatars.com/api/?name=Ngozi+S+A&background=random" },
    { name: "Anita F.", text: "Finally, a system that works. From paycheck-to-paycheck to investing.", img: "https://ui-avatars.com/api/?name=Anita+F&background=random" },
    { name: "Tope M. O.", text: "The legacy mentorship is the best investment I ever made.", img: "https://ui-avatars.com/api/?name=Tope+M+O&background=random" },
    { name: "Vivien O.", text: "Clear, actionable, and truly life-changing. Highly recommended.", img: "https://ui-avatars.com/api/?name=Vivien+O&background=random" }
  ];

  const posts = [
    { title: "How to Build Wealth in 2025", date: "2 days ago" },
    { title: "Real Estate vs Stocks: The Truth", date: "1 week ago" }
  ];

  return (
    <main className="text-white overflow-x-hidden bg-transparent">
      {/* 1. HERO */}
<section className="relative py-20 md:py-32 px-6 text-center overflow-hidden">
  
  <motion.div 
    initial={{ opacity: 0, y: 40 }} 
    animate={{ opacity: 1, y: 0 }} 
    transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
  >
    <h1 className="text-4xl md:text-9xl font-black leading-[1.1] md:leading-[0.9] tracking-tighter mb-8 mt-8 break-words text-white">
      FROM BROKE TO <br className="hidden md:block"/>
      <span className="text-amber-500 whitespace-nowrap drop-shadow-[0_0_20px_rgba(245,158,11,0.5)]">
        GLOBAL WEALTH
      </span>
    </h1>
    <p className="text-lg md:text-2xl text-slate-300 max-w-3xl mx-auto px-6 italic font-light">
      Learn the Exact System That Can Change Your Financial Life in Months.
    </p>
    <p className="text-lg md:text-2xl text-slate-400 max-w-3xl mx-auto px-6 italic font-light z-20 relative">
      This is not motivation. This is a proven mentorship designed to help you fix your finances, start investing, and build real wealth — even if you’re starting from scratch.
    </p>
  </motion.div>
</section>

      {/* 2. MY STORY */}
      <motion.section initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={reveal} className="py-20 px-6 max-w-3xl mx-auto text-center border-t border-white/10">
        <h2 className="text-3xl md:text-4xl font-bold mb-10 px-4">I wasn’t born wealthy… <br />but I refused to stay broke.</h2>
        <div className="space-y-6 text-lg md:text-xl text-slate-400 italic px-4">
          <p>I remember counting coins just to get by.</p>
          <p>Working hard, yet seeing nothing in my account.</p>
          <p>Watching others build wealth while I felt stuck.</p>
          <p className="font-bold text-white text-xl md:text-2xl not-italic py-4">Then everything changed.</p>
          <p>I discovered that wealth isn’t luck. It’s knowledge, systems, and the right mentorship.</p>
          <p>From my first real estate deal to building a global investment portfolio… <br />I transformed my life.</p>
          <p className="not-italic font-bold text-white pt-4">And now, I want to help you do the same.</p>
        </div>
      </motion.section>

      {/* 3. PATHS */}
      <motion.section initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={reveal} className="py-20 px-6 bg-white text-black">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-black text-center mb-20 tracking-tighter px-4">🚀 CHOOSE YOUR PATH TO WEALTH</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-8 md:p-10 border border-slate-200 rounded-3xl bg-slate-50">
              <h3 className="text-2xl md:text-3xl font-bold">6-Month Wealth Accelerator</h3>
              <p className="text-slate-500 italic mt-2 text-sm md:text-base">Perfect for professionals and beginners ready to fix their finances and start investing.</p>
              <ul className="mt-8 space-y-4 mb-8 text-sm md:text-base text-left">
                <li>✔ Master your money and eliminate financial confusion</li>
                <li>✔ Build a solid savings & investment system</li>
                <li>✔ Learn how real estate creates wealth</li>
                <li>✔ Start creating multiple income streams</li>
              </ul>
              <p className="text-3xl md:text-4xl font-bold">$10,000</p>
              <p className="text-sm text-slate-500 mb-6">Flexible payment plans available</p>
              <a href="/apply?program=6-Month-Wealth-Accelerator" className="block w-full py-5 bg-black text-white rounded-xl text-center font-bold">Apply for 6-Month Program</a>
            </div>
            <div className="p-8 md:p-10 border-4 border-amber-500 rounded-3xl">
              <h3 className="text-2xl md:text-3xl font-bold">12-Month Legacy Mentorship</h3>
              <p className="text-slate-500 italic mt-2 text-sm md:text-base">For entrepreneurs and investors ready to scale and build generational wealth.</p>
              <ul className="mt-8 space-y-4 mb-8 text-sm md:text-base text-left">
                <li>✔ Build a profitable real estate portfolio (local & global)</li>
                <li>✔ Learn elite co-investment strategies</li>
                <li>✔ Scale a business that creates freedom</li>
                <li>✔ Position yourself as a global investor</li>
              </ul>
              <p className="text-3xl md:text-4xl font-bold">$20,000</p>
              <p className="text-sm text-slate-500 mb-6">Flexible payment plans available</p>
              <a href="/apply?program=12-Month-Legacy-Mentorship" className="block w-full py-5 bg-black text-white rounded-xl text-center font-bold">Apply for 12-Month Mentorship</a>
            </div>
          </div>
        </div>
      </motion.section>

      {/* 4. REAL ESTATE */}
      <motion.section initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={reveal} className="py-20 px-6 max-w-4xl mx-auto border-t border-white/10">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 px-4">🏡 REAL ESTATE SCHOOL (ENTRY PATHWAY)</h2>
        <div className="space-y-6 px-4">
          {[
            { t: "Tier 1 – Foundation Mentorship", d: "6-month mentorship + Graduation in Doha", p: "$1,000" },
            { t: "Tier 2 – Certification Program", d: "Real Estate School (Africa & Gulf) | Certification from Qatar Real Estate Academy & Lifecard University", p: "$2,000" },
            { t: "Tier 3 – Advanced Investment + Certification", d: "Includes deep mentorship + ASCOK Qatar certification", p: "$2,500" }
          ].map((item, i) => (
            <div key={i} className="flex flex-col md:flex-row justify-between items-start md:items-center p-6 border border-white/10 rounded-xl gap-4">
              <div><h4 className="font-bold text-lg">{item.t}</h4><p className="text-slate-400 text-sm">{item.d}</p></div>
              <div className="text-xl font-bold whitespace-nowrap">{item.p}</div>
            </div>
          ))}
          <a href="/apply?program=Real-Estate-School" className="block mt-8 text-center bg-amber-500 text-black py-5 font-bold rounded-lg text-lg">Join Real Estate School</a>
        </div>
      </motion.section>

      {/* 5. WHO FOR */}
      <motion.section initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={reveal} className="py-20 px-6 bg-white/5">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">👤 WHO THIS IS FOR</h2>
          <ul className="space-y-4 text-lg">
            <li>✔ Professionals tired of living paycheck-to-paycheck</li>
            <li>✔ Entrepreneurs ready to scale</li>
            <li>✔ First-time or experienced investors</li>
            <li>✔ Anyone ready to break generational financial struggle</li>
          </ul>
        </div>
      </motion.section>

      {/* 6. TESTIMONIALS */}
      <section className="py-20 overflow-hidden">
        <h2 className="text-3xl font-bold text-center mb-12">SUCCESS STORIES</h2>
        <motion.div className="flex gap-6" animate={{ x: ["0%", "-50%"] }} transition={{ repeat: Infinity, duration: 25, ease: "linear" }}>
          {[...testimonials, ...testimonials].map((t, i) => (
            <div key={i} className="min-w-[300px] p-8 bg-white/5 border border-white/10 rounded-2xl">
              <img src={t.img} alt={t.name} className="w-12 h-12 rounded-full mb-4" />
              <p className="text-slate-300 italic mb-4">"{t.text}"</p>
              <span className="font-bold text-amber-500">{t.name}</span>
            </div>
          ))}
        </motion.div>
      </section>

      {/* 7. INSIGHTS */}
      <motion.section initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={reveal} className="py-20 px-6 border-t border-white/10">
        <div className="max-w-4xl mx-auto">
          <Link href="/blog" className="text-3xl font-bold mb-12 block hover:text-amber-500 transition">LATEST INSIGHTS ➔</Link>
          {posts.map((post, i) => (
            <Link href="/blog" key={i} className="flex justify-between items-center py-6 border-b border-white/10 hover:bg-white/5 px-4 transition">
              <h4 className="text-lg font-semibold">{post.title}</h4>
              <span className="text-sm text-amber-500">{post.date}</span>
            </Link>
          ))}
        </div>
      </motion.section>

      {/* 8. FINAL CALL */}
      <motion.section initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={reveal} className="py-20 px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-red-500 px-4">⚠️ LIMITED ENROLLMENT</h2>
        <p className="text-slate-400 mb-12 max-w-md mx-auto px-4">This mentorship is highly exclusive. Once slots are filled, enrollment closes.</p>
        <h3 className="text-4xl md:text-5xl font-black mb-8 italic px-4">🔥 FINAL CALL</h3>
        <div className="space-y-2 text-lg italic mb-12 px-4">
          <p>The wealthy are not waiting.</p>
          <p>Opportunities are not waiting.</p>
          <p>Time is not waiting.</p>
          <p className="not-italic text-2xl font-bold pt-4">The only question is:</p>
          <p className="not-italic text-2xl font-bold">Will you keep watching… or will you step in?</p>
        </div>
        <div className="flex flex-col gap-4 items-center">
          <a href="/apply" className="bg-amber-500 text-black px-12 py-5 rounded-lg text-xl font-bold">Apply Now</a>
          <p className="text-slate-400">Change Your Financial Future</p>
        </div>
      </motion.section>
    </main>
  );
}