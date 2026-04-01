"use client";

import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock, MessageCircle } from "lucide-react";
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

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <Navbar />

      {/* Hero */}
      <section className="relative pt-28 pb-20 bg-gradient-to-br from-[#0d3b66] to-[#1a6b6a]">
        <div className="mx-auto max-w-7xl px-6 text-center relative z-10">
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-4xl md:text-6xl font-extrabold text-white tracking-tight">
            Contact <span className="text-teal-300">Us</span>
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="mt-4 text-lg text-blue-100/70 max-w-xl mx-auto">
            We&apos;d love to hear from you. Reach out to us for any queries about admissions, campus visits, or general information.
          </motion.p>
        </div>
      </section>

      {/* Contact Cards */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: MapPin, title: "Visit Campus", primary: "Rameshwar Building", secondary: "Jinpura Road, Bihta, Patna - 801103, Bihar", action: "Get Directions", href: "https://maps.google.com/?q=The+Green+Valley+International+School+Bihta" },
              { icon: Phone, title: "Call Us", primary: "+91 89359 01010", secondary: "Available Mon-Sat, 7 AM - 3 PM", action: "Call Now", href: "tel:+918935901010" },
              { icon: Mail, title: "Email Us", primary: "tgvisbihta@gmail.com", secondary: "We reply within 24 hours", action: "Send Email", href: "mailto:tgvisbihta@gmail.com" },
              { icon: MessageCircle, title: "WhatsApp", primary: "+91 89359 01010", secondary: "Quick responses on WhatsApp", action: "Chat Now", href: "https://wa.me/918935901010" },
            ].map((c, i) => (
              <motion.div key={i} variants={fadeUp} whileHover={{ y: -6 }} className="rounded-2xl bg-white p-8 shadow-sm border border-slate-100 hover:shadow-xl hover:border-teal-200 transition-all text-center">
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-[#0d3b66] to-teal-600 text-white shadow-lg mb-6">
                  <c.icon className="h-7 w-7" />
                </div>
                <h3 className="text-lg font-bold text-[#0d3b66] mb-2">{c.title}</h3>
                <p className="text-slate-800 font-semibold text-sm">{c.primary}</p>
                <p className="text-slate-500 text-xs mt-1 mb-4">{c.secondary}</p>
                <a href={c.href} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-sm font-semibold text-teal-600 hover:text-teal-700 transition-colors">
                  {c.action} →
                </a>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Map + Hours */}
      <section className="py-24 bg-slate-50">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Map */}
            <div className="lg:col-span-2 rounded-2xl overflow-hidden shadow-lg border border-slate-200 h-96">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3599.2!2d84.863!3d25.565!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x398d57!2sThe%20Green%20Valley%20International%20School!5e0!3m2!1sen!2sin!4v1"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                title="TGVIS Location Map"
              />
            </div>

            {/* Hours */}
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="rounded-2xl bg-white p-8 shadow-sm border border-slate-100">
              <div className="flex items-center gap-3 mb-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-teal-100 text-teal-600">
                  <Clock className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold text-[#0d3b66]">School Hours</h3>
              </div>
              <div className="space-y-4">
                {[
                  { day: "Monday", time: "7:00 AM - 3:00 PM" },
                  { day: "Tuesday", time: "7:00 AM - 3:00 PM" },
                  { day: "Wednesday", time: "7:00 AM - 3:00 PM" },
                  { day: "Thursday", time: "7:00 AM - 3:00 PM" },
                  { day: "Friday", time: "7:00 AM - 3:00 PM" },
                  { day: "Saturday", time: "7:00 AM - 3:00 PM" },
                  { day: "Sunday", time: "Closed" },
                ].map((s, i) => (
                  <div key={i} className={`flex justify-between items-center py-2 text-sm ${s.day === "Sunday" ? "text-red-500 font-semibold" : "text-slate-600"} ${i < 6 ? "border-b border-slate-100" : ""}`}>
                    <span className="font-medium">{s.day}</span>
                    <span>{s.time}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Social Links */}
      <section className="py-20 bg-[#0d3b66] text-center">
        <div className="mx-auto max-w-3xl px-6">
          <h2 className="text-3xl font-extrabold text-white mb-4">Follow Us on Social Media</h2>
          <p className="text-blue-200/60 mb-8">Stay updated with the latest from TGVIS</p>
          <div className="flex justify-center gap-4">
            <a href="https://www.facebook.com/people/The-Green-Valley-International-School-Bihta/100088041550841/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full bg-white/10 border border-white/20 px-6 py-3 text-sm font-semibold text-white hover:bg-[#1877F2] transition-all">
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"/></svg>
              Facebook
            </a>
            <a href="https://www.instagram.com/tgvis.official" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full bg-white/10 border border-white/20 px-6 py-3 text-sm font-semibold text-white hover:bg-[#E4405F] transition-all">
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63z"/></svg>
              Instagram
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
