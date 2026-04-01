"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Menu, X, ChevronRight } from "lucide-react";
import { useState, useEffect } from "react";

const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Our Story", href: "/#about" },
  { label: "Gallery", href: "/gallery" },
  { label: "Admissions", href: "/admissions" },
  { label: "Contact", href: "/#contact" },
];

export default function Navbar() {
  const [navOpen, setNavOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-7xl liquid-glass rounded-3xl py-3 px-4 md:px-8`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6">
        <Link href="/" className="flex items-center gap-3 group">
          <div className="relative h-12 w-12 shrink-0 rounded-full overflow-hidden border-2 border-white/30 shadow-md group-hover:shadow-lg transition-shadow bg-white">
            <Image src="/logo.png" alt="TGVIS Logo" fill className="object-contain p-1" priority />
          </div>
          <div className="hidden sm:block leading-tight">
            <p className="text-sm font-extrabold tracking-tight text-[#0d3b66]">The Green Valley</p>
            <p className="text-[11px] font-semibold text-teal-600 tracking-widest uppercase">International School</p>
          </div>
        </Link>

        <nav className="hidden md:flex items-center gap-1">
          {NAV_LINKS.map((l) => (
            <Link
              key={l.label}
              href={l.href}
              className="px-4 py-2 text-sm font-medium text-slate-600 hover:text-[#0d3b66] rounded-lg hover:bg-slate-50 transition-all"
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Link
            href="/admissions"
            className="hidden sm:inline-flex items-center gap-1.5 rounded-full bg-[#0d3b66] px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-[#0d3b66]/25 hover:bg-[#0a2e52] transition-all hover:scale-105"
          >
            Apply Now <ChevronRight className="h-4 w-4" />
          </Link>
          <button className="md:hidden p-2 rounded-lg hover:bg-slate-100 transition-colors" onClick={() => setNavOpen(!navOpen)}>
            {navOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {navOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          className="md:hidden bg-white border-t px-6 pb-6 pt-4 shadow-xl"
        >
          {NAV_LINKS.map((l) => (
            <Link
              key={l.label}
              href={l.href}
              onClick={() => setNavOpen(false)}
              className="block py-3 text-base font-medium text-slate-700 border-b border-slate-100 last:border-0"
            >
              {l.label}
            </Link>
          ))}
          <Link href="/admissions" onClick={() => setNavOpen(false)} className="mt-4 block w-full rounded-full bg-[#0d3b66] py-3 text-center text-sm font-semibold text-white">
            Apply Now
          </Link>
        </motion.div>
      )}
    </motion.header>
  );
}
