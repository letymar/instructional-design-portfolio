import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { getProjectBySlug, getAllSlugs } from "@/lib/projects";
import ImageGallery from "@/app/components/ImageGallery";

export function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

interface Props {
  params: Promise<{ slug: string }>;
}

const sectionLabels: Record<string, string> = {
  contexto: "Contexto",
  objetivo: "Objetivo",
  meuPapel: "O Meu Papel",
  abordagem: "Abordagem Instrucional",
  ferramentas: "Ferramentas",
  resultados: "Resultados",
  materiais: "Materiais",
};

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) notFound();

  const { title, category, number, tags, caseStudy, gallery, docs, heroImage, heroGradient } = project;

  return (
    <div style={{ backgroundColor: "#0B0B0F", minHeight: "100vh" }}>
      {/* Back navigation */}
      <div className="max-w-6xl mx-auto px-6 pt-8">
        <Link
          href="/#projetos"
          className="inline-flex items-center gap-2 text-sm transition-colors duration-150"
          style={{ color: "#7A7A8C" }}
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M19 12H5M5 12l7-7M5 12l7 7" />
          </svg>
          Todos os Projetos
        </Link>
      </div>

      {/* Hero */}
      <div
        className="relative w-full mt-8 overflow-hidden"
        style={{ height: "clamp(280px, 45vh, 560px)" }}
      >
        {heroImage ? (
          <Image
            src={heroImage}
            alt={title}
            fill
            className="object-cover"
            sizes="100vw"
            priority
          />
        ) : (
          <div
            className="absolute inset-0"
            style={{
              background:
                heroGradient ??
                "linear-gradient(135deg, #14141A 0%, #1F1A3A 100%)",
            }}
          />
        )}
        {/* Gradient overlay */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to bottom, rgba(11,11,15,0) 40%, rgba(11,11,15,0.95) 100%)",
          }}
        />
      </div>

      {/* Header */}
      <div className="max-w-6xl mx-auto px-6 -mt-8 relative z-10">
        <p
          className="text-xs uppercase tracking-[0.25em] mb-3"
          style={{ color: "#8B7CF6" }}
        >
          {number} · {category}
        </p>
        <h1
          className="leading-tight mb-6"
          style={{
            fontFamily: "var(--font-playfair), Georgia, serif",
            fontSize: "clamp(2rem, 5vw, 3.5rem)",
            fontWeight: 400,
            color: "#F0EFE8",
          }}
        >
          {title}
        </h1>
        <div className="flex flex-wrap gap-2 mb-12">
          {tags.map((tag) => (
            <span
              key={tag}
              className="text-xs px-3 py-1 rounded-full"
              style={{
                border: "1px solid rgba(255,255,255,0.1)",
                color: "#7A7A8C",
              }}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Divider */}
      <div
        className="max-w-6xl mx-auto px-6"
        style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}
      />

      {/* Case Study Sections */}
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-[200px_1fr] gap-x-16 gap-y-12">

          {/* Contexto */}
          <CaseSection label={sectionLabels.contexto} content={caseStudy.contexto} />

          {/* Objetivo */}
          <CaseSection label={sectionLabels.objetivo} content={caseStudy.objetivo} />

          {/* O Meu Papel */}
          <CaseSection label={sectionLabels.meuPapel} content={caseStudy.meuPapel} />

          {/* Abordagem Instrucional */}
          <CaseSection label={sectionLabels.abordagem} content={caseStudy.abordagem} />

          {/* Ferramentas */}
          <div>
            <p
              className="text-xs uppercase tracking-[0.2em] pt-1"
              style={{ color: "#8B7CF6" }}
            >
              {sectionLabels.ferramentas}
            </p>
          </div>
          <div>
            <div className="flex flex-wrap gap-2">
              {caseStudy.ferramentas.map((tool) => (
                <span
                  key={tool}
                  className="text-sm px-4 py-2 rounded-full"
                  style={{
                    border: "1px solid rgba(139,124,246,0.2)",
                    color: "#F0EFE8",
                    backgroundColor: "rgba(139,124,246,0.06)",
                  }}
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>

          {/* Resultados */}
          <CaseSection label={sectionLabels.resultados} content={caseStudy.resultados} accent />

          {/* Materiais */}
          <CaseSection label={sectionLabels.materiais} content={caseStudy.materiais} />
        </div>
      </div>

      {/* Gallery */}
      {gallery.length > 0 && (
        <div className="max-w-6xl mx-auto px-6 pb-16">
          <div
            className="pt-12 pb-8"
            style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}
          >
            <p
              className="text-xs uppercase tracking-[0.2em] mb-6"
              style={{ color: "#8B7CF6" }}
            >
              Galeria
            </p>
            <ImageGallery images={gallery} title={title} />
          </div>
        </div>
      )}

      {/* PDF Documents */}
      {docs.length > 0 && (
        <div className="max-w-6xl mx-auto px-6 pb-20">
          <div
            className="pt-12"
            style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}
          >
            <p
              className="text-xs uppercase tracking-[0.2em] mb-6"
              style={{ color: "#8B7CF6" }}
            >
              Materiais para Download
            </p>
            <div className="flex flex-wrap gap-3">
              {docs.map((doc) => (
                <a
                  key={doc.url}
                  href={doc.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm px-5 py-3 rounded-lg transition-all duration-150"
                  style={{
                    border: "1px solid rgba(139,124,246,0.3)",
                    color: "#F0EFE8",
                    backgroundColor: "rgba(139,124,246,0.06)",
                  }}
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                    <polyline points="14,2 14,8 20,8" />
                    <line x1="12" y1="18" x2="12" y2="12" />
                    <line x1="9" y1="15" x2="15" y2="15" />
                  </svg>
                  {doc.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Bottom nav */}
      <div
        className="max-w-6xl mx-auto px-6 pb-20"
        style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}
      >
        <div className="pt-8">
          <Link
            href="/#projetos"
            className="inline-flex items-center gap-2 text-sm transition-colors duration-150"
            style={{ color: "#7A7A8C" }}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M19 12H5M5 12l7-7M5 12l7 7" />
            </svg>
            Voltar ao portfólio
          </Link>
        </div>
      </div>
    </div>
  );
}

function CaseSection({
  label,
  content,
  accent = false,
}: {
  label: string;
  content: string;
  accent?: boolean;
}) {
  return (
    <>
      <div>
        <p
          className="text-xs uppercase tracking-[0.2em] pt-1"
          style={{ color: "#8B7CF6" }}
        >
          {label}
        </p>
      </div>
      <div>
        <p
          className="text-sm leading-loose"
          style={{ color: accent ? "#F0EFE8" : "#9A9AAC" }}
        >
          {content}
        </p>
      </div>
    </>
  );
}
