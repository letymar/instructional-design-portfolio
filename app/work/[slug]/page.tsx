import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { getProjectBySlug, getAllSlugs } from "@/lib/projects";
import type { CaseStudy } from "@/lib/projects";
import ImageGallery from "@/app/components/ImageGallery";

export function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

interface Props {
  params: Promise<{ slug: string }>;
}

/* ─── Section definitions ─────────────────────────────────────────────────── */
const sections: Array<{
  key: keyof CaseStudy;
  num: string;
  label: string;
  tagline: string;
  bg: string;
  accent: string;
}> = [
  { key: "contexto",   num: "01", label: "Contexto",               tagline: "O porquê do projeto",              bg: "#FFFFFF",   accent: "#7B68EE" },
  { key: "objetivo",   num: "02", label: "Objetivo",                tagline: "O que se queria alcançar",         bg: "#F5F3FF",   accent: "#5B4B8A" },
  { key: "meuPapel",   num: "03", label: "O Meu Papel",             tagline: "O que fiz concretamente",          bg: "#FFFFFF",   accent: "#34D399" },
  { key: "abordagem",  num: "04", label: "Abordagem Instrucional",  tagline: "Como desenhei a experiência",      bg: "#F0FDFA",   accent: "#0D9488" },
  { key: "resultados", num: "05", label: "Resultados e Impacto",    tagline: "O que mudou de verdade",           bg: "#F5F3FF",   accent: "#7B68EE" },
  { key: "materiais",  num: "06", label: "Materiais Produzidos",    tagline: "O que existe para mostrar",        bg: "#FFFFFF",   accent: "#F472B6" },
];

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) notFound();

  const { title, category, number, tags, caseStudy, gallery, docs, heroImage, heroGradient } = project;

  return (
    <div style={{ backgroundColor: "#F8FAFC", minHeight: "100vh" }}>

      {/* ── STICKY TOP NAV ─────────────────────────────────────────────────── */}
      <div
        className="sticky top-0 z-40 backdrop-blur-xl"
        style={{ backgroundColor: "rgba(248,250,252,0.95)", borderBottom: "1px solid rgba(91,75,138,0.08)", boxShadow: "0 2px 16px rgba(91,75,138,0.06)" }}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-3 flex items-center justify-between">
          <Link href="/#trabalho" className="inline-flex items-center gap-2 text-sm font-medium transition-colors hover:text-[#5B4B8A]" style={{ color: "#64748B" }}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M19 12H5M5 12l7-7M5 12l7 7" />
            </svg>
            Todos os Projetos
          </Link>
          <div className="flex items-center gap-3">
            <span
              className="section-label-pill"
              style={{ backgroundColor: "#D6C9FC", color: "#5B4B8A" }}
            >
              Projeto {number}
            </span>
          </div>
        </div>
      </div>

      {/* ── HERO ─────────────────────────────────────────────────────────────── */}
      <div className="relative w-full overflow-hidden" style={{ height: "clamp(320px, 52vh, 600px)" }}>
        {heroImage ? (
          <Image src={heroImage} alt={title} fill className="object-cover" sizes="100vw" priority />
        ) : (
          <div className="absolute inset-0" style={{ background: heroGradient ?? "linear-gradient(135deg, #D6C9FC 0%, #C9E7FC 100%)" }} />
        )}
        {/* Dark gradient overlay */}
        <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom, rgba(0,0,0,0.12) 0%, rgba(0,0,0,0.65) 100%)" }} />
        {/* Hero text on image */}
        <div className="absolute bottom-0 left-0 right-0 px-6 lg:px-16 pb-12">
          <div className="max-w-7xl mx-auto">
            <p className="text-xs font-bold uppercase tracking-[0.22em] mb-3" style={{ color: "rgba(255,255,255,0.7)" }}>
              {category}
            </p>
            <h1
              className="font-bold leading-tight mb-4"
              style={{ fontFamily: "var(--font-poppins, Poppins, sans-serif)", fontSize: "clamp(1.8rem, 4.5vw, 3.5rem)", color: "#FFFFFF" }}
            >
              {title}
            </h1>
            <div className="flex flex-wrap gap-2">
              {tags.map((tag) => (
                <span key={tag} className="text-xs px-3 py-1.5 rounded-full font-medium" style={{ backgroundColor: "rgba(255,255,255,0.18)", color: "#FFFFFF", border: "1px solid rgba(255,255,255,0.25)", backdropFilter: "blur(4px)" }}>
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
        {/* Project number watermark */}
        <div
          className="absolute top-8 right-8 font-bold select-none"
          style={{ fontFamily: "var(--font-poppins, Poppins, sans-serif)", fontSize: "clamp(5rem, 12vw, 10rem)", color: "rgba(255,255,255,0.1)", lineHeight: 1 }}
        >
          {number}
        </div>
      </div>

      {/* ── CASE STUDY SECTIONS ───────────────────────────────────────────────── */}
      {sections.map(({ key, num, label, tagline, bg, accent }) => {
        const content = caseStudy[key];
        if (!content || typeof content !== "string") return null;

        return (
          <section key={key} style={{ backgroundColor: bg }}>
            <div className="max-w-7xl mx-auto px-6 lg:px-16 py-16 md:py-20">
              <div className="grid lg:grid-cols-[220px_1fr] gap-10 lg:gap-20">
                {/* Left: label */}
                <div className="lg:pt-1">
                  <p
                    className="font-bold mb-1 leading-none"
                    style={{
                      fontFamily: "var(--font-poppins, Poppins, sans-serif)",
                      fontSize: "clamp(3.5rem, 6vw, 5rem)",
                      color: `${accent}22`,
                    }}
                  >
                    {num}
                  </p>
                  <div className="h-0.5 w-8 mb-3 rounded-full" style={{ backgroundColor: accent }} />
                  <p
                    className="font-bold text-base mb-1"
                    style={{ fontFamily: "var(--font-poppins, Poppins, sans-serif)", color: accent }}
                  >
                    {label}
                  </p>
                  <p className="text-xs leading-relaxed" style={{ color: "#94A3B8" }}>
                    {tagline}
                  </p>
                </div>

                {/* Right: content */}
                <div>
                  {/* Resultados gets a highlighted first sentence */}
                  {key === "resultados" ? (
                    <>
                      <p
                        className="font-semibold mb-5 leading-snug"
                        style={{
                          fontFamily: "var(--font-poppins, Poppins, sans-serif)",
                          fontSize: "clamp(1.1rem, 2vw, 1.35rem)",
                          color: "#1E293B",
                        }}
                      >
                        {content.split(".")[0]}.
                      </p>
                      <p className="text-base leading-loose" style={{ color: "#475569" }}>
                        {content.split(".").slice(1).join(".").trim()}
                      </p>
                    </>
                  ) : (
                    <p className="text-base leading-loose" style={{ color: "#475569", maxWidth: "65ch" }}>
                      {content}
                    </p>
                  )}

                  {/* Abordagem gets a highlight box */}
                  {key === "abordagem" && (
                    <div
                      className="mt-6 rounded-2xl px-6 py-5 border-l-4"
                      style={{ backgroundColor: "#F0FDFA", borderLeftColor: "#34D399" }}
                    >
                      <p className="text-sm font-semibold mb-1" style={{ color: "#065F46" }}>Metodologia aplicada</p>
                      <p className="text-sm" style={{ color: "#0D9488" }}>
                        Design Instrucional centrado no aprendente, com ciclos de análise → design → desenvolvimento → implementação → avaliação.
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </div>
            {/* Divider */}
            <div className="max-w-7xl mx-auto px-6 lg:px-16">
              <div className="h-px" style={{ backgroundColor: "rgba(91,75,138,0.06)" }} />
            </div>
          </section>
        );
      })}

      {/* ── FERRAMENTAS ───────────────────────────────────────────────────────── */}
      <section style={{ backgroundColor: "#FAFAF0" }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-16 py-16 md:py-20">
          <div className="grid lg:grid-cols-[220px_1fr] gap-10 lg:gap-20">
            <div className="lg:pt-1">
              <p className="font-bold mb-1 leading-none" style={{ fontFamily: "var(--font-poppins)", fontSize: "clamp(3.5rem, 6vw, 5rem)", color: "#FBBF2422" }}>
                07
              </p>
              <div className="h-0.5 w-8 mb-3 rounded-full" style={{ backgroundColor: "#FBBF24" }} />
              <p className="font-bold text-base mb-1" style={{ fontFamily: "var(--font-poppins)", color: "#78350F" }}>
                Ferramentas
              </p>
              <p className="text-xs" style={{ color: "#94A3B8" }}>O que usei para criar</p>
            </div>
            <div className="flex flex-wrap gap-3 content-start">
              {caseStudy.ferramentas.map((tool) => (
                <span
                  key={tool}
                  className="flex items-center gap-2 text-sm font-semibold px-5 py-3 rounded-2xl transition-all duration-200 hover:-translate-y-1"
                  style={{ backgroundColor: "#FFFFFF", border: "2px solid #FFF6C9", color: "#1E293B", boxShadow: "0 2px 8px rgba(251,191,36,0.12)" }}
                >
                  <span style={{ width: 6, height: 6, borderRadius: "50%", backgroundColor: "#FBBF24", display: "inline-block", flexShrink: 0 }} />
                  {tool}
                </span>
              ))}
            </div>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-6 lg:px-16">
          <div className="h-px" style={{ backgroundColor: "rgba(91,75,138,0.06)" }} />
        </div>
      </section>

      {/* ── GALLERY ───────────────────────────────────────────────────────────── */}
      {gallery.length > 0 && (
        <section style={{ backgroundColor: "#FFFFFF" }}>
          <div className="max-w-7xl mx-auto px-6 lg:px-16 py-16 md:py-20">
            <div className="flex items-center gap-3 mb-10">
              <div className="h-0.5 w-8 rounded-full" style={{ backgroundColor: "#38BDF8" }} />
              <p className="font-bold text-sm uppercase tracking-[0.15em]" style={{ color: "#0C4A6E" }}>
                Galeria de Imagens
              </p>
              <span className="text-xs font-medium px-2.5 py-1 rounded-full" style={{ backgroundColor: "#C9E7FC", color: "#0C4A6E" }}>
                {gallery.length} fotos
              </span>
            </div>
            <ImageGallery images={gallery} title={title} />
          </div>
          <div className="max-w-7xl mx-auto px-6 lg:px-16">
            <div className="h-px" style={{ backgroundColor: "rgba(91,75,138,0.06)" }} />
          </div>
        </section>
      )}

      {/* ── PDF DOWNLOADS ─────────────────────────────────────────────────────── */}
      {docs.length > 0 && (
        <section style={{ backgroundColor: "#F5F3FF" }}>
          <div className="max-w-7xl mx-auto px-6 lg:px-16 py-16 md:py-20">
            <div className="flex items-center gap-3 mb-10">
              <div className="h-0.5 w-8 rounded-full" style={{ backgroundColor: "#7B68EE" }} />
              <p className="font-bold text-sm uppercase tracking-[0.15em]" style={{ color: "#5B4B8A" }}>
                Materiais para Download
              </p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {docs.map((doc) => (
                <a
                  key={doc.url}
                  href={doc.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="card group flex items-start gap-4 p-5 no-underline"
                  style={{ backgroundColor: "#FFFFFF" }}
                >
                  <div
                    className="w-11 h-11 rounded-xl flex-shrink-0 flex items-center justify-center transition-transform duration-200 group-hover:scale-110"
                    style={{ backgroundColor: "#D6C9FC" }}
                  >
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#5B4B8A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                      <polyline points="14 2 14 8 20 8" />
                      <line x1="12" y1="18" x2="12" y2="12" />
                      <line x1="9" y1="15" x2="15" y2="15" />
                    </svg>
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="font-semibold text-sm mb-1 leading-snug" style={{ color: "#1E293B" }}>
                      {doc.label}
                    </p>
                    <p className="text-xs font-medium" style={{ color: "#7B68EE" }}>
                      Clique para abrir PDF →
                    </p>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── BOTTOM NAV ────────────────────────────────────────────────────────── */}
      <div style={{ backgroundColor: "#F8FAFC", borderTop: "1px solid rgba(91,75,138,0.06)" }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-16 py-10 flex items-center justify-between">
          <Link href="/#trabalho" className="inline-flex items-center gap-2 text-sm font-semibold btn-secondary px-5 py-3">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M19 12H5M5 12l7-7M5 12l7 7" />
            </svg>
            Voltar ao portfólio
          </Link>
          <a href="mailto:letymarinho21@gmail.com" className="btn-primary text-sm py-3 px-5">
            Falar sobre este projeto
          </a>
        </div>
      </div>
    </div>
  );
}
