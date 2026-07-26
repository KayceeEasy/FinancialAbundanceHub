import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy Policy for Financial Abundance Hub detailing how user information is collected, used, and protected.",
};

export default function PrivacyPage() {
  const whatsappUrl = "https://wa.me/2348068067298?text=Hello,%20I%20am%20contacting%20you%20from%20Financial%20Abundance%20Hub.";
  const mailtoUrl = "mailto:blessingjoy@lifecardcompany.com?subject=Financial%20Abundance%20Hub%20Privacy%20Inquiry";

  return (
    <main className="max-w-4xl mx-auto px-6 pt-32 pb-20 text-slate-300">
      <h1 className="text-4xl md:text-5xl font-black text-white mb-4">
        Privacy Policy
      </h1>
      <p className="text-sm text-slate-500 mb-8">
        Last Updated: July 2026
      </p>

      <div className="space-y-8 leading-relaxed text-sm md:text-base border-t border-white/10 pt-8">
        <section className="space-y-3">
          <h2 className="text-xl font-bold text-white">1. Information We Collect</h2>
          <p>
            When you visit Financial Abundance Hub, enroll in our programs, apply for mentorship, or contact us, we may collect personal information that you voluntarily provide to us, including:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-slate-400">
            <li>Contact Information (e.g., full name, email address, phone number).</li>
            <li>Professional Information (e.g., industry, workforce size, primary challenge, company name).</li>
            <li>Inquiry & Application Details submitted through our application or inquiry forms.</li>
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-bold text-white">2. How We Use Your Information</h2>
          <p>
            We use the information collected to:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-slate-400">
            <li>Process your program applications and inquiries.</li>
            <li>Provide financial educational resources, course materials, and updates.</li>
            <li>Communicate with you regarding consultations, webinars, and program enrollment.</li>
            <li>Improve website functionality, security, and user experience.</li>
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-bold text-white">3. Data Protection & Sharing</h2>
          <p>
            We respect your privacy and do not sell, rent, or trade your personal information to third-party marketers. We may share data with trusted third-party service providers (such as secure form processors or database tools) strictly for the purpose of operating our website and delivering our services to you under strict confidentiality.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-bold text-white">4. Cookies & Analytics</h2>
          <p>
            Our site may use basic session cookies and analytics tools to understand visitor traffic and optimize site performance. You can disable cookies in your browser settings at any time.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-bold text-white">5. Your Data Rights & Contact Channels</h2>
          <p>
            Depending on your jurisdiction, you have the right to request access to, correction of, or deletion of your personal data held by Financial Abundance Hub. To exercise these rights or ask questions regarding your privacy, please contact us through our official inquiry channels:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-slate-400">
            <li>
              <strong>Email Support:</strong>{" "}
              <a href={mailtoUrl} className="text-amber-500 hover:underline">
                Contact Privacy & Support Team via Email
              </a>
            </li>
            <li>
              <strong>Direct Phone / WhatsApp Support:</strong>{" "}
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="text-amber-500 hover:underline">
                Chat with Support on WhatsApp
              </a>
            </li>
            <li>
              <strong>Online Inquiry Form:</strong>{" "}
              <Link href="/apply?program=General-Inquiry" className="text-amber-500 hover:underline">
                Submit an Official Inquiry Form
              </Link>
            </li>
          </ul>
        </section>
      </div>
    </main>
  );
}
