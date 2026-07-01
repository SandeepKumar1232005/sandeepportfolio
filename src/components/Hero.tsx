import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Mail, Linkedin, Github, ArrowRight, Sparkles } from "lucide-react";
import { CONTACT_INFO } from "../data";

// Magnetic hover helper hook
const useMagnetic = (multiplier = 0.25) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const ref = useRef<HTMLAnchorElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (window.matchMedia("(pointer: coarse)").matches) return;
    const btn = ref.current;
    if (!btn) return;

    const rect = btn.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;

    setPosition({ x: x * multiplier, y: y * multiplier });
  };

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
  };

  return { ref, position, handleMouseMove, handleMouseLeave };
};

export default function Hero() {
  const roles = ["Full-Stack Developer", "AI/ML Enthusiast", "Problem Solver"];
  const [roleIndex, setRoleIndex] = useState<number>(0);
  const [currentText, setCurrentText] = useState<string>("");
  const [isDeleting, setIsDeleting] = useState<boolean>(false);
  const typingSpeed = 100;
  const deletingSpeed = 50;
  const delayBetweenWords = 2000;

  const currentRole = roles[roleIndex];
  const isVowel = /^[AEIOU]/i.test(currentRole);
  const prefix = isVowel ? "I am an" : "I am a";

  const projBtn = useMagnetic(0.3);
  const contactBtn = useMagnetic(0.3);

  // Typewriter effect
  useEffect(() => {
    let timer: NodeJS.Timeout;
    const fullWord = roles[roleIndex];

    if (isDeleting) {
      timer = setTimeout(() => {
        setCurrentText((prev) => prev.slice(0, -1));
      }, deletingSpeed);
    } else {
      timer = setTimeout(() => {
        setCurrentText(fullWord.slice(0, currentText.length + 1));
      }, typingSpeed);
    }

    if (!isDeleting && currentText === fullWord) {
      timer = setTimeout(() => setIsDeleting(true), delayBetweenWords);
    } else if (isDeleting && currentText === "") {
      setIsDeleting(false);
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }

    return () => clearTimeout(timer);
  }, [currentText, isDeleting, roleIndex]);

  const smoothScrollTo = (id: string) => {
    const element = document.querySelector(id);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center py-24 px-6 md:px-12 overflow-hidden bg-grid-pattern"
    >
      {/* Dynamic drifting background glow meshes */}
      <div className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] bg-violet-600/10 rounded-full blur-[120px] pointer-events-none animate-float-slow" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[50vw] h-[50vw] bg-cyan-600/10 rounded-full blur-[120px] pointer-events-none animate-float-medium" />
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[30vw] h-[30vw] bg-pink-500/5 rounded-full blur-[150px] pointer-events-none" />

      {/* Cyberpunk grid backdrop line decoration */}
      <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-violet-500/20 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-[1px] bg-gradient-to-r from-transparent via-cyan-500/20 to-transparent" />

      <div className="relative max-w-5xl w-full mx-auto text-center space-y-8 z-10">
        {/* Kicker tag */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="inline-flex items-center space-x-2 px-4 py-2 rounded-full glass-card border-violet-500/20 text-xs text-[#06B6D4] font-mono tracking-wider hover-cursor-scale"
        >
          <Sparkles className="w-3.5 h-3.5 text-violet-400 animate-pulse" />
          <span>// FINAL-YEAR CSE STUDENT &amp; FULL-STACK DEVELOPER</span>
        </motion.div>

        {/* Name Title */}
        <div className="space-y-4">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="text-4xl sm:text-6xl md:text-8xl font-display font-bold tracking-tight text-[#F5F5F7] select-none"
          >
            <span className="relative">
              SANDEEP KUMAR
              <span className="absolute -bottom-2 left-0 w-full h-[3px] bg-gradient-to-r from-violet-600 via-cyan-400 to-pink-500 opacity-20 blur-sm" />
            </span>{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 via-cyan-300 to-pink-400 text-glow animate-shimmer">
              J
            </span>
          </motion.h1>

          {/* Typewriter subtitle */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="h-10 text-xl md:text-3xl font-mono text-[#9A9AAE] font-medium tracking-wide flex items-center justify-center"
          >
            <span>{prefix}&nbsp;</span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-pink-400 to-cyan-400 font-bold animate-shimmer">
              {currentText}
            </span>
            <span className="text-pink-500 font-bold ml-1.5 animate-pulse">|</span>
          </motion.div>
        </div>

        {/* Profile tagline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.55 }}
          className="max-w-2xl mx-auto text-base md:text-lg text-[#9A9AAE] leading-relaxed font-sans"
        >
          Final-year B.E. Computer Science student at KIT with hands-on experience in full-stack development and AI integration. Passionate about building real-world applications with React.js, Python, Firebase, and Django.
        </motion.p>

        {/* Two CTA buttons with magnetic effects */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4"
        >
          <motion.a
            ref={projBtn.ref}
            href="#projects"
            onClick={(e) => {
              e.preventDefault();
              smoothScrollTo("#projects");
            }}
            onMouseMove={projBtn.handleMouseMove}
            onMouseLeave={projBtn.handleMouseLeave}
            animate={{ x: projBtn.position.x, y: projBtn.position.y }}
            transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
            className="group w-full sm:w-auto relative inline-flex items-center justify-center px-8 py-4 rounded-xl font-display font-semibold tracking-wide text-white transition-shadow duration-300 bg-gradient-to-r from-violet-600 via-cyan-500 to-pink-500 hover:shadow-2xl hover:shadow-cyan-500/20 active:scale-[0.98] overflow-hidden hover-cursor-scale cursor-pointer"
          >
            <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-pink-500 via-cyan-500 to-violet-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <span className="relative z-10 flex items-center gap-2">
              View Projects
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </span>
          </motion.a>

          <motion.a
            ref={contactBtn.ref}
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              smoothScrollTo("#contact");
            }}
            onMouseMove={contactBtn.handleMouseMove}
            onMouseLeave={contactBtn.handleMouseLeave}
            animate={{ x: contactBtn.position.x, y: contactBtn.position.y }}
            transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
            className="w-full sm:w-auto px-8 py-4 rounded-xl font-display font-semibold tracking-wide text-[#F5F5F7] glass-btn-secondary hover-cursor-scale text-center cursor-pointer"
          >
            Get In Touch
          </motion.a>
        </motion.div>

        {/* Social Links Row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.85 }}
          className="flex items-center justify-center space-x-6 pt-8"
        >
          <a
            href={`mailto:${CONTACT_INFO.email}`}
            className="w-11 h-11 rounded-xl glass-card border-white/5 flex items-center justify-center text-[#9A9AAE] hover:text-cyan-400 hover:border-cyan-500/30 hover:shadow-[0_0_15px_rgba(6,182,212,0.3)] transition-all duration-300 hover:scale-110 hover-cursor-scale"
            title="Email"
          >
            <Mail className="w-5 h-5" />
          </a>
          <a
            href={CONTACT_INFO.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="w-11 h-11 rounded-xl glass-card border-white/5 flex items-center justify-center text-[#9A9AAE] hover:text-violet-400 hover:border-violet-500/30 hover:shadow-[0_0_15px_rgba(124,58,237,0.3)] transition-all duration-300 hover:scale-110 hover-cursor-scale"
            title="LinkedIn"
          >
            <Linkedin className="w-5 h-5" />
          </a>
          <a
            href={CONTACT_INFO.github}
            target="_blank"
            rel="noopener noreferrer"
            className="w-11 h-11 rounded-xl glass-card border-white/5 flex items-center justify-center text-[#9A9AAE] hover:text-pink-400 hover:border-pink-500/30 hover:shadow-[0_0_15px_rgba(236,72,153,0.3)] transition-all duration-300 hover:scale-110 hover-cursor-scale"
            title="GitHub"
          >
            <Github className="w-5 h-5" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
