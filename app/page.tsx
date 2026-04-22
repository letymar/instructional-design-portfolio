'use client';

import { useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import RevealWrapper from "./components/RevealWrapper";
import BioModal from "./components/BioModal";
import AnimatedCounter from "./components/AnimatedCounter";
import { useLanguage } from "./contexts/LanguageContext";
import { projects as allProjects } from "@/lib/projects";

/* ── Framer Motion variants ─────────────────────────────────────────────── */
const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
  },
};

const PILLAR_COLORS = [
  { bg: "#EEF2FF", text: "#4F46E5" },
  { bg: "#CFF8E8", text: "#065F46" },
  { bg: "#DBEAFE", text: "#1E3A8A" },
  { bg: "#FEE2E2", text: "#991B1B" },
  { bg: "#FEF9C3", text: "#854D0E" },
];

const SKILL_COLORS = [
  "#EEF2FF", "#CFF8E8", "#DBEAFE", "#FEE2E2", "#FEF9C3",
  "#EEF2FF", "#CFF8E8", "#DBEAFE", "#FEE2E2",
];

const METHOD_COLORS = [
  { bg: "#EEF2FF", border: "#C7D2FE", accent: "#4F46E5" },
  { bg: "#CFF8E8", border: "#A7EDD4", accent: "#065F46" },
  { bg: "#DBEAFE", border: "#BFDBFE", accent: "#1E3A8A" },
  { bg: "#FEF9C3", border: "#FDE68A", accent: "#78350F" },
];

