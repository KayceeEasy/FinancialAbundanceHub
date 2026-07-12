'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import ProgramVideo from '@/components/ProgramVideo';
import challengeBook from '../../../../content/media/21-days-challenge.jpg';

const AFFILIATE_LINK = 'https://selar.com/p/66162y611m?affiliate=62666087v7';
const STRIPE_LINK = 'https://buy.stripe.com/3cI6ozgGRfWPfqZ1iBd7q1d';

export default function TwentyOneDaysChallengePage() {
  return (
    <div className="pt-24 pb-16 px-6 max-w-7xl mx-auto">
      {/* Hero Section */}
      <motion.section 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-16"
      >
        <div className="text-center mb-12">
          <div className="inline-block bg-green-500/10 border border-green-500/30 rounded-full px-4 py-2 mb-4">
            <p className="text-green-500 text-xs font-semibold tracking-widest">⚡ NEW BATCH NOW OPEN — LIMITED SLOTS</p>
          </div>
          
          <h1 className="program-display text-5xl md:text-7xl font-bold leading-tight mb-4">
            21 DAYS <span className="text-amber-500">ROUTINE</span>
          </h1>
          
          <p className="text-2xl md:text-3xl font-semibold mb-4">
            Tired of starting over every Monday?
          </p>
          
          <p className="text-xl text-red-500 font-bold mb-8">
            THIS IS THE LAST PROGRAM YOU'LL NEED
          </p>

          <p className="text-lg text-slate-400 mb-8 max-w-3xl mx-auto">
            A 21-day execution system that forces real results — not through motivation, but through a system that simply will not let you fail.
          </p>

          <div className="flex flex-row gap-3 justify-center">
            <a 
              href={STRIPE_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-amber-500 text-black px-8 py-3 rounded-lg font-bold hover:bg-amber-400 transition"
            >
              Pay with Stripe — $50 →
            </a>
            <a 
              href={AFFILIATE_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="border border-amber-500 text-amber-500 px-8 py-3 rounded-lg font-bold hover:bg-amber-500/10 transition"
            >
              Pay via Selar — $50 →
            </a>
          </div>

          <p className="text-slate-400 mt-6">Scroll to learn more ↓</p>
        </div>
      </motion.section>

      <motion.section initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="mb-20 max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <Image src={challengeBook} alt="21 Days Routine programme book" priority className="max-h-[32rem] w-full object-contain rounded-2xl bg-white/5" />
          <div>
            <p className="program-kicker mb-3">Now watch Grace break it all down</p>
            <h2 className="program-display text-3xl md:text-5xl font-bold mb-6">Your consistency can become your unfair advantage.</h2>
            <ProgramVideo title="21 Days Routine – Introduction by Grace Ofure" src="https://www.youtube.com/embed/FYWXM1LhZ-w?controls=1&modestbranding=1&rel=0" />
          </div>
        </div>
      </motion.section>

      {/* Value Props */}
      <motion.section 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="mb-20 py-16 bg-white/5 border border-white/10 rounded-lg p-8"
      >
        <div className="grid md:grid-cols-4 gap-8 text-center">
          {[
            { label: 'Value:', value: '~~$90~~' },
            { label: 'Today Only:', value: '$50', highlight: true },
            { label: 'Per Day:', value: '~$3', highlight: true },
            { label: 'Slots:', value: 'Limited!', highlight: true },
          ].map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
            >
              <p className="text-slate-400 text-sm mb-2">{item.label}</p>
              <p className={`text-2xl font-bold ${item.highlight ? 'text-amber-500' : 'text-slate-300'}`}>
                {item.value}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Sound Familiar? Section */}
      <motion.section 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="mb-20 py-16  border-t border-white/10"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          You Know What To Do. <br></br> <span className="text-amber-500">So Why Aren't You Doing It?</span>
        </h2>

        <div className="grid md:grid-cols-4 gap-6 mb-12">
          {[
            { icon: '🔄', title: 'Starting & Stopping', desc: 'You begin with fire, then life happens and momentum disappears completely.' },
            { icon: '📋', title: 'Planning Without Executing', desc: 'Your notebooks are full. Your calendar is beautifully organised. Nothing moves.' },
            { icon: '📺', title: 'Watching Others Win', desc: 'People you started with are miles ahead. You feel stuck watching from the sidelines.' },
            { icon: '🌀', title: 'The Monday Cycle', desc: 'Every week is "the week everything changes." It never does. The cycle repeats.' },
          ].map((item, idx) => (
            <motion.div
              key={idx}
              whileInView={{ y: 0, opacity: 1 }}
              initial={{ y: 20, opacity: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white/5 border border-white/10 rounded-lg p-6"
            >
              <p className="text-3xl mb-3">{item.icon}</p>
              <h3 className="font-bold mb-2">{item.title}</h3>
              <p className="text-slate-400 text-sm">{item.desc}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          whileInView={{ y: 0, opacity: 1 }}
          initial={{ y: 20, opacity: 0 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-red-500/10 to-transparent border border-red-500/20 rounded-lg p-8"
        >
          <p className="text-xs uppercase tracking-[0.2em] text-red-300 mb-3">This is your breakpoint</p>
          <p className="text-2xl md:text-3xl font-bold text-white mb-6">
            Be honest with yourself for a moment.
          </p>
          <p className="text-slate-300 mb-6">You <span className="font-semibold">promised yourself</span> this year would be different. You said it on January 1st. You said it last Monday. You might have said it this morning.</p>
          <p className="text-slate-300 mb-4">But here you are again — right back in the same loop:</p>
          <ul className="loop-list text-slate-300 mb-6">
            <li>• Starting… then stopping before you get momentum</li>
            <li>• Planning meticulously… but never actually executing</li>
            <li>• Knowing exactly what to do… but somehow not doing it</li>
            <li>• Watching others move ahead while you feel paralysed and stuck</li>
          </ul>
          <p className="text-red-500 font-bold text-lg mb-4">
            How long will you keep repeating this cycle?
          </p>
          <p className="text-slate-300">
            Every week that passes is a week of your potential left on the table.
          </p>
        </motion.div>
      </motion.section>

      {/* The Real Problem */}
      <motion.section 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="mb-20 py-16 border-t border-white/10"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          You Don't Need More <span className="text-amber-500">Motivation. You Need This.</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-xl font-bold mb-6 text-red-500">What you don't need</h3>
            <ul className="needs-list space-y-3 text-slate-400">
              <li className="flex items-start">
                <span className="text-red-500 mr-3">✗</span>
                More motivational content
              </li>
              <li className="flex items-start">
                <span className="text-red-500 mr-3">✗</span>
                Another podcast to listen to
              </li>
              <li className="flex items-start">
                <span className="text-red-500 mr-3">✗</span>
                A new planner or journal
              </li>
              <li className="flex items-start">
                <span className="text-red-500 mr-3">✗</span>
                More knowledge about what to do
              </li>
              <li className="flex items-start">
                <span className="text-red-500 mr-3">✗</span>
                Someone to inspire you briefly
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-6 text-green-500">What you actually need</h3>
            <ul className="space-y-3 text-slate-400">
              <li className="flex items-start">
                <span className="text-green-500 mr-3">✓</span>
                A daily structure you can't escape
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-3">✓</span>
                Real accountability with real people
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-3">✓</span>
                Guided execution — step by step
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-3">✓</span>
                Discipline built through repetition
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-3">✓</span>
                A system that forces results
              </li>
            </ul>
          </div>
        </div>

        <motion.div
          whileInView={{ y: 0, opacity: 1 }}
          initial={{ y: 20, opacity: 0 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-amber-500/10 to-transparent border border-amber-500/20 rounded-lg p-8 mt-12"
        >
          <p className="text-lg font-bold mb-3">That's exactly what <span className="text-amber-500">21 Days Routine</span> gives you</p>
          <p className="text-slate-300">
            Not theory, not vibes, not another "watch and forget" course. This is a 21-day execution system that <span className="font-semibold">forces results</span>.
          </p>
        </motion.div>
      </motion.section>

      {/* Why This Is Different */}
      <motion.section 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="mb-20 py-16 border-t border-white/10"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Not Theory. Not Vibes.<br></br> <span className="text-amber-500">A 21-Day Execution System.</span>
        </h2>

        <p className="text-center text-slate-400 mb-12 text-lg">
          For 21 days, your life will no longer be random. Wake up with direction. Act with intention. Finally build the discipline you've been lacking.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-6 max-w-3xl mx-auto">
          {['Structure', 'Discipline', 'Daily Guidance', 'Accountability'].map((item, idx) => (
            <motion.div
              key={idx}
              whileInView={{ scale: 1 }}
              initial={{ scale: 0.9 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-amber-500/20 to-transparent border border-amber-500/30 rounded-lg p-6 text-center"
            >
              <p className="text-2xl font-bold text-amber-500">{idx + 1}</p>
              <p className="font-bold mt-2">{item}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* What Will Change */}
      <motion.section 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="mb-20 py-16 border-t border-white/10"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          In 21 Days, <span className="text-amber-500">Your Life Looks Different.</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
          {[
            'Stop procrastinating and start executing every single day',
            'Gain crystal clarity on how to grow and increase your income',
            'Build a powerful morning and daily structure that actually holds',
            'Think differently about money, growth, and your future',
            'Become genuinely consistent — not just occasionally motivated',
            'Launch that project, idea, or business you\'ve been delaying for months',
          ].map((item, idx) => (
            <motion.div
              key={idx}
              whileInView={{ y: 0, opacity: 1 }}
              initial={{ y: 20, opacity: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05 }}
              className="flex items-start gap-3"
            >
              <span className="text-green-500 text-xl font-bold">✓</span>
              <p className="text-slate-300">{item}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Testimonials */}
      <motion.section 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="mb-20 py-16 border-t border-white/10"
      >
        <h2 className="text-3xl font-bold text-center mb-12">
          Real People. <span className="text-amber-500">Real Results.</span>
        </h2>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {[
            {
              text: 'I joined confused and inconsistent. By Day 14, I had already launched something I had delayed for 8 months. I cannot believe I waited this long. This is not a normal programme — it forces you to face yourself.',
              author: 'Ada',
              location: 'Lagos'
            },
            {
              text: 'This programme forced me to wake up. I started taking actions that immediately improved my income. The accountability structure is unlike anything I have tried before. I recommend it to everyone I know.',
              author: 'Michael',
              location: 'Abuja'
            },
            {
              text: 'The discipline I built here — I have never had anything like it in my entire life. This is not normal training. Grace pushes you in ways that actually stick long after the 21 days are over.',
              author: 'Esther',
              location: 'UK'
            },
          ].map((testimonial, idx) => (
            <motion.div
              key={idx}
              whileInView={{ y: 0, opacity: 1 }}
              initial={{ y: 20, opacity: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white/5 border border-white/10 rounded-lg p-6"
            >
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-yellow-400">★</span>
                ))}
              </div>
              <p className="text-slate-300 mb-4 italic">"{testimonial.text}"</p>
              <p className="font-semibold text-amber-500">– {testimonial.author}, {testimonial.location}</p>
            </motion.div>
          ))}
        </div>

        <p className="text-center text-slate-400 mb-8">
          These people didn't have special circumstances. They had the <span className="font-semibold">same excuses you have right now.</span> They just made a different decision.
        </p>
      </motion.section>

      <motion.section initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="mb-20 py-16 border-t border-white/10">
        <p className="program-kicker text-center mb-3">These are not paid actors</p>
        <h2 className="program-display text-3xl md:text-5xl text-center font-bold mb-10">Watch what graduates are saying.</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            ['21 Days Routine graduate testimonial 1', 'https://www.youtube.com/embed/6_a3xYDUT2M?controls=1&modestbranding=1&rel=0'],
            ['21 Days Routine graduate testimonial 2', 'https://www.youtube.com/embed/ymRq1UUfEUI?controls=1&modestbranding=1&rel=0'],
            ['21 Days Routine graduate testimonial 3', 'https://www.youtube.com/embed/5tioD1N3_HM?controls=1&modestbranding=1&rel=0'],
          ].map(([title, src]) => <ProgramVideo key={src} title={title} src={src} orientation="portrait" />)}
        </div>
      </motion.section>

      {/* Investment */}
      <motion.section 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="py-20 border-t border-white/10"
      >
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">
            Join the <span className="text-amber-500">21 Days Routine</span>
          </h2>

          <div className="bg-gradient-to-br from-amber-500/10 to-transparent border border-amber-500/20 rounded-lg p-10 mb-8">
            <p className="text-slate-400 mb-4">Valued at <span className="line-through">$90</span></p>
            <p className="text-5xl font-bold text-amber-500 mb-4">$50</p>
            <p className="text-slate-400 mb-6">That's less than <span className="font-semibold">$3 per day</span> to fix your mindset, discipline & direction</p>

            <ul className="text-left text-slate-300 space-y-3 mb-8">
              <li className="flex items-start">
                <span className="text-amber-500 mr-3">✓</span>
                21 days of structured daily guidance
              </li>
              <li className="flex items-start">
                <span className="text-amber-500 mr-3">✓</span>
                Real accountability in controlled numbers
              </li>
              <li className="flex items-start">
                <span className="text-amber-500 mr-3">✓</span>
                Morning & daily routine frameworks
              </li>
              <li className="flex items-start">
                <span className="text-amber-500 mr-3">✓</span>
                Mindset & income clarity modules
              </li>
              <li className="flex items-start">
                <span className="text-amber-500 mr-3">✓</span>
                Zero Excuses 7-day guarantee
              </li>
            </ul>

            <div className="flex flex-row gap-3">
              <a
                href={STRIPE_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 bg-amber-500 text-black px-6 py-3 rounded-lg font-bold hover:bg-amber-400 transition text-center"
              >
                Pay with Stripe — $50
              </a>
              <a
                href={AFFILIATE_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 border border-amber-500 text-amber-500 px-6 py-3 rounded-lg font-bold hover:bg-amber-500/10 transition text-center"
              >
                Pay via Selar — $50
              </a>
            </div>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-lg p-6">
            <p className="text-amber-500 font-semibold mb-2">🛡️ Zero Excuses Guarantee</p>
            <p className="text-slate-400">
              If you <span className="font-semibold">show up</span>, follow the system, and don't experience a genuine shift in your mindset and discipline within the first <span className="font-semibold">7 days</span> — we won't leave you behind.
            </p>
            <p className="text-slate-400 mt-3">
              We will push you. We will guide you. We will stay with you until you feel the shift. Because this programme is built on results — not excuses — and that applies to us just as much as it applies to you.
            </p>
            <p className="text-slate-400 mt-3">
              The only condition? <span className="font-semibold">You have to show up.</span>
            </p>
          </div>
        </div>
      </motion.section>

      {/* Final CTA */}
      <motion.section 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="text-center py-16 border-t border-white/10"
      >
        <h2 className="text-3xl font-bold mb-4">
          In The Next 21 Days…<br></br> You Can Either.
        </h2>

        <div className="grid grid-cols-2 gap-3 md:gap-8 max-w-2xl mx-auto mb-12">
          <div className="bg-white/5 border border-white/10 rounded-lg p-6">
            <p className="font-bold text-red-500 mb-2">Path A</p>
            <p className="text-slate-400">Keep making excuses and remain exactly where you are today.</p>
          </div>
          <div className="bg-gradient-to-br from-amber-500/20 to-transparent border border-amber-500/30 rounded-lg p-6">
            <p className="font-bold text-amber-500 mb-2">Path B</p>
            <p className="text-slate-400">Build a life that no longer needs them. Starting now.</p>
          </div>
        </div>

        <p className="text-slate-400 mb-8">
          The clock is ticking. Slots are limited. The price goes back to $90.
        </p>

        <div className="flex justify-center">
          <a 
            href={STRIPE_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden"
          >
            Join Now — Pay with Stripe
          </a>
          <a 
            href={AFFILIATE_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-amber-500 text-black px-8 py-3 rounded-lg font-bold hover:bg-amber-400 transition"
          >
            Join Now
          </a>
        </div>
      </motion.section>

      {/* Footer */}
      <footer className="text-center text-slate-500 text-sm pt-16 border-t border-white/10 mt-20">
        <p>© 2026 Grace Ofure. All rights reserved.</p>
        <p className="mt-2">21 Days Routine — Limited slots. Only <span className="font-bold text-amber-500">$50</span> (save $40)</p>
      </footer>
    </div>
  );
}
