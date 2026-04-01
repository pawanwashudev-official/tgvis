import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "The Green Valley International School | Bihta, Patna",
  description:
    "A prestigious CBSE-affiliated institution in Bihta, Patna. Rated 4.3/5. Modern labs, 579+ campus photos, extracurricular & sports excellence. Believe, Learn, Achieve.",
  keywords: [
    "Green Valley International School",
    "TGVIS",
    "Bihta",
    "Patna",
    "CBSE School",
    "Best School in Bihta",
  ],
  icons: {
    icon: "/favicon.ico?v=2",
  },
};

import SmoothScroll from "@/components/layout/SmoothScroll";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col font-sans relative">
        {/* Live Background Blobs - High Performance Profile */}
        <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none bg-slate-50">
          <div className="absolute top-[-10%] left-[-15%] w-[60%] h-[60%] rounded-full bg-teal-400/5 blur-[100px] animate-blob" />
          <div className="absolute bottom-[-10%] right-[-15%] w-[60%] h-[60%] rounded-full bg-blue-600/5 blur-[100px] animate-blob animation-delay-2000" />
          
          {/* Theme Text background elements - Ultra-subtle */}
          <div className="absolute top-[20%] left-[10%] opacity-[0.03] animate-float pointer-events-none">
            <span className="text-8xl font-black text-[#0d3b66] tracking-tighter uppercase select-none">Knowledge</span>
          </div>
          <div className="absolute bottom-[30%] right-[10%] opacity-[0.03] animate-blob animation-delay-4000 pointer-events-none">
            <span className="text-8xl font-black text-teal-600 tracking-tighter uppercase select-none">Wisdom</span>
          </div>
        </div>
        <SmoothScroll>
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}