export default function HomePage() {
  const [bioOpen, setBioOpen] = useState(false);
  const { t } = useLanguage();
  const { scrollY } = useScroll();
  const heroY = useTransform(scrollY, [0, 600], [0, -90]);
  const heroBlobY = useTransform(scrollY, [0, 600], [0, -40]);

  return (
    <>
      <Nav />
      <BioModal isOpen={bioOpen} onClose={() => setBioOpen(false)} />

      <main className="pt-[65px]">

        {/* ── HERO ─────────────────────────────────────────────────────────── */}
        <section
          className="relative min-h-[calc(100vh-65px)] flex flex-col items-center justify-center"
          style={{ backgroundColor: "#FAFAFA", overflow: "clip" }}
        >
          {/* Dot grid */}
          <div className="hero-grid" />
          <div className="hero-aurora" />

          {/* Soft blobs — parallax at half speed */}
          <motion.div className="absolute inset-0 pointer-events-none overflow-hidden" style={{ y: heroBlobY }}>
            <div style={{ position: "absolute", width: "700px", height: "700px", borderRadius: "50%", background: "radial-gradient(circle, rgba(30,58,138,0.05) 0%, transparent 65%)", top: "-200px", left: "-200px", animation: "float 14s ease-in-out infinite" }} />
            <div style={{ position: "absolute", width: "500px", height: "500px", borderRadius: "50%", background: "radial-gradient(circle, rgba(99,102,241,0.06) 0%, transparent 65%)", bottom: "-100px", right: "-100px", animation: "float 16s ease-in-out infinite", animationDelay: "5s" }} />
          </motion.div>

          {/* ── All hero content in a single centered column ── */}
          <motion.div
            className="relative z-10 flex flex-col items-center text-center w-full max-w-5xl mx-auto px-6 py-24"
            style={{ y: heroY }}
            initial="hidden"
            animate="visible"
            variants={{ visible: { transition: { staggerChildren: 0.14 } } }}
          >
            {/* Status badge */}
            <motion.div variants={fadeUp} className="mb-10">
              <div
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full"
                style={{ backgroundColor: "rgba(30,58,138,0.07)", border: "1px solid rgba(30,58,138,0.12)" }}
              >
                <span className="w-2 h-2 rounded-full flex-shrink-0" style={{ backgroundColor: "#4ADE80", animation: "pulse-soft 2s ease-in-out infinite" }} />
                <span className="text-xs font-semibold tracking-widest" style={{ color: "#1E3A8A" }}>{t.hero.badge}</span>
              </div>
            </motion.div>

            {/* Headline — single element, two lines via display:block spans */}
            <motion.div variants={fadeUp} className="mb-8 w-full">
              <h1
                className="font-bold tracking-tight"
                style={{ fontFamily: "var(--font-poppins, Poppins, sans-serif)", fontSize: "clamp(2.8rem, 9vw, 8rem)", lineHeight: 0.93, letterSpacing: "-0.02em" }}
              >
                <span style={{ background: "linear-gradient(135deg, #1E3A8A 0%, #6366F1 55%, #818CF8 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text", display: "block" }}>
                  {t.hero.line1}
                </span>
                <span style={{ color: "#111827", display: "block" }}>
                  {t.hero.line2}
                </span>
              </h1>
            </motion.div>

            {/* Subtitle */}
            <motion.p
              variants={fadeUp}
              className="text-lg md:text-xl max-w-lg mb-12 leading-relaxed"
              style={{ color: "#6B7280" }}
            >
              {t.hero.subtitle}
            </motion.p>

            {/* Bio card — motion.button with whileHover */}
            <motion.button
              variants={fadeUp}
              onClick={() => setBioOpen(true)}
              className="group inline-flex items-center gap-4 px-6 py-4 rounded-2xl"
              style={{
                backgroundColor: "#FFFFFF",
                boxShadow: "0 4px 20px rgba(17,24,39,0.08)",
                border: "1px solid #E5E7EB",
                cursor: "pointer",
              }}
              whileHover={{
                y: -4,
                boxShadow: "0 14px 40px rgba(99,102,241,0.16)",
                borderColor: "#C7D2FE",
              }}
              whileTap={{ y: 0, boxShadow: "0 2px 10px rgba(17,24,39,0.08)" }}
              transition={{ duration: 0.2, ease: "easeOut" }}
            >
              <div className="w-10 h-10 rounded-xl overflow-hidden flex-shrink-0" style={{ backgroundColor: "#DBEAFE" }}>
                <img
                  src="/leticia.jpeg"
                  alt="Letícia Marinho"
                  className="w-full h-full object-cover"
                  onError={(e) => { (e.currentTarget as HTMLImageElement).style.display = "none"; }}
                />
              </div>
              <div className="text-left">
                <p className="text-xs font-bold uppercase tracking-widest mb-0.5" style={{ color: "#6366F1" }}>
                  {t.hero.scientist}
                </p>
                <p className="text-sm font-semibold" style={{ color: "#111827" }}>
                  {t.hero.name}
                </p>
              </div>
              <svg
                width="14" height="14" viewBox="0 0 24 24" fill="none"
                stroke="#9CA3AF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                className="ml-1 transition-transform duration-200 group-hover:translate-x-1"
              >
                <path d="M9 18l6-6-6-6" />
              </svg>
            </motion.button>
          </motion.div>

          {/* Scroll indicator — anchored to bottom, independent from stagger */}
          <motion.div
            className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.0, duration: 0.6 }}
            style={{ color: "#9CA3AF" }}
          >
            <span style={{ fontSize: "9px", fontWeight: 600, letterSpacing: "0.2em", textTransform: "uppercase" }}>
              {t.hero.scroll}
            </span>
            <motion.div
              animate={{ y: [0, 6, 0] }}
              transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
            >
              <svg width="14" height="8" viewBox="0 0 14 8" fill="none">
                <path d="M1 1L7 7L13 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </motion.div>
          </motion.div>
        </section>

        {/* ── SOBRE ─────────────────────────────────────────────────────────── */}
        <motion.section
          className="py-24 md:py-32 px-6 lg:px-12"
          style={{ backgroundColor: "#FFFFFF", borderRadius: "32px 32px 0 0", position: "relative", zIndex: 2, marginTop: "-32px" }}
          initial={{ y: 60 }}
          whileInView={{ y: 0 }}
          viewport={{ once: true, amount: 0.04 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
        >
          <div className="mx-auto max-w-7xl">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <RevealWrapper>
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6" style={{ backgroundColor: "#CFF8E8" }}>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#2D6A4F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" /><circle cx="12" cy="7" r="4" />
                  </svg>
                  <span className="text-sm font-semibold" style={{ color: "#2D6A4F" }}>{t.about.badge}</span>
                </div>
                <h2 className="font-bold leading-tight mb-6"
                  style={{ fontFamily: "var(--font-poppins, Poppins, sans-serif)", fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)", color: "#111827" }}>
                  {t.about.title}{" "}
                  <span style={{ background: "linear-gradient(135deg, #1E3A8A 0%, #6366F1 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
                    {t.about.titleHighlight}
                  </span>
                </h2>
                <div className="space-y-4 text-base leading-relaxed" style={{ color: "#6B7280" }}>
                  <p>{t.about.para1}</p>
                  <p>{t.about.para2}</p>
                </div>
                <button onClick={() => setBioOpen(true)} className="mt-8 btn-primary text-sm py-3 px-6" style={{ cursor: "pointer" }}>
                  {t.about.cta}
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </button>
              </RevealWrapper>

              <RevealWrapper delay={150}>
                <div className="grid grid-cols-2 gap-4">
                  <div className="card p-6 text-center" style={{ backgroundColor: "#FFFFFF" }}>
                    <p className="font-bold text-4xl mb-1" style={{ fontFamily: "var(--font-poppins, Poppins, sans-serif)", color: "#1E3A8A" }}>
                      <AnimatedCounter target={10} suffix="+" />
                    </p>
                    <p className="text-xs font-medium" style={{ color: "#6B7280" }}>{t.stats.years}</p>
                  </div>
                  <div className="card p-6 text-center" style={{ backgroundColor: "#FFFFFF" }}>
                    <p className="font-bold text-4xl mb-1" style={{ fontFamily: "var(--font-poppins, Poppins, sans-serif)", color: "#065F46" }}>
                      <AnimatedCounter target={1000} suffix="+" />
                    </p>
                    <p className="text-xs font-medium" style={{ color: "#6B7280" }}>{t.stats.students}</p>
                  </div>
                  <div className="card p-6 text-center" style={{ backgroundColor: "#FFFFFF" }}>
                    <p className="font-bold text-4xl mb-1" style={{ fontFamily: "var(--font-poppins, Poppins, sans-serif)", color: "#1E5A7A" }}>
                      <AnimatedCounter target={allProjects.length} suffix="" />
                    </p>
                    <p className="text-xs font-medium" style={{ color: "#6B7280" }}>{t.stats.projects}</p>
                  </div>
                  <div className="card p-6 col-span-1" style={{ backgroundColor: "#EEF2FF" }}>
                    <p className="font-bold text-4xl mb-1" style={{ fontFamily: "var(--font-poppins, Poppins, sans-serif)", color: "#1E3A8A" }}>
                      100<span style={{ fontSize: "0.6em" }}>%</span>
                    </p>
                    <p className="text-xs font-medium" style={{ color: "#4F46E5" }}>do zero</p>
                  </div>
                  <div className="card p-6 col-span-2" style={{ backgroundColor: "#EEF2FF" }}>
                    <p className="font-semibold text-sm italic" style={{ color: "#1E3A8A" }}>{t.stats.quote}</p>
                  </div>
                </div>
              </RevealWrapper>
            </div>
          </div>
        </motion.section>

        {/* ── COMO EU TRABALHO ─────────────────────────────────────────────── */}
        <motion.section
          id="metodologia"
          className="py-24 md:py-32 px-6 lg:px-12"
          style={{ backgroundColor: "#F5F3FF", borderRadius: "32px 32px 0 0", position: "relative", zIndex: 3, marginTop: "-32px" }}
          initial={{ y: 60 }}
          whileInView={{ y: 0 }}
          viewport={{ once: true, amount: 0.04 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
        >
          <div className="mx-auto max-w-7xl">
            <RevealWrapper>
              <div className="text-center mb-16">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-4" style={{ backgroundColor: "#EEF2FF" }}>
                  <span className="text-sm font-semibold" style={{ color: "#4F46E5" }}>{t.methodology.badge}</span>
                </div>
                <h2 className="font-bold mb-4"
                  style={{ fontFamily: "var(--font-poppins, Poppins, sans-serif)", fontSize: "clamp(1.8rem, 3.5vw, 2.5rem)", color: "#111827" }}>
                  {t.methodology.title}
                </h2>
                <p className="text-base max-w-xl mx-auto" style={{ color: "#6B7280" }}>
                  {t.methodology.subtitle}
                </p>
              </div>
            </RevealWrapper>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {t.methodology.methods.map((m, i) => (
                <RevealWrapper key={m.title} delay={i * 80}>
                  <motion.div
                    className="card p-6 h-full flex flex-col gap-4"
                    style={{ backgroundColor: "#FFFFFF", borderTop: `3px solid ${METHOD_COLORS[i].border}` }}
                    whileHover={{ y: -6, boxShadow: "0 16px 40px rgba(99,102,241,0.12)" }}
                    transition={{ duration: 0.25, ease: "easeOut" }}
                  >
                    <div className="w-12 h-12 rounded-2xl flex items-center justify-center text-2xl flex-shrink-0"
                      style={{ backgroundColor: METHOD_COLORS[i].bg }}>
                      {m.icon}
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2"
                        style={{ color: "#111827", fontFamily: "var(--font-poppins, Poppins, sans-serif)" }}>
                        {m.title}
                      </h4>
                      <p className="text-sm leading-relaxed" style={{ color: "#6B7280" }}>
                        {m.description}
                      </p>
                    </div>
                  </motion.div>
                </RevealWrapper>
              ))}
            </div>
          </div>
        </motion.section>

        {/* ── GAME DESIGN NA EDUCAÇÃO ───────────────────────────────────────── */}
        <motion.section
          id="game-design"
          className="py-24 md:py-32 px-6 lg:px-12"
          style={{ backgroundColor: "#FFFFFF", borderRadius: "32px 32px 0 0", position: "relative", zIndex: 4, marginTop: "-32px" }}
          initial={{ y: 60 }}
          whileInView={{ y: 0 }}
          viewport={{ once: true, amount: 0.04 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
        >
          <div className="mx-auto max-w-7xl">

            {/* Header — single column */}
            <div className="mb-20 max-w-3xl">
              <RevealWrapper>
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-4" style={{ backgroundColor: "#FFF6C9" }}>
                  <span className="text-sm font-semibold" style={{ color: "#78350F" }}>{t.gameDesign.badge}</span>
                </div>
                <h2 className="font-bold mb-4"
                  style={{ fontFamily: "var(--font-poppins, Poppins, sans-serif)", fontSize: "clamp(1.8rem, 3.5vw, 2.5rem)", color: "#111827" }}>
                  {t.gameDesign.title}
                </h2>
                <p className="text-base max-w-xl" style={{ color: "#6B7280" }}>
                  {t.gameDesign.subtitle}
                </p>
              </RevealWrapper>
            </div>

            {/* 5 elements */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-5 mb-24">
              {t.gameDesign.elements.map((el, i) => (
                <RevealWrapper key={el.title} delay={i * 70}>
                  <motion.div
                    className="card p-6 text-center h-full"
                    style={{ backgroundColor: "#FFFFFF" }}
                    whileHover={{ y: -6, boxShadow: "0 16px 40px rgba(99,102,241,0.14)" }}
                    transition={{ duration: 0.25, ease: "easeOut" }}
                  >
                    <div className="text-3xl mb-4">{el.symbol}</div>
                    <h4 className="font-semibold text-sm mb-2"
                      style={{ color: "#111827", fontFamily: "var(--font-poppins, Poppins, sans-serif)" }}>
                      {el.title}
                    </h4>
                    <p className="text-xs leading-relaxed" style={{ color: "#6B7280" }}>
                      {el.description}
                    </p>
                  </motion.div>
                </RevealWrapper>
              ))}
            </div>

          </div>
        </motion.section>

        {/* ── MOTIVAÇÕES ───────────────────────────────────────────────────── */}
        <motion.section
          id="motivacoes"
          className="relative py-24 md:py-32 px-6 lg:px-12 overflow-hidden"
          style={{ backgroundColor: "#1E3A8A", borderRadius: "32px 32px 0 0", position: "relative", zIndex: 5, marginTop: "-32px" }}
          initial={{ opacity: 0.5, scale: 0.97 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
        >
          {/* Radial glow overlay */}
          <motion.div
            className="absolute inset-0 pointer-events-none"
            style={{ background: "radial-gradient(ellipse 70% 60% at 50% 50%, rgba(99,102,241,0.18) 0%, transparent 70%)" }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, delay: 0.3 }}
          />
          <div className="relative z-10 mx-auto max-w-7xl">
            <RevealWrapper>
              <div className="text-center mb-16">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-4"
                  style={{ backgroundColor: "rgba(255,255,255,0.15)", border: "1px solid rgba(255,255,255,0.25)" }}>
                  <span className="text-sm font-semibold" style={{ color: "rgba(255,255,255,0.9)" }}>{t.motivations.badge}</span>
                </div>
                <h2 className="font-bold mb-8"
                  style={{ fontFamily: "var(--font-poppins, Poppins, sans-serif)", fontSize: "clamp(1.8rem, 3.5vw, 2.5rem)", color: "#FFFFFF" }}>
                  {t.motivations.title}
                </h2>
                <blockquote
                  className="text-lg md:text-xl italic max-w-2xl mx-auto leading-relaxed"
                  style={{ color: "rgba(255,255,255,0.85)", fontFamily: "var(--font-poppins, Poppins, sans-serif)" }}
                >
                  {t.motivations.quote}
                </blockquote>
              </div>
            </RevealWrapper>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {t.motivations.cards.map((card, i) => (
                <RevealWrapper key={card.title} delay={i * 80}>
                  <motion.div
                    className="rounded-2xl p-6 h-full"
                    style={{ backgroundColor: "rgba(255,255,255,0.1)", border: "1px solid rgba(255,255,255,0.18)", backdropFilter: "blur(8px)" }}
                    whileHover={{ y: -6, backgroundColor: "rgba(255,255,255,0.15)" }}
                    transition={{ duration: 0.25, ease: "easeOut" }}
                  >
                    <div className="text-3xl mb-4">{card.icon}</div>
                    <h4 className="font-semibold mb-2"
                      style={{ color: "#FFFFFF", fontFamily: "var(--font-poppins, Poppins, sans-serif)" }}>
                      {card.title}
                    </h4>
                    <p className="text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.75)" }}>
                      {card.description}
                    </p>
                  </motion.div>
                </RevealWrapper>
              ))}
            </div>
          </div>
        </motion.section>

        {/* ── ABORDAGEM — 6-step process ───────────────────────────────────── */}
        <motion.section
          id="abordagem"
          className="py-24 md:py-32 px-6 lg:px-12"
          style={{ backgroundColor: "#F0F9FF", borderRadius: "32px 32px 0 0", position: "relative", zIndex: 6, marginTop: "-32px" }}
          initial={{ y: 60 }}
          whileInView={{ y: 0 }}
          viewport={{ once: true, amount: 0.04 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
        >
          <div className="mx-auto max-w-7xl">
            <RevealWrapper>
              <div className="text-center mb-16">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-4" style={{ backgroundColor: "#C9E7FC" }}>
                  <span className="text-sm font-semibold" style={{ color: "#1E5A7A" }}>{t.approach.badge}</span>
                </div>
                <h2 className="font-bold mb-4"
                  style={{ fontFamily: "var(--font-poppins, Poppins, sans-serif)", fontSize: "clamp(1.8rem, 3.5vw, 2.5rem)", color: "#111827" }}>
                  {t.approach.title}
                </h2>
                <div className="inline-flex items-start gap-3 mt-4 px-5 py-3 rounded-2xl text-left max-w-2xl mx-auto"
                  style={{ backgroundColor: "#F0FDF4", border: "1px solid #BBF7D0" }}>
                  <span className="text-base mt-0.5">📚</span>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-wider mb-0.5" style={{ color: "#15803D" }}>{t.approach.curriculumLabel}</p>
                    <p className="text-sm" style={{ color: "#166534" }}>{t.approach.curriculumNote}</p>
                  </div>
                </div>
              </div>
            </RevealWrapper>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
              {t.approach.steps.map((step, i) => (
                <RevealWrapper key={step.num} delay={i * 80}>
                  <div className="card p-6 h-full flex flex-col gap-4" style={{ backgroundColor: "#FAFAFA" }}>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl flex items-center justify-center text-xl flex-shrink-0" style={{ backgroundColor: "#EEF2FF" }}>
                        {step.icon}
                      </div>
                      <span className="font-bold text-sm tracking-wider" style={{ color: "#6366F1", fontFamily: "var(--font-poppins, Poppins, sans-serif)" }}>
                        {step.num}
                      </span>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2" style={{ color: "#111827", fontFamily: "var(--font-poppins, Poppins, sans-serif)" }}>
                        {step.title}
                      </h4>
                      <p className="text-sm leading-relaxed" style={{ color: "#6B7280" }}>{step.description}</p>
                    </div>
                  </div>
                </RevealWrapper>
              ))}
            </div>

            <RevealWrapper>
              <p className="text-center text-sm font-semibold uppercase tracking-widest mb-8" style={{ color: "#94A3B8" }}>
                ── 5 pilares fundamentais ──
              </p>
            </RevealWrapper>
            <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
              {t.approach.pillars.map((pillar, i) => (
                <RevealWrapper key={pillar.symbol} delay={i * 80}>
                  <div className="card p-6 text-center h-full" style={{ backgroundColor: "#FFFFFF" }}>
                    <div className="w-12 h-12 rounded-2xl flex items-center justify-center mx-auto mb-4 text-xl font-bold"
                      style={{ backgroundColor: PILLAR_COLORS[i].bg, color: PILLAR_COLORS[i].text }}>
                      {pillar.symbol}
                    </div>
                    <h4 className="font-semibold text-sm mb-2" style={{ color: "#111827", fontFamily: "var(--font-poppins, Poppins, sans-serif)" }}>
                      {pillar.title}
                    </h4>
                    <p className="text-xs leading-relaxed" style={{ color: "#6B7280" }}>{pillar.description}</p>
                  </div>
                </RevealWrapper>
              ))}
            </div>
          </div>
        </motion.section>

        {/* ── COMPETÊNCIAS ─────────────────────────────────────────────────── */}
        <motion.section
          className="py-24 md:py-32 px-6 lg:px-12"
          style={{ backgroundColor: "#FAFAFA", borderRadius: "32px 32px 0 0", position: "relative", zIndex: 7, marginTop: "-32px" }}
          initial={{ y: 60 }}
          whileInView={{ y: 0 }}
          viewport={{ once: true, amount: 0.04 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
        >
          <div className="mx-auto max-w-7xl">
            <RevealWrapper>
              <div className="text-center mb-16">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-4" style={{ backgroundColor: "#FEF9C3" }}>
                  <span className="text-sm font-semibold" style={{ color: "#854D0E" }}>{t.skills.badge}</span>
                </div>
                <h2 className="font-bold"
                  style={{ fontFamily: "var(--font-poppins, Poppins, sans-serif)", fontSize: "clamp(1.8rem, 3.5vw, 2.5rem)", color: "#111827" }}>
                  {t.skills.title}
                </h2>
              </div>
            </RevealWrapper>
            <RevealWrapper delay={100}>
              <div className="flex flex-wrap gap-3 justify-center">
                {t.skills.list.map((label, i) => (
                  <span key={label}
                    className="px-5 py-3 rounded-full text-sm font-semibold transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
                    style={{ backgroundColor: SKILL_COLORS[i % SKILL_COLORS.length], color: "#111827" }}>
                    {label}
                  </span>
                ))}
              </div>
            </RevealWrapper>
          </div>
        </motion.section>

      </main>
      <Footer />
    </>
  );
}
