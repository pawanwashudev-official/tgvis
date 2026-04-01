"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import {
  ChevronRight, BookOpen, Users, Award, Beaker, Trophy,
  Laptop, Palette, Bus, GraduationCap, Phone, Star,
} from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

/* ─── animation helpers ─── */
const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" as const } },
};
const stagger = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.12 } },
};

/* ─── local gallery images ─── */
const GALLERY = [
  { src: "/gallery/school-front.jpg", label: "School Entrance" },
  { src: "/gallery/campus-2.jpg", label: "Campus View" },
  { src: "/gallery/students-1.jpg", label: "Student Activities" },
  { src: "/gallery/transport-1.jpg", label: "School Transport" },
  { src: "/gallery/activity-1.jpg", label: "Annual Event" },
  { src: "/featured.jpg", label: "School Building" },
];

export default function Home() {
  const { scrollY } = useScroll();
  const heroParallax = useTransform(scrollY, [0, 600], [0, 120]);
  const heroOpacity = useTransform(scrollY, [0, 400], [1, 0.3]);

  return (
    <div className="min-h-screen bg-white text-slate-900 overflow-x-hidden">
      <Navbar />

      {/* ═══════════════════ HERO ═══════════════════ */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Full-frame featured image background */}
        <motion.div style={{ y: heroParallax }} className="absolute inset-0 -top-20">
          <Image
            src="/featured.jpg"
            alt="The Green Valley International School Campus"
            fill
            className="object-cover"
            priority
            quality={90}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0d3b66]/90 via-[#0d3b66]/70 to-[#0d3b66]/40" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0d3b66]/80 via-transparent to-transparent" />
        </motion.div>

        <motion.div style={{ opacity: heroOpacity }} className="relative z-10 mx-auto max-w-7xl px-6 py-32 lg:py-0 w-full">
          <div className="grid lg:grid-cols-2 gap-12 items-center min-h-screen py-32">
            <motion.div initial="hidden" animate="visible" variants={stagger}>
              <motion.div variants={fadeUp} className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 backdrop-blur-md px-5 py-2 mb-8">
                <Star className="h-4 w-4 text-amber-400 fill-amber-400" />
                <span className="text-sm font-semibold text-white/90">CBSE Affiliated &bull; Bihta, Patna</span>
              </motion.div>

              <motion.h2 variants={fadeUp} className="text-lg sm:text-2xl lg:text-3xl font-bold text-white/90 tracking-wide uppercase mb-4">
                The Green Valley International School
              </motion.h2>

              <motion.h1 variants={fadeUp} className="text-4xl sm:text-5xl lg:text-7xl font-extrabold text-white leading-[1.05] tracking-tight">
                Believe.{" "}Learn.{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-300 to-cyan-200">
                  Achieve.
                </span>
              </motion.h1>

              <motion.p variants={fadeUp} className="mt-6 text-lg sm:text-xl text-blue-100/80 leading-relaxed max-w-xl">
                A prestigious CBSE-affiliated school in Bihta, Patna — where every child discovers their potential through world-class education and a nurturing environment.
              </motion.p>

              <motion.div variants={fadeUp} className="mt-10 flex flex-wrap gap-4">
                <Link href="/admissions" className="group inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 text-sm font-bold text-[#0d3b66] shadow-xl shadow-black/20 hover:bg-teal-50 transition-all hover:scale-105">
                  Start Admission <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
                <Link href="/gallery" className="inline-flex items-center gap-2 rounded-full border-2 border-white/30 bg-white/10 backdrop-blur-md px-8 py-4 text-sm font-semibold text-white hover:bg-white/20 transition-all">
                  Explore Campus
                </Link>
              </motion.div>
            </motion.div>

            {/* Right: Logo on desktop */}
            <motion.div
              initial={{ opacity: 0, scale: 0.85, y: 40 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
              className="hidden lg:flex justify-center"
            >
              <div className="relative w-72 h-72 rounded-full bg-white/10 backdrop-blur-xl border-2 border-white/20 flex items-center justify-center shadow-2xl shadow-black/20">
                <div className="relative w-48 h-48">
                  <Image src="/logo.jpg" alt="TGVIS Official Logo" fill className="object-contain drop-shadow-2xl" />
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20"
        >
          <div className="w-8 h-12 rounded-full border-2 border-white/30 flex items-start justify-center pt-2">
            <div className="w-1.5 h-3 bg-white/60 rounded-full" />
          </div>
        </motion.div>
      </section>

      {/* ═══════════════════ STATS ═══════════════════ */}
      <section className="relative z-20 -mt-20">
        <div className="mx-auto max-w-5xl px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="grid grid-cols-2 md:grid-cols-4 rounded-2xl bg-white shadow-2xl shadow-slate-900/10 border border-slate-100 overflow-hidden"
          >
            {[
              { value: "CBSE", label: "Board Affiliation" },
              { value: "K-12", label: "All Grades" },
              { value: "4.3★", label: "Parent Rating" },
              { value: "7 AM", label: "School Opens" },
            ].map((s, i) => (
              <motion.div key={i} variants={fadeUp} className="p-6 md:p-8 text-center border-b md:border-b-0 border-r border-slate-100 last:border-r-0">
                <p className="text-2xl md:text-3xl font-black text-[#0d3b66]">{s.value}</p>
                <p className="mt-1 text-xs font-semibold text-slate-500 uppercase tracking-wider">{s.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════ ABOUT PREVIEW ═══════════════════ */}
      <section className="py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }} variants={stagger} className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div variants={fadeUp} className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="relative h-48 rounded-2xl overflow-hidden shadow-lg">
                  <Image src="/gallery/students-1.jpg" alt="Students" fill className="object-cover hover:scale-110 transition-transform duration-700" />
                </div>
                <div className="relative h-64 rounded-2xl overflow-hidden shadow-lg">
                  <Image src="/gallery/campus-2.jpg" alt="Campus" fill className="object-cover hover:scale-110 transition-transform duration-700" />
                </div>
              </div>
              <div className="space-y-4 pt-8">
                <div className="relative h-64 rounded-2xl overflow-hidden shadow-lg">
                  <Image src="/gallery/activity-1.jpg" alt="Activities" fill className="object-cover hover:scale-110 transition-transform duration-700" />
                </div>
                <div className="relative h-48 rounded-2xl overflow-hidden bg-gradient-to-br from-[#0d3b66] to-teal-700 flex items-center justify-center">
                  <div className="text-center p-6">
                    <p className="text-4xl font-black text-white">579+</p>
                    <p className="text-sm font-medium text-teal-300 mt-1">Campus Photos</p>
                    <Link href="/gallery" className="mt-3 inline-flex text-xs text-white/70 hover:text-white underline underline-offset-4 transition-colors">
                      View Gallery →
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div variants={fadeUp}>
              <span className="text-sm font-bold text-teal-600 uppercase tracking-widest">About Our School</span>
              <h2 className="mt-3 text-3xl md:text-4xl font-extrabold text-[#0d3b66] tracking-tight leading-tight">
                Nurturing Young Minds Since Establishment
              </h2>
              <p className="mt-6 text-slate-600 leading-relaxed text-lg">
                The Green Valley International School is a prestigious institution in Bihta, Patna, committed to effective governance and high academic standards. We provide every student with individual attention and support needed to excel.
              </p>
              <p className="mt-4 text-slate-500 leading-relaxed">
                Our comprehensive CBSE curriculum focuses on a well-rounded education including academic subjects, arts, and physical education — preparing students for future success in a nurturing environment that promotes cultural diversity.
              </p>

              <div className="mt-8 grid grid-cols-2 gap-4">
                {[
                  { icon: BookOpen, label: "CBSE Curriculum" },
                  { icon: Users, label: "Expert Faculty" },
                  { icon: Award, label: "Character Building" },
                  { icon: Trophy, label: "Sports Excellence" },
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 p-3 rounded-xl bg-slate-50 hover:bg-teal-50 transition-colors">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-teal-100 text-teal-600">
                      <item.icon className="h-5 w-5" />
                    </div>
                    <span className="text-sm font-semibold text-slate-700">{item.label}</span>
                  </div>
                ))}
              </div>

              <Link href="/about" className="mt-10 inline-flex items-center gap-2 rounded-full bg-[#0d3b66] px-7 py-3.5 text-sm font-semibold text-white hover:bg-[#0a2e52] transition-all hover:scale-105 shadow-lg shadow-[#0d3b66]/20">
                Learn More About TGVIS <ChevronRight className="h-4 w-4" />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════ FACILITIES ═══════════════════ */}
      <section className="py-24 bg-slate-50">
        <div className="mx-auto max-w-7xl px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-sm font-bold text-teal-600 uppercase tracking-widest">Our Infrastructure</span>
            <h2 className="mt-3 text-3xl md:text-4xl font-extrabold text-[#0d3b66] tracking-tight">World-Class Facilities</h2>
            <p className="mt-4 text-slate-500 text-lg">Everything your child needs to learn, grow, and thrive under one roof.</p>
          </motion.div>

          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-60px" }} variants={stagger} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: Beaker, title: "Science Labs", desc: "State-of-the-art Physics, Chemistry & Biology laboratories with modern equipment." },
              { icon: Trophy, title: "Sports & Activities", desc: "Athletics, indoor games, cultural events, and annual day celebrations." },
              { icon: Laptop, title: "Computer Labs", desc: "Fully equipped digital classrooms preparing students for the technology-driven future." },
              { icon: Palette, title: "Arts & Culture", desc: "Comprehensive arts program nurturing creativity through painting, music, and dance." },
              { icon: Bus, title: "School Transport", desc: "Safe and reliable school bus service covering Bihta and surrounding areas." },
              { icon: GraduationCap, title: "CBSE Academics", desc: "Structured academic framework from pre-primary through senior secondary." },
            ].map((f, i) => (
              <motion.div key={i} variants={fadeUp} whileHover={{ y: -6 }} className="group rounded-2xl bg-white p-8 shadow-sm border border-slate-100 hover:shadow-xl hover:border-teal-200 transition-all">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-[#0d3b66] to-teal-600 text-white shadow-lg shadow-teal-500/20 mb-6 group-hover:scale-110 transition-transform">
                  <f.icon className="h-7 w-7" />
                </div>
                <h3 className="text-xl font-bold text-[#0d3b66] mb-3">{f.title}</h3>
                <p className="text-slate-500 leading-relaxed text-sm">{f.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════ GALLERY PREVIEW ═══════════════════ */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12">
            <div>
              <span className="text-sm font-bold text-teal-600 uppercase tracking-widest">Campus Gallery</span>
              <h2 className="mt-3 text-3xl md:text-4xl font-extrabold text-[#0d3b66] tracking-tight">A Glimpse Into Our World</h2>
            </div>
            <Link href="/gallery" className="group inline-flex items-center gap-2 rounded-full border-2 border-[#0d3b66] px-6 py-2.5 text-sm font-bold text-[#0d3b66] hover:bg-[#0d3b66] hover:text-white transition-all shrink-0">
              View Full Gallery <ChevronRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>

          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-60px" }} variants={stagger} className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {GALLERY.map((img, i) => (
              <motion.div key={i} variants={fadeUp} className={`group relative overflow-hidden rounded-2xl shadow-sm hover:shadow-xl transition-shadow ${i === 0 ? "col-span-2 row-span-2 h-80 md:h-[440px]" : "h-48 md:h-52"}`}>
                <Image src={img.src} alt={img.label} fill className="object-cover transition-transform duration-700 group-hover:scale-110" sizes="(max-width: 768px) 50vw, 33vw" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-4 left-4 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                  <p className="text-white text-sm font-bold">{img.label}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════ ADMISSIONS CTA ═══════════════════ */}
      <section className="py-24 bg-gradient-to-br from-[#0d3b66] via-[#0f4c75] to-[#1a6b6a] relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-teal-400/10 blur-[100px]" />
          <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full bg-blue-400/10 blur-[80px]" />
        </div>
        <div className="mx-auto max-w-4xl px-6 relative z-10 text-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
            <motion.div variants={fadeUp} className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 mb-8">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-teal-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-teal-400" />
              </span>
              <span className="text-sm font-medium text-white/90">Admissions Open for 2025-26</span>
            </motion.div>
            <motion.h2 variants={fadeUp} className="text-3xl md:text-5xl font-extrabold text-white tracking-tight leading-tight">
              Begin Your Child&apos;s Journey to Excellence
            </motion.h2>
            <motion.p variants={fadeUp} className="mt-6 text-lg text-blue-100/70 max-w-2xl mx-auto">
              We follow a structured, fair and transparent admission process. We welcome applications from students of all backgrounds.
            </motion.p>
            <motion.div variants={fadeUp} className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/admissions" className="inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 text-base font-bold text-[#0d3b66] shadow-xl shadow-black/20 hover:bg-teal-50 transition-all hover:scale-105">
                Apply Now <ChevronRight className="h-5 w-5" />
              </Link>
              <a href="tel:+918935901010" className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-8 py-4 text-base font-semibold text-white hover:bg-white/20 transition-all">
                <Phone className="h-5 w-5" /> Call Us
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
