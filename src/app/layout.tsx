import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import GoldDust from "@/components/GoldDust"; 
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Financial Abundance Hub | Wealth Creation & Mentorship",
    template: "%s | Financial Abundance Hub",
  },
  description: "Empowering your journey to financial freedom, real estate strategies, corporate mastery, and long-term wealth acceleration.",
  keywords: ["Financial Abundance", "Wealth Accelerator", "Mentorship", "Real Estate", "Financial Intelligence", "Corporate Training"],
  openGraph: {
    title: "Financial Abundance Hub",
    description: "Empowering your journey to financial freedom and wealth creation.",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-[#0a0a0a] text-white m-0 p-0">
        <GoldDust /> 
        <div className="relative z-10 min-h-screen flex flex-col justify-between"> 
           <Navbar />
           <div className="flex-1">{children}</div>
           <Footer />
        </div>
      </body>
    </html>
  );
}