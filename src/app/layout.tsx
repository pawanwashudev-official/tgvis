import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL('https://tgvis.neubofy.in'),
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
    "Top CBSE School in Bihta",
    "Best English Medium School in Bihta",
    "The Green Valley International School Patna",
  ],
  authors: [{ name: "TGVIS" }],
  openGraph: {
    title: "The Green Valley International School | Bihta, Patna",
    description: "A prestigious CBSE-affiliated institution in Bihta, Patna. Rated 4.3/5. Modern labs, 579+ campus photos, extracurricular & sports excellence. Believe, Learn, Achieve.",
    url: "https://tgvis.neubofy.in",
    siteName: "The Green Valley International School",
    images: [
      {
        url: "/featured.jpg",
        width: 1200,
        height: 630,
        alt: "The Green Valley International School Campus",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  alternates: {
    canonical: "https://tgvis.neubofy.in",
  },
  icons: {
    icon: "/favicon.ico?v=2",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "School",
  name: "The Green Valley International School",
  url: "https://tgvis.neubofy.in",
  logo: "https://tgvis.neubofy.in/logo.png",
  description: "A prestigious CBSE-affiliated institution in Bihta, Patna. Rated 4.3/5. Modern labs, extracurricular & sports excellence.",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Rameshwar Building, Jinpura Road",
    addressLocality: "Bihta, Patna",
    postalCode: "801103",
    addressCountry: "IN",
  },
  telephone: "+91-8935901010",
  sameAs: [
    "https://www.facebook.com/people/The-Green-Valley-International-School-Bihta/100088041550841/",
    "https://www.instagram.com/tgvis.official"
  ],
};

import SmoothScroll from "@/components/layout/SmoothScroll";
import EducationalBackground from "@/components/layout/EducationalBackground";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} h-full antialiased bg-transparent`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col font-sans relative bg-transparent text-slate-900">
        {/* Educational 3D Background - Fully Transparent Base */}
        <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none bg-transparent">
          <EducationalBackground />
          
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
