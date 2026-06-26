import Navbar from "@/components/Navbar";
import GoldDust from "@/components/GoldDust"; 
import "./globals.css";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      {/* Set background here ONCE so it's the bottom-most layer */}
      <body className="bg-[#0a0a0a] text-white m-0 p-0">
        <GoldDust /> 
        {/* The content wrapper has a relative z-index so it sits in front of the dust */}
        <div className="relative z-10 min-h-screen"> 
           <Navbar />
           {children}
        </div>
      </body>
    </html>
  );
}