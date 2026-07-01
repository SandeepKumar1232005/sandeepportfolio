import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X, Download } from "lucide-react";
import { CONTACT_INFO } from "../data";

interface NavbarProps {
  activeSection: string;
}

export default function Navbar({ activeSection }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);

  const navLinks = [
    { label: "About", target: "#about" },
    { label: "Experience", target: "#experience" },
    { label: "Projects", target: "#projects" },
    { label: "Skills", target: "#skills" },
    { label: "Certifications", target: "#certifications" },
    { label: "Contact", target: "#contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, target: string) => {
    e.preventDefault();
    const element = document.querySelector(target);
    if (element) {
      setMobileMenuOpen(false);
      const offset = 80; // height of navbar
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

  const handleResumeDownload = () => {
    // Generate a simple PDF mock download or alert, since they can download resume.
    // Let's print the portfolio in PDF or trigger a print dialog for full portfolio printing.
    window.print();
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-40 transition-all duration-500 ${
          isScrolled
            ? "py-3 bg-[#0A0A0F]/70 backdrop-blur-md border-b border-white/5 shadow-2xl"
            : "py-6 bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
          {/* Logo / Initials */}
          <a
            href="#top"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className="group flex items-center space-x-2"
          >
            <div className="relative flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br from-violet-600 via-cyan-500 to-pink-500 p-[1px] shadow-lg shadow-violet-500/10 transition-transform duration-300 group-hover:scale-105">
              <div className="w-full h-full bg-[#0A0A0F] rounded-[9px] flex items-center justify-center">
                <span className="font-display font-bold text-base text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-cyan-400 tracking-wider">
                  SK
                </span>
              </div>
            </div>
            <span className="hidden sm:inline-block font-display font-medium text-sm tracking-wide text-[#F5F5F7]">
              Sandeep Kumar
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => {
              const isActive = activeSection === link.label.toLowerCase();
              return (
                <a
                  key={link.label}
                  href={link.target}
                  onClick={(e) => scrollToSection(e, link.target)}
                  className={`text-sm tracking-wide transition-all duration-300 relative py-1 hover:text-white ${
                    isActive ? "text-violet-400 font-medium" : "text-[#9A9AAE]"
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <motion.span
                      layoutId="activeIndicator"
                      className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-violet-500 to-cyan-400 rounded-full"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Resume Download Action Button */}
          <div className="hidden lg:flex items-center space-x-4">
            <button
              onClick={handleResumeDownload}
              className="group flex items-center space-x-2 px-5 py-2.5 rounded-xl text-xs font-mono font-medium tracking-wider transition-all duration-300 glass-card hover:bg-white/10 hover:border-violet-500/40 text-glow hover-cursor-scale"
            >
              <Download className="w-3.5 h-3.5 text-cyan-400 group-hover:translate-y-[1px] transition-transform" />
              <span>DOWNLOAD RESUME</span>
            </button>
          </div>

          {/* Mobile Menu Trigger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden flex items-center justify-center p-2 rounded-xl border border-white/5 bg-white/5 hover:bg-white/10 hover:border-violet-500/30 transition-all"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? (
              <X className="w-5 h-5 text-[#F5F5F7]" />
            ) : (
              <Menu className="w-5 h-5 text-[#F5F5F7]" />
            )}
          </button>
        </div>
      </header>

      {/* Mobile Drawer (Glassmorphic Backdrop) */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-x-0 top-[70px] z-30 mx-4 p-6 rounded-2xl border border-white/10 bg-[#0A0A0F]/95 backdrop-blur-2xl shadow-2xl lg:hidden flex flex-col space-y-6"
          >
            <div className="flex flex-col space-y-4">
              {navLinks.map((link) => {
                const isActive = activeSection === link.label.toLowerCase();
                return (
                  <a
                    key={link.label}
                    href={link.target}
                    onClick={(e) => scrollToSection(e, link.target)}
                    className={`text-base tracking-wide py-2 border-b border-white/5 flex items-center justify-between ${
                      isActive ? "text-violet-400 font-medium" : "text-[#9A9AAE]"
                    }`}
                  >
                    <span>{link.label}</span>
                    {isActive && (
                      <span className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-violet-500 to-pink-500" />
                    )}
                  </a>
                );
              })}
            </div>

            <button
              onClick={handleResumeDownload}
              className="w-full flex items-center justify-center space-x-2 py-3 rounded-xl bg-gradient-to-r from-violet-600 via-cyan-500 to-pink-500 font-mono text-xs font-bold tracking-wider text-white shadow-lg shadow-violet-500/20 active:scale-95 transition-all"
            >
              <Download className="w-4 h-4" />
              <span>DOWNLOAD RESUME</span>
            </button>

            <div className="flex justify-center space-x-6 text-[#9A9AAE] text-xs font-mono pt-2">
              <span>{CONTACT_INFO.location}</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
