"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { BookOpen, Users, Award, Trophy, Target, Heart, ChevronRight } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" as const } },
};
const stagger = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.12 } },
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <Navbar />

      {/* Hero Banner */}
      <section className="relative pt-28 pb-20 bg-gradient-to-br from-[#0d3b66] to-[#1a6b6a] overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'1\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")' }} />
        <div className="mx-auto max-w-7xl px-6 relative z-10 text-center">
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-4xl md:text-6xl font-extrabold text-white tracking-tight">
            About <span className="text-teal-300">TGVIS</span>
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="mt-4 text-lg text-blue-100/70 max-w-2xl mx-auto">
            Discover what makes The Green Valley International School the premier choice for quality education in Bihta.
          </motion.p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div variants={fadeUp} className="relative h-[500px] rounded-3xl overflow-hidden shadow-2xl">
              <Image src="/featured.jpg" alt="TGVIS Campus" fill className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0d3b66]/40 to-transparent" />
            </motion.div>

            <motion.div variants={fadeUp}>
              <h2 className="text-3xl md:text-4xl font-extrabold text-[#0d3b66] tracking-tight">Our Mission & Vision</h2>
              <div className="mt-8 space-y-6">
                <div className="p-6 rounded-2xl bg-teal-50 border border-teal-100">
                  <h3 className="font-bold text-[#0d3b66] text-lg flex items-center gap-2"><Target className="h-5 w-5 text-teal-600" /> Our Mission</h3>
                  <p className="mt-2 text-slate-600 leading-relaxed">To provide a holistic educational experience that nurtures intellectual curiosity, builds strong character, and prepares every student for success in a rapidly changing world.</p>
                </div>
                <div className="p-6 rounded-2xl bg-blue-50 border border-blue-100">
                  <h3 className="font-bold text-[#0d3b66] text-lg flex items-center gap-2"><Heart className="h-5 w-5 text-blue-600" /> Our Vision</h3>
                  <p className="mt-2 text-slate-600 leading-relaxed">To be recognized as the most trusted and progressive educational institution in Bihar, producing responsible citizens who contribute meaningfully to society.</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-24 bg-slate-50">
        <div className="mx-auto max-w-7xl px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-sm font-bold text-teal-600 uppercase tracking-widest">Our Foundation</span>
            <h2 className="mt-3 text-3xl md:text-4xl font-extrabold text-[#0d3b66]">Core Values We Stand By</h2>
          </motion.div>

          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: BookOpen, title: "Academic Excellence", desc: "Rigorous CBSE curriculum designed to challenge and inspire every student." },
              { icon: Users, title: "Inclusive Community", desc: "We welcome students from all backgrounds and celebrate cultural diversity." },
              { icon: Award, title: "Character Building", desc: "Instilling values of integrity, empathy, and ethical leadership." },
              { icon: Trophy, title: "Holistic Growth", desc: "Balanced focus on academics, sports, arts, and personal development." },
            ].map((v, i) => (
              <motion.div key={i} variants={fadeUp} whileHover={{ y: -6 }} className="rounded-2xl bg-white p-8 shadow-sm border border-slate-100 hover:shadow-xl hover:border-teal-200 transition-all text-center">
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-[#0d3b66] to-teal-600 text-white shadow-lg mb-6">
                  <v.icon className="h-7 w-7" />
                </div>
                <h3 className="text-lg font-bold text-[#0d3b66] mb-2">{v.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{v.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[#0d3b66] text-center">
        <div className="mx-auto max-w-3xl px-6">
          <h2 className="text-3xl font-extrabold text-white mb-6">Ready to Join Our Family?</h2>
          <p className="text-blue-100/70 mb-8">Take the first step towards your child&apos;s bright future.</p>
          <Link href="/admissions" className="inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 text-base font-bold text-[#0d3b66] hover:bg-teal-50 transition-all hover:scale-105 shadow-xl">
            Apply for Admission <ChevronRight className="h-5 w-5" />
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
