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
      <body className="min-h-full flex flex-col font-sans">{children}</body>
    </html>
  );
}
