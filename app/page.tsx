'use client';

import { useState } from "react";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import RevealWrapper from "./components/RevealWrapper";
import BioModal from "./components/BioModal";
import AnimatedCounter from "./components/AnimatedCounter";
import { useLanguage } from "./contexts/LanguageContext";
import { projects as allProjects } from "@/lib/projects";

const PILLAR_COLORS = [
  { bg: "#D6C9FC", text: "#5B4B8A" },
  { bg: "#CFF8E8", text: "#2D6A4F" },
  { bg: "#C9E7FC", text: "#1E5A7A" },
  { bg: "#F9C8D7", text: "#8B4557" },
  { bg: "#FFF6C9", text: "#8B7355" },
];

const SKILL_COLORS = [
  "#D6C9FC", "#CFF8E8", "#C9E7FC", "#F9C8D7", "#FFF6C9",
  "#D6C9FC", "#CFF8E8", "#C9E7FC", "#F9C8D7",
];

const METHOD_COLORS = [
  { bg: "#D6C9FC", border: "#B8A9F0", accent: "#5B4B8A" },
  { bg: "#CFF8E8", border: "#A7EDD4", accent: "#065F46" },
  { bg: "#C9E7FC", border: "#A0D0F5", accent: "#0C4A6E" },
  { bg: "#FFF6C9", border: "#F5E9A0", accent: "#78350F" },
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
          style={{ backgroundColor: "#F8FAFC" }}
        >
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            <div style={{ position: "absolute", width: "600px", height: "600px", borderRadius: "50%", background: "radial-gradient(circle, rgba(167,199,231,0.35) 0%, transparent 70%)", top: "-100px", left: "-150px", animation: "float 10s ease-in-out infinite" }} />
            <div style={{ position: "absolute", width: "500px", height: "500px", borderRadius: "50%", background: "radial-gradient(circle, rgba(216,196,241,0.3) 0%, transparent 70%)", bottom: "-80px", right: "-100px", animation: "float 12s ease-in-out infinite", animationDelay: "3s" }} />
            <div style={{ position: "absolute", width: "350px", height: "350px", borderRadius: "50%", background: "radial-gradient(circle, rgba(184,224,210,0.28) 0%, transparent 70%)", top: "30%", left: "55%", animation: "float 9s ease-in-out infinite", animationDelay: "6s" }} />
          </div>

          <div className="relative z-10 inline-flex items-center gap-2 px-4 py-2 rounded-full mb-10"
            style={{ backgroundColor: "rgba(214,201,252,0.5)", border: "1px solid rgba(214,201,252,0.8)", animation: "fade-in-up 0.6s ease forwards" }}>
            <span className="w-2 h-2 rounded-full" style={{ backgroundColor: "#4ADE80", animation: "pulse-soft 2s ease-in-out infinite" }} />
            <span className="text-xs font-semibold tracking-wider" style={{ color: "#5B4B8A" }}>{t.hero.badge}</span>
          </div>

          <div className="relative z-10" style={{ animation: "fade-in-up 0.7s ease 0.1s both forwards" }}>
            <h1 className="font-bold leading-none mb-2 tracking-tight"
              style={{ fontFamily: "var(--font-poppins, Poppins, sans-serif)", fontSize: "clamp(3rem, 10vw, 8.5rem)", background: "linear-gradient(135deg, #5B4B8A 0%, #7B68EE 50%, #9B88FC 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
              {t.hero.line1}
            </h1>
            <h1 className="font-bold leading-none tracking-tight"
              style={{ fontFamily: "var(--font-poppins, Poppins, sans-serif)", fontSize: "clamp(3rem, 10vw, 8.5rem)", color: "#334155" }}>
              {t.hero.line2}
            </h1>
          </div>

          <p className="relative z-10 text-lg md:text-xl mt-6 mb-10 max-w-md"
            style={{ color: "#64748B", animation: "fade-in-up 0.7s ease 0.25s both forwards" }}>
            {t.hero.subtitle}
          </p>

          <button
            onClick={() => setBioOpen(true)}
            className="relative z-10 flex items-center gap-3 px-5 py-3 rounded-2xl transition-all duration-300 group"
            style={{ backgroundColor: "#FFFFFF", boxShadow: "0 8px 30px rgba(31,35,50,0.10)", border: "1px solid #E2E8F0", animation: "fade-in-up 0.7s ease 0.4s both forwards", cursor: "pointer" }}
            onMouseEnter={(e) => { e.currentTarget.style.boxShadow = "0 12px 40px rgba(139,124,246,0.2)"; e.currentTarget.style.borderColor = "#D6C9FC"; e.currentTarget.style.transform = "translateY(-2px)"; }}
            onMouseLeave={(e) => { e.currentTarget.style.boxShadow = "0 8px 30px rgba(31,35,50,0.10)"; e.currentTarget.style.borderColor = "#E2E8F0"; e.currentTarget.style.transform = "translateY(0)"; }}
          >
            <div className="w-9 h-9 rounded-xl overflow-hidden flex-shrink-0" style={{ backgroundColor: "#D6C9FC" }}>
              <img src="/leticia.jpeg" alt="Letícia Marinho" className="w-full h-full object-cover"
                onError={(e) => { (e.currentTarget as HTMLImageElement).style.display = "none"; }} />
            </div>
            <div className="text-left">
              <p className="text-xs font-bold uppercase tracking-wider" style={{ color: "#8B7CF6" }}>{t.hero.scientist}</p>
              <p className="text-sm font-semibold" style={{ color: "#334155" }}>{t.hero.name}</p>
            </div>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#94A3B8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-1 transition-transform duration-200 group-hover:translate-x-0.5">
              <path d="M9 18l6-6-6-6" />
            </svg>
          </button>

          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5"
            style={{ color: "#94A3B8", animation: "bounce-subtle 2.5s ease-in-out infinite" }}>
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
                  style={{ fontFamily: "var(--font-poppins, Poppins, sans-serif)", fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)", color: "#334155" }}>
                  {t.about.title}{" "}
                  <span style={{ background: "linear-gradient(135deg, #5B4B8A 0%, #9B88FC 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
                    {t.about.titleHighlight}
                  </span>
                </h2>
                <div className="space-y-4 text-base leading-relaxed" style={{ color: "#64748B" }}>
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
                    <p className="font-bold text-4xl mb-1" style={{ fontFamily: "var(--font-poppins, Poppins, sans-serif)", color: "#5B4B8A" }}>
                      <AnimatedCounter target={10} suffix="+" />
                    </p>
                    <p className="text-xs font-medium" style={{ color: "#64748B" }}>{t.stats.years}</p>
                  </div>
                  <div className="card p-6 text-center" style={{ backgroundColor: "#FFFFFF" }}>
                    <p className="font-bold text-4xl mb-1" style={{ fontFamily: "var(--font-poppins, Poppins, sans-serif)", color: "#065F46" }}>
                      <AnimatedCounter target={1000} suffix="+" />
                    </p>
                    <p className="text-xs font-medium" style={{ color: "#64748B" }}>{t.stats.students}</p>
                  </div>
                  <div className="card p-6 text-center" style={{ backgroundColor: "#FFFFFF" }}>
                    <p className="font-bold text-4xl mb-1" style={{ fontFamily: "var(--font-poppins, Poppins, sans-serif)", color: "#1E5A7A" }}>
                      <AnimatedCounter target={allProjects.length} suffix="" />
                    </p>
                    <p className="text-xs font-medium" style={{ color: "#64748B" }}>{t.stats.projects}</p>
                  </div>
                  <div className="card p-6 col-span-1" style={{ backgroundColor: "#D6C9FC" }}>
                    <p className="font-bold text-4xl mb-1" style={{ fontFamily: "var(--font-poppins, Poppins, sans-serif)", color: "#5B4B8A" }}>
                      100<span style={{ fontSize: "0.6em" }}>%</span>
                    </p>
                    <p className="text-xs font-medium" style={{ color: "#5B4B8A" }}>do zero</p>
                  </div>
                  <div className="card p-6 col-span-2" style={{ backgroundColor: "#D6C9FC" }}>
                    <p className="font-semibold text-sm italic" style={{ color: "#5B4B8A" }}>{t.stats.quote}</p>
                  </div>
                </div>
              </RevealWrapper>
            </div>
          </div>
        </section>

        {/* ── COMO EU TRABALHO ─────────────────────────────────────────────── */}
        <section id="metodologia" className="py-24 md:py-32 px-6 lg:px-12" style={{ backgroundColor: "#F8FAFC" }}>
          <div className="mx-auto max-w-7xl">
            <RevealWrapper>
              <div className="text-center mb-16">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-4" style={{ backgroundColor: "#D6C9FC" }}>
                  <span className="text-sm font-semibold" style={{ color: "#5B4B8A" }}>{t.methodology.badge}</span>
                </div>
                <h2 className="font-bold mb-4"
                  style={{ fontFamily: "var(--font-poppins, Poppins, sans-serif)", fontSize: "clamp(1.8rem, 3.5vw, 2.5rem)", color: "#334155" }}>
                  {t.methodology.title}
                </h2>
                <p className="text-base max-w-xl mx-auto" style={{ color: "#64748B" }}>
                  {t.methodology.subtitle}
                </p>
              </div>
            </RevealWrapper>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {t.methodology.methods.map((m, i) => (
                <RevealWrapper key={m.title} delay={i * 80}>
                  <div
                    className="card p-6 h-full flex flex-col gap-4 transition-all duration-300 hover:-translate-y-1"
                    style={{ backgroundColor: "#FFFFFF", borderTop: `3px solid ${METHOD_COLORS[i].border}` }}
                  >
                    <div className="w-12 h-12 rounded-2xl flex items-center justify-center text-2xl flex-shrink-0"
                      style={{ backgroundColor: METHOD_COLORS[i].bg }}>
                      {m.icon}
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2"
                        style={{ color: "#334155", fontFamily: "var(--font-poppins, Poppins, sans-serif)" }}>
                        {m.title}
                      </h4>
                      <p className="text-sm leading-relaxed" style={{ color: "#64748B" }}>
                        {m.description}
                      </p>
                    </div>
                  </div>
                </RevealWrapper>
              ))}
            </div>
          </div>
        </section>

        {/* ── GAME DESIGN NA EDUCAÇÃO ───────────────────────────────────────── */}
        <section id="game-design" className="py-24 md:py-32 px-6 lg:px-12" style={{ backgroundColor: "#FFFFFF" }}>
          <div className="mx-auto max-w-7xl">
            <RevealWrapper>
              <div className="text-center mb-16">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-4" style={{ backgroundColor: "#FFF6C9" }}>
                  <span className="text-sm font-semibold" style={{ color: "#78350F" }}>{t.gameDesign.badge}</span>
                </div>
                <h2 className="font-bold mb-4"
                  style={{ fontFamily: "var(--font-poppins, Poppins, sans-serif)", fontSize: "clamp(1.8rem, 3.5vw, 2.5rem)", color: "#334155" }}>
                  {t.gameDesign.title}
                </h2>
                <p className="text-base max-w-xl mx-auto" style={{ color: "#64748B" }}>
                  {t.gameDesign.subtitle}
                </p>
              </div>
            </RevealWrapper>

            <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-5">
              {t.gameDesign.elements.map((el, i) => (
                <RevealWrapper key={el.title} delay={i * 70}>
                  <div
                    className="card p-6 text-center h-full transition-all duration-300 hover:-translate-y-1"
                    style={{ backgroundColor: "#FFFFFF" }}
                  >
                    <div className="text-3xl mb-4">{el.symbol}</div>
                    <h4 className="font-semibold text-sm mb-2"
                      style={{ color: "#334155", fontFamily: "var(--font-poppins, Poppins, sans-serif)" }}>
                      {el.title}
                    </h4>
                    <p className="text-xs leading-relaxed" style={{ color: "#64748B" }}>
                      {el.description}
                    </p>
                  </div>
                </RevealWrapper>
              ))}
            </div>
          </div>
        </section>

        {/* ── MOTIVAÇÕES ───────────────────────────────────────────────────── */}
        <section id="motivacoes" className="py-24 md:py-32 px-6 lg:px-12" style={{ backgroundColor: "#5B4B8A" }}>
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
                  <div
                    className="rounded-2xl p-6 h-full transition-all duration-300 hover:-translate-y-1"
                    style={{ backgroundColor: "rgba(255,255,255,0.1)", border: "1px solid rgba(255,255,255,0.18)", backdropFilter: "blur(8px)" }}
                  >
                    <div className="text-3xl mb-4">{card.icon}</div>
                    <h4 className="font-semibold mb-2"
                      style={{ color: "#FFFFFF", fontFamily: "var(--font-poppins, Poppins, sans-serif)" }}>
                      {card.title}
                    </h4>
                    <p className="text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.75)" }}>
                      {card.description}
                    </p>
                  </div>
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
                  style={{ fontFamily: "var(--font-poppins, Poppins, sans-serif)", fontSize: "clamp(1.8rem, 3.5vw, 2.5rem)", color: "#334155" }}>
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
                  <div className="card p-6 h-full flex flex-col gap-4" style={{ backgroundColor: "#F8FAFC" }}>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl flex items-center justify-center text-xl flex-shrink-0" style={{ backgroundColor: "#D6C9FC" }}>
                        {step.icon}
                      </div>
                      <span className="font-bold text-sm tracking-wider" style={{ color: "#9B88FC", fontFamily: "var(--font-poppins, Poppins, sans-serif)" }}>
                        {step.num}
                      </span>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2" style={{ color: "#334155", fontFamily: "var(--font-poppins, Poppins, sans-serif)" }}>
                        {step.title}
                      </h4>
                      <p className="text-sm leading-relaxed" style={{ color: "#64748B" }}>{step.description}</p>
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
                    <h4 className="font-semibold text-sm mb-2" style={{ color: "#334155", fontFamily: "var(--font-poppins, Poppins, sans-serif)" }}>
                      {pillar.title}
                    </h4>
                    <p className="text-xs leading-relaxed" style={{ color: "#64748B" }}>{pillar.description}</p>
                  </div>
                </RevealWrapper>
              ))}
            </div>
          </div>
        </section>

        {/* ── COMPETÊNCIAS ─────────────────────────────────────────────────── */}
        <section className="py-24 md:py-32 px-6 lg:px-12" style={{ backgroundColor: "#F8FAFC" }}>
          <div className="mx-auto max-w-7xl">
            <RevealWrapper>
              <div className="text-center mb-16">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-4" style={{ backgroundColor: "#FFF6C9" }}>
                  <span className="text-sm font-semibold" style={{ color: "#8B7355" }}>{t.skills.badge}</span>
                </div>
                <h2 className="font-bold"
                  style={{ fontFamily: "var(--font-poppins, Poppins, sans-serif)", fontSize: "clamp(1.8rem, 3.5vw, 2.5rem)", color: "#334155" }}>
                  {t.skills.title}
                </h2>
              </div>
            </RevealWrapper>
            <RevealWrapper delay={100}>
              <div className="flex flex-wrap gap-3 justify-center">
                {t.skills.list.map((label, i) => (
                  <span key={label}
                    className="px-5 py-3 rounded-full text-sm font-semibold transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
                    style={{ backgroundColor: SKILL_COLORS[i % SKILL_COLORS.length], color: "#334155", fontFamily: "var(--font-nunito, Nunito, sans-serif)" }}>
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
