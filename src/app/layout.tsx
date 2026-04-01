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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} h-full antialiased scroll-smooth`}>
      <body className="min-h-full flex flex-col font-sans relative">
        {/* Live Background Blobs */}
        <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
          <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-teal-400/10 blur-[120px] animate-blob" />
          <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-blue-600/10 blur-[120px] animate-blob animation-delay-2000" />
          <div className="absolute top-[20%] right-[10%] w-[30%] h-[30%] rounded-full bg-indigo-400/5 blur-[100px] animate-blob animation-delay-4000" />
        </div>
        {children}
      </body>
    </html>
  );
}
