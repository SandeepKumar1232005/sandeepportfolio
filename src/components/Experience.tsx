import { motion } from "motion/react";
import { Briefcase, Calendar, MapPin, Sparkles } from "lucide-react";
import { EXPERIENCE_DATA } from "../data";

export default function Experience() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { x: -30, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 80, damping: 12 }
    }
  };

  return (
    <section id="experience" className="relative py-24 px-6 md:px-12 bg-gradient-to-b from-[#0A0A0F] to-[#12121A]">
      {/* Decorative gradient lines */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-violet-600/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="mb-16">
          <motion.p
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-xs font-mono font-bold tracking-widest text-[#06B6D4]"
          >
            // 02 — PROFESSIONAL EXPERIENCE
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-5xl font-display font-bold tracking-tight text-white mt-2"
          >
            Internship Timeline
          </motion.h2>
        </div>

        {/* Vertical Timeline */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="relative border-l-2 border-dashed border-white/10 pl-6 md:pl-10 ml-4 max-w-4xl"
        >
          {EXPERIENCE_DATA.map((exp, index) => (
            <motion.div
              key={exp.role}
              variants={itemVariants}
              className="relative mb-12 last:mb-0 group"
            >
              {/* Pulsing timelines badge */}
              <div className="absolute -left-[35px] md:-left-[51px] top-1 flex items-center justify-center w-6 h-6 md:w-8 md:h-8 rounded-full bg-[#0A0A0F] border-2 border-white/15 group-hover:border-cyan-400 transition-colors duration-300 shadow-xl z-10">
                <Briefcase className="w-3 h-3 md:w-3.5 md:h-3.5 text-cyan-400" />
              </div>

              {/* Glass container */}
              <div className="p-6 md:p-8 rounded-2xl glass-card bg-white/[0.03] hover:bg-white/[0.05] hover:border-violet-500/30 hover:shadow-2xl transition-all duration-300">
                <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
                  {/* Job title & company */}
                  <div>
                    <h3 className="text-lg md:text-xl font-display font-bold text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-violet-400 group-hover:to-cyan-400 transition-all duration-300">
                      {exp.role}
                    </h3>
                    <p className="text-sm font-mono text-cyan-400 mt-1">
                      {exp.company}
                    </p>
                  </div>

                  {/* Period & Location tags */}
                  <div className="flex flex-col sm:items-end gap-1.5 text-xs font-mono text-[#9A9AAE]">
                    <span className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/5 border border-white/5 text-white">
                      <Calendar className="w-3 h-3 text-pink-500" />
                      {exp.period}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <MapPin className="w-3 h-3 text-violet-400" />
                      {exp.location}
                    </span>
                  </div>
                </div>

                {/* Highlights list */}
                <ul className="space-y-3 pt-3 border-t border-white/5">
                  {exp.highlights.map((highlight, idx) => (
                    <li
                      key={idx}
                      className="flex items-start text-sm text-[#9A9AAE] leading-relaxed"
                    >
                      <span className="mr-3 mt-1.5 flex-shrink-0 w-1.5 h-1.5 rounded-full bg-gradient-to-r from-violet-500 to-cyan-400" />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>

                {/* Corner highlight pill for premium effect */}
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                  <Sparkles className="w-4 h-4 text-violet-400 animate-pulse" />
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
