import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Mail, Phone, MapPin, Linkedin, Github, Send, CheckCircle, MessageSquare, ArrowUp } from "lucide-react";
import { CONTACT_INFO } from "../data";

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setIsSubmitting(true);
    // Simulate premium transmission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      setFormData({ name: "", email: "", message: "" });
      setTimeout(() => setSubmitSuccess(false), 5000);
    }, 2000);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <section id="contact" className="relative py-24 px-6 md:px-12 bg-gradient-to-b from-[#0A0A0F] to-[#050508] overflow-hidden">
      {/* Background spotlights */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-violet-600/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[50vw] h-[50vw] bg-pink-500/5 rounded-full blur-[150px] pointer-events-none" />

      {/* Subtle border dividing sections */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" />

      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="mb-16">
          <motion.p
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-xs font-mono font-bold tracking-widest text-[#7C3AED]"
          >
            // 07 — LET'S CONNECT
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-5xl font-display font-bold tracking-tight text-white mt-2"
          >
            Get In Touch
          </motion.h2>
        </div>

        {/* Contact Layout: Left Info, Right Interactive Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Headline and Info */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-4">
              <h3 className="text-2xl md:text-4xl font-display font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-violet-400 via-cyan-300 to-pink-400 leading-tight">
                Let's build something great together.
              </h3>
              <p className="text-[#9A9AAE] leading-relaxed text-sm md:text-base">
                I am actively seeking software engineering internships, graduate roles, or collaborative development opportunities. 
                Whether you have a technical project to launch, a debugging puzzle to solve, or just want to discuss machine learning, 
                feel free to reach out!
              </p>
            </div>

            {/* Direct Contact Card Details */}
            <div className="space-y-4">
              {/* Mail Card */}
              <a
                href={`mailto:${CONTACT_INFO.email}`}
                className="flex items-center gap-4 p-4 rounded-xl glass-card bg-white/[0.01] hover:bg-white/[0.04] hover:border-violet-500/30 transition-all duration-300 hover-cursor-scale"
              >
                <div className="w-12 h-12 rounded-lg bg-violet-600/10 border border-violet-500/20 flex items-center justify-center">
                  <Mail className="w-5 h-5 text-violet-400" />
                </div>
                <div>
                  <p className="text-[10px] font-mono text-[#555566] tracking-wider uppercase">EMAIL ADDRESS</p>
                  <p className="text-sm font-semibold text-white mt-0.5">{CONTACT_INFO.email}</p>
                </div>
              </a>

              {/* Phone Card */}
              <a
                href={`tel:${CONTACT_INFO.phone.replace(/\s+/g, '')}`}
                className="flex items-center gap-4 p-4 rounded-xl glass-card bg-white/[0.01] hover:bg-white/[0.04] hover:border-cyan-500/30 transition-all duration-300 hover-cursor-scale"
              >
                <div className="w-12 h-12 rounded-lg bg-cyan-600/10 border border-cyan-500/20 flex items-center justify-center">
                  <Phone className="w-5 h-5 text-cyan-400" />
                </div>
                <div>
                  <p className="text-[10px] font-mono text-[#555566] tracking-wider uppercase">PHONE NUMBER</p>
                  <p className="text-sm font-semibold text-white mt-0.5">{CONTACT_INFO.phone}</p>
                </div>
              </a>

              {/* Location Card */}
              <div className="flex items-center gap-4 p-4 rounded-xl glass-card bg-white/[0.01] border border-white/5">
                <div className="w-12 h-12 rounded-lg bg-pink-600/10 border border-pink-500/20 flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-pink-400" />
                </div>
                <div>
                  <p className="text-[10px] font-mono text-[#555566] tracking-wider uppercase">LOCATION</p>
                  <p className="text-sm font-semibold text-white mt-0.5">{CONTACT_INFO.location}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Form */}
          <div className="lg:col-span-7">
            <div className="p-6 md:p-8 rounded-2xl glass-card bg-white/[0.02] border border-white/5 relative">
              <div className="absolute top-4 right-4 text-white/5">
                <MessageSquare className="w-16 h-16" />
              </div>

              <h4 className="text-lg font-display font-semibold text-white mb-6">
                Transmit a Message
              </h4>

              <form onSubmit={handleSubmit} className="space-y-5 relative z-10">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="space-y-2">
                    <label className="text-[10px] font-mono text-[#9A9AAE] tracking-widest uppercase">Your Name</label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g., Jane Doe"
                      className="w-full bg-white/[0.02] border border-white/5 hover:border-white/10 focus:border-violet-500/50 rounded-xl px-4 py-3 text-sm text-[#F5F5F7] focus:outline-none focus:ring-1 focus:ring-violet-500/30 transition-all placeholder:text-[#555566] hover-cursor-scale"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-mono text-[#9A9AAE] tracking-widest uppercase">Your Email</label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="e.g., jane@example.com"
                      className="w-full bg-white/[0.02] border border-white/5 hover:border-white/10 focus:border-violet-500/50 rounded-xl px-4 py-3 text-sm text-[#F5F5F7] focus:outline-none focus:ring-1 focus:ring-violet-500/30 transition-all placeholder:text-[#555566] hover-cursor-scale"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] font-mono text-[#9A9AAE] tracking-widest uppercase">Message</label>
                  <textarea
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Describe your technical vision..."
                    className="w-full bg-white/[0.02] border border-white/5 hover:border-white/10 focus:border-violet-500/50 rounded-xl px-4 py-3 text-sm text-[#F5F5F7] focus:outline-none focus:ring-1 focus:ring-violet-500/30 transition-all placeholder:text-[#555566] hover-cursor-scale resize-none"
                  />
                </div>

                {/* Submitting Status feedback */}
                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting || submitSuccess}
                    className="w-full group flex items-center justify-center gap-2 py-4 rounded-xl bg-gradient-to-r from-violet-600 via-cyan-500 to-pink-500 font-display font-semibold text-white shadow-lg shadow-violet-500/20 active:scale-98 disabled:opacity-50 disabled:scale-100 disabled:pointer-events-none transition-all hover-cursor-scale"
                  >
                    {isSubmitting ? (
                      <span className="flex items-center gap-2">
                        <svg className="animate-spin h-4 w-4 text-white" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                        </svg>
                        TETHERING CONNECTION...
                      </span>
                    ) : submitSuccess ? (
                      <span className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-white animate-bounce" />
                        MESSAGE TRANSMITTED SUCCESSFULLY
                      </span>
                    ) : (
                      <span className="flex items-center gap-2">
                        Transmit Message
                        <Send className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                      </span>
                    )}
                  </button>
                </div>
              </form>

              {/* Status Alert feedback banner */}
              <AnimatePresence>
                {submitSuccess && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="mt-4 p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-xs font-mono text-emerald-400 flex items-center gap-2"
                  >
                    <CheckCircle className="w-4 h-4 flex-shrink-0" />
                    <span>Your request has been successfully queued. Sandeep will contact you back shortly at your provided email.</span>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>

        {/* Footer Division */}
        <footer className="mt-24 pt-12 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex flex-col items-center sm:items-start gap-2">
            <span className="text-xs font-mono text-[#9A9AAE]">
              © {new Date().getFullYear()} Sandeep Kumar J. All rights reserved.
            </span>
            <span className="text-[10px] font-mono text-[#555566] uppercase">
              COIMBATORE, TAMIL NADU · INDIA
            </span>
          </div>

          {/* Socials & To Top Button */}
          <div className="flex items-center gap-6">
            <div className="flex gap-4">
              <a
                href={CONTACT_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#9A9AAE] hover:text-violet-400 transition-colors hover-cursor-scale text-xs font-mono"
              >
                LinkedIn
              </a>
              <a
                href={CONTACT_INFO.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#9A9AAE] hover:text-pink-400 transition-colors hover-cursor-scale text-xs font-mono"
              >
                GitHub
              </a>
            </div>

            <button
              onClick={scrollToTop}
              className="p-3 rounded-xl bg-white/5 border border-white/5 hover:border-violet-500/30 text-[#9A9AAE] hover:text-white transition-all duration-300 hover-cursor-scale flex items-center justify-center shadow-lg"
              title="Scroll to Top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </footer>
      </div>
    </section>
  );
}
