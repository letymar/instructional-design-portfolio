'use client';

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import ProjectBlock from "./components/ProjectBlock";
import RevealWrapper from "./components/RevealWrapper";
import BioModal from "./components/BioModal";
import { projects as allProjects } from "@/lib/projects";

/* ─── Pilares ─────────────────────────────────────────────────────────────── */

const pillars = [
  { symbol: "①", title: "Design Instrucional", description: "Análise de necessidades, objetivos mensuráveis e avaliação de impacto real.", color: { bg: "#D6C9FC", text: "#5B4B8A" } },
  { symbol: "②", title: "Aprendizagem Ativa", description: "PBL, gamificação, hands-on e prática deliberada como metodologias centrais.", color: { bg: "#CFF8E8", text: "#2D6A4F" } },
  { symbol: "③", title: "Tecnologia Educativa", description: "Ferramentas que ampliam — e não substituem — a aprendizagem humana.", color: { bg: "#C9E7FC", text: "#1E5A7A" } },
  { symbol: "④", title: "Experiência do Utilizador", description: "Clareza, fluxo e redução de fricção em cada momento da experiência.", color: { bg: "#F9C8D7", text: "#8B4557" } },
  { symbol: "⑤", title: "Impacto Real", description: "Evidência, iteração contínua e mudança comportamental verificável.", color: { bg: "#FFF6C9", text: "#8B7355" } },
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

/* ─── Stats ───────────────────────────────────────────────────────────────── */

const stats = [
  { value: "10", label: "Projetos realizados", color: "#D6C9FC" },
  { value: "10+", label: "Anos de experiência", color: "#CFF8E8" },
  { value: "100%", label: "Criados do zero", color: "#C9E7FC" },
];

/* ─── Componente principal ───────────────────────────────────────────────── */

export default function HomePage() {
  const router = useRouter();
  const [authChecked, setAuthChecked] = useState(false);
  const [bioOpen, setBioOpen] = useState(false);

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

      {/* Bio Modal */}
      <BioModal isOpen={bioOpen} onClose={() => setBioOpen(false)} />

      <main className="pt-[65px]">

        {/* ── HERO — Laboratório Digital ───────────────────────────────────── */}
        <section
          className="relative min-h-[calc(100vh-65px)] flex flex-col items-center justify-center text-center overflow-hidden px-6 py-20"
          style={{ backgroundColor: "#F8FAFC" }}
        >
          {/* Animated background shapes */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            <div style={{ position: "absolute", width: "600px", height: "600px", borderRadius: "50%", background: "radial-gradient(circle, rgba(167,199,231,0.35) 0%, transparent 70%)", top: "-100px", left: "-150px", animation: "float 10s ease-in-out infinite" }} />
            <div style={{ position: "absolute", width: "500px", height: "500px", borderRadius: "50%", background: "radial-gradient(circle, rgba(216,196,241,0.3) 0%, transparent 70%)", bottom: "-80px", right: "-100px", animation: "float 12s ease-in-out infinite", animationDelay: "3s" }} />
            <div style={{ position: "absolute", width: "350px", height: "350px", borderRadius: "50%", background: "radial-gradient(circle, rgba(184,224,210,0.28) 0%, transparent 70%)", top: "30%", left: "55%", animation: "float 9s ease-in-out infinite", animationDelay: "6s" }} />
          </div>

          {/* Sistema ativo badge */}
          <div
            className="relative z-10 inline-flex items-center gap-2 px-4 py-2 rounded-full mb-10"
            style={{
              backgroundColor: "rgba(214,201,252,0.5)",
              border: "1px solid rgba(214,201,252,0.8)",
              animation: "fade-in-up 0.6s ease forwards",
            }}
          >
            <span
              className="w-2 h-2 rounded-full"
              style={{
                backgroundColor: "#4ADE80",
                animation: "pulse-soft 2s ease-in-out infinite",
              }}
            />
            <span className="text-xs font-semibold tracking-wider" style={{ color: "#5B4B8A" }}>
              SISTEMA ATIVO
            </span>
          </div>

          {/* Main heading */}
          <div
            className="relative z-10"
            style={{ animation: "fade-in-up 0.7s ease 0.1s both forwards" }}
          >
            <h1
              className="font-bold leading-none mb-2 tracking-tight"
              style={{
                fontFamily: "var(--font-poppins, Poppins, sans-serif)",
                fontSize: "clamp(3.5rem, 11vw, 9rem)",
                background: "linear-gradient(135deg, #A7C7E7 30%, #D8C4F1 70%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              LABORATÓRIO
            </h1>
            <h1
              className="font-bold leading-none tracking-tight"
              style={{
                fontFamily: "var(--font-poppins, Poppins, sans-serif)",
                fontSize: "clamp(3.5rem, 11vw, 9rem)",
                color: "#334155",
              }}
            >
              DIGITAL
            </h1>
          </div>

          {/* Subtitle */}
          <p
            className="relative z-10 text-lg md:text-xl mt-6 mb-10 max-w-md"
            style={{
              color: "#64748B",
              animation: "fade-in-up 0.7s ease 0.25s both forwards",
            }}
          >
            Explora experiências de aprendizagem criativas
          </p>

          {/* Cientista badge — clickable */}
          <button
            onClick={() => setBioOpen(true)}
            className="relative z-10 flex items-center gap-3 px-5 py-3 rounded-2xl transition-all duration-300 group"
            style={{
              backgroundColor: "#FFFFFF",
              boxShadow: "0 8px 30px rgba(31,35,50,0.10)",
              border: "1px solid #E2E8F0",
              animation: "fade-in-up 0.7s ease 0.4s both forwards",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.boxShadow = "0 12px 40px rgba(139,124,246,0.2)";
              e.currentTarget.style.borderColor = "#D6C9FC";
              e.currentTarget.style.transform = "translateY(-2px)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.boxShadow = "0 8px 30px rgba(31,35,50,0.10)";
              e.currentTarget.style.borderColor = "#E2E8F0";
              e.currentTarget.style.transform = "translateY(0)";
            }}
          >
            {/* Avatar */}
            <div
              className="w-9 h-9 rounded-xl overflow-hidden flex-shrink-0"
              style={{ backgroundColor: "#D6C9FC" }}
            >
              <img
                src="/leticia.jpeg"
                alt="Letícia Marinho"
                className="w-full h-full object-cover"
                onError={(e) => {
                  (e.currentTarget as HTMLImageElement).style.display = "none";
                }}
              />
            </div>
            <div className="text-left">
              <p className="text-xs font-bold uppercase tracking-wider" style={{ color: "#8B7CF6" }}>
                Cientista
              </p>
              <p className="text-sm font-semibold" style={{ color: "#334155" }}>
                Letícia Marinho
              </p>
            </div>
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#94A3B8"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="ml-1 transition-transform duration-200 group-hover:translate-x-0.5"
            >
              <path d="M9 18l6-6-6-6" />
            </svg>
          </button>

          {/* Scroll hint */}
          <div
            className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5"
            style={{
              color: "#94A3B8",
              animation: "bounce-subtle 2.5s ease-in-out infinite",
            }}
          >
            <span className="text-xs uppercase tracking-[0.18em]" style={{ fontSize: "9px" }}>
              Descer para explorar
            </span>
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
                    Trabalho no <strong style={{ color: "#334155" }}>CDI Portugal</strong>, onde desenvolvo
                    e coordeno projetos educativos de programação, robótica e literacia
                    digital no Centro de Cidadania Digital de Valongo e no Centro de
                    Inovação Carlos Fiolhais, na Maia.
                  </p>
                  <p>
                    Especializo-me no desenho pedagógico de atividades STEAM,
                    clubes tecnológicos e projetos com forte componente prática —
                    robótica educativa, inteligência artificial, gamificação e
                    cidadania digital.
                  </p>
                </div>

                <button
                  onClick={() => setBioOpen(true)}
                  className="mt-8 inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition-all duration-200 hover:opacity-90"
                  style={{
                    background: "linear-gradient(135deg, #A7C7E7 0%, #D8C4F1 100%)",
                    color: "#ffffff",
                    boxShadow: "0 8px 25px rgba(167, 199, 231, 0.4)",
                  }}
                >
                  Ler bio completa
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </button>
              </RevealWrapper>

              {/* Stats */}
              <RevealWrapper delay={150}>
                <div className="grid grid-cols-2 gap-4">
                  {stats.map((s) => (
                    <div
                      key={s.label}
                      className="card p-6 text-center"
                      style={{ backgroundColor: "#FFFFFF" }}
                    >
                      <p
                        className="font-bold text-4xl mb-1"
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
                      <p className="text-xs font-medium" style={{ color: "#64748B" }}>{s.label}</p>
                    </div>
                  ))}
                  <div
                    className="card p-6 col-span-2"
                    style={{ backgroundColor: "#D6C9FC" }}
                  >
                    <p
                      className="font-semibold text-sm italic"
                      style={{ color: "#5B4B8A" }}
                    >
                      &ldquo;A educação deve ser prática, significativa e conectada com o mundo real.&rdquo;
                    </p>
                  </div>
                </div>
              </RevealWrapper>
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
            <RevealWrapper>
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
                  Cada projeto é um caso de estudo com contexto, abordagem, ferramentas e resultados reais.
                </p>
              </div>
            </RevealWrapper>

            {/* Cards grid com stagger reveal */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {allProjects.map((project, i) => (
                <RevealWrapper key={project.number} delay={i * 80}>
                  <ProjectBlock
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
                </RevealWrapper>
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
            <RevealWrapper>
              <div className="text-center mb-16">
                <div
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-4"
                  style={{ backgroundColor: "#C9E7FC" }}
                >
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
            </RevealWrapper>

            <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
              {pillars.map((pillar, i) => (
                <RevealWrapper key={pillar.symbol} delay={i * 100}>
                  <div
                    className="card p-6 text-center h-full"
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
                </RevealWrapper>
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
            <RevealWrapper>
              <div className="text-center mb-16">
                <div
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-4"
                  style={{ backgroundColor: "#FFF6C9" }}
                >
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
            </RevealWrapper>

            <RevealWrapper delay={100}>
              <div className="flex flex-wrap gap-3 justify-center">
                {skills.map((skill) => (
                  <span
                    key={skill.label}
                    className="px-5 py-3 rounded-full text-sm font-semibold transition-all duration-300 hover:-translate-y-1 hover:shadow-md cursor-default"
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
            </RevealWrapper>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
