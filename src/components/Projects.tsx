import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Github, ExternalLink, ChevronDown, ChevronUp, Sparkles, FolderOpen } from "lucide-react";
import { PROJECTS_DATA, Project } from "../data";

export default function Projects() {
  const [expandedCards, setExpandedCards] = useState<Record<string, boolean>>({});
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setIsTouchDevice(window.matchMedia("(pointer: coarse)").matches);
    }
  }, []);

  const toggleExpand = (title: string) => {
    setExpandedCards((prev) => ({
      ...prev,
      [title]: !prev[title]
    }));
  };

  return (
    <section id="projects" className="relative py-24 px-6 md:px-12 bg-[#12121A]">
      {/* Dynamic spotlights */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-cyan-600/5 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute bottom-0 right-10 w-96 h-96 bg-pink-500/5 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <motion.p
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-xs font-mono font-bold tracking-widest text-[#EC4899]"
            >
              // 03 — FEATURED PROJECTS
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-3xl md:text-5xl font-display font-bold tracking-tight text-white mt-2"
            >
              Built With Purpose
            </motion.h2>
          </div>
          <div className="flex flex-col gap-3">
            <p className="text-sm font-mono text-[#9A9AAE] max-w-sm">
              A carefully selected showcase of full-stack engineering, desktop automation, and database management.
            </p>
            {isTouchDevice && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="inline-flex items-center gap-2 bg-cyan-500/10 border border-cyan-500/20 rounded-xl px-4 py-2 text-xs font-mono text-cyan-300"
              >
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
                </span>
                <span>💡 Tap any card to reveal extra project details</span>
              </motion.div>
            )}
          </div>
        </div>

        {/* Bento/3-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROJECTS_DATA.map((project, index) => {
            const isExpanded = expandedCards[project.title] || false;
            return (
              <ProjectCard
                key={project.title}
                project={project}
                index={index}
                isExpanded={isExpanded}
                onToggleExpand={() => toggleExpand(project.title)}
                onHover={() => setHoveredIndex(index)}
                onHoverEnd={() => setHoveredIndex(null)}
                isHovered={hoveredIndex === index}
                isTouchDevice={isTouchDevice}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}

interface ProjectCardProps {
  key?: string;
  project: Project;
  index: number;
  isExpanded: boolean;
  onToggleExpand: () => void;
  onHover: () => void;
  onHoverEnd: () => void;
  isHovered: boolean;
  isTouchDevice: boolean;
}

function ProjectCard({
  project,
  index,
  isExpanded,
  onToggleExpand,
  onHover,
  onHoverEnd,
  isHovered,
  isTouchDevice
}: ProjectCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [coords, setCoords] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const { left, top } = cardRef.current.getBoundingClientRect();
    setCoords({
      x: e.clientX - left,
      y: e.clientY - top
    });
  };

  const handleCardClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isTouchDevice) return;
    // Don't expand if user tapped a link or the toggle button directly
    const target = e.target as HTMLElement;
    if (target.closest("a") || target.closest("button")) {
      return;
    }
    onToggleExpand();
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={onHover}
      onMouseLeave={onHoverEnd}
      onClick={handleCardClick}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className={`group relative rounded-2xl p-6 md:p-8 glass-card bg-white/[0.03] overflow-hidden flex flex-col justify-between transition-all duration-300 ${
        isTouchDevice ? "cursor-pointer border-white/5" : "hover-cursor-scale"
      }`}
      animate={isTouchDevice ? {
        borderColor: isExpanded ? "rgba(6, 182, 212, 0.25)" : ["rgba(255, 255, 255, 0.05)", "rgba(6, 182, 212, 0.25)", "rgba(255, 255, 255, 0.05)"],
        boxShadow: isExpanded 
          ? "0 4px 20px rgba(6, 182, 212, 0.08)"
          : ["0 4px 15px rgba(0, 0, 0, 0.2)", "0 4px 25px rgba(6, 182, 212, 0.04)", "0 4px 15px rgba(0, 0, 0, 0.2)"]
      } : {}}
      style={!isTouchDevice ? {
        boxShadow: isHovered
          ? "0 10px 40px rgba(6, 182, 212, 0.15), inset 0 0 20px rgba(255, 255, 255, 0.02)"
          : "none"
      } : undefined}
    >
      {/* Spot Gradient Glow follow */}
      {isHovered && !isTouchDevice && (
        <div
          className="absolute pointer-events-none rounded-full"
          style={{
            width: "300px",
            height: "300px",
            background: "radial-gradient(circle, rgba(124, 58, 237, 0.12) 0%, transparent 70%)",
            left: `${coords.x - 150}px`,
            top: `${coords.y - 150}px`,
            transition: "width 0.2s, height 0.2s"
          }}
        />
      )}

      <div>
        {/* Card Header Tag/Period */}
        <div className="flex items-center justify-between mb-4">
          <span className="text-[10px] font-mono tracking-widest text-[#9A9AAE] flex items-center gap-1.5 uppercase">
            <FolderOpen className="w-3.5 h-3.5 text-cyan-400" />
            {project.period}
          </span>
          <div className="flex items-center gap-2">
            {isTouchDevice && !isExpanded && (
              <span className="text-[9px] font-mono text-cyan-300 bg-cyan-500/10 border border-cyan-500/20 px-2 py-0.5 rounded-md flex items-center gap-1">
                <span className="relative flex h-1.5 w-1.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-cyan-400"></span>
                </span>
                TAP CARD
              </span>
            )}
            <span className="text-[10px] font-mono font-bold tracking-wider text-pink-500 bg-pink-500/10 border border-pink-500/20 px-2 py-0.5 rounded-full">
              LIVE DEMO
            </span>
          </div>
        </div>

        {/* Project Title */}
        <h3 className="text-xl md:text-2xl font-display font-bold text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-violet-400 group-hover:via-cyan-300 group-hover:to-pink-400 transition-all duration-300">
          {project.title}
        </h3>

        {/* Category Description */}
        <p className="text-xs font-mono text-cyan-400 mt-1 mb-4">
          {project.category}
        </p>

        {/* Stack Tags */}
        <div className="flex flex-wrap gap-1.5 mb-6">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="text-[10px] font-mono font-medium text-[#9A9AAE] bg-white/5 border border-white/5 px-2.5 py-1 rounded-md"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Collapsible/Expandable content on mobile, visible on desktop by default but responsive */}
        <div className="space-y-3">
          {/* Toggle Button for mobile/tablet responsive layout */}
          <button
            onClick={onToggleExpand}
            className="md:hidden w-full flex items-center justify-between text-xs font-mono text-cyan-400 py-2.5 px-3 rounded-lg border border-cyan-500/10 bg-cyan-500/5 mb-2 hover-cursor-scale transition-all duration-300"
          >
            <span className="flex items-center gap-2">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
              </span>
              <span>{isExpanded ? "Hide Details" : "Tap to Expand Details"}</span>
            </span>
            {isExpanded ? <ChevronUp className="w-4 h-4 text-cyan-400" /> : <ChevronDown className="w-4 h-4 text-cyan-400" />}
          </button>

          {/* Details Content Container */}
          <div className={`space-y-3 md:block ${isExpanded ? "block" : "hidden md:block"}`}>
            {project.highlights.map((bullet, bulletIdx) => (
              <div key={bulletIdx} className="flex items-start gap-2.5 text-xs text-[#9A9AAE] leading-relaxed">
                <span className="w-1.5 h-1.5 rounded-full bg-violet-500 mt-1.5 flex-shrink-0" />
                <span>{bullet}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* View Project / Github Links */}
      <div className="mt-8 pt-4 border-t border-white/5 flex items-center justify-between">
        {project.links.github ? (
          <a
            href={project.links.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-xs font-mono text-[#9A9AAE] hover:text-white transition-colors hover-cursor-scale"
          >
            <Github className="w-4 h-4" />
            <span>Source Code</span>
          </a>
        ) : (
          <span />
        )}

        <a
          href={project.links.github || "#"}
          target="_blank"
          rel="noopener noreferrer"
          className="relative inline-flex items-center gap-1.5 text-xs font-mono font-semibold text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-cyan-400 group-hover:text-glow hover-cursor-scale transition-all"
        >
          <span>View Project</span>
          <ExternalLink className="w-3.5 h-3.5 text-cyan-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
        </a>
      </div>
    </motion.div>
  );
}
