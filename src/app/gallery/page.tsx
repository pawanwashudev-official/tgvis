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
      <section className="relative pt-28 pb-20 bg-gradient-to-br from-[#0d3b66] to-[#1a6b6a]">
        <div className="mx-auto max-w-7xl px-6 text-center relative z-10">
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-4xl md:text-6xl font-extrabold text-white tracking-tight">
            Photo <span className="text-teal-300">Gallery</span>
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="mt-4 text-lg text-blue-100/70 max-w-xl mx-auto">
            Explore life at The Green Valley International School through our official campus photographs.
          </motion.p>
        </div>
      </section>

      {/* Filter + Grid */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-6">
          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all ${
                  activeCategory === cat
                    ? "bg-[#0d3b66] text-white shadow-lg shadow-[#0d3b66]/20"
                    : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Gallery Grid */}
          <motion.div initial="hidden" animate="visible" variants={stagger} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4" key={activeCategory}>
            {filtered.map((img, i) => (
              <motion.div
                key={`${img.src}-${i}`}
                variants={fadeUp}
                layout
                className="group relative h-64 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow"
              >
                <Image src={img.src} alt={img.label} fill className="object-cover transition-transform duration-700 group-hover:scale-110" sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all">
                  <p className="text-white font-bold text-sm">{img.label}</p>
                  <p className="text-teal-300 text-xs mt-1">{img.cat}</p>
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
