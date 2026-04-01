"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Phone, Mail, FileText, ChevronRight, CheckCircle, Clock, Users } from "lucide-react";
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

export default function AdmissionsPage() {
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
            <span className="relative flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-teal-400 opacity-75" />
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-teal-400" />
            </span>
            <span className="text-sm font-black text-white uppercase tracking-[0.2em]">Admissions Open 2026-27</span>
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, scale: 0.95 }} 
            animate={{ opacity: 1, scale: 1 }} 
            transition={{ duration: 0.8 }} 
            className="text-5xl md:text-8xl font-black text-white tracking-tighter leading-[1] text-glow"
          >
            Secure Your Child&apos;s <br/> <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-300 to-cyan-200">Future Experience</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            transition={{ delay: 0.3 }} 
            className="mt-10 text-xl text-blue-100/70 max-w-3xl mx-auto font-medium leading-relaxed"
          >
            Welcome to the Session 2026-27 enrolment gateway. We invite you to join Bihar&apos;s most progressive educational community at Bihta, Patna.
          </motion.p>
        </div>
      </section>

      {/* Admission Process */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-sm font-bold text-teal-600 uppercase tracking-widest">How to Apply</span>
            <h2 className="mt-3 text-3xl md:text-4xl font-extrabold text-[#0d3b66]">Admission Process</h2>
          </motion.div>

          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="grid md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Enquire", desc: "Contact us via phone, email, or visit our campus to learn about available programs.", icon: Phone },
              { step: "02", title: "Visit Campus", desc: "Schedule a campus tour to experience our facilities and meet our faculty firsthand.", icon: Users },
              { step: "03", title: "Submit Application", desc: "Complete and submit the application form along with all required documents.", icon: FileText },
              { step: "04", title: "Enrollment", desc: "Upon acceptance, complete the enrollment process and welcome to the TGVIS family!", icon: CheckCircle },
            ].map((s, i) => (
              <motion.div key={i} variants={fadeUp} whileHover={{ y: -6 }} className="relative rounded-2xl bg-white p-8 shadow-sm border border-slate-100 hover:shadow-xl hover:border-teal-200 transition-all">
                <span className="text-5xl font-black text-slate-100 absolute top-4 right-4">{s.step}</span>
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-[#0d3b66] to-teal-600 text-white shadow-lg mb-6">
                  <s.icon className="h-7 w-7" />
                </div>
                <h3 className="text-xl font-bold text-[#0d3b66] mb-3">{s.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{s.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Requirements */}
      <section className="py-24 bg-slate-50">
        <div className="mx-auto max-w-4xl px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center mb-12">
            <h2 className="text-3xl font-extrabold text-[#0d3b66]">Documents Required</h2>
          </motion.div>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="grid sm:grid-cols-2 gap-4">
            {[
              "Birth Certificate (Original + Photocopy)",
              "Transfer Certificate from previous school",
              "Report Card of previous class",
              "4 Passport-size photographs",
              "Aadhaar Card of student & parent",
              "Address Proof (Aadhaar/Voter ID/Utility Bill)",
              "Medical fitness certificate",
              "Caste certificate (if applicable)",
            ].map((doc, i) => (
              <motion.div key={i} variants={fadeUp} className="flex items-center gap-3 p-4 rounded-xl bg-white border border-slate-100 shadow-sm">
                <CheckCircle className="h-5 w-5 text-teal-500 shrink-0" />
                <span className="text-sm font-medium text-slate-700">{doc}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Key Info */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: Clock, title: "School Timings", lines: ["Monday - Saturday", "7:00 AM - 3:00 PM", "Sunday: Closed"] },
              { icon: Phone, title: "Admission Enquiry", lines: ["+91 89359 01010", "tgvisbihta@gmail.com", "Visit campus anytime"] },
              { icon: FileText, title: "Payment Info", lines: ["Cash accepted", "UPI accepted", "Flexible payment plans"] },
            ].map((info, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.15 }}
                className="rounded-2xl bg-gradient-to-br from-[#0d3b66] to-teal-700 p-8 text-white text-center">
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-white/10 mb-6">
                  <info.icon className="h-7 w-7" />
                </div>
                <h3 className="text-lg font-bold mb-3">{info.title}</h3>
                {info.lines.map((l, j) => <p key={j} className="text-sm text-blue-200/80">{l}</p>)}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-teal-50 text-center">
        <div className="mx-auto max-w-3xl px-6">
          <h2 className="text-3xl font-extrabold text-[#0d3b66] mb-4">Have Questions?</h2>
          <p className="text-slate-500 mb-8">Our admissions team is ready to help you.</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a href="tel:+918935901010" className="inline-flex items-center justify-center gap-2 rounded-full bg-[#0d3b66] px-8 py-4 text-base font-bold text-white hover:bg-[#0a2e52] transition-all hover:scale-105 shadow-lg">
              <Phone className="h-5 w-5" /> Call Now
            </a>
            <a href="mailto:tgvisbihta@gmail.com" className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-[#0d3b66] px-8 py-4 text-base font-bold text-[#0d3b66] hover:bg-[#0d3b66] hover:text-white transition-all">
              <Mail className="h-5 w-5" /> Email Us
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
