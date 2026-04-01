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
        {/* Live Background Blobs - Optimized for Performance */}
        <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
          <div className="absolute top-[-10%] left-[-15%] w-[50%] h-[50%] rounded-full bg-teal-400/10 blur-[60px] animate-blob" />
          <div className="absolute bottom-[-10%] right-[-15%] w-[50%] h-[50%] rounded-full bg-blue-600/10 blur-[60px] animate-blob animation-delay-2000" />
          <div className="absolute top-[20%] right-[10%] w-[40%] h-[40%] rounded-full bg-indigo-400/5 blur-[80px] animate-blob animation-delay-4000" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60%] h-[60%] rounded-full bg-cyan-400/5 blur-[100px] animate-float" />
          
          {/* Theme Text background elements - Subtler for speed */}
          <div className="absolute top-[15%] left-[10%] opacity-5 animate-float pointer-events-none">
            <span className="text-8xl font-black text-[#0d3b66] tracking-tighter uppercase select-none">Knowledge</span>
          </div>
          <div className="absolute bottom-[20%] right-[5%] opacity-5 animate-blob animation-delay-4000 pointer-events-none">
            <span className="text-8xl font-black text-teal-600 tracking-tighter uppercase select-none">Wisdom</span>
          </div>
          <div className="absolute top-[50%] left-[20%] opacity-3 animate-blob animation-delay-2000 pointer-events-none">
            <span className="text-8xl font-black text-blue-800 tracking-tighter uppercase select-none">Creativity</span>
          </div>
        </div>
        <SmoothScroll>
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}
