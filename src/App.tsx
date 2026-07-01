import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import Preloader from "./components/Preloader";
import CustomCursor from "./components/CustomCursor";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Certifications from "./components/Certifications";
import Achievements from "./components/Achievements";
import Contact from "./components/Contact";

export default function App() {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [activeSection, setActiveSection] = useState<string>("home");

  useEffect(() => {
    if (isLoading) return;

    const sections = ["hero", "about", "experience", "projects", "skills", "certifications", "contact"];
    const observerOptions = {
      root: null,
      rootMargin: "-40% 0px -40% 0px", // Center viewport trigger
      threshold: 0
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const id = entry.target.id;
          setActiveSection(id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => {
      sections.forEach((id) => {
        const el = document.getElementById(id);
        if (el) observer.unobserve(el);
      });
    };
  }, [isLoading]);

  return (
    <>
      <AnimatePresence mode="wait">
        {isLoading ? (
          <Preloader key="preloader" onComplete={() => setIsLoading(false)} />
        ) : (
          <motion.div
            key="main-content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="relative min-h-screen bg-[#0A0A0F] text-[#F5F5F7] overflow-hidden selection:bg-violet-500/30 selection:text-white"
          >
            {/* Custom Interactive Cursor */}
            <CustomCursor />

            {/* Premium Header/Navbar */}
            <Navbar activeSection={activeSection} />

            {/* Layout Main Container */}
            <main>
              {/* Hero Landing */}
              <Hero />

              {/* Bio Profile, Statistics, and Education */}
              <About />

              {/* Work history */}
              <Experience />

              {/* Bento styled project displays */}
              <Projects />

              {/* Skills and tools matrices */}
              <Skills />

              {/* Worldwide certifications */}
              <Certifications />

              {/* Competitive academic achievements */}
              <Achievements />

              {/* Let's connect form and details */}
              <Contact />
            </main>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
