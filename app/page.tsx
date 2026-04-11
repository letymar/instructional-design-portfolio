'use client';

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import SectionWrapper from "./components/SectionWrapper";
import ProjectBlock from "./components/ProjectBlock";
import { projects as allProjects } from "@/lib/projects";

/* ─── Pilares da abordagem ────────────────────────────────────────────────── */

const pillars = [
  {
    symbol: "①",
    title: "Design Instrucional",
    description:
      "Análise de necessidades, objetivos mensuráveis e avaliação de impacto real.",
  },
  {
    symbol: "②",
    title: "Aprendizagem Ativa",
    description:
      "PBL, gamificação, hands-on e prática deliberada como metodologias centrais.",
  },
  {
    symbol: "③",
    title: "Tecnologia Educativa",
    description:
      "Ferramentas que ampliam — e não substituem — a aprendizagem humana.",
  },
  {
    symbol: "④",
    title: "Experiência do Utilizador",
    description:
      "Clareza, fluxo e redução de fricção em cada momento da experiência.",
  },
  {
    symbol: "⑤",
    title: "Impacto Real",
    description:
      "Evidência, iteração contínua e mudança comportamental verificável.",
  },
];

/* ─── Competências ────────────────────────────────────────────────────────── */

const skills = [
  { label: "Instructional Design", indent: false, large: true },
  { label: "Learning Experience Design", indent: true, large: false },
  { label: "Curriculum Development", indent: false, large: true },
  { label: "Facilitação & Formação de Professores", indent: true, large: false },
  { label: "Design Thinking", indent: false, large: true },
  { label: "Tecnologia Educativa (Scratch · mBot · micro:bit · IA)", indent: true, large: false },
  { label: "Gamificação & PBL", indent: false, large: true },
  { label: "Gestão de Projetos EdTech", indent: true, large: false },
  { label: "Produção de Materiais Didáticos", indent: false, large: true },
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

  // Evita flash de conteúdo antes da verificação de auth
  if (!authChecked) {
    return <div className="min-h-screen" style={{ backgroundColor: "#0B0B0F" }} />;
  }

  return (
    <>
      <Nav />
      <main className="pt-[65px]">

        {/* ── HERO ─────────────────────────────────────────────────────────── */}
        <section
          className="relative flex flex-col justify-center min-h-[calc(100vh-65px)] px-6 md:px-12"
          style={{
            background: "linear-gradient(180deg, #0F0F1A 0%, #0B0B0F 70%)",
          }}
        >
          <div
            className="mx-auto w-full max-w-6xl"
            style={{ animation: "fade-in-up 0.8s ease forwards" }}
          >
            {/* Label */}
            <p
              className="text-xs uppercase tracking-[0.22em] mb-8"
              style={{ color: "#7A7A8C" }}
            >
              Learning Designer · Lisboa · 10+ anos de experiência
            </p>

            {/* Nome principal */}
            <h1
              className="mb-6 leading-[0.95]"
              style={{
                fontFamily: "var(--font-playfair), Georgia, serif",
                fontWeight: 400,
                fontSize: "clamp(3.5rem, 9vw, 8rem)",
                color: "#F0EFE8",
              }}
            >
              Letícia
              <br />
              Marinho
            </h1>

            {/* Linha de role */}
            <p
              className="text-lg md:text-xl mb-4 leading-relaxed"
              style={{ color: "#7A7A8C" }}
            >
              Criadora de Experiências de Aprendizagem Inovadoras
            </p>

            {/* Frase manifesto */}
            <p
              className="text-xl md:text-2xl mb-12 italic"
              style={{
                fontFamily: "var(--font-playfair), Georgia, serif",
                color: "#8B7CF6",
              }}
            >
              &ldquo;Transformo conhecimento em experiências que ficam.&rdquo;
            </p>

            {/* CTAs */}
            <div className="flex items-center gap-4">
              <a
                href="#trabalho"
                className="rounded-full px-6 py-2.5 text-sm font-medium tracking-wide transition-opacity duration-150 hover:opacity-90"
                style={{ backgroundColor: "#8B7CF6", color: "#ffffff" }}
              >
                Ver Projetos
              </a>
              <a
                href="mailto:letymarinho21@gmail.com"
                className="rounded-full px-6 py-2.5 text-sm font-medium tracking-wide transition-all duration-200"
                style={{
                  border: "1px solid rgba(255,255,255,0.1)",
                  color: "#F0EFE8",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = "#8B7CF6";
                  e.currentTarget.style.color = "#8B7CF6";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "rgba(255,255,255,0.1)";
                  e.currentTarget.style.color = "#F0EFE8";
                }}
              >
                Contacto
              </a>
            </div>
          </div>

          {/* Scroll indicator */}
          <div
            className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1"
            style={{
              color: "#7A7A8C",
              animation: "bounce-subtle 2.5s ease-in-out infinite",
            }}
          >
            <span className="text-xs uppercase tracking-widest" style={{ fontSize: "9px" }}>
              scroll
            </span>
            <svg
              width="16"
              height="10"
              viewBox="0 0 16 10"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1 1L8 8L15 1"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </section>

        {/* ── MANIFESTO ────────────────────────────────────────────────────── */}
        <section className="py-32 md:py-48 px-6 md:px-12" style={{ backgroundColor: "#0B0B0F" }}>
          <div className="mx-auto max-w-6xl">
            <p
              className="mb-10 leading-tight"
              style={{
                fontFamily: "var(--font-playfair), Georgia, serif",
                fontWeight: 400,
                fontSize: "clamp(1.8rem, 4vw, 3.2rem)",
                color: "#F0EFE8",
              }}
            >
              Aprendizagem é uma experiência,
              <br />
              não um evento.
            </p>

            <p
              className="text-base md:text-lg leading-relaxed mb-10 max-w-2xl"
              style={{ color: "#7A7A8C" }}
            >
              Nos últimos 10 anos, concebi currículos para o K-4, workshops de
              inteligência artificial, clubes de robótica e programas de
              literacia digital para seniores. Cada projeto começa com a mesma
              pergunta: o que precisa de mudar no aprendente depois desta
              experiência?
            </p>

            <p
              className="text-xl md:text-2xl italic"
              style={{
                fontFamily: "var(--font-playfair), Georgia, serif",
                color: "#8B7CF6",
              }}
            >
              Design que serve o ser humano, não o sistema.
            </p>
          </div>
        </section>

        {/* ── PROJETOS ─────────────────────────────────────────────────────── */}
        <section
          id="trabalho"
          className="px-6 md:px-12 pb-8"
          style={{ backgroundColor: "#0B0B0F" }}
        >
          <div className="mx-auto max-w-6xl">
            {/* Cabeçalho da secção */}
            <div
              className="flex items-end justify-between mb-0 pb-6"
              style={{ borderBottom: "1px solid rgba(255,255,255,0.05)" }}
            >
              <p
                className="text-xs uppercase tracking-[0.22em]"
                style={{ color: "#7A7A8C" }}
              >
                Trabalho Selecionado
              </p>
              <span className="text-xs" style={{ color: "#7A7A8C" }}>
                {allProjects.length} projetos
              </span>
            </div>

            {/* Lista de projetos */}
            {allProjects.map((project) => (
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
              />
            ))}
          </div>
        </section>

        {/* ── ABORDAGEM ────────────────────────────────────────────────────── */}
        <section
          id="abordagem"
          className="py-24 md:py-32 px-6 md:px-12"
          style={{ backgroundColor: "#14141A" }}
        >
          <div className="mx-auto max-w-6xl">
            <p
              className="text-xs uppercase tracking-[0.22em] mb-12"
              style={{ color: "#7A7A8C" }}
            >
              Abordagem
            </p>

            <div
              className="grid grid-cols-1 md:grid-cols-5"
              style={{ gap: "0" }}
            >
              {pillars.map((pillar, i) => (
                <div
                  key={pillar.symbol}
                  className="py-6 md:py-0 md:px-8"
                  style={{
                    borderLeft:
                      i > 0 ? "1px solid rgba(255,255,255,0.05)" : "none",
                    borderTop:
                      i > 0
                        ? "1px solid rgba(255,255,255,0.05)"
                        : "none",
                  }}
                >
                  <span
                    className="block text-2xl mb-4"
                    style={{ color: "#8B7CF6" }}
                  >
                    {pillar.symbol}
                  </span>
                  <h4
                    className="text-sm font-medium mb-2 leading-snug"
                    style={{ color: "#F0EFE8" }}
                  >
                    {pillar.title}
                  </h4>
                  <p className="text-xs leading-relaxed" style={{ color: "#7A7A8C" }}>
                    {pillar.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── COMPETÊNCIAS ─────────────────────────────────────────────────── */}
        <section
          className="py-24 md:py-32 px-6 md:px-12"
          style={{ backgroundColor: "#0B0B0F" }}
        >
          <div className="mx-auto max-w-6xl">
            <p
              className="text-xs uppercase tracking-[0.22em] mb-16"
              style={{ color: "#7A7A8C" }}
            >
              Competências
            </p>

            <ul className="space-y-3">
              {skills.map((skill, i) => (
                <li
                  key={i}
                  className="transition-colors duration-150 hover:opacity-80"
                  style={{
                    paddingLeft: skill.indent ? "2rem" : "0",
                    fontFamily: skill.large
                      ? "var(--font-playfair), Georgia, serif"
                      : "var(--font-geist-sans), Arial, sans-serif",
                    fontSize: skill.large
                      ? "clamp(1.25rem, 2.5vw, 1.75rem)"
                      : "clamp(1rem, 2vw, 1.25rem)",
                    color: skill.large ? "#F0EFE8" : "#7A7A8C",
                    fontWeight: skill.large ? 400 : 400,
                    cursor: "default",
                  }}
                >
                  {skill.label}
                </li>
              ))}
            </ul>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
