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
  Target, Heart, MapPin, Mail, Clock, MessageCircle, Send, ArrowRight, ArrowLeft
} from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { useRef, useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";

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
  visible: { opacity: 1, rotateY: 0, x: 0, filter: "blur(0px)", transition: { duration: 1, ease: [0.16, 1, 0.3, 1]  } },
};
const foldInRight: Variants = {
  hidden: { opacity: 0, rotateY: 30, x: 50, filter: "blur(10px)" },
  visible: { opacity: 1, rotateY: 0, x: 0, filter: "blur(0px)", transition: { duration: 1, ease: [0.16, 1, 0.3, 1]  } },
};
const unfold: Variants = {
  hidden: { opacity: 0, rotateX: 20, scale: 0.95, y: 40 },
  visible: { opacity: 1, rotateX: 0, scale: 1, y: 0, transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1]  } },
};

/* ─── local gallery images ─── */
const GALLERY = [
  { src: "/gallery/trip.jpg", label: "School Trip" },
  { src: "/gallery/science-exibt.jpg", label: "Science Exhibition" },
  { src: "/gallery/classroom-new.jpg", label: "Classrooms" },
  { src: "/gallery/lab-new.webp", label: "Laboratories" },
  { src: "/gallery/ceremony.jpg", label: "Ceremony" },
  { src: "/gallery/classroom-8B.jpeg", label: "Junior Classroom" },
];

