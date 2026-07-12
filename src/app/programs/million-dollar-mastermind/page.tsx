'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import ProgramVideo from '@/components/ProgramVideo';
import mdmImage from '../../../../content/media/MDM.jpeg';

export default function MillionDollarMastermindPage() {
  const [selectedPayment, setSelectedPayment] = useState<string | null>(null);

  return (
    <div className="pt-24 pb-16 px-6 max-w-7xl mx-auto">
      {/* Hero Section */}
      <motion.section 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-20"
      >
        <div className="text-center mb-12">
          <div className="inline-block bg-red-500/10 border border-red-500/30 rounded-full px-4 py-2 mb-4">
            <p className="text-red-500 text-xs font-semibold tracking-widest">⏳ CLOSING SOON — Don't miss your chance</p>
          </div>
          <h1 className="program-display text-5xl md:text-7xl font-bold leading-tight mb-4">
            Million Dollar <span className="text-amber-500">Mastermind</span>
          </h1>
          <p className="text-2xl md:text-3xl font-semibold text-amber-500 mb-6">The Complete Woman</p>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto mb-8">
            A high-proximity, one-year incubator designed to transform you from a service provider or employee into a <span className="font-semibold text-white">high-yield asset.</span>
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="#pricing"
              className="bg-amber-500 text-black px-8 py-3 rounded-lg font-bold hover:bg-amber-400 transition"
            >
              Secure Your Seat
            </a>
            <a 
              href="#sessions"
              className="border border-amber-500 text-amber-500 px-8 py-3 rounded-lg font-bold hover:bg-amber-500/10 transition"
            >
              View Sessions
            </a>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 md:grid-cols-4 gap-6 text-center bg-white/5 border border-white/10 rounded-lg p-8">
          {[
            { value: '$1K', label: 'Full Year' },
            { value: '$5K', label: 'Target in 2 Weeks' },
            { value: '1M', label: 'The Milestone' },
            { value: '3', label: 'Payment Options' },
          ].map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
            >
              <p className="text-2xl md:text-3xl font-bold text-amber-500 mb-1">{stat.value}</p>
              <p className="text-xs md:text-sm text-slate-400">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      <motion.section initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="mb-20 max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <Image src={mdmImage} alt="Million Dollar Mastermind with Grace Ofure" priority className="w-full h-full min-h-72 object-cover rounded-2xl border border-[#d4af37]/30" />
          <div>
            <p className="program-kicker mb-3">Hear directly from your mentor</p>
            <h2 className="program-display text-3xl md:text-5xl font-bold mb-6">A room built for the woman ready to multiply.</h2>
            <ProgramVideo title="Grace Ofure – Intro to Million Dollar Mastermind" src="https://www.youtube.com/embed/of-iZqh5GBE?rel=0&modestbranding=1" />
          </div>
        </div>
      </motion.section>

      {/* The Truth Section */}
      <motion.section 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="mb-20 py-16 border-t border-white/10"
      >
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
            You don't have an income problem. <br />
            You have a <span className="text-amber-500">leverage problem.</span>
          </h2>

          <p className="text-slate-400 text-lg mb-8 text-center">
            Most women are taught to work hard. Few are taught to work strategically. The gap between where you are and a $5,000 fortnight isn't more hustle — it's the implementation of systems, positioning, and elite mentorship.
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: '⏱️',
                title: 'Trading hours for dollars',
                description: 'Every hour you work has a ceiling. Leverage removes the ceiling entirely.'
              },
              {
                icon: '🔒',
                title: 'Undervaluing what you already have',
                description: 'You possess assets right now that can be monetized. You just haven\'t been shown how.'
              },
              {
                icon: '🎯',
                title: 'Missing the right proximity',
                description: 'You become the average of the five people closest to you. Elevate your circle.'
              },
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
                <p className="text-slate-400 text-sm">{item.description}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            whileInView={{ y: 0, opacity: 1 }}
            initial={{ y: 20, opacity: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-amber-500/10 to-transparent border border-amber-500/20 rounded-lg p-8 mt-8"
          >
            <p className="text-lg italic text-slate-300 mb-3">
              "The women who build generational wealth don't outwork everyone else. They outposition them."
            </p>
            <p className="text-amber-500 font-semibold">— Grace Ofure, Founder</p>
          </motion.div>
        </div>
      </motion.section>

      {/* Featured Session */}
      <motion.section 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        id="sessions"
        className="mb-20 py-16 border-t border-white/10"
      >
        <h2 className="text-3xl font-bold mb-12 text-center">
          Featured Session: <span className="text-amber-500">How to Make Your First $5,000 in 2 Weeks</span>
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              title: 'Audit Your Assets',
              description: 'Identify the hidden value you already possess that can be monetized instantly — today, not someday.'
            },
            {
              title: 'The Multiplier Effect',
              description: 'Use technology, teams, and existing networks to do the heavy lifting so you don\'t have to.'
            },
            {
              title: 'High-Ticket Positioning',
              description: 'Shift from "selling" to "positioning" so $5,000 isn\'t a mountain — it\'s just two or three decisions.'
            },
          ].map((session, idx) => (
            <motion.div
              key={idx}
              whileInView={{ y: 0, opacity: 1 }}
              initial={{ y: 20, opacity: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white/5 border border-white/10 rounded-lg p-6"
            >
              <p className="text-amber-500 font-semibold text-sm mb-2">● Live Session</p>
              <h3 className="text-xl font-bold mb-3">{session.title}</h3>
              <p className="text-slate-400">{session.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Why A Full Year */}
      <motion.section 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="mb-20 py-16 border-t border-white/10"
      >
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
            Wealth is not a sprint. <br />
            It's an <span className="text-amber-500">ecosystem.</span>
          </h2>

          <p className="text-slate-400 text-lg mb-12 text-center">
            Over 12 months, we don't just give you tips. We rebuild your financial DNA.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                number: '01',
                icon: '⚡',
                title: 'Continuous Implementation',
                description: 'Monthly deep dives that ensure you don\'t just learn — you execute. Knowledge without action is just expensive entertainment.'
              },
              {
                number: '02',
                icon: '👑',
                title: 'The Power of Proximity',
                description: 'Surround yourself with women who view $1M as a milestone, not a fantasy. Your environment shapes your reality.'
              },
              {
                number: '03',
                icon: '📈',
                title: 'Sustainable Scaling',
                description: 'Move beyond the first $5,000 to create predictable, recurring revenue that doesn\'t require your constant presence.'
              },
            ].map((reason, idx) => (
              <motion.div
                key={idx}
                whileInView={{ y: 0, opacity: 1 }}
                initial={{ y: 20, opacity: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white/5 border border-white/10 rounded-lg p-6"
              >
                <p className="text-2xl mb-2">{reason.icon}</p>
                <p className="text-amber-500 font-bold text-sm mb-2">{reason.number}</p>
                <h3 className="font-bold mb-3">{reason.title}</h3>
                <p className="text-slate-400 text-sm">{reason.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Your Mentor */}
      <motion.section 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="mb-20 py-16 border-t border-white/10"
      >
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Built by a woman <br />
            who has <span className="text-amber-500">done it.</span>
          </h2>

          <div className="bg-gradient-to-r from-amber-500/10 to-transparent border border-amber-500/20 rounded-lg p-8">
            <p className="font-bold text-lg mb-1">Grace Ofure</p>
            <p className="text-amber-500 font-semibold mb-4">Founder & Lead Mentor</p>
            <ul className="text-left text-slate-400 space-y-2">
              <li>• Founder, Lifecard University Ltd</li>
              <li>• Women's Wealth & Leverage Strategist</li>
              <li>• Creator of The Complete Woman Framework</li>
              <li>• 12-Month High-Proximity Mentorship Architect</li>
            </ul>
            <p className="text-slate-300 mt-6">
              Grace Ofure built the Million Dollar Mastermind from lived experience — not theory. Her mission is singular: equip women with the strategies, systems, and surround that turn ambition into assets.
            </p>
          </div>
        </div>
      </motion.section>

      <motion.section initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="mb-20 py-16 border-t border-white/10">
        <p className="program-kicker text-center mb-3">Women who chose to invest in themselves</p>
        <h2 className="program-display text-3xl md:text-5xl text-center font-bold mb-10">Results sound different when they are real.</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            ['Mastermind Testimonial 1', 'https://www.youtube.com/embed/TnCDjNbljmU?rel=0&modestbranding=1'],
            ['Mastermind Testimonial 2', 'https://www.youtube.com/embed/ZmTZz89MeZQ?rel=0&modestbranding=1'],
            ['Mastermind Testimonial 3', 'https://www.youtube.com/embed/9dAY4Y0NLJ8?rel=0&modestbranding=1'],
          ].map(([title, src]) => <ProgramVideo key={src} title={title} src={src} orientation="portrait" />)}
        </div>
      </motion.section>

      {/* Pricing Section */}
      <motion.section 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        id="pricing"
        className="py-20 border-t border-white/10"
      >
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">
            Choose Your <span className="text-amber-500">Entry Point</span>
          </h2>

          <p className="text-center text-slate-400 mb-12 text-lg">
            To maintain the caliber of this mastermind, entry is reserved for women who are ready to invest in their evolution.
          </p>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {[
              {
                title: 'Starter Access',
                price: '$200',
                highlight: false,
                features: [
                  'Initial access to the mastermind',
                  'Community & network access',
                  'Balance payable within 30 days'
                ],
                cta: 'Start with $200',
                link: 'https://buy.stripe.com/6oU3cn9ep6mf6Utf9rd7q11'
              },
              {
                title: 'Pay Twice',
                price: '$500',
                highlight: true,
                features: [
                  'Full session access from day one',
                  'All community benefits',
                  'First payment today',
                  'Second payment at 6 months'
                ],
                cta: 'Pay Twice',
                link: 'https://buy.stripe.com/00waEP1LXaCv5Qp7GZd7q0Y'
              },
              {
                title: 'Fast Track',
                price: '$1,000',
                highlight: false,
                features: [
                  'Complete 12-month access',
                  'All sessions & resources',
                  'VIP onboarding experience',
                  'First-mover advantage'
                ],
                cta: 'Pay in Full',
                link: 'https://buy.stripe.com/bIY7t1dD7eiG4M09AR'
              },
            ].map((plan, idx) => (
              <motion.div
                key={idx}
                whileInView={{ y: 0, opacity: 1 }}
                initial={{ y: 20, opacity: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className={`rounded-lg p-8 ${
                  plan.highlight
                    ? 'bg-gradient-to-br from-amber-500/20 to-transparent border-2 border-amber-500 relative'
                    : 'bg-white/5 border border-white/10'
                }`}
              >
                {plan.highlight && (
                  <div className="absolute top-0 right-0 bg-amber-500 text-black px-3 py-1 rounded-bl-lg text-xs font-bold">
                    RECOMMENDED
                  </div>
                )}
                <h3 className="text-2xl font-bold mb-2">{plan.title}</h3>
                <p className="text-3xl font-bold text-amber-500 mb-6">{plan.price}</p>
                <ul className="space-y-3 mb-6">
                  {plan.features.map((feature, fidx) => (
                    <li key={fidx} className="text-slate-400 text-sm flex items-start">
                      <span className="text-amber-500 mr-2">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
                <a
                  href={plan.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-full block text-center py-3 rounded-lg font-bold transition ${
                    plan.highlight
                      ? 'bg-amber-500 text-black hover:bg-amber-400'
                      : 'border border-amber-500 text-amber-500 hover:bg-amber-500/10'
                  }`}
                >
                  {plan.cta}
                </a>
              </motion.div>
            ))}
          </div>

          {/* Naira Payment */}
          <motion.div
            whileInView={{ y: 0, opacity: 1 }}
            initial={{ y: 20, opacity: 0 }}
            viewport={{ once: true }}
            className="bg-white/5 border border-white/10 rounded-lg p-8"
          >
            <h3 className="text-xl font-bold mb-4">🇳🇬 Naira Payment Option — Nigeria</h3>
            <div className="space-y-2 text-slate-400">
              <p><span className="font-semibold text-white">Account Name:</span> Grace Ofure Enterprise Ltd</p>
              <p><span className="font-semibold text-white">Account Number:</span> 0127187905</p>
              <p><span className="font-semibold text-white">Bank:</span> Wema Bank</p>
            </div>
            <p className="text-sm text-slate-400 mt-4">
              Kindly send your proof of payment immediately after completing your transaction for confirmation and onboarding.
            </p>
          </motion.div>
        </div>
      </motion.section>

      {/* Final CTA */}
      <motion.section 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="text-center py-16 border-t border-white/10"
      >
        <h2 className="text-3xl font-bold mb-6">
          Your seat at the <span className="text-amber-500">million-dollar table</span> is waiting.
        </h2>
        <p className="text-slate-400 mb-8">Step into a new level of financial empowerment. We will see you inside the Mastermind.</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a 
            href="#pricing"
            className="bg-amber-500 text-black px-8 py-3 rounded-lg font-bold hover:bg-amber-400 transition"
          >
            Secure My Seat Now
          </a>
        </div>
      </motion.section>

      {/* Footer Note */}
      <footer className="text-center text-slate-500 text-sm pt-16 border-t border-white/10 mt-20">
        <p>This mastermind is for women only</p>
        <p>© 2026 Lifecard University Ltd · All rights reserved</p>
      </footer>
    </div>
  );
}
