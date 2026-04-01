"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { useState } from "react";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" as const } },
};
const stagger = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.08 } },
};

const CATEGORIES = ["All", "Campus", "Classroom", "Labs", "Sports", "Transport"];

const GALLERY = [
  { src: "/gallery/school-front.jpg", cat: "Campus", label: "School Entrance" },
  { src: "/gallery/campus-2.jpg", cat: "Campus", label: "Campus View" },
  { src: "/gallery/students-1.jpg", cat: "Classroom", label: "Students Learning" },
  { src: "/gallery/activity-1.jpg", cat: "Sports", label: "Annual Day Event" },
  { src: "/gallery/transport-1.jpg", cat: "Transport", label: "School Bus Service" },
  { src: "/featured.jpg", cat: "Campus", label: "School Building" },
];

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered = activeCategory === "All" ? GALLERY : GALLERY.filter((g) => g.cat === activeCategory);

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <Navbar />

      {/* Hero */}
      <section className="relative pt-40 pb-32 bg-gradient-to-br from-[#0d3b66] via-[#0f4c75] to-[#1a6b6a] overflow-hidden perspective-container">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] rounded-full bg-teal-400/10 blur-[120px] animate-blob" />
          <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] rounded-full bg-blue-600/10 blur-[120px] animate-blob animation-delay-2000" />
        </div>
        <div className="mx-auto max-w-7xl px-6 text-center relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }} 
            className="inline-flex items-center gap-3 rounded-full border border-white/20 bg-white/10 backdrop-blur-xl px-6 py-2 mb-10 shadow-2xl"
          >
             <span className="text-sm font-black text-white uppercase tracking-[0.4em]">Official Archives</span>
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, scale: 0.95 }} 
            animate={{ opacity: 1, scale: 1 }} 
            transition={{ duration: 0.8 }} 
            className="text-5xl md:text-8xl font-black text-white tracking-tighter leading-[1] text-glow"
          >
            Digital <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-300 to-cyan-200">Campus Tour</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            transition={{ delay: 0.3 }} 
            className="mt-10 text-xl text-blue-100/70 max-w-3xl mx-auto font-medium leading-relaxed"
          >
            Explore the vibrant life, world-class architecture, and modern facilities of TGVIS Bihta through our lens.
          </motion.p>
        </div>
      </section>

      {/* Filter + Grid */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-6">
          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-16">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-8 py-3 rounded-full text-sm font-black transition-all uppercase tracking-widest ${
                  activeCategory === cat
                    ? "bg-[#0d3b66] text-white shadow-[0_10px_30px_rgba(13,59,102,0.3)] scale-110"
                    : "liquid-glass text-slate-600 hover:bg-slate-50 hover:scale-105"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
 
          {/* Gallery Grid */}
          <motion.div 
            initial="hidden" 
            animate="visible" 
            variants={stagger} 
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8" 
            key={activeCategory}
          >
            {filtered.map((img, i) => (
              <motion.div
                key={`${img.src}-${i}`}
                variants={fadeUp}
                layout
                whileHover={{ y: -12, rotateX: 2, rotateY: 2 }}
                className="group relative h-80 rounded-[2.5rem] overflow-hidden shadow-xl hover:shadow-teal-500/20 transition-all duration-500 liquid-glass border border-white/40"
              >
                <Image src={img.src} alt={img.label} fill className="object-cover transition-transform duration-1000 group-hover:scale-110" sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0d3b66]/90 via-[#0d3b66]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute bottom-8 left-8 right-8 opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                  <p className="text-white font-black text-lg tracking-tight">{img.label}</p>
                  <p className="text-teal-300 text-xs font-bold uppercase tracking-[0.2em] mt-2">{img.cat}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {filtered.length === 0 && (
            <p className="text-center text-slate-400 py-16">No photos in this category yet.</p>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
}
