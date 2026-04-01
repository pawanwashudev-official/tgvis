"use client";

import { 
  motion, 
  useScroll, 
  useTransform, 
  Variants 
} from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import {
  ChevronRight, BookOpen, Users, Award, Beaker, Trophy,
  Laptop, Palette, Bus, GraduationCap, Phone, Star,
  Target, Heart, MapPin, Mail, Clock, MessageCircle, Send
} from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { useRef } from "react";

/* ─── animation helpers ─── */
const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" as const } },
};
const stagger: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.12 } },
};
const foldInLeft: Variants = {
  hidden: { opacity: 0, rotateY: -30, x: -50, filter: "blur(10px)" },
  visible: { opacity: 1, rotateY: 0, x: 0, filter: "blur(0px)", transition: { duration: 1, ease: [0.16, 1, 0.3, 1] as any } },
};
const foldInRight: Variants = {
  hidden: { opacity: 0, rotateY: 30, x: 50, filter: "blur(10px)" },
  visible: { opacity: 1, rotateY: 0, x: 0, filter: "blur(0px)", transition: { duration: 1, ease: [0.16, 1, 0.3, 1] as any } },
};
const unfold: Variants = {
  hidden: { opacity: 0, rotateX: 20, scale: 0.95, y: 40 },
  visible: { opacity: 1, rotateX: 0, scale: 1, y: 0, transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1] as any } },
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
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const { scrollY } = useScroll();
  
  // 3D Perspective & Hero Effects
  const heroScale = useTransform(scrollY, [0, 800], [1, 0.85]);
  const heroRotateX = useTransform(scrollY, [0, 800], [0, 10]);
  const heroOpacity = useTransform(scrollY, [0, 800], [1, 0.2]);
  const heroBlur = useTransform(scrollY, [0, 800], [0, 10]);

  // Section-specific transforms for "Stacked" feel
  const storyScale = useTransform(scrollYProgress, [0.1, 0.3], [0.95, 1]);
  const storyRotateX = useTransform(scrollYProgress, [0.1, 0.3], [10, 0]);
  
  const facilitiesScale = useTransform(scrollYProgress, [0.4, 0.6], [0.9, 1]);
  const facilitiesRotateX = useTransform(scrollYProgress, [0.4, 0.6], [-10, 0]);

  const galleryScale = useTransform(scrollYProgress, [0.6, 0.8], [0.85, 1]);
  const contactScale = useTransform(scrollYProgress, [0.8, 1], [0.8, 1]);

  // Roller-Diving Transition (Hero to Story)
  const contentY = useTransform(scrollY, [0, 800], [0, -300]);
  const storyIn = useTransform(scrollY, [200, 1000], [400, 0]);

  // Logo 3D Tilt (Holographic Feel)
  const logoRotateX = useTransform(scrollY, [0, 800], [0, -15]);
  const logoRotateY = useTransform(scrollY, [0, 800], [0, 15]);
  const logoScale = useTransform(scrollY, [0, 800], [1, 1.2]);

  return (
    <div ref={containerRef} className="relative bg-transparent text-slate-900 selection:bg-teal-100">
      <Navbar />

      {/* ═══════════════════ HERO (BASE LAYER) ═══════════════════ */}
      <motion.section className="relative h-screen sticky top-0 flex items-center overflow-hidden perspective-container z-0">
        <motion.div 
          style={{ scale: heroScale, rotateX: heroRotateX, opacity: heroOpacity, filter: `blur(${heroBlur}px)`, y: contentY }} 
          className="absolute inset-0"
        >
          <Image
            src="/featured.jpg"
            alt="Campus"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0d3b66]/60 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0d3b66] via-transparent to-transparent" />
        </motion.div>

        <motion.div style={{ opacity: heroOpacity }} className="relative z-10 mx-auto max-w-7xl px-6 w-full">
          <div className="grid lg:grid-cols-2 gap-16 items-center min-h-screen py-24">
            <motion.div initial="hidden" animate="visible" variants={stagger} className="max-w-2xl">
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
              initial={{ opacity: 0, scale: 0.8, rotateY: -20 }}
              animate={{ opacity: 1, scale: 1, rotateY: 0 }}
              transition={{ duration: 1.2, ease: "circOut" }}
              style={{ rotateX: logoRotateX, rotateY: logoRotateY, scale: logoScale }}
              className="hidden lg:flex justify-center perspective-container"
            >
              <div className="relative w-[400px] h-[400px] rounded-full liquid-glass flex items-center justify-center p-12 glass-border-glow shadow-[0_0_50px_rgba(45,212,191,0.2)]">
                <div className="relative w-full h-full animate-float flex items-center justify-center">
                  <Image src="/logo.png" alt="TGVIS Official Logo" fill className="object-contain drop-shadow-[0_20px_50px_rgba(0,0,0,0.5)]" />
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
      </motion.section>

      {/* ═══════════════════ STATS (ROLL-OVER) ═══════════════════ */}
      <motion.section className="relative z-10 -mt-32 perspective-container">
        <div className="mx-auto max-w-6xl px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={unfold}
            className="grid grid-cols-2 md:grid-cols-4 rounded-[3rem] liquid-glass-premium overflow-hidden glass-border-glow shadow-2xl"
          >
            {[
              { value: "CBSE", label: "Board Affiliation" },
              { value: "K-12", label: "All Grades" },
              { value: "4.3★", label: "Parent Rating" },
              { value: "7 AM", label: "School Opens" },
            ].map((s, i) => (
              <motion.div 
                key={i} 
                whileHover={{ backgroundColor: "rgba(255,255,255,0.2)" }}
                className="p-8 md:p-12 text-center border-b md:border-b-0 border-white/10 last:border-r-0 transition-colors"
              >
                <p className="text-3xl md:text-5xl font-black text-[#0d3b66] tracking-tighter drop-shadow-sm">{s.value}</p>
                <p className="mt-2 text-xs font-bold text-teal-600/70 uppercase tracking-[0.2em]">{s.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* ═══════════════════ OUR STORY (ROLLER DIVE) ═══════════════════ */}
      <motion.section 
        style={{ scale: storyScale, rotateX: storyRotateX, y: storyIn }}
        id="about" 
        className="relative min-h-screen py-32 lg:py-48 perspective-container bg-white/20 backdrop-blur-3xl shadow-[-50px_0_100px_rgba(0,0,0,0.1)] z-10 border-t border-white/30"
      >
        <div className="mx-auto max-w-7xl px-6">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-150px" }}
            variants={foldInLeft}
            className="grid lg:grid-cols-2 gap-24 items-center"
          >
            <div className="grid grid-cols-2 gap-8 p-6 rounded-[4rem] liquid-glass-premium glass-border-glow shadow-2xl">
              <div className="space-y-8">
                <div className="relative h-64 rounded-[2.5rem] overflow-hidden shadow-2xl group border border-white/40">
                  <Image src="/gallery/students-1.jpg" alt="Students" fill className="object-cover group-hover:scale-110 transition-transform duration-1000" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0d3b66]/80 via-[#0d3b66]/20 to-transparent" />
                </div>
                <div className="relative h-80 rounded-[2.5rem] overflow-hidden shadow-2xl group border border-white/40">
                  <Image src="/gallery/campus-2.jpg" alt="Campus" fill className="object-cover group-hover:scale-110 transition-transform duration-1000" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0d3b66]/80 via-[#0d3b66]/20 to-transparent" />
                </div>
              </div>
              <div className="space-y-8 pt-16">
                <div className="relative h-80 rounded-[2.5rem] overflow-hidden shadow-2xl group border border-white/40">
                  <Image src="/gallery/activity-1.jpg" alt="Activities" fill className="object-cover group-hover:scale-110 transition-transform duration-1000" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0d3b66]/80 via-[#0d3b66]/20 to-transparent" />
                </div>
                <div className="relative h-64 rounded-[2.5rem] overflow-hidden bg-gradient-to-br from-[#0d3b66] to-teal-900 flex items-center justify-center p-10 text-center glass-border-glow group">
                  <div className="relative z-10 transition-transform group-hover:scale-110 duration-500">
                    <p className="text-6xl font-black text-white text-glow">579+</p>
                    <p className="text-xs font-bold text-teal-300 mt-3 uppercase tracking-[0.3em]">Campus Moments</p>
                  </div>
                  <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              </div>
            </div>

            <div className="lg:pl-12">
              <motion.span variants={fadeUp} className="text-sm font-black text-teal-600 uppercase tracking-[0.4em]">Establishment & Values</motion.span>
              <motion.h2 variants={fadeUp} className="mt-6 text-5xl lg:text-7xl font-extrabold text-[#0d3b66] tracking-tighter leading-[1] drop-shadow-sm">
                Crafting <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-500 to-blue-600">Greatness</span> Since Day One
              </motion.h2>
              <motion.p variants={fadeUp} className="mt-10 text-slate-600 leading-relaxed text-xl font-medium opacity-90 max-w-xl">
                The Green Valley International School stands as a beacon of academic excellence in Bihta, Patna. We believe every child is a unique world waiting to be explored.
              </motion.p>
              
              <div className="mt-14 space-y-8">
                <div className="p-8 rounded-[2.5rem] liquid-glass glass-border-glow shadow-xl hover:translate-x-4 transition-transform duration-500">
                  <h3 className="font-black text-[#0d3b66] text-xl flex items-center gap-4 uppercase tracking-wider">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-teal-500 text-white shadow-lg"><Target className="h-6 w-6" /></div>
                    Our Mission
                  </h3>
                  <p className="mt-4 text-slate-600 leading-relaxed font-medium opacity-80">To provide a holistic educational experience that nurtures intellectual curiosity and builds strong, ethical character.</p>
                </div>
                <div className="p-8 rounded-[2.5rem] liquid-glass glass-border-glow shadow-xl hover:translate-x-4 transition-transform duration-500">
                  <h3 className="font-black text-[#0d3b66] text-xl flex items-center gap-4 uppercase tracking-wider">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-600 text-white shadow-lg"><Heart className="h-6 w-6" /></div>
                    Our Vision
                  </h3>
                  <p className="mt-4 text-slate-600 leading-relaxed font-medium opacity-80">To be the most progressive educational institution in Bihar, producing responsible citizens who lead with empathy.</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* ═══════════════════ FACILITIES (ROLLER DIVE) ═══════════════════ */}
      <motion.section 
        style={{ scale: facilitiesScale, rotateX: facilitiesRotateX }}
        className="relative min-h-screen py-40 bg-slate-50/20 backdrop-blur-[60px] perspective-container shadow-[0_-50px_100px_rgba(0,0,0,0.15)] z-30 border-t border-white/40"
      >
        <div className="mx-auto max-w-7xl px-6">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={foldInRight}
            className="text-center max-w-3xl mx-auto mb-20"
          >
            <span className="text-sm font-black text-teal-600 uppercase tracking-[0.3em]">Our Infrastructure</span>
            <h2 className="mt-5 text-4xl md:text-5xl font-extrabold text-[#0d3b66] tracking-tight">World-Class Facilities</h2>
            <p className="mt-6 text-slate-500 text-lg font-medium opacity-80">Everything your child needs to learn, grow, and thrive under one roof, designed for the future.</p>
          </motion.div>

          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: Beaker, title: "Science Labs", desc: "State-of-the-art Physics, Chemistry & Biology laboratories with modern equipment." },
              { icon: Trophy, title: "Sports & Activities", desc: "Athletics, indoor games, cultural events, and annual day celebrations." },
              { icon: Laptop, title: "Computer Labs", desc: "Fully equipped digital classrooms preparing students for the technology-driven future." },
              { icon: Palette, title: "Arts & Culture", desc: "Comprehensive arts program nurturing creativity through painting, music, and dance." },
              { icon: Bus, title: "School Transport", desc: "Safe and reliable school bus service covering Bihta and surrounding areas." },
              { icon: GraduationCap, title: "CBSE Academics", desc: "Structured academic framework from pre-primary through senior secondary." },
            ].map((f, i) => (
              <motion.div 
                key={i} 
                variants={fadeUp} 
                whileHover={{ y: -15, rotateX: 2, rotateY: 2 }} 
                className="group rounded-[3rem] liquid-glass p-10 hover:border-teal-400 glass-border-glow shadow-xl"
              >
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-[#0d3b66] to-teal-600 text-white shadow-2xl shadow-teal-500/20 mb-8 group-hover:scale-110 transition-transform duration-500">
                  <f.icon className="h-8 w-8" />
                </div>
                <h3 className="text-2xl font-bold text-[#0d3b66] mb-4">{f.title}</h3>
                <p className="text-slate-500 leading-relaxed text-sm font-medium">{f.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* ═══════════════════ GALLERY PREVIEW (ROLLER) ═══════════════════ */}
      <motion.section 
        style={{ scale: galleryScale }}
        className="relative min-h-screen py-40 perspective-container bg-white/10 backdrop-blur-[80px] shadow-[0_-50px_100px_rgba(0,0,0,0.2)] z-40 border-t border-white/50"
      >
        <div className="mx-auto max-w-7xl px-6">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={unfold}
            className="flex flex-col sm:flex-row sm:items-end justify-between gap-8 mb-16"
          >
            <div>
              <span className="text-sm font-black text-teal-600 uppercase tracking-[0.3em]">Campus Gallery</span>
              <h2 className="mt-5 text-4xl md:text-5xl font-extrabold text-[#0d3b66] tracking-tight">A Glimpse Into Our World</h2>
            </div>
            <Link href="/gallery" className="group inline-flex items-center gap-3 rounded-full border-2 border-[#0d3b66] px-8 py-3 text-sm font-black text-[#0d3b66] hover:bg-[#0d3b66] hover:text-white transition-all shrink-0 uppercase tracking-widest">
              Full Gallery <ChevronRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>

          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {GALLERY.map((img, i) => (
              <motion.div 
                key={i} 
                variants={fadeUp} 
                whileHover={{ scale: 1.02, rotateZ: i % 2 === 0 ? 1 : -1 }}
                className={`group relative overflow-hidden rounded-[2.5rem] shadow-2xl hover:shadow-teal-500/20 transition-all ${i === 0 ? "col-span-2 row-span-2 h-[400px] md:h-[600px]" : "h-56 md:h-72"}`}
              >
                <Image src={img.src} alt={img.label} fill className="object-cover transition-transform duration-1000 group-hover:scale-110" sizes="(max-width: 768px) 50vw, 33vw" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute bottom-8 left-8 opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                  <p className="text-white text-lg font-bold tracking-tight">{img.label}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* ═══════════════════ CONNECT WITH US (ROLLER) ═══════════════════ */}
      <motion.section 
        style={{ scale: contactScale }}
        id="contact" 
        className="relative min-h-screen py-40 perspective-container bg-slate-50/30 backdrop-blur-[100px] shadow-[0_-50px_100px_rgba(0,0,0,0.25)] z-50 border-t border-white/60"
      >
        <div className="mx-auto max-w-7xl px-6">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={foldInLeft}
            className="text-center max-w-3xl mx-auto mb-20"
          >
            <span className="text-sm font-black text-blue-600 uppercase tracking-[0.4em]">Get In Touch</span>
            <h2 className="mt-6 text-5xl md:text-7xl font-extrabold text-[#0d3b66] tracking-tighter">Connect <span className="text-teal-500">With Us</span></h2>
            <p className="mt-8 text-slate-500 text-xl font-medium opacity-80 leading-relaxed">Reach out to our admissions team or visit our world-class campus in Bihta.</p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Quick Contact Cards */}
            <div className="grid sm:grid-cols-2 gap-6">
              {[
                { icon: MapPin, title: "Our Location", text: "Rameshwar Building, Bihta, Patna", color: "bg-teal-500" },
                { icon: Phone, title: "Call Hotline", text: "+91 89359 01010", color: "bg-blue-600" },
                { icon: Mail, title: "Email Support", text: "tgvisbihta@gmail.com", color: "bg-indigo-600" },
                { icon: MessageCircle, title: "WhatsApp", text: "+91 89359 01010", color: "bg-emerald-600" },
              ].map((c, i) => (
                <motion.div 
                  key={i} 
                  whileHover={{ y: -10, rotateX: 2, rotateY: 2 }}
                  className="rounded-[2.5rem] liquid-glass p-8 glass-border-glow shadow-xl group border border-white/50"
                >
                  <div className={`flex h-14 w-14 items-center justify-center rounded-2xl ${c.color} text-white shadow-2xl mb-6 group-hover:scale-110 transition-transform duration-500`}>
                    <c.icon className="h-6 w-6" />
                  </div>
                  <h4 className="text-lg font-bold text-[#0d3b66] mb-2 uppercase tracking-wide">{c.title}</h4>
                  <p className="text-slate-500 font-semibold text-sm leading-relaxed">{c.text}</p>
                </motion.div>
              ))}
              
              {/* Specialized Contact Card (Hours) */}
              <motion.div 
                whileHover={{ scale: 1.02 }}
                className="col-span-1 sm:col-span-2 rounded-[2.5rem] liquid-glass-premium p-10 glass-border-glow shadow-2xl mt-4 border border-white/60"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#0d3b66] text-white shadow-xl"><Clock className="h-6 w-6" /></div>
                  <div>
                    <h4 className="font-black text-[#0d3b66] uppercase tracking-widest">Office Hours</h4>
                    <p className="text-xs font-bold text-teal-600 uppercase mt-1 tracking-widest">Mon-Sat: 7:00 AM - 3:00 PM</p>
                  </div>
                </div>
                <div className="flex flex-wrap gap-4">
                  <a href="https://maps.google.com/?q=The+Green+Valley+International+School+Bihta" target="_blank" className="bg-[#0d3b66] text-white px-6 py-3 rounded-full text-xs font-bold uppercase tracking-widest hover:bg-teal-700 transition-colors">Open in Maps</a>
                </div>
              </motion.div>
            </div>

            {/* Corrected Google Map Location */}
            <motion.div 
              initial={{ opacity: 0, rotateY: 15 }}
              whileInView={{ opacity: 1, rotateY: 0 }}
              viewport={{ once: true }}
              className="relative rounded-[4rem] overflow-hidden shadow-[0_40px_100px_rgba(0,0,0,0.15)] h-[550px] border-[10px] border-white/50 liquid-glass-premium"
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3599.5037878793282!2d84.8714212!3d25.5549008!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x398d5521940b669f%3A0x956837914da3ad52!2sThe%20Green%20Valley%20International%20School!5e0!3m2!1sen!2sin!4v1775061516627!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                title="TGVIS Location Map"
                className="grayscale contrast-125 opacity-90 hover:grayscale-0 transition-all duration-700"
              />
              <div className="absolute inset-0 pointer-events-none border-[1px] border-white/40 rounded-[4rem]" />
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* ═══════════════════ ADMISSIONS CTA ═══════════════════ */}
      <motion.section className="py-48 bg-gradient-to-br from-[#0d3b66] via-[#0f4c75] to-[#1a6b6a] relative overflow-hidden perspective-container">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-[-20%] right-[-10%] w-[600px] h-[600px] rounded-full bg-teal-400/10 blur-[150px] animate-blob" />
          <div className="absolute bottom-[-20%] left-[-10%] w-[600px] h-[600px] rounded-full bg-blue-400/10 blur-[150px] animate-blob animation-delay-2000" />
        </div>
        <div className="mx-auto max-w-5xl px-6 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9, rotateX: 10 }}
            whileInView={{ opacity: 1, scale: 1, rotateX: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: "circOut" }}
            className="rounded-[4rem] liquid-glass-dark p-16 md:p-24 glass-border-glow shadow-[0_0_100px_rgba(45,212,191,0.1)]"
          >
            <motion.div variants={fadeUp} className="inline-flex items-center gap-3 rounded-full border border-white/20 bg-white/10 px-6 py-2 mb-10">
              <span className="relative flex h-2.5 w-2.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-teal-400 opacity-75" />
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-teal-400" />
              </span>
              <span className="text-sm font-bold text-white tracking-widest uppercase">Academic Year 2026-27</span>
            </motion.div>
            <motion.h2 variants={fadeUp} className="text-4xl md:text-6xl font-black text-white tracking-tight leading-[1.05] text-glow line-clamp-2">
              Elevate Your Child&apos;s Journey to Success
            </motion.h2>
            <motion.p variants={fadeUp} className="mt-8 text-xl text-blue-100/70 max-w-2xl mx-auto font-medium leading-relaxed">
              Join the academic session 2026-27 at TGVIS. Experience our world-class facilities and nurturing environment designed for excellence.
            </motion.p>
            <motion.div variants={fadeUp} className="mt-14 flex flex-col sm:flex-row items-center justify-center gap-6">
              <Link href="/admissions" className="group inline-flex items-center gap-3 rounded-full bg-white px-10 py-5 text-sm font-black text-[#0d3b66] shadow-2xl hover:bg-teal-50 transition-all hover:scale-110 active:scale-95 uppercase tracking-widest">
                Apply Now <ChevronRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
              <a href="tel:+918935901010" className="inline-flex items-center gap-3 rounded-full border-2 border-white/30 bg-white/10 px-10 py-5 text-sm font-bold text-white hover:bg-white/20 transition-all group uppercase tracking-widest">
                <Phone className="h-5 w-5" /> Call Hotline
              </a>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      <Footer />
    </div>
  );
}
