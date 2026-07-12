'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import PhoneInputWithCountrySelect from 'react-phone-number-input';
import 'react-phone-number-input/style.css';
import { submitApplication } from '@/app/actions';
import ProgramVideo from '@/components/ProgramVideo';
import nineToFiveHero from '../../../../content/media/9-to-5-hero-background.jpg';

export default function NineToFivePage() {
  const [formData, setFormData] = useState({
    companyName: '',
    fullName: '',
    email: '',
    phone: '',
    workforceSize: '',
    industry: '',
    primaryChallenge: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setError('');
    const request = new FormData();
    Object.entries(formData).forEach(([key, value]) => request.append(key, value));
    request.append('program', '9 to 5 Is Not a Scam — Enterprise Quote');
    const result = await submitApplication(request);
    setSubmitting(false);
    if (!result.success) {
      setError('We could not send your assessment. Please try again shortly.');
      return;
    }
    setSubmitted(true);
    setFormData({ companyName: '', fullName: '', email: '', phone: '', workforceSize: '', industry: '', primaryChallenge: '' });
  };

  return (
    <div className="pt-24 pb-16 px-6 max-w-7xl mx-auto">
      {/* Hero Section */}
      <motion.section 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-20"
      >
        <div className="text-center mb-12">
          <p className="text-amber-500 text-sm font-semibold tracking-widest uppercase mb-4">Enterprise Workforce Training</p>
          <h1 className="program-display text-5xl md:text-7xl font-bold leading-tight mb-6">
            Stop Losing Revenue to <br></br> <span className="text-amber-500">Disengaged Employees.</span>
          </h1>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto mb-8">
            Transform your workforce into a powerhouse of intrapreneurs. The <span className="font-semibold">9 to 5 Is Not a Scam Compendium</span> re-engineers workforce psychology—getting your staff to bring their full A-Game and invest 100% in building your business from Day One.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="#get-quote"
              className="bg-amber-500 text-black px-8 py-3 rounded-lg font-bold hover:bg-amber-400 transition"
            >
              Book an Enterprise Diagnostic Call
            </a>
            <a 
              href="#pillars"
              className="border border-amber-500 text-amber-500 px-8 py-3 rounded-lg font-bold hover:bg-amber-500/10 transition"
            >
              See the Programme
            </a>
          </div>
          <Image src={nineToFiveHero} alt="9 to 5 Is Not a Scam workforce training" priority className="w-full max-w-5xl h-64 md:h-96 object-cover rounded-2xl border border-[#d4af37]/30 mt-10 mx-auto" />
        </div>
      </motion.section>

      <motion.section initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="mb-20 max-w-5xl mx-auto">
        <p className="program-kicker text-center mb-3">Watch the movement</p>
        <h2 className="program-display text-3xl md:text-5xl text-center font-bold mb-7">Grace Ofure on the launch of the Compendium</h2>
        <ProgramVideo title="Grace Ofure — 9 to 5 Is Not a Scam Launch" src="https://www.youtube.com/embed/HLptis_3LwQ?si=WZ87PzoqN5YqoC03" />
      </motion.section>

      {/* The Root Cause Section */}
      <motion.section 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="mb-20 py-16 border-t border-white/10"
      >
        <div className="max-w-2xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Why Your Workforce Is <span className="text-amber-500">Checked Out</span>
          </h2>
          <p className="text-slate-400 text-lg mb-6">
            For years, the internet has told your employees that structured employment is a "trap." The result? A workforce that does the bare minimum, misaligns with your goals, and wastes company time building side-hustles instead of your business.
          </p>
          <p className="text-slate-400 text-lg">
            This isn't a motivation problem. It's a <span className="font-semibold text-white">belief problem</span>—and beliefs can be re-engineered.
          </p>
        </div>

        <div className="bg-gradient-to-r from-amber-500/10 to-transparent border border-amber-500/20 rounded-lg p-8 md:p-10 mb-8">
          <p className="text-lg italic text-slate-300 mb-4">
            "When your staff understands that building your company is the fastest way to scale their own value, their attention shifts entirely to pushing your business forward."
          </p>
          <p className="text-amber-500 font-semibold">Grace Ofure Ibhakhomu — Entrepreneur & Economist</p>
        </div>

        <div className="bg-gradient-to-r from-amber-500/10 to-transparent border border-amber-500/20 rounded-lg p-8 md:p-10">
          <h3 className="text-2xl font-bold mb-4">The Radical New Truth We Teach</h3>
          <p className="text-slate-300 text-lg">
            A structured job is not a prison. It is the <span className="font-semibold">ultimate, premium platform</span> for personal development, financial intelligence, and strategic wealth creation.
          </p>
          <p className="text-slate-300 text-lg mt-4">
            When employees see that their financial freedom is directly tied to your corporate success, everything changes.
          </p>
        </div>
      </motion.section>

      {/* 5 Pillars Section */}
      <motion.section 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        id="pillars"
        className="mb-20 py-16 border-t border-white/10"
      >
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            5 Pillars of the <span className="text-amber-500">Compendium Programme</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Deployed across companies, schools, and organisations through five structured modules that produce measurable cultural shifts.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
          {[
            {
              number: '01',
              title: 'Mindset Re-engineering',
              description: 'Rewiring staff perception from "working a job" to managing a premier training ground for impact, leadership, and long-term career equity.'
            },
            {
              number: '02',
              title: 'Leadership Mastery',
              description: 'Equipping every team member with the tools to own their domain fully and eliminate the need for micromanagement.'
            },
            {
              number: '03',
              title: 'Financial Intelligence',
              description: 'Neutralising personal financial stress—the number one driver of distraction—by teaching employees strategic asset building.'
            },
            {
              number: '04',
              title: 'Organisational Growth Mindset',
              description: 'Forging unbreakable alignment between individual employee passion and your high-ticket revenue targets.'
            },
            {
              number: '05',
              title: 'Marketing & Performance Mindset',
              description: 'Instilling a high-velocity, performance-driven culture across every division—from front-line staff to senior management.'
            },
          ].map((pillar, idx) => (
            <motion.div
              key={pillar.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white/5 border border-white/10 rounded-lg p-6 hover:border-amber-500/50 transition"
            >
              <p className="text-amber-500 text-3xl font-bold mb-3">{pillar.number}</p>
              <h3 className="text-xl font-bold mb-3">{pillar.title}</h3>
              <p className="text-slate-400 text-sm">{pillar.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Results Section */}
      <motion.section 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="mb-20 py-16 border-t border-white/10"
      >
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">
            Proven Impact: From Nigeria to Ghana. <span className="text-amber-500">Real, Measurable Results.</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {[
            { stat: '28', label: 'SMEs Transformed' },
            { stat: '2+', label: 'Countries Active' },
            { stat: '100%', label: 'Company-Wide Focus' },
          ].map((item, idx) => (
            <motion.div
              key={idx}
              whileInView={{ scale: 1 }}
              initial={{ scale: 0.9 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <p className="text-5xl font-bold text-amber-500 mb-2">{item.stat}</p>
              <p className="text-slate-400">{item.label}</p>
            </motion.div>
          ))}
        </div>

        <div className="bg-gradient-to-r from-amber-500/10 to-transparent border border-amber-500/20 rounded-lg p-8">
          <p className="text-slate-300 mb-4">
            Successfully deployed in Ghana—training corporate workforces to operate at peak regional standards. Hundreds of employees re-aligned from Day One of the programme.
          </p>
        </div>
      </motion.section>

      {/* Client Testimonials */}
      <motion.section 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="mb-20 py-16 border-t border-white/10"
      >
        <h2 className="text-3xl font-bold text-center mb-12">
          What Organisations Are <span className="text-amber-500">Saying</span>
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              quote: "Before this training, I felt like I was dragging my team across the finish line. Post-training, the cultural shift was immediate. My staff stopped treating this as a temporary stopover and started treating their departments like their own businesses. Our revenue targets are being crushed.",
              author: 'Efe C.',
              title: 'CEO & Founder'
            },
            {
              quote: "Micromanagement used to take up 60% of my day. The Compendium taught my team how to take full ownership of their KPIs. They now bring me solutions instead of problems. Managing them has never been this efficient.",
              author: 'Kwame A.',
              title: 'Operations Manager, Ghana'
            },
            {
              quote: "I used to think my job was holding me back from building wealth. This training completely changed my perspective. I realised this company is my premium training ground. I am 100% focused on our organisational goals because I see exactly how my financial freedom is tied to our success.",
              author: 'Blessing O.',
              title: 'Senior Associate'
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
              <p className="text-slate-300 mb-4 italic">"{testimonial.quote}"</p>
              <p className="font-semibold text-amber-500">{testimonial.author}</p>
              <p className="text-slate-400 text-sm">{testimonial.title}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Pricing & CTA Section */}
      <motion.section 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        id="get-quote"
        className="py-20 border-t border-white/10"
      >
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-8">
            Request a Customised <span className="text-amber-500">Workforce Quote</span>
          </h2>

          <div className="bg-white/5 border border-white/10 rounded-lg p-8 md:p-12 mb-12">
            <h3 className="text-2xl font-bold mb-6">How Pricing Works</h3>
            <p className="text-slate-400 mb-6">
              This is an <span className="font-semibold">Enterprise-First, company-based training system</span>. We do not charge per individual. Pricing is calculated by your total workforce size to ensure seamless, organisation-wide deployment—whether you are an agile SME or a large corporate institution.
            </p>

            <div className="overflow-x-auto mb-8">
              <table className="w-full text-left">
                <thead>
                  <tr className="border-b border-white/10">
                    <th className="pb-3 font-bold text-amber-500">Workforce Size</th>
                    <th className="pb-3 font-bold text-amber-500">Package</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { size: '5 – 20 staff', pkg: 'SME' },
                    { size: '21 – 50 staff', pkg: 'Growth' },
                    { size: '51 – 100 staff', pkg: 'Scale' },
                    { size: '100+ staff', pkg: 'Enterprise' },
                  ].map((row, idx) => (
                    <tr key={idx} className="border-b border-white/10">
                      <td className="py-3 text-slate-300">{row.size}</td>
                      <td className="py-3 text-slate-300">{row.pkg}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <p className="text-slate-400 text-sm">
              Exact pricing is provided within 24 hours of completing the assessment form. All quotes are tailored to your company's strategic objectives and deployment timeline.
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="bg-gradient-to-br from-amber-500/10 to-transparent border border-amber-500/30 rounded-lg p-8 md:p-12">
            <h3 className="text-2xl font-bold mb-8">Start Your Assessment</h3>

            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <input
                type="text"
                name="companyName"
                placeholder="Company Name"
                value={formData.companyName}
                onChange={handleChange}
                className="bg-white/5 border border-white/10 rounded px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:border-amber-500"
                required
              />
              <input
                type="text"
                name="fullName"
                placeholder="Your Full Name"
                value={formData.fullName}
                onChange={handleChange}
                className="bg-white/5 border border-white/10 rounded px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:border-amber-500"
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={handleChange}
                className="bg-white/5 border border-white/10 rounded px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:border-amber-500"
                required
              />
              <PhoneInputWithCountrySelect
                defaultCountry="NG"
                international
                countryCallingCodeEditable={false}
                name="phone"
                placeholder="Phone / WhatsApp"
                value={formData.phone}
                onChange={(value) => setFormData(prev => ({ ...prev, phone: value ?? '' }))}
                className="phone-picker bg-white/5 border border-white/10 rounded px-4 py-3 text-white placeholder-slate-500 focus-within:border-amber-500"
                required
              />
              <select
                name="workforceSize"
                value={formData.workforceSize}
                onChange={handleChange}
                className="bg-white/5 border border-white/10 rounded px-4 py-3 text-white focus:outline-none focus:border-amber-500"
                required
              >
                <option value="">Select your workforce size</option>
                <option value="5-10">5 – 10 staff</option>
                <option value="11-20">11 – 20 staff</option>
                <option value="21-50">21 – 50 staff</option>
                <option value="51-100">51 – 100 staff</option>
                <option value="100+">100+ staff</option>
              </select>
              <input
                type="text"
                name="industry"
                placeholder="Industry / Sector"
                value={formData.industry}
                onChange={handleChange}
                className="bg-white/5 border border-white/10 rounded px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:border-amber-500"
                required
              />
            </div>

            <textarea
              name="primaryChallenge"
              placeholder="Primary Workforce Challenge"
              value={formData.primaryChallenge}
              onChange={handleChange}
              rows={4}
              className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:border-amber-500 mb-6"
              required
            />

            <button
              type="submit"
              disabled={submitting}
              className="w-full bg-amber-500 text-black px-8 py-3 rounded-lg font-bold hover:bg-amber-400 transition"
            >
              {submitting ? 'Sending assessment…' : 'Request My Customised Quote →'}
            </button>

            <AnimatePresence>
              {submitted && (
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="text-green-400 text-center mt-4"
                >
                  Thank you! Your assessment has been received. We&apos;ll be in touch within 24 hours.
                </motion.p>
              )}
            </AnimatePresence>
            {error && <p className="text-red-300 text-center mt-4">{error}</p>}
          </form>
        </div>
      </motion.section>

      {/* Footer */}
      <footer className="text-center text-slate-500 text-sm pt-16 border-t border-white/10 mt-20">
        <p>© 2025 Grace Ofure Ibhakhomu · All Rights Reserved</p>
      </footer>
    </div>
  );
}
