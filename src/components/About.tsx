import { motion } from "motion/react";
import { GraduationCap, Award, Calendar, MapPin, BookOpen } from "lucide-react";
import { EDUCATION_DATA, PROFILE_STATS } from "../data";

export default function About() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const itemVariants = {
    hidden: { y: 25, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 100, damping: 15 }
    }
  };

  return (
    <section id="about" className="relative py-24 px-6 md:px-12 bg-[#0A0A0F]/50">
      {/* Background spotlights */}
      <div className="absolute top-1/3 right-0 w-80 h-80 bg-violet-600/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-80 h-80 bg-cyan-600/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="mb-16">
          <motion.p
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-xs font-mono font-bold tracking-widest text-[#7C3AED]"
          >
            // 01 — PROFILE
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-5xl font-display font-bold tracking-tight text-white mt-2"
          >
            About Me
          </motion.h2>
        </div>

        {/* Two Column Layout */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start"
        >
          {/* Left Column: Bio & Stats */}
          <div className="lg:col-span-6 space-y-8">
            <motion.div variants={itemVariants} className="space-y-4">
              <h3 className="text-xl md:text-2xl font-display font-semibold text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-cyan-400">
                Pioneering Software Solutions &amp; AI Integration
              </h3>
              <p className="text-[#9A9AAE] leading-relaxed text-sm md:text-base">
                I am a dedicated, future-focused Computer Science Engineering student based in Coimbatore. 
                My technical philosophy centers on bridging clean full-stack architectural engineering with modern AI. 
                With robust practical foundations laid during my polytechnic computer engineering diploma, 
                and honed through real-world projects during my B.E., I build responsive, secure, and user-centric systems.
              </p>
              <p className="text-[#9A9AAE] leading-relaxed text-sm md:text-base">
                I find joy in tackling algorithmic puzzles, refining UI design systems down to the pixel, 
                and keeping pace with rapidly shifting modern technologies. From SQL database schemas to React component structures, 
                I treat development as a fine craft.
              </p>
            </motion.div>

            {/* Quick Stats Grid */}
            <motion.div
              variants={itemVariants}
              className="grid grid-cols-2 gap-4"
            >
              {PROFILE_STATS.map((stat) => (
                <div
                  key={stat.label}
                  className="p-5 rounded-2xl glass-card border-white/5 bg-white/[0.02] flex flex-col justify-between group hover-cursor-scale hover:border-violet-500/30 transition-all duration-300"
                >
                  <span className="text-2xl md:text-3xl font-display font-bold text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-pink-400 group-hover:text-glow transition-all">
                    {stat.value}
                  </span>
                  <span className="text-xs font-mono text-[#9A9AAE] tracking-wider mt-2 uppercase">
                    {stat.label}
                  </span>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right Column: Education Timeline */}
          <div className="lg:col-span-6 space-y-6">
            <motion.div variants={itemVariants} className="flex items-center space-x-3 mb-2">
              <GraduationCap className="w-6 h-6 text-cyan-400" />
              <h3 className="text-lg md:text-xl font-display font-semibold text-white">
                Education Journey
              </h3>
            </motion.div>

            <motion.div
              variants={containerVariants}
              className="relative border-l border-white/10 pl-6 ml-3 space-y-10"
            >
              {EDUCATION_DATA.map((edu, idx) => (
                <motion.div
                  key={edu.institution}
                  variants={itemVariants}
                  className="relative group"
                >
                  {/* Timeline point indicator */}
                  <span className="absolute -left-[31px] top-1.5 flex h-4 w-4 items-center justify-center rounded-full bg-[#0A0A0F] border border-cyan-400/50 group-hover:border-violet-500 transition-colors duration-300">
                    <span className="h-1.5 w-1.5 rounded-full bg-cyan-400 group-hover:bg-violet-500 animate-ping absolute" />
                    <span className="h-1.5 w-1.5 rounded-full bg-cyan-400 group-hover:bg-violet-500 relative" />
                  </span>

                  {/* Card Content */}
                  <div className="p-6 rounded-2xl glass-card bg-white/[0.02] hover:bg-white/[0.04] hover:border-cyan-400/20 hover:shadow-lg transition-all duration-300">
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                      <span className="text-xs font-mono font-medium tracking-wide text-cyan-400 px-2.5 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20">
                        {edu.period}
                      </span>
                      <span className="text-xs font-mono text-[#9A9AAE] flex items-center gap-1">
                        <MapPin className="w-3 h-3 text-pink-500" />
                        {edu.location}
                      </span>
                    </div>

                    <h4 className="text-base font-display font-semibold text-white group-hover:text-[#F5F5F7] transition-colors mt-1">
                      {edu.institution}
                    </h4>
                    <p className="text-sm text-violet-400 mt-1">{edu.degree}</p>

                    <div className="mt-4 flex items-center justify-between text-xs text-[#9A9AAE] border-t border-white/5 pt-3">
                      <span className="flex items-center gap-1.5">
                        <Award className="w-3.5 h-3.5 text-pink-500" />
                        Grade: <strong className="text-white font-medium">{edu.grade}</strong>
                      </span>
                    </div>

                    {edu.details && edu.details.length > 0 && (
                      <div className="mt-3 text-xs text-[#9A9AAE] flex gap-1.5 bg-white/[0.02] p-2.5 rounded-lg border border-white/5">
                        <BookOpen className="w-3.5 h-3.5 text-violet-400 flex-shrink-0 mt-0.5" />
                        <span>{edu.details[0]}</span>
                      </div>
                    )}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
