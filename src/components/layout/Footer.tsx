"use client";

import Image from "next/image";
import Link from "next/link";
import { MapPin, Phone, Mail, Clock, Info, X, ExternalLink, Github } from "lucide-react";
import { useState } from "react";

const FB_LINK = "https://www.facebook.com/people/The-Green-Valley-International-School-Bihta/100088041550841/";
const IG_LINK = "https://www.instagram.com/tgvis.official";

export default function Footer() {
  const [devOpen, setDevOpen] = useState(false);

  return (
    <>
      <footer className="bg-[#0d3b66] text-white">
        <div className="mx-auto max-w-7xl px-6 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            <div>
              <div className="flex items-center gap-3 mb-5">
                <div className="relative h-12 w-12 rounded-full overflow-hidden bg-white p-0.5 shadow-sm">
                  <Image src="/logo.jpg" alt="TGVIS" fill className="object-contain" />
                </div>
                <div>
                  <p className="font-bold text-lg">TGVIS</p>
                  <p className="text-xs text-teal-300 font-medium">Believe. Learn. Achieve.</p>
                </div>
              </div>
              <p className="text-sm text-blue-200/60 leading-relaxed">
                A prestigious CBSE-affiliated institution committed to academic excellence and holistic student development in Bihta, Patna.
              </p>
              <div className="flex gap-3 mt-6">
                <a href={FB_LINK} target="_blank" rel="noopener noreferrer" className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 hover:bg-[#1877F2] transition-all" aria-label="Facebook">
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"/></svg>
                </a>
                <a href={IG_LINK} target="_blank" rel="noopener noreferrer" className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 hover:bg-[#E4405F] transition-all" aria-label="Instagram">
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63z"/></svg>
                </a>
              </div>
            </div>

            <div>
              <h4 className="text-sm font-bold uppercase tracking-wider text-teal-300 mb-6">Quick Links</h4>
              <ul className="space-y-3 text-sm text-blue-200/60">
                <li><Link href="/about" className="hover:text-white transition-colors">About Us</Link></li>
                <li><Link href="/gallery" className="hover:text-white transition-colors">Photo Gallery</Link></li>
                <li><Link href="/admissions" className="hover:text-white transition-colors">Admissions</Link></li>
                <li><Link href="/contact" className="hover:text-white transition-colors">Contact Us</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="text-sm font-bold uppercase tracking-wider text-teal-300 mb-6">Academics</h4>
              <ul className="space-y-3 text-sm text-blue-200/60">
                <li>CBSE Curriculum</li>
                <li>Pre-Primary & Primary</li>
                <li>Middle School</li>
                <li>Senior Secondary</li>
                <li>Computer & Science Labs</li>
              </ul>
            </div>

            <div>
              <h4 className="text-sm font-bold uppercase tracking-wider text-teal-300 mb-6">Contact Info</h4>
              <ul className="space-y-4 text-sm text-blue-200/60">
                <li className="flex items-start gap-3">
                  <MapPin className="h-5 w-5 text-teal-400 shrink-0 mt-0.5" />
                  <span>Rameshwar Building, Jinpura Road, Bihta, Patna - 801103</span>
                </li>
                <li className="flex items-center gap-3">
                  <Phone className="h-5 w-5 text-teal-400 shrink-0" />
                  <a href="tel:+918935901010" className="hover:text-white transition-colors">+91 89359 01010</a>
                </li>
                <li className="flex items-center gap-3">
                  <Mail className="h-5 w-5 text-teal-400 shrink-0" />
                  <a href="mailto:tgvisbihta@gmail.com" className="hover:text-white transition-colors">tgvisbihta@gmail.com</a>
                </li>
                <li className="flex items-center gap-3">
                  <Clock className="h-5 w-5 text-teal-400 shrink-0" />
                  <span>Mon-Sat: 7:00 AM - 3:00 PM</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-blue-200/40">
            <p>© {new Date().getFullYear()} The Green Valley International School, Bihta. All rights reserved.</p>
            <div className="flex items-center gap-3">
              <span>Official Website of TGVIS</span>
              <button
                onClick={() => setDevOpen(true)}
                className="w-6 h-6 rounded-full bg-white/5 hover:bg-white/15 flex items-center justify-center transition-all"
                aria-label="Developer Info"
                title="Developer Info"
              >
                <Info className="w-3.5 h-3.5 text-blue-200/30 hover:text-blue-200/60" />
              </button>
            </div>
          </div>
        </div>
      </footer>

      {/* Developer Info Modal */}
      {devOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 backdrop-blur-sm p-6" onClick={() => setDevOpen(false)}>
          <div
            className="relative w-full max-w-sm rounded-3xl bg-white shadow-2xl p-8 animate-in fade-in zoom-in duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setDevOpen(false)}
              className="absolute top-4 right-4 w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 flex items-center justify-center transition-colors"
            >
              <X className="w-4 h-4 text-slate-500" />
            </button>

            <div className="text-center mb-6">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#0d3b66] to-teal-600 mx-auto flex items-center justify-center mb-4 shadow-lg">
                <span className="text-2xl font-black text-white">PW</span>
              </div>
              <h3 className="text-xl font-extrabold text-slate-900">Pawan Washudev</h3>
              <p className="text-sm text-slate-500 mt-1">Full-Stack Developer</p>
            </div>

            <div className="space-y-3">
              <a
                href="https://github.com/pawanwashudev-official"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-3 rounded-xl bg-slate-50 hover:bg-slate-100 transition-colors group"
              >
                <div className="w-10 h-10 rounded-xl bg-[#24292e] flex items-center justify-center text-white shrink-0">
                  <Github className="w-5 h-5" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-semibold text-slate-800">GitHub</p>
                  <p className="text-xs text-slate-500 truncate">pawanwashudev-official</p>
                </div>
                <ExternalLink className="w-4 h-4 text-slate-400 group-hover:text-slate-600 shrink-0" />
              </a>

              <a
                href="mailto:pawanwashudev@gmail.com"
                className="flex items-center gap-3 p-3 rounded-xl bg-slate-50 hover:bg-slate-100 transition-colors group"
              >
                <div className="w-10 h-10 rounded-xl bg-red-500 flex items-center justify-center text-white shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-semibold text-slate-800">Email</p>
                  <p className="text-xs text-slate-500 truncate">pawanwashudev@gmail.com</p>
                </div>
                <ExternalLink className="w-4 h-4 text-slate-400 group-hover:text-slate-600 shrink-0" />
              </a>

              <a
                href="https://pawanwashudev.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-3 rounded-xl bg-slate-50 hover:bg-slate-100 transition-colors group"
              >
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-teal-500 to-blue-600 flex items-center justify-center text-white shrink-0">
                  <ExternalLink className="w-5 h-5" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-semibold text-slate-800">Portfolio</p>
                  <p className="text-xs text-slate-500 truncate">pawanwashudev.vercel.app</p>
                </div>
                <ExternalLink className="w-4 h-4 text-slate-400 group-hover:text-slate-600 shrink-0" />
              </a>
            </div>

            <p className="text-center text-xs text-slate-400 mt-6">
              Designed & Developed with ❤️
            </p>
          </div>
        </div>
      )}
    </>
  );
}
