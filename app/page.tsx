'use client';

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import RevealWrapper from "./components/RevealWrapper";
import BioModal from "./components/BioModal";
import AnimatedCounter from "./components/AnimatedCounter";
import { useLanguage } from "./contexts/LanguageContext";
import { projects as allProjects } from "@/lib/projects";

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

  return (
    <>
      <Nav />
      <BioModal isOpen={bioOpen} onClose={() => setBioOpen(false)} />

      <main className="pt-[65px]">

        {/* ── HERO ─────────────────────────────────────────────────────────── */}
        <section
          className="relative min-h-[calc(100vh-65px)] flex flex-col items-center justify-center text-center overflow-hidden px-6 py-20"
          style={{ backgroundColor: "#FAFAFA" }}
        >
          {/* Dot grid + aurora */}
          <div className="hero-grid" />
          <div className="hero-aurora" />

          {/* Soft blobs */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            <div style={{ position: "absolute", width: "700px", height: "700px", borderRadius: "50%", background: "radial-gradient(circle, rgba(30,58,138,0.06) 0%, transparent 65%)", top: "-150px", left: "-200px", animation: "float 12s ease-in-out infinite" }} />
            <div style={{ position: "absolute", width: "500px", height: "500px", borderRadius: "50%", background: "radial-gradient(circle, rgba(99,102,241,0.07) 0%, transparent 65%)", bottom: "-80px", right: "-120px", animation: "float 14s ease-in-out infinite", animationDelay: "4s" }} />
          </div>

          {/* Badge */}
          <div className="relative z-10 inline-flex items-center gap-2 px-4 py-2 rounded-full mb-10"
            style={{ backgroundColor: "rgba(30,58,138,0.07)", border: "1px solid rgba(30,58,138,0.12)", animation: "fade-in-up 0.6s ease forwards" }}>
            <span className="w-2 h-2 rounded-full" style={{ backgroundColor: "#4ADE80", animation: "pulse-soft 2s ease-in-out infinite" }} />
            <span className="text-xs font-semibold tracking-wider" style={{ color: "#1E3A8A" }}>{t.hero.badge}</span>
          </div>

          {/* Headline */}
          <div className="relative z-10" style={{ animation: "fade-in-up 0.7s ease 0.1s both forwards" }}>
            <h1 className="font-bold leading-none mb-2 tracking-tight"
              style={{ fontFamily: "var(--font-poppins, Poppins, sans-serif)", fontSize: "clamp(3rem, 10vw, 8.5rem)", background: "linear-gradient(135deg, #1E3A8A 0%, #6366F1 55%, #818CF8 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
              {t.hero.line1}
            </h1>
            <h1 className="font-bold leading-none tracking-tight"
              style={{ fontFamily: "var(--font-poppins, Poppins, sans-serif)", fontSize: "clamp(3rem, 10vw, 8.5rem)", color: "#111827" }}>
              {t.hero.line2}
            </h1>
          </div>

          <p className="relative z-10 text-lg md:text-xl mt-6 mb-10 max-w-md"
            style={{ color: "#6B7280", animation: "fade-in-up 0.7s ease 0.25s both forwards" }}>
            {t.hero.subtitle}
          </p>

          {/* Bio card button */}
          <button
            onClick={() => setBioOpen(true)}
            className="relative z-10 flex items-center gap-3 px-5 py-3 rounded-2xl transition-all duration-300 group"
            style={{ backgroundColor: "#FFFFFF", boxShadow: "0 8px 30px rgba(17,24,39,0.10)", border: "1px solid #E5E7EB", animation: "fade-in-up 0.7s ease 0.4s both forwards", cursor: "pointer" }}
            onMouseEnter={(e) => { e.currentTarget.style.boxShadow = "0 12px 40px rgba(99,102,241,0.18)"; e.currentTarget.style.borderColor = "#C7D2FE"; e.currentTarget.style.transform = "translateY(-2px)"; }}
            onMouseLeave={(e) => { e.currentTarget.style.boxShadow = "0 8px 30px rgba(17,24,39,0.10)"; e.currentTarget.style.borderColor = "#E5E7EB"; e.currentTarget.style.transform = "translateY(0)"; }}
          >
            <div className="w-9 h-9 rounded-xl overflow-hidden flex-shrink-0" style={{ backgroundColor: "#DBEAFE" }}>
              <img src="/leticia.jpeg" alt="Letícia Marinho" className="w-full h-full object-cover"
                onError={(e) => { (e.currentTarget as HTMLImageElement).style.display = "none"; }} />
            </div>
            <div className="text-left">
              <p className="text-xs font-bold uppercase tracking-wider" style={{ color: "#6366F1" }}>{t.hero.scientist}</p>
              <p className="text-sm font-semibold" style={{ color: "#111827" }}>{t.hero.name}</p>
            </div>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#9CA3AF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-1 transition-transform duration-200 group-hover:translate-x-0.5">
              <path d="M9 18l6-6-6-6" />
            </svg>
          </button>

          {/* Scroll indicator */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5"
            style={{ color: "#9CA3AF", animation: "bounce-subtle 2.5s ease-in-out infinite" }}>
            <span className="text-xs uppercase tracking-[0.18em]" style={{ fontSize: "9px" }}>{t.hero.scroll}</span>
            <svg width="14" height="8" viewBox="0 0 14 8" fill="none">
              <path d="M1 1L7 7L13 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </section>

        {/* ── SOBRE ─────────────────────────────────────────────────────────── */}
        <section className="py-24 md:py-32 px-6 lg:px-12" style={{ backgroundColor: "#FFFFFF" }}>
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
        </section>

        {/* ── COMO EU TRABALHO ─────────────────────────────────────────────── */}
        <section id="metodologia" className="py-24 md:py-32 px-6 lg:px-12" style={{ backgroundColor: "#FAFAFA" }}>
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
        </section>

        {/* ── GAME DESIGN NA EDUCAÇÃO ───────────────────────────────────────── */}
        <section id="game-design" className="py-24 md:py-32 px-6 lg:px-12" style={{ backgroundColor: "#FFFFFF" }}>
          <div className="mx-auto max-w-7xl">

            {/* Header + image */}
            <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
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

              <RevealWrapper delay={150} direction="right">
                <motion.div
                  className="relative rounded-3xl overflow-hidden"
                  style={{ aspectRatio: "4/3", boxShadow: "0 24px 60px rgba(30,58,138,0.18)" }}
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                >
                  <Image
                    src="/gamification.jpg"
                    alt="Gamification in Education"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(30,58,138,0.55) 0%, transparent 60%)" }} />
                  <div className="absolute bottom-5 left-5 right-5">
                    <p className="text-xs font-bold uppercase tracking-widest mb-1" style={{ color: "rgba(255,255,255,0.7)" }}>Game Design</p>
                    <p className="text-sm font-semibold" style={{ color: "#FFFFFF" }}>Aprendizagem ativa através do design de jogos</p>
                  </div>
                </motion.div>
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

            {/* ── Fundamentação Teórica ─────────────────────────────────────── */}
            <RevealWrapper>
              <div className="text-center mb-14">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-4" style={{ backgroundColor: "#EEF2FF" }}>
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#4F46E5" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
                    <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
                  </svg>
                  <span className="text-sm font-semibold" style={{ color: "#4F46E5" }}>{t.gameDesign.theoryBadge}</span>
                </div>
                <h3 className="font-bold mb-3"
                  style={{ fontFamily: "var(--font-poppins, Poppins, sans-serif)", fontSize: "clamp(1.4rem, 2.5vw, 2rem)", color: "#111827" }}>
                  {t.gameDesign.theoryTitle}
                </h3>
                <p className="text-sm max-w-lg mx-auto" style={{ color: "#6B7280" }}>
                  {t.gameDesign.theorySubtitle}
                </p>
              </div>
            </RevealWrapper>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {t.gameDesign.books.map((book, i) => (
                <RevealWrapper key={book.title} delay={i * 90}>
                  <motion.div
                    className="rounded-2xl overflow-hidden h-full flex flex-col"
                    style={{ boxShadow: "0 4px 20px rgba(0,0,0,0.08)" }}
                    whileHover={{ y: -8, boxShadow: "0 20px 50px rgba(0,0,0,0.16)" }}
                    transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                  >
                    {/* Book spine header */}
                    <div className="relative px-5 py-6 flex flex-col gap-1" style={{ backgroundColor: book.color, minHeight: "130px" }}>
                      {/* Decorative spine lines */}
                      <div className="absolute top-0 left-0 bottom-0 w-3 opacity-20" style={{ backgroundColor: "rgba(0,0,0,0.3)" }} />
                      <div className="absolute top-0 left-3 bottom-0 w-px opacity-20" style={{ backgroundColor: "rgba(255,255,255,0.5)" }} />
                      <p className="text-xs font-bold uppercase tracking-widest opacity-70 pl-3" style={{ color: book.textColor }}>
                        {book.author} · {book.year}
                      </p>
                      <h4 className="font-bold leading-snug pl-3" style={{ fontFamily: "var(--font-poppins, Poppins, sans-serif)", fontSize: "clamp(0.85rem, 1.2vw, 1rem)", color: book.textColor }}>
                        {book.title}
                      </h4>
                      {/* Tags */}
                      <div className="flex flex-wrap gap-1.5 mt-2 pl-3">
                        {book.tags.map(tag => (
                          <span key={tag} className="text-xs px-2 py-0.5 rounded-full font-medium"
                            style={{ backgroundColor: "rgba(255,255,255,0.2)", color: book.textColor, border: "1px solid rgba(255,255,255,0.3)" }}>
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Content */}
                    <div className="flex flex-col flex-1 p-5 gap-4" style={{ backgroundColor: "#FFFFFF" }}>
                      <div>
                        <p className="text-xs font-bold uppercase tracking-widest mb-1.5" style={{ color: book.color }}>Ideia Principal</p>
                        <p className="text-sm font-semibold leading-snug" style={{ color: "#1E293B" }}>
                          {book.idea}
                        </p>
                      </div>
                      <div>
                        <p className="text-xs font-bold uppercase tracking-widest mb-1.5" style={{ color: book.color }}>Aplicação Prática</p>
                        <p className="text-xs leading-relaxed" style={{ color: "#6B7280" }}>
                          {book.application}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                </RevealWrapper>
              ))}
            </div>

          </div>
        </section>

        {/* ── MOTIVAÇÕES ───────────────────────────────────────────────────── */}
        <section id="motivacoes" className="py-24 md:py-32 px-6 lg:px-12" style={{ backgroundColor: "#1E3A8A" }}>
          <div className="mx-auto max-w-7xl">
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
        </section>

        {/* ── ABORDAGEM — 6-step process ───────────────────────────────────── */}
        <section id="abordagem" className="py-24 md:py-32 px-6 lg:px-12" style={{ backgroundColor: "#FFFFFF" }}>
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
        </section>

        {/* ── COMPETÊNCIAS ─────────────────────────────────────────────────── */}
        <section className="py-24 md:py-32 px-6 lg:px-12" style={{ backgroundColor: "#FAFAFA" }}>
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
        </section>

      </main>
      <Footer />
    </>
  );
}
