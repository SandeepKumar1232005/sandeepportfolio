import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";

interface PreloaderProps {
  key?: string;
  onComplete: () => void;
}

export default function Preloader({ onComplete }: PreloaderProps) {
  const [progress, setProgress] = useState<number>(0);
  const [textIndex, setTextIndex] = useState<number>(0);
  const loadingTexts = [
    "LOADING CORE ASSETS...",
    "COMPILING DESIGN SYSTEM...",
    "ESTABLISHING SECURE CONNECTION...",
    "RENDER PIPELINE ACTIVE...",
    "Sandeep Kumar J — Portfolio v1.0"
  ];

  useEffect(() => {
    // Progress counter
    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          return 100;
        }
        // Random incremental steps for authentic loading feel
        const step = Math.floor(Math.random() * 8) + 3;
        return Math.min(prev + step, 100);
      });
    }, 60);

    // Text cycler
    const textInterval = setInterval(() => {
      setTextIndex((prev) => (prev < loadingTexts.length - 1 ? prev + 1 : prev));
    }, 450);

    return () => {
      clearInterval(progressInterval);
      clearInterval(textInterval);
    };
  }, []);

  useEffect(() => {
    if (progress === 100) {
      // Small timeout for visual satisfaction
      const timeout = setTimeout(() => {
        onComplete();
      }, 500);
      return () => clearTimeout(timeout);
    }
  }, [progress, onComplete]);

  return (
    <div id="preloader-container" className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#0A0A0F] font-mono px-4">
      {/* Background ambient glows */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-violet-600/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-600/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="w-full max-w-md p-8 rounded-2xl border border-white/5 bg-white/[0.02] backdrop-blur-2xl text-center space-y-6">
        {/* Animated Icon/Logo */}
        <div className="flex justify-center">
          <motion.div
            className="w-16 h-16 rounded-xl bg-gradient-to-br from-violet-600 via-cyan-500 to-pink-500 p-[1.5px]"
            animate={{
              rotate: 360,
              scale: [1, 1.08, 1],
            }}
            transition={{
              rotate: { repeat: Infinity, duration: 4, ease: "linear" },
              scale: { repeat: Infinity, duration: 2, ease: "easeInOut" }
            }}
          >
            <div className="w-full h-full bg-[#0A0A0F] rounded-[10px] flex items-center justify-center font-display font-bold text-xl text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-cyan-400">
              SK
            </div>
          </motion.div>
        </div>

        {/* Console Vibe */}
        <div className="space-y-2">
          <div className="text-xs text-violet-400 font-bold tracking-widest text-center">
            SYSTEM INITIALIZATION
          </div>
          
          <div className="h-5 overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={textIndex}
                initial={{ y: 10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -10, opacity: 0 }}
                className="text-xs text-[#9A9AAE]"
              >
                {loadingTexts[textIndex]}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Progress Display */}
        <div className="space-y-3">
          <div className="flex justify-between items-end">
            <span className="text-xs text-cyan-400">PORTFOLIO.SYS</span>
            <span className="text-2xl font-bold font-display text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-pink-400">
              {progress}%
            </span>
          </div>
          
          {/* Loading bar */}
          <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden p-[1px]">
            <motion.div
              className="h-full rounded-full bg-gradient-to-r from-violet-500 via-cyan-400 to-pink-500"
              initial={{ width: "0%" }}
              animate={{ width: `${progress}%` }}
              transition={{ ease: "easeOut" }}
            />
          </div>
        </div>

        {/* Tech Label */}
        <div className="text-[10px] text-[#555566] uppercase tracking-wider">
          KIT CSE · Lateral Entry · Sandeep Kumar J
        </div>
      </div>
    </div>
  );
}