export default function Home() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "center", skipSnaps: false });

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

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

  // Section-specific transforms for "Stacked" feel
  const storyScale = useTransform(scrollYProgress, [0.1, 0.3], [0.95, 1]);
  const storyRotateX = useTransform(scrollYProgress, [0.1, 0.3], [10, 0]);
  
  const facilitiesScale = useTransform(scrollYProgress, [0.4, 0.6], [0.9, 1]);
  const facilitiesRotateX = useTransform(scrollYProgress, [0.4, 0.6], [-10, 0]);

  const galleryScale = useTransform(scrollYProgress, [0.6, 0.8], [0.85, 1]);

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
      <motion.section id="contact" className="relative min-h-screen flex items-center overflow-hidden perspective-container z-10 will-change-transform scroll-mt-24">
        <motion.div 
          style={{ scale: heroScale, rotateX: heroRotateX, opacity: heroOpacity, y: contentY }}
          className="absolute inset-0 will-change-transform"
        >
          <Image
            src="/gallery/hero.png"
            alt="The Green Valley International School Building"
            fill
            className="object-cover object-left bg-transparent mix-blend-overlay opacity-60"
            priority
            quality={95}
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0d3b66]/80 via-[#0d3b66]/40 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0d3b66] via-transparent to-transparent" />
        </motion.div>

        <motion.div style={{ opacity: heroOpacity }} className="relative z-10 mx-auto max-w-[1400px] px-6 w-full">
          <div className="grid lg:grid-cols-2 gap-16 items-center min-h-screen py-24">
            <motion.div initial="hidden" animate="visible" variants={stagger} className="max-w-2xl">
              <motion.div variants={fadeUp} className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 backdrop-blur-md px-5 py-2 mb-8">
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

              <motion.div variants={fadeUp} className="mt-10 flex flex-wrap gap-6 items-center">
                {[
                  { icon: Phone, href: "tel:+918935901010", label: "Call Us" },
                  { icon: MessageCircle, href: "https://wa.me/918935901010", label: "Message" },
                  { icon: MapPin, href: "https://maps.google.com/?q=The+Green+Valley+International+School+Bihta", label: "Locate Us" },
                  { icon: Mail, href: "mailto:tgvisbihta@gmail.com", label: "Email Us" },
                ].map((action, i) => (
                  <motion.a
                    key={i}
                    href={action.href}
                    target={action.icon === MapPin ? "_blank" : "_self"}
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.15, rotate: 5 }}
                    whileTap={{ scale: 0.95 }}
                    animate={{
                      y: [0, -10, 0],
                      boxShadow: ["0px 0px 10px rgba(20,184,166,0.2)", "0px 0px 35px rgba(20,184,166,0.9)", "0px 0px 10px rgba(20,184,166,0.2)"],
                      borderColor: ["rgba(255,255,255,0.3)", "rgba(20,184,166,0.8)", "rgba(255,255,255,0.3)"]
                    }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: i * 0.15 }}
                    title={action.label}
                    className="flex h-14 w-14 items-center justify-center rounded-full bg-white/5 backdrop-blur-xl border-2 text-white shadow-2xl hover:bg-white hover:text-[#0d3b66] transition-colors relative group z-20"
                  >
                    <action.icon className="h-6 w-6" />
                    {/* Vertical Highlight / Tooltip */}
                    <span className="absolute -bottom-16 opacity-0 group-hover:opacity-100 group-hover:translate-y-2 transition-all duration-300 flex flex-col items-center pointer-events-none">
                      <div className="w-1 h-3 bg-teal-400 mb-1 rounded-full shadow-[0_0_8px_#2dd4bf]" />
                      <span className="bg-[#0d3b66]/90 backdrop-blur-md text-white text-xs font-bold px-3 py-1.5 rounded-lg whitespace-nowrap shadow-xl border border-white/20 uppercase tracking-wider">
                        {action.label}
                      </span>
                    </span>
                  </motion.a>
                ))}
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
                  <Image 
                    src="/logo.png" 
                    alt="TGVIS Official Logo" 
                    fill 
                    className="object-contain drop-shadow-[0_20px_50px_rgba(0,0,0,0.5)]" 
                    priority
                    quality={90}
                    sizes="(max-width: 1024px) 100vw, 400px"
                  />
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
      <motion.section className="relative z-20 -mt-32 perspective-container">
        <div className="mx-auto max-w-[1400px] px-6">
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
        className="relative min-h-screen py-32 lg:py-48 perspective-container shadow-[-50px_0_100px_rgba(0,0,0,0.1)] z-10 border-t border-white/10 will-change-transform bg-transparent"
      >
        <div className="mx-auto max-w-[1400px] px-6">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-150px" }}
            variants={foldInLeft}
            className="max-w-4xl mx-auto"
          >
            <div className="text-center rounded-[3rem] liquid-glass p-10 md:p-16 glass-border-glow shadow-2xl relative overflow-hidden">
              <div className="absolute inset-0 bg-white/40 mix-blend-overlay pointer-events-none" />
              <div className="relative z-10">
              <motion.span variants={fadeUp} className="text-sm font-black text-teal-600 uppercase tracking-[0.4em]">Establishment & Values</motion.span>
              <motion.h2 variants={fadeUp} className="mt-6 text-5xl lg:text-7xl font-extrabold text-[#0d3b66] tracking-tighter leading-[1] drop-shadow-sm">
                Crafting <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-500 to-blue-600">Greatness</span> Since Day One
              </motion.h2>
              <motion.p variants={fadeUp} className="mt-10 text-slate-600 leading-relaxed text-xl font-medium opacity-90 max-w-xl">
                The Green Valley International School is recognized as the best CBSE school in Bihta, Patna. We offer a world-class educational experience combining modern pedagogy, state-of-the-art facilities, and deep-rooted cultural values to ensure that every student thrives.
              </motion.p>
              
              <div className="mt-14 space-y-8">
                <div className="p-8 rounded-[2.5rem] liquid-glass glass-border-glow shadow-xl hover:translate-x-4 transition-transform duration-500">
                  <h3 className="font-black text-[#0d3b66] text-xl flex items-center gap-4 uppercase tracking-wider">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-teal-500 text-white shadow-lg"><Star className="h-6 w-6" /></div>
                    Exceptional Educators
                  </h3>
                  <p className="mt-4 text-slate-600 leading-relaxed font-medium opacity-80">Our teachers are highly qualified, passionate, and dedicated to student success. They act as mentors who guide, inspire, and foster a love for lifelong learning in every child.</p>
                </div>
                <div className="p-8 rounded-[2.5rem] liquid-glass glass-border-glow shadow-xl hover:translate-x-4 transition-transform duration-500">
                  <h3 className="font-black text-[#0d3b66] text-xl flex items-center gap-4 uppercase tracking-wider">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-600 text-white shadow-lg"><Target className="h-6 w-6" /></div>
                    Holistic Development
                  </h3>
                  <p className="mt-4 text-slate-600 leading-relaxed font-medium opacity-80">We go beyond textbooks. We offer comprehensive programs including sports, arts, experiments, and regular PTMs (Parent-Teacher Meetings) for an all-round development approach.</p>
                </div>
              </div>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* ═══════════════════ FACILITIES (ROLLER DIVE) ═══════════════════ */}
      <motion.section 
        style={{ scale: facilitiesScale, rotateX: facilitiesRotateX }}
        className="relative min-h-screen py-40 perspective-container shadow-[0_-50px_100px_rgba(0,0,0,0.15)] z-30 border-t border-white/10 will-change-transform bg-transparent"
      >
        <div className="mx-auto max-w-[1400px] px-6">
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
        id="glimpses"
        style={{ scale: galleryScale }}
        className="relative min-h-screen py-40 perspective-container z-40 border-t border-white/10 bg-transparent"
      >
        <motion.svg className="absolute top-0 left-1/2 -translate-x-1/2 -mt-20 w-12 h-40 z-0 opacity-50" viewBox="0 0 24 100">
          <motion.path d="M12 0 L12 100" stroke="#14b8a6" strokeWidth="2" strokeDasharray="4 4" fill="none" initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} transition={{ duration: 1.5 }} />
        </motion.svg>
        <div className="mx-auto max-w-[1400px] px-6 relative z-10">
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
          </motion.div>

          <div className="relative">
            <div className="overflow-hidden rounded-[2.5rem]" ref={emblaRef}>
              <div className="flex touch-pan-y">
                {GALLERY.map((img, i) => (
                  <div key={i} className="flex-[0_0_100%] min-w-0 sm:flex-[0_0_80%] lg:flex-[0_0_60%] pl-6">
                    <motion.div
                      initial="hidden" whileInView="visible" viewport={{ once: true }} variants={unfold}
                      className="group relative overflow-hidden rounded-[2.5rem] shadow-2xl hover:shadow-teal-500/20 transition-all h-[400px] sm:h-[500px]"
                    >
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img src={img.src} alt={img.label} className="w-full h-full object-cover bg-slate-100 transition-transform duration-1000 group-hover:scale-105" />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-500" />
                      <div className="absolute bottom-10 left-10 translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                        <p className="text-white text-3xl font-bold tracking-tight mb-2">{img.label}</p>
                        <p className="text-white/80 text-sm max-w-sm">Experience the state-of-the-art facilities and vibrant campus life at The Green Valley International School.</p>
                      </div>
                    </motion.div>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex justify-center gap-4 mt-12">
              <button
                onClick={scrollPrev}
                className="w-14 h-14 rounded-full border-2 border-[#0d3b66]/20 flex items-center justify-center text-[#0d3b66] hover:bg-[#0d3b66] hover:text-white transition-all backdrop-blur-md bg-white/30"
              >
                <ArrowLeft className="w-6 h-6" />
              </button>
              <button
                onClick={scrollNext}
                className="w-14 h-14 rounded-full border-2 border-[#0d3b66]/20 flex items-center justify-center text-[#0d3b66] hover:bg-[#0d3b66] hover:text-white transition-all backdrop-blur-md bg-white/30"
              >
                <ArrowRight className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
      </motion.section>

      {/* ═══════════════════ ADMISSIONS CTA ═══════════════════ */}
      <motion.section className="py-48 bg-transparent relative overflow-hidden perspective-container border-t border-white/10">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-[-20%] right-[-10%] w-[600px] h-[600px] rounded-full bg-teal-400/10 blur-[150px] animate-blob" />
          <div className="absolute bottom-[-20%] left-[-10%] w-[600px] h-[600px] rounded-full bg-blue-400/10 blur-[150px] animate-blob animation-delay-2000" />
        </div>
        <div className="mx-auto max-w-[1400px] px-6 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9, rotateX: 10 }}
            whileInView={{ opacity: 1, scale: 1, rotateX: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: "circOut" }}
            className="rounded-[4rem] liquid-glass-dark p-16 md:p-24 glass-border-glow shadow-[0_0_100px_rgba(45,212,191,0.3)]"
          >
            <motion.div variants={fadeUp} className="inline-flex items-center gap-3 rounded-full border border-white/20 bg-white/5 px-6 py-2 mb-10">
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
              <a href="tel:+918935901010" className="inline-flex items-center gap-3 rounded-full border-2 border-white/30 bg-white/5 px-10 py-5 text-sm font-bold text-white hover:bg-white/10 transition-all group uppercase tracking-widest">
                <Phone className="h-5 w-5" /> Call Hotline
              </a>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      <Footer />

      {/* Sticky Bottom Navigation CTA for mobile & desktop */}
      <div className="fixed bottom-0 left-0 right-0 z-50 p-4 pointer-events-none">
        <div className="mx-auto max-w-[1400px] flex justify-center sm:justify-end gap-4 pointer-events-auto">
          <Link
            href="/admissions"
            className="flex items-center gap-2 rounded-full bg-teal-500/90 backdrop-blur-md px-6 py-3 text-sm font-bold text-white shadow-2xl hover:bg-teal-500 hover:scale-105 transition-all"
          >
            Apply Now <ChevronRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}
