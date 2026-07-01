import React, { useState, useMemo } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ShieldCheck, Network, Cloud, Terminal, Award, ArrowUpRight, Search, SlidersHorizontal, BookOpen } from "lucide-react";
import { CERTIFICATIONS_DATA, CertificationItem } from "../data";

// Icon components mapping
const iconMap: Record<string, React.ReactNode> = {
  ShieldCheck: <ShieldCheck className="w-6 h-6 text-violet-400" />,
  Network: <Network className="w-6 h-6 text-cyan-400" />,
  Cloud: <Cloud className="w-6 h-6 text-pink-400" />,
  Terminal: <Terminal className="w-6 h-6 text-teal-400" />,
  Award: <Award className="w-6 h-6 text-amber-400" />
};

export default function Certifications() {
  const [activeTab, setActiveTab] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [visibleCount, setVisibleCount] = useState<number>(8);

  const categories = ["All", "Cloud & AI", "Networks & Systems", "Web & Software", "Data & ML"];

  // Filter certifications based on selected tab and search query
  const filteredCerts = useMemo(() => {
    return CERTIFICATIONS_DATA.filter((cert) => {
      const matchesTab = activeTab === "All" || cert.category === activeTab;
      const matchesSearch =
        cert.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        cert.issuer.toLowerCase().includes(searchQuery.toLowerCase()) ||
        cert.category.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesTab && matchesSearch;
    });
  }, [activeTab, searchQuery]);

  // Handle tab change
  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
    setVisibleCount(8); // Reset to default view count on tab switch
  };

  const hasMore = filteredCerts.length > visibleCount;
  const displayedCerts = filteredCerts.slice(0, visibleCount);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.05 }
    }
  };

  const itemVariants = {
    hidden: { scale: 0.95, opacity: 0, y: 15 },
    visible: {
      scale: 1,
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 120, damping: 17 }
    }
  };

  return (
    <section id="certifications" className="relative py-24 px-6 md:px-12 bg-gradient-to-b from-[#12121A] to-[#0A0A0F]">
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-cyan-600/5 rounded-full blur-[110px] pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <motion.p
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-xs font-mono font-bold tracking-widest text-[#06B6D4]"
            >
              // 05 — GLOBAL CREDENTIALS ({CERTIFICATIONS_DATA.length}+ CERTIFICATES)
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-3xl md:text-5xl font-display font-bold tracking-tight text-white mt-2"
            >
              Professional Certifications
            </motion.h2>
          </div>

          {/* Stats Summary Panel */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="flex items-center gap-3 bg-white/[0.02] border border-white/5 px-4 py-2.5 rounded-xl text-xs font-mono text-gray-400 self-start md:self-auto"
          >
            <BookOpen className="w-4 h-4 text-[#06B6D4]" />
            <span>Verified Track: <strong className="text-white">{CERTIFICATIONS_DATA.length} Professional</strong> credentials earned</span>
          </motion.div>
        </div>

        {/* Filters and Search Bar Row */}
        <div className="mb-8 flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-4">
          {/* Category Tabs */}
          <div className="flex flex-wrap items-center gap-2 overflow-x-auto pb-2 lg:pb-0 scrollbar-none">
            {categories.map((cat) => {
              const count = cat === "All"
                ? CERTIFICATIONS_DATA.length
                : CERTIFICATIONS_DATA.filter(c => c.category === cat).length;
              return (
                <button
                  key={cat}
                  onClick={() => handleTabChange(cat)}
                  className={`relative px-4 py-2 rounded-xl text-xs font-mono font-semibold transition-all duration-300 flex items-center gap-1.5 whitespace-nowrap border ${
                    activeTab === cat
                      ? "bg-white/10 text-[#06B6D4] border-cyan-500/30 shadow-lg shadow-cyan-500/5"
                      : "bg-white/[0.01] text-gray-400 border-white/5 hover:bg-white/[0.04] hover:text-white"
                  }`}
                >
                  {cat}
                  <span className={`text-[10px] px-1.5 py-0.5 rounded-md ${
                    activeTab === cat
                      ? "bg-cyan-500/20 text-[#06B6D4]"
                      : "bg-white/5 text-gray-500"
                  }`}>
                    {count}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Search bar */}
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
            <input
              type="text"
              placeholder="Search by title, technology, issuer..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-11 pr-4 py-2.5 rounded-xl bg-white/[0.02] hover:bg-white/[0.04] focus:bg-white/[0.06] border border-white/5 focus:border-cyan-400/30 text-sm text-white placeholder-gray-500 outline-none transition-all"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-xs font-mono text-gray-500 hover:text-white"
              >
                Clear
              </button>
            )}
          </div>
        </div>

        {/* Filter Info / No Results State */}
        <div className="mb-6 flex items-center justify-between text-xs font-mono text-gray-400">
          <div>
            Showing <strong className="text-white">{Math.min(filteredCerts.length, visibleCount)}</strong> of{" "}
            <strong className="text-white">{filteredCerts.length}</strong> results
            {searchQuery && ` for "${searchQuery}"`}
          </div>
          {activeTab !== "All" && (
            <button
              onClick={() => handleTabChange("All")}
              className="text-[#06B6D4] hover:underline"
            >
              Reset Category
            </button>
          )}
        </div>

        <AnimatePresence mode="popLayout">
          {filteredCerts.length === 0 ? (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              className="py-16 text-center border border-dashed border-white/5 rounded-2xl bg-white/[0.01]"
            >
              <SlidersHorizontal className="w-8 h-8 mx-auto text-gray-600 mb-3" />
              <p className="text-sm font-mono text-gray-400">No certifications match your current filters.</p>
              <button
                onClick={() => { setSearchQuery(""); setActiveTab("All"); }}
                className="mt-4 text-xs font-mono text-[#06B6D4] hover:underline"
              >
                Clear all filters
              </button>
            </motion.div>
          ) : (
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
            >
              {displayedCerts.map((cert) => (
                <motion.div
                  key={cert.title}
                  layout
                  variants={itemVariants}
                  whileHover={{ y: -6, transition: { duration: 0.2 } }}
                  className="p-6 rounded-2xl glass-card bg-white/[0.02] hover:bg-white/[0.05] border border-white/5 hover:border-cyan-400/30 transition-all duration-300 flex flex-col justify-between group relative overflow-hidden"
                >
                  {/* Card top banner accent glow */}
                  <div className="absolute top-0 inset-x-0 h-[2px] bg-gradient-to-r from-violet-600 via-cyan-400 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  <div>
                    {/* Icon row */}
                    <div className="flex items-center justify-between mb-6">
                      <div className="p-3 rounded-xl bg-white/5 border border-white/5 group-hover:scale-110 transition-transform duration-300">
                        {iconMap[cert.iconName] || <Award className="w-6 h-6 text-amber-400" />}
                      </div>
                      <div className="flex flex-col items-end gap-1">
                        <span className="text-[10px] font-mono font-bold text-[#06B6D4] bg-[#06B6D4]/10 border border-[#06B6D4]/20 px-2 py-0.5 rounded-md">
                          {cert.category}
                        </span>
                        <span className="text-[10px] font-mono text-gray-500">
                          {cert.year}
                        </span>
                      </div>
                    </div>

                    {/* Title */}
                    <h3 className="text-sm font-display font-semibold text-white group-hover:text-[#06B6D4] transition-colors line-clamp-2 min-h-[40px]">
                      {cert.title}
                    </h3>

                    {/* Issuer */}
                    <p className="text-xs font-mono text-[#9A9AAE] mt-2">
                      {cert.issuer}
                    </p>
                  </div>

                  {/* Bottom anchor details */}
                  <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between text-[10px] font-mono text-[#555566] group-hover:text-white transition-colors">
                    <span>VERIFIED CREDENTIAL</span>
                    <ArrowUpRight className="w-3.5 h-3.5 opacity-40 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300 text-cyan-400" />
                  </div>
                </motion.div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>

        {/* Load More Button */}
        {hasMore && (
          <div className="mt-12 text-center">
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => setVisibleCount((prev) => prev + 8)}
              className="px-6 py-3 rounded-xl font-mono text-xs font-bold text-white bg-gradient-to-r from-[#06B6D4] to-[#3B82F6] hover:brightness-110 shadow-lg shadow-cyan-500/10 transition-all cursor-pointer"
            >
              Load More Certifications (+{filteredCerts.length - visibleCount} left)
            </motion.button>
          </div>
        )}

        {/* Collapse Button when all/many are displayed */}
        {!hasMore && filteredCerts.length > 8 && (
          <div className="mt-12 text-center">
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => setVisibleCount(8)}
              className="px-6 py-3 rounded-xl font-mono text-xs font-bold text-gray-400 border border-white/10 hover:border-white/20 hover:text-white bg-white/[0.01] transition-all cursor-pointer"
            >
              Show Less / Reset View
            </motion.button>
          </div>
        )}
      </div>
    </section>
  );
}

