'use client';

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import ProjectBlock from "./components/ProjectBlock";
import { projects as allProjects } from "@/lib/projects";

/* ─── Pilares da abordagem ────────────────────────────────────────────────── */

const pillars = [
  {
    symbol: "①",
    title: "Design Instrucional",
    description: "Análise de necessidades, objetivos mensuráveis e avaliação de impacto real.",
    color: { bg: "#D6C9FC", text: "#5B4B8A" },
  },
  {
    symbol: "②",
    title: "Aprendizagem Ativa",
    description: "PBL, gamificação, hands-on e prática deliberada como metodologias centrais.",
    color: { bg: "#CFF8E8", text: "#2D6A4F" },
  },
  {
    symbol: "③",
    title: "Tecnologia Educativa",
    description: "Ferramentas que ampliam — e não substituem — a aprendizagem humana.",
    color: { bg: "#C9E7FC", text: "#1E5A7A" },
  },
  {
    symbol: "④",
    title: "Experiência do Utilizador",
    description: "Clareza, fluxo e redução de fricção em cada momento da experiência.",
    color: { bg: "#F9C8D7", text: "#8B4557" },
  },
  {
    symbol: "⑤",
    title: "Impacto Real",
    description: "Evidência, iteração contínua e mudança comportamental verificável.",
    color: { bg: "#FFF6C9", text: "#8B7355" },
  },
];

/* ─── Competências ────────────────────────────────────────────────────────── */

const skills = [
  { label: "Instructional Design", color: "#D6C9FC" },
  { label: "Learning Experience Design", color: "#CFF8E8" },
  { label: "Curriculum Development", color: "#C9E7FC" },
  { label: "Facilitação & Formação de Professores", color: "#F9C8D7" },
  { label: "Design Thinking", color: "#FFF6C9" },
  { label: "Tecnologia Educativa (Scratch · mBot · micro:bit · IA)", color: "#D6C9FC" },
  { label: "Gamificação & PBL", color: "#CFF8E8" },
  { label: "Gestão de Projetos EdTech", color: "#C9E7FC" },
  { label: "Produção de Materiais Didáticos", color: "#F9C8D7" },
];

/* ─── Hero floating cards ─────────────────────────────────────────────────── */

const heroCards = [
  {
    bg: "#CFF8E8",
    iconColor: "#2D6A4F",
    title: "Design Instrucional",
    subtitle: "Experiências centradas no aprendente",
    top: "0px",
    right: "0px",
    delay: "0s",
  },
  {
    bg: "#D6C9FC",
    iconColor: "#5B4B8A",
    title: "Tecnologia Educativa",
    subtitle: "IA, robótica e ferramentas digitais",
    top: "140px",
    right: "80px",
    delay: "2s",
  },
  {
    bg: "#C9E7FC",
    iconColor: "#1E5A7A",
    title: "10+ anos de projetos",
    subtitle: "Impacto real, evidência concreta",
    top: "280px",
    right: "20px",
    delay: "4s",
  },
];

/* ─── Stats ───────────────────────────────────────────────────────────────── */

const stats = [
  { value: "10", label: "Projetos realizados", color: "#D6C9FC" },
  { value: "10+", label: "Anos de experiência", color: "#CFF8E8" },
  { value: "4", label: "Níveis de escolaridade", color: "#C9E7FC" },
];

/* ─── Componente principal ───────────────────────────────────────────────── */

