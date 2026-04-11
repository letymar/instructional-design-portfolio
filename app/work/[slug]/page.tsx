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

const sectionMeta: Array<{
  key: keyof import("@/lib/projects").CaseStudy;
  label: string;
  icon: React.ReactNode;
  color: { bg: string; text: string };
}> = [
  {
    key: "contexto",
    label: "Contexto",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" /><line x1="12" y1="8" x2="12" y2="12" /><line x1="12" y1="16" x2="12.01" y2="16" />
      </svg>
    ),
    color: { bg: "#C9E7FC", text: "#1E5A7A" },
  },
  {
    key: "objetivo",
    label: "Objetivo",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" /><circle cx="12" cy="12" r="6" /><circle cx="12" cy="12" r="2" />
      </svg>
    ),
    color: { bg: "#D6C9FC", text: "#5B4B8A" },
  },
  {
    key: "meuPapel",
    label: "O Meu Papel",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" /><circle cx="12" cy="7" r="4" />
      </svg>
    ),
    color: { bg: "#CFF8E8", text: "#2D6A4F" },
  },
  {
    key: "abordagem",
    label: "Abordagem Instrucional",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" /><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
      </svg>
    ),
    color: { bg: "#FFF6C9", text: "#8B7355" },
  },
  {
    key: "resultados",
    label: "Resultados e Impacto",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" /><polyline points="16 7 22 7 22 13" />
      </svg>
    ),
    color: { bg: "#F9C8D7", text: "#8B4557" },
  },
  {
    key: "materiais",
    label: "Materiais Produzidos",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><polyline points="14 2 14 8 20 8" />
      </svg>
    ),
    color: { bg: "#CFF8E8", text: "#2D6A4F" },
  },
];

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) notFound();

  const { title, category, number, tags, caseStudy, gallery, docs, heroImage, heroGradient } = project;

  return (
    <div style={{ backgroundColor: "#F8FAFC", minHeight: "100vh" }}>

      {/* Back navigation */}
      <div
        className="sticky top-0 z-40 backdrop-blur-xl"
        style={{
          backgroundColor: "rgba(248,250,252,0.92)",
          borderBottom: "1px solid #E2E8F0",
          boxShadow: "0 2px 12px rgba(31,35,50,0.06)",
        }}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-3 flex items-center justify-between">
          <Link
            href="/#trabalho"
            className="inline-flex items-center gap-2 text-sm font-medium transition-colors duration-150"
            style={{ color: "#64748B" }}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M19 12H5M5 12l7-7M5 12l7 7" />
            </svg>
            Todos os Projetos
          </Link>
          <span className="text-sm font-medium" style={{ color: "#94A3B8" }}>
            {number} / 10
          </span>
        </div>
      </div>

      {/* Hero */}
      <div className="relative w-full overflow-hidden" style={{ height: "clamp(280px, 45vh, 520px)" }}>
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
              background: heroGradient ?? "linear-gradient(135deg, #D6C9FC 0%, #C9E7FC 100%)",
            }}
          />
        )}
        <div
          className="absolute inset-0"
          style={{
            background: "linear-gradient(to bottom, rgba(248,250,252,0) 30%, rgba(248,250,252,0.9) 100%)",
          }}
        />
      </div>

      {/* Header */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 -mt-12 relative z-10 pb-8">
        <div
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-4"
          style={{ backgroundColor: "#D6C9FC" }}
        >
          <span className="text-xs font-semibold" style={{ color: "#5B4B8A" }}>
            {number} · {category}
          </span>
        </div>

        <h1
          className="font-bold leading-tight mb-4"
          style={{
            fontFamily: "var(--font-poppins, Poppins, sans-serif)",
            fontSize: "clamp(1.8rem, 4vw, 3rem)",
            color: "#334155",
          }}
        >
          {title}
        </h1>

        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span
              key={tag}
              className="text-xs px-3 py-1.5 rounded-full font-medium"
              style={{ backgroundColor: "#F1F5F9", color: "#64748B", border: "1px solid #E2E8F0" }}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Case Study Sections */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 pb-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {sectionMeta.map(({ key, label, icon, color }) => {
            if (key === "ferramentas") return null;
            const value = caseStudy[key];
            if (!value || typeof value !== "string") return null;
            return (
              <div
                key={key}
                className="card p-6"
                style={{ backgroundColor: "#FFFFFF" }}
              >
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center mb-4"
                  style={{ backgroundColor: color.bg, color: color.text }}
                >
                  {icon}
                </div>
                <p
                  className="text-xs font-semibold uppercase tracking-wider mb-2"
                  style={{ color: color.text }}
                >
                  {label}
                </p>
                <p className="text-sm leading-relaxed" style={{ color: "#64748B" }}>
                  {value}
                </p>
              </div>
            );
          })}
        </div>

        {/* Ferramentas */}
        <div className="mt-6 card p-6" style={{ backgroundColor: "#FFFFFF" }}>
          <div
            className="w-10 h-10 rounded-xl flex items-center justify-center mb-4"
            style={{ backgroundColor: "#FFF6C9", color: "#8B7355" }}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
            </svg>
          </div>
          <p className="text-xs font-semibold uppercase tracking-wider mb-3" style={{ color: "#8B7355" }}>
            Ferramentas Utilizadas
          </p>
          <div className="flex flex-wrap gap-2">
            {caseStudy.ferramentas.map((tool) => (
              <span
                key={tool}
                className="text-sm px-4 py-2 rounded-full font-medium"
                style={{
                  backgroundColor: "#F1F5F9",
                  border: "1px solid #E2E8F0",
                  color: "#334155",
                }}
              >
                {tool}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Gallery */}
      {gallery.length > 0 && (
        <div style={{ backgroundColor: "#F1F5F9" }}>
          <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16">
            <div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6"
              style={{ backgroundColor: "#C9E7FC" }}
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#1E5A7A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="3" width="18" height="18" rx="2" /><circle cx="8.5" cy="8.5" r="1.5" /><polyline points="21 15 16 10 5 21" />
              </svg>
              <span className="text-xs font-semibold" style={{ color: "#1E5A7A" }}>Galeria de Imagens</span>
            </div>
            <ImageGallery images={gallery} title={title} />
          </div>
        </div>
      )}

      {/* PDF Documents */}
      {docs.length > 0 && (
        <div style={{ backgroundColor: "#FFFFFF" }}>
          <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16">
            <div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6"
              style={{ backgroundColor: "#CFF8E8" }}
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#2D6A4F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><polyline points="14 2 14 8 20 8" />
              </svg>
              <span className="text-xs font-semibold" style={{ color: "#2D6A4F" }}>Materiais para Download</span>
            </div>
            <div className="flex flex-wrap gap-3">
              {docs.map((doc) => (
                <a
                  key={doc.url}
                  href={doc.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-semibold px-5 py-3 rounded-2xl transition-all duration-150 hover:opacity-90"
                  style={{
                    background: "linear-gradient(135deg, #A7C7E7 0%, #D8C4F1 100%)",
                    color: "#ffffff",
                    boxShadow: "0 4px 15px rgba(167,199,231,0.4)",
                  }}
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><polyline points="14 2 14 8 20 8" /><line x1="12" y1="18" x2="12" y2="12" /><line x1="9" y1="15" x2="15" y2="15" />
                  </svg>
                  {doc.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Bottom nav */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-12">
        <Link
          href="/#trabalho"
          className="inline-flex items-center gap-2 text-sm font-medium transition-colors duration-150 hover:opacity-80"
          style={{ color: "#64748B" }}
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M19 12H5M5 12l7-7M5 12l7 7" />
          </svg>
          Voltar ao portfólio
        </Link>
      </div>
    </div>
  );
}
