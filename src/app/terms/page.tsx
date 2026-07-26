import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "Terms of Service governing the use of Financial Abundance Hub programs, content, and services.",
};

export default function TermsPage() {
  return (
    <main className="max-w-4xl mx-auto px-6 pt-32 pb-20 text-slate-300">
      <h1 className="text-4xl md:text-5xl font-black text-white mb-4">
        Terms of Service
      </h1>
      <p className="text-sm text-slate-500 mb-8">
        Last Updated: July 2026
      </p>

      <div className="space-y-8 leading-relaxed text-sm md:text-base border-t border-white/10 pt-8">
        <section className="space-y-3">
          <h2 className="text-xl font-bold text-white">1. Agreement to Terms</h2>
          <p>
            By accessing or using the Financial Abundance Hub website, participating in our mentorship programs, or enrolling in our digital courses, you agree to be bound by these Terms of Service. If you do not agree with any part of these terms, you should not access or use our services.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-bold text-white">2. Educational & Non-Financial Advice Disclaimer</h2>
          <p className="p-4 bg-amber-500/10 border border-amber-500/30 rounded-xl text-amber-200">
            <strong>Important Notice:</strong> All content, strategies, case studies, and mentorship offered on Financial Abundance Hub are strictly for educational and informational purposes. Financial Abundance Hub is not a registered investment advisor, broker, accountant, or legal counsel. No content on this platform constitutes formal financial, legal, or tax advice.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-bold text-white">3. Earnings & Results Disclaimer</h2>
          <p>
            Any testimonials, case studies, or earnings examples referenced on this site represent individual experiences or illustrative examples. We make no guarantee or promise that you will achieve similar financial or business results. Your financial success depends on personal execution, market conditions, dedication, and factors outside our control.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-bold text-white">4. Intellectual Property</h2>
          <p>
            All content, program names, logos, videos, written articles, and digital materials published on Financial Abundance Hub are the intellectual property of Financial Abundance Hub. You may not reproduce, redistribute, sell, or exploit any materials without prior written consent.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-bold text-white">5. Limitation of Liability</h2>
          <p>
            To the maximum extent permitted by law, Financial Abundance Hub, its founders, team members, and affiliates shall not be liable for any direct, indirect, incidental, or consequential damages resulting from your use or inability to use our site, programs, or educational content.
          </p>
        </section>
      </div>
    </main>
  );
}
