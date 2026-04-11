'use client';

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import SectionWrapper from "./components/SectionWrapper";
import ProjectBlock from "./components/ProjectBlock";

/* ─── Dados dos projetos ─────────────────────────────────────────────────── */

const projects = [
  {
    number: "01",
    title: "AECs Programação e Robótica",
    category: "Currículo · K-4",
    tags: ["Curriculum Design", "Escopo & Sequência", "Manual do Professor"],
    description:
      "Currículo completo de programação e robótica para o 1.º ao 4.º ano — 4 planificações anuais, manual do professor, guia Scratch e sub-projeto de robótica sustentável com artefactos reais dos alunos.",
    image: "/projects/aecs-robotica-1.jpg",
    reverse: false,
  },
  {
    number: "02",
    title: "Clube de Robótica",
    category: "PBL · STEM",
    tags: ["Project-Based Learning", "Competição", "STEM"],
    description:
      "Clube de robótica sumo para jovens dos 13 aos 18 anos — 17 sessões, arena personalizada em DXF, robots impressos em 3D e uma DemoDay final com júri externo.",
    gradient: "linear-gradient(135deg, #0D0D20 0%, #161030 60%, #0D1828 100%)",
    reverse: true,
  },
  {
    number: "03",
    title: "VibeCoding — Cria o teu Jogo",
    category: "Workshop · IA",
    tags: ["Inteligência Artificial", "Game-Based Learning", "Facilitação"],
    description:
      "Workshop de criação de jogos com IA — sessão de 2h30 usando Gemini e CodePen, com guião do facilitador e ficha do participante desenhados do zero para jovens dos 15 aos 18 anos.",
    gradient: "linear-gradient(135deg, #0A1A18 0%, #0D2420 60%, #0A1A10 100%)",
    reverse: false,
  },
  {
    number: "04",
    title: "Atividades Tecnológicas",
    category: "Maker Education",
    tags: ["Maker Education", "Computação Física", "Design de Eventos"],
    description:
      "Série de atividades maker entregues no CICF e CCDV — Rabbot de Páscoa, mBot com IA climática, robô de equilíbrio, pulseira de código binário e Makey Makey musical.",
    image: "/projects/atividades-maker-1.jpg",
    reverse: true,
  },
  {
    number: "05",
    title: "Rádio CCD",
    category: "Workshop · Produção",
    tags: ["Literacia Mediática", "Produção de Áudio", "Design de Workshop"],
    description:
      "Workshop de rádio usando Mixxx e RodeCaster Pro — os jovens aprendem a conceber, produzir e emitir o seu próprio programa ao vivo, do conceito ao ar.",
    gradient: "linear-gradient(135deg, #0D0818 0%, #1A0A28 60%, #0A0818 100%)",
    reverse: false,
  },
  {
    number: "06",
    title: "CoderDojo",
    category: "Aprendizagem Não-Formal",
    tags: ["Comunidade", "Programação", "micro:bit"],
    description:
      "Clube comunitário de programação com 17+ sessões documentadas. Liderado por voluntários, orientado por projetos, com evidência de progressão real dos participantes ao longo do tempo.",
    image: "/projects/coderdojo-1.jpg",
    reverse: true,
  },
  {
    number: "07",
    title: "Campo de Férias REN",
    category: "L&D Corporativo",
    tags: ["L&D", "Design de Proposta", "Projeto de Cliente"],
    description:
      "Campo de férias tecnológico e de IA para a REN — proposta completa e materiais de aprendizagem concebidos e entregues para um cliente corporativo com requisitos de impacto mensuráveis.",
    gradient: "linear-gradient(135deg, #081018 0%, #0D1828 60%, #081018 100%)",
    reverse: false,
  },
  {
    number: "08",
    title: "Literacia Digital Sénior",
    category: "Aprendizagem de Adultos",
    tags: ["Acessibilidade", "Literacia Digital", "Design Inclusivo"],
    description:
      "Programa de literacia digital para seniores em 6 sessões (2024–2025) — concebido para baixa fluência digital, com progressão desde o básico até à criação de vídeo com telemóvel.",
    image: "/projects/seniores-1.jpg",
    reverse: true,
  },
  {
    number: "09",
    title: "InGaming Vai às Escolas",
    category: "EdTech · Publicação",
    tags: ["Design de Conteúdo", "Publicação", "Estratégia EdTech"],
    description:
      "Programa nacional de educação pelo jogo com ebooks para professores e pais — estratégia instrucional e design de conteúdo para rollout em escolas de todo o país.",
    gradient: "linear-gradient(135deg, #180A00 0%, #281500 60%, #180A00 100%)",
    reverse: false,
  },
  {
    number: "10",
    title: "Apps for Good",
    category: "Coding Education · Premiação",
    tags: ["Apps for Good", "Coding", "Impacto Social", "Competição"],
    description:
      "Programa de programação com impacto social para jovens — a equipa venceu o Prémio de Mérito 'Melhor Trabalho' 2023/2024, com apresentação em palco e reconhecimento regional.",
    image: "/projects/apps-for-good-stage.jpg",
    reverse: true,
  },
];

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
                {projects.length} projetos
              </span>
            </div>

            {/* Lista de projetos */}
            {projects.map((project) => (
              <ProjectBlock key={project.number} {...project} />
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
