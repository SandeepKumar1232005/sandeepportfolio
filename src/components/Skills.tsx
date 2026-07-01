import { motion } from "motion/react";
import { Terminal, Globe, Database, Cpu, Sparkles, CheckCircle2 } from "lucide-react";
import { SKILLS_DATA } from "../data";

export default function Skills() {
  const categories = [
    {
      title: "Languages",
      icon: <Terminal className="w-5 h-5 text-violet-400" />,
      skills: SKILLS_DATA.languages,
      colorClass: "border-violet-500/10 hover:border-violet-500/30 group-hover:shadow-violet-500/10"
    },
    {
      title: "Web Technologies",
      icon: <Globe className="w-5 h-5 text-cyan-400" />,
      skills: SKILLS_DATA.web,
      colorClass: "border-cyan-500/10 hover:border-cyan-500/30 group-hover:shadow-cyan-500/10"
    },
    {
      title: "Data & Backend",
      icon: <Database className="w-5 h-5 text-pink-400" />,
      skills: SKILLS_DATA.dataBackend,
      colorClass: "border-pink-500/10 hover:border-pink-500/30 group-hover:shadow-pink-500/10"
    },
    {
      title: "Tools & OS",
      icon: <Cpu className="w-5 h-5 text-teal-400" />,
      skills: SKILLS_DATA.tools,
      colorClass: "border-teal-500/10 hover:border-teal-500/30 group-hover:shadow-teal-500/10"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 100, damping: 15 }
    }
  };

  return (
    <section id="skills" className="relative py-24 px-6 md:px-12 bg-[#0A0A0F]/50">
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-violet-600/5 rounded-full blur-[140px] pointer-events-none animate-pulse" />
      <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-cyan-600/5 rounded-full blur-[140px] pointer-events-none animate-pulse" />

      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="mb-16">
          <motion.p
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-xs font-mono font-bold tracking-widest text-[#7C3AED]"
          >
            // 04 — TECHNICAL CAPABILITIES
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-5xl font-display font-bold tracking-tight text-white mt-2"
          >
            My Skill Matrix
          </motion.h2>
        </div>

        {/* Categories Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {categories.map((cat, catIdx) => (
            <motion.div
              key={cat.title}
              variants={itemVariants}
              className={`p-6 md:p-8 rounded-2xl glass-card bg-white/[0.02] border transition-all duration-300 flex flex-col justify-between group ${cat.colorClass}`}
            >
              <div>
                {/* Category Header */}
                <div className="flex items-center space-x-3 mb-6">
                  <div className="p-2.5 rounded-xl bg-white/5 border border-white/5 group-hover:scale-110 transition-transform">
                    {cat.icon}
                  </div>
                  <h3 className="text-lg font-display font-bold text-[#F5F5F7]">
                    {cat.title}
                  </h3>
                </div>

                {/* Skill Chips Cloud with Glow on Hover */}
                <div className="flex flex-wrap gap-2.5">
                  {cat.skills.map((skill) => (
                    <motion.div
                      key={skill.name}
                      whileHover={{ scale: 1.05, y: -2 }}
                      whileTap={{ scale: 0.98 }}
                      className="px-4 py-2.5 rounded-xl glass-card bg-white/[0.01] hover:bg-white/[0.04] border border-white/5 hover:border-violet-500/30 transition-all duration-300 flex items-center justify-between gap-3 group/chip hover-cursor-scale"
                    >
                      <div className="flex items-center space-x-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 opacity-50 group-hover/chip:opacity-100 transition-opacity" />
                        <span className="text-xs font-mono font-medium text-[#9A9AAE] group-hover/chip:text-[#F5F5F7] transition-colors">
                          {skill.name}
                        </span>
                      </div>
                      
                      {/* Mini indicator dot / pill */}
                      <span className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-violet-500 to-cyan-400 group-hover/chip:animate-ping" />
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Accent corner icon */}
              <div className="self-end mt-6 opacity-0 group-hover:opacity-60 transition-opacity duration-300 pointer-events-none">
                <Sparkles className="w-4 h-4 text-white/20" />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Technical Marquee strip / Infinite text line */}
        <div className="mt-16 overflow-hidden relative w-full h-12 bg-white/[0.02] border-y border-white/5 flex items-center">
          <div className="flex w-[200%] shrink-0 gap-8 animate-[marquee_20s_linear_infinite] whitespace-nowrap font-mono text-xs text-[#9A9AAE]/50 font-semibold tracking-widest uppercase">
            <span>REACT.JS · PYTHON · C++ · SQL · TYPESCRIPT · DJANGO · FIREBASE · NODE.JS · MONGO_DB · SQLITE · GIT · GITHUB · LINUX · REST_API · </span>
            <span>REACT.JS · PYTHON · C++ · SQL · TYPESCRIPT · DJANGO · FIREBASE · NODE.JS · MONGO_DB · SQLITE · GIT · GITHUB · LINUX · REST_API · </span>
          </div>
          {/* Fades on edge of marquee */}
          <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-[#0A0A0F] to-transparent pointer-events-none z-10" />
          <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-[#0A0A0F] to-transparent pointer-events-none z-10" />
        </div>
      </div>

      {/* Marquee Keyframes injection */}
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </section>
  );
}