export default function HomePage() {
  const router = useRouter();
  const [authChecked, setAuthChecked] = useState(false);

  useEffect(() => {
    const unlocked = localStorage.getItem("portfolio_unlocked");
    if (!unlocked) {
      router.replace("/login");
    } else {
      setAuthChecked(true);
    }
  }, [router]);

  if (!authChecked) {
    return <div className="min-h-screen" style={{ backgroundColor: "#F8FAFC" }} />;
  }

  return (
    <>
      <Nav />
      <main className="pt-[65px]">

        {/* ── HERO ─────────────────────────────────────────────────────────── */}
        <section
          className="relative min-h-[calc(100vh-65px)] flex items-center overflow-hidden px-6 lg:px-12 py-20"
          style={{ backgroundColor: "#F8FAFC" }}
        >
          {/* Background floating shapes */}
          <div
            className="absolute w-96 h-96 rounded-full top-20 -left-20 pointer-events-none"
            style={{
              backgroundColor: "#A7C7E7",
              filter: "blur(80px)",
              opacity: 0.45,
              animation: "float 8s ease-in-out infinite",
            }}
          />
          <div
            className="absolute w-80 h-80 rounded-full bottom-20 right-10 pointer-events-none"
            style={{
              backgroundColor: "#D8C4F1",
              filter: "blur(80px)",
              opacity: 0.4,
              animation: "float 8s ease-in-out infinite",
              animationDelay: "2s",
            }}
          />
          <div
            className="absolute w-64 h-64 rounded-full top-1/2 left-1/3 pointer-events-none"
            style={{
              backgroundColor: "#B8E0D2",
              filter: "blur(80px)",
              opacity: 0.35,
              animation: "float 8s ease-in-out infinite",
              animationDelay: "4s",
            }}
          />

          <div className="relative z-10 mx-auto w-full max-w-7xl">
            <div className="grid lg:grid-cols-2 gap-12 items-center">

              {/* Left — text */}
              <div style={{ animation: "fade-in-up 0.8s ease forwards" }}>
                <div
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6"
                  style={{ backgroundColor: "rgba(214,201,252,0.6)" }}
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#5B4B8A" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                  </svg>
                  <span className="text-sm font-semibold" style={{ color: "#5B4B8A" }}>Portfolio 2026</span>
                </div>

                <h1
                  className="font-bold leading-tight mb-4"
                  style={{
                    fontFamily: "var(--font-poppins, Poppins, sans-serif)",
                    fontSize: "clamp(2.8rem, 7vw, 5.5rem)",
                    color: "#334155",
                  }}
                >
                  Olá, sou{" "}
                  <span
                    style={{
                      background: "linear-gradient(135deg, #A7C7E7 0%, #D8C4F1 100%)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      backgroundClip: "text",
                    }}
                  >
                    Letícia Marinho
                  </span>
                </h1>

                <p
                  className="text-xl mb-4 font-medium"
                  style={{
                    fontFamily: "var(--font-nunito, Nunito, sans-serif)",
                    color: "#64748B",
                  }}
                >
                  Learning Designer · Especialista em Tecnologia Educativa · Educadora STEAM
                </p>

                <p className="text-lg mb-10 max-w-lg" style={{ color: "#64748B" }}>
                  Transformo conhecimento em experiências de aprendizagem que ficam — com tecnologia, criatividade e impacto real.
                </p>

                <div className="flex flex-wrap gap-4">
                  <a
                    href="#trabalho"
                    className="inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-sm font-semibold transition-all duration-200 hover:opacity-90"
                    style={{
                      background: "linear-gradient(135deg, #A7C7E7 0%, #D8C4F1 100%)",
                      color: "#ffffff",
                      boxShadow: "0 8px 25px rgba(167, 199, 231, 0.4)",
                    }}
                  >
                    Ver Projetos
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </a>
                  <a
                    href="mailto:letymarinho21@gmail.com"
                    className="inline-flex items-center rounded-full px-7 py-3.5 text-sm font-semibold transition-all duration-200"
                    style={{
                      backgroundColor: "#FFFFFF",
                      border: "2px solid #E2E8F0",
                      color: "#334155",
                    }}
                  >
                    Contactar
                  </a>
                </div>

                {/* Stats */}
                <div className="flex gap-8 mt-12">
                  {stats.map((s) => (
                    <div key={s.label}>
                      <p
                        className="font-bold text-3xl"
                        style={{
                          fontFamily: "var(--font-poppins, Poppins, sans-serif)",
                          background: "linear-gradient(135deg, #A7C7E7 0%, #D8C4F1 100%)",
                          WebkitBackgroundClip: "text",
                          WebkitTextFillColor: "transparent",
                          backgroundClip: "text",
                        }}
                      >
                        {s.value}
                      </p>
                      <p className="text-xs mt-0.5" style={{ color: "#94A3B8" }}>{s.label}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right — floating cards */}
              <div className="relative hidden lg:block h-[420px]">
                {heroCards.map((card, i) => (
                  <div
                    key={i}
                    className="card absolute p-5 w-64"
                    style={{
                      backgroundColor: "#FFFFFF",
                      top: card.top,
                      right: card.right,
                      animation: `float 8s ease-in-out infinite`,
                      animationDelay: card.delay,
                    }}
                  >
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center mb-3"
                      style={{ backgroundColor: card.bg }}
                    >
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={card.iconColor} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" /><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
                      </svg>
                    </div>
                    <p
                      className="font-semibold text-sm mb-1"
                      style={{ color: "#334155", fontFamily: "var(--font-poppins, Poppins, sans-serif)" }}
                    >
                      {card.title}
                    </p>
                    <p className="text-xs" style={{ color: "#64748B" }}>{card.subtitle}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Scroll indicator */}
          <div
            className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1"
            style={{
              color: "#94A3B8",
              animation: "bounce-subtle 2.5s ease-in-out infinite",
            }}
          >
            <span className="text-xs uppercase tracking-widest" style={{ fontSize: "9px" }}>scroll</span>
            <svg width="16" height="10" viewBox="0 0 16 10" fill="none">
              <path d="M1 1L8 8L15 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </section>

        {/* ── SOBRE / MANIFESTO ─────────────────────────────────────────────── */}
        <section className="py-24 md:py-32 px-6 lg:px-12" style={{ backgroundColor: "#FFFFFF" }}>
          <div className="mx-auto max-w-7xl">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              {/* Left */}
              <div>
                <div
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6"
                  style={{ backgroundColor: "#CFF8E8" }}
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#2D6A4F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" /><circle cx="12" cy="7" r="4" />
                  </svg>
                  <span className="text-sm font-semibold" style={{ color: "#2D6A4F" }}>Sobre Mim</span>
                </div>

                <h2
                  className="font-bold leading-tight mb-6"
                  style={{
                    fontFamily: "var(--font-poppins, Poppins, sans-serif)",
                    fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)",
                    color: "#334155",
                  }}
                >
                  Apaixonada por transformar{" "}
                  <span
                    style={{
                      background: "linear-gradient(135deg, #A7C7E7 0%, #D8C4F1 100%)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      backgroundClip: "text",
                    }}
                  >
                    a educação
                  </span>
                </h2>

                <div className="space-y-4 text-base leading-relaxed" style={{ color: "#64748B" }}>
                  <p>
                    Nos últimos 10 anos, concebi currículos para o K-4, workshops de
                    inteligência artificial, clubes de robótica e programas de
                    literacia digital para seniores.
                  </p>
                  <p>
                    Cada projeto começa com a mesma pergunta: <em>o que precisa de
                    mudar no aprendente depois desta experiência?</em>
                  </p>
                  <p>
                    Acredito que a educação transforma vidas — e trabalho todos os dias
                    para a tornar mais acessível, envolvente e significativa.
                  </p>
                </div>
              </div>

              {/* Right — expertise grid */}
              <div className="grid grid-cols-2 gap-4">
                {[
                  { bg: "#D6C9FC", icon: "#5B4B8A", label: "Design Instrucional" },
                  { bg: "#CFF8E8", icon: "#2D6A4F", label: "Tecnologia Educativa" },
                  { bg: "#F9C8D7", icon: "#8B4557", label: "Gestão de Projetos" },
                  { bg: "#C9E7FC", icon: "#1E5A7A", label: "Literacia Digital" },
                  { bg: "#FFF6C9", icon: "#8B7355", label: "Educação STEAM" },
                  { bg: "#D6C9FC", icon: "#5B4B8A", label: "Inovação Educacional" },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="flex items-center gap-3 p-4 rounded-2xl transition-all duration-200"
                    style={{ backgroundColor: "#F8FAFC", border: "1px solid #E2E8F0" }}
                  >
                    <div
                      className="w-10 h-10 rounded-xl flex-shrink-0 flex items-center justify-center"
                      style={{ backgroundColor: item.bg }}
                    >
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke={item.icon} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" /><path d="M12 8v4l3 3" />
                      </svg>
                    </div>
                    <span className="text-sm font-medium" style={{ color: "#334155" }}>{item.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── PROJETOS ─────────────────────────────────────────────────────── */}
        <section
          id="trabalho"
          className="py-24 px-6 lg:px-12"
          style={{ backgroundColor: "#F8FAFC" }}
        >
          <div className="mx-auto max-w-7xl">
            <div className="text-center mb-16">
              <div
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-4"
                style={{ backgroundColor: "#D6C9FC" }}
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#5B4B8A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
                </svg>
                <span className="text-sm font-semibold" style={{ color: "#5B4B8A" }}>Trabalho Selecionado</span>
              </div>
              <h2
                className="font-bold mb-4"
                style={{
                  fontFamily: "var(--font-poppins, Poppins, sans-serif)",
                  fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)",
                  color: "#334155",
                }}
              >
                {allProjects.length} projetos reais de{" "}
                <span
                  style={{
                    background: "linear-gradient(135deg, #A7C7E7 0%, #D8C4F1 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  design instrucional
                </span>
              </h2>
              <p className="text-base max-w-xl mx-auto" style={{ color: "#64748B" }}>
                Cada projeto é apresentado como caso de estudo com contexto, abordagem, ferramentas e resultados reais.
              </p>
            </div>

            {/* Cards grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {allProjects.map((project, i) => (
                <ProjectBlock
                  key={project.number}
                  number={project.number}
                  title={project.title}
                  category={project.category}
                  tags={project.tags}
                  description={project.shortDescription}
                  image={project.heroImage}
                  gradient={project.heroGradient}
                  reverse={project.reverse}
                  slug={project.slug}
                  colorIndex={i}
                />
              ))}
            </div>
          </div>
        </section>

        {/* ── ABORDAGEM ────────────────────────────────────────────────────── */}
        <section
          id="abordagem"
          className="py-24 md:py-32 px-6 lg:px-12"
          style={{ backgroundColor: "#FFFFFF" }}
        >
          <div className="mx-auto max-w-7xl">
            <div className="text-center mb-16">
              <div
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-4"
                style={{ backgroundColor: "#C9E7FC" }}
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#1E5A7A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10" /><path d="M12 8v4l3 3" />
                </svg>
                <span className="text-sm font-semibold" style={{ color: "#1E5A7A" }}>Abordagem</span>
              </div>
              <h2
                className="font-bold"
                style={{
                  fontFamily: "var(--font-poppins, Poppins, sans-serif)",
                  fontSize: "clamp(1.8rem, 3.5vw, 2.5rem)",
                  color: "#334155",
                }}
              >
                5 pilares que guiam o meu trabalho
              </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
              {pillars.map((pillar) => (
                <div
                  key={pillar.symbol}
                  className="card p-6 text-center"
                  style={{ backgroundColor: "#FFFFFF" }}
                >
                  <div
                    className="w-12 h-12 rounded-2xl flex items-center justify-center mx-auto mb-4 text-xl font-bold"
                    style={{ backgroundColor: pillar.color.bg, color: pillar.color.text }}
                  >
                    {pillar.symbol}
                  </div>
                  <h4
                    className="font-semibold text-sm mb-2"
                    style={{ color: "#334155", fontFamily: "var(--font-poppins, Poppins, sans-serif)" }}
                  >
                    {pillar.title}
                  </h4>
                  <p className="text-xs leading-relaxed" style={{ color: "#64748B" }}>
                    {pillar.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── COMPETÊNCIAS ─────────────────────────────────────────────────── */}
        <section
          className="py-24 md:py-32 px-6 lg:px-12"
          style={{ backgroundColor: "#F8FAFC" }}
        >
          <div className="mx-auto max-w-7xl">
            <div className="text-center mb-16">
              <div
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-4"
                style={{ backgroundColor: "#FFF6C9" }}
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#8B7355" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
                </svg>
                <span className="text-sm font-semibold" style={{ color: "#8B7355" }}>Competências</span>
              </div>
              <h2
                className="font-bold"
                style={{
                  fontFamily: "var(--font-poppins, Poppins, sans-serif)",
                  fontSize: "clamp(1.8rem, 3.5vw, 2.5rem)",
                  color: "#334155",
                }}
              >
                Áreas de especialização
              </h2>
            </div>

            <div className="flex flex-wrap gap-3 justify-center">
              {skills.map((skill) => (
                <span
                  key={skill.label}
                  className="px-5 py-3 rounded-full text-sm font-semibold transition-all duration-200"
                  style={{
                    backgroundColor: skill.color,
                    color: "#334155",
                    fontFamily: "var(--font-nunito, Nunito, sans-serif)",
                  }}
                >
                  {skill.label}
                </span>
              ))}
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
