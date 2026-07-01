import { motion } from "motion/react";
import { Trophy, Star, Award, ShieldAlert, Sparkles } from "lucide-react";
import { ACHIEVEMENTS_DATA } from "../data";

export default function Achievements() {
  const icons = [
    <Trophy className="w-6 h-6 text-yellow-400" />,
    <ShieldAlert className="w-6 h-6 text-cyan-400 animate-pulse" />,
    <Award className="w-6 h-6 text-pink-400" />
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 90, damping: 14 }
    }
  };

  return (
    <section id="achievements" className="relative py-24 px-6 md:px-12 bg-[#0A0A0F]/30">
      <div className="absolute top-1/3 left-10 w-80 h-80 bg-pink-500/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/3 right-10 w-80 h-80 bg-violet-600/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="mb-16">
          <motion.p
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-xs font-mono font-bold tracking-widest text-[#EC4899]"
          >
            // 06 — ACCREDITED HONORS
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-5xl font-display font-bold tracking-tight text-white mt-2"
          >
            Academic Achievements
          </motion.h2>
        </div>

        {/* List Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {ACHIEVEMENTS_DATA.map((item, index) => (
            <motion.div
              key={item.title}
              variants={itemVariants}
              whileHover={{ y: -8, scale: 1.02 }}
              className="p-6 md:p-8 rounded-2xl glass-card bg-white/[0.02] hover:bg-white/[0.05] border border-white/5 hover:border-pink-500/30 transition-all duration-300 flex flex-col justify-between group hover-cursor-scale"
            >
              <div className="space-y-6">
                {/* Header Icon & Star decoration */}
                <div className="flex items-center justify-between">
                  <div className="p-3 rounded-xl bg-white/5 border border-white/5 group-hover:scale-110 group-hover:bg-white/10 transition-all duration-300">
                    {icons[index] || <Star className="w-6 h-6 text-violet-400" />}
                  </div>
                  <Sparkles className="w-4 h-4 text-white/10 group-hover:text-pink-400 group-hover:animate-pulse transition-all" />
                </div>

                {/* Text Context */}
                <div className="space-y-2">
                  <h3 className="text-lg font-display font-bold text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-violet-400 group-hover:to-pink-400 transition-all duration-300 line-clamp-2">
                    {item.title}
                  </h3>
                  <p className="text-xs font-mono text-cyan-400 tracking-wide font-semibold uppercase">
                    {item.subtitle}
                  </p>
                  <p className="text-xs text-[#9A9AAE] leading-relaxed pt-2 line-clamp-3">
                    {item.description}
                  </p>
                </div>
              </div>

              {/* Bottom tag decoration */}
              <div className="mt-8 pt-4 border-t border-white/5 text-[10px] font-mono text-[#555566] tracking-widest flex items-center justify-between">
                <span>VERIFIED RECORD</span>
                <span>🏆 RANKED</span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
