import Image from "next/image";
import Link from "next/link";

interface ProjectBlockProps {
  number: string;
  title: string;
  category: string;
  tags: string[];
  description: string;
  image?: string;
  gradient?: string;
  reverse?: boolean;
  slug: string;
  colorIndex?: number;
}

const cardAccents = [
  { line: "#7B68EE", bg: "#D6C9FC", text: "#5B4B8A", shadow: "rgba(123,104,238,0.18)" },
  { line: "#34D399", bg: "#CFF8E8", text: "#065F46", shadow: "rgba(52,211,153,0.18)" },
  { line: "#38BDF8", bg: "#C9E7FC", text: "#0C4A6E", shadow: "rgba(56,189,248,0.18)" },
  { line: "#F472B6", bg: "#F9C8D7", text: "#831843", shadow: "rgba(244,114,182,0.18)" },
  { line: "#FBBF24", bg: "#FFF6C9", text: "#78350F", shadow: "rgba(251,191,36,0.18)" },
];

export default function ProjectBlock({
  number,
  title,
  category,
  tags,
  description,
  image,
  gradient,
  slug,
  colorIndex = 0,
}: ProjectBlockProps) {
  const accent = cardAccents[colorIndex % cardAccents.length];

  return (
    <article
      className="card group flex flex-col overflow-hidden relative"
      style={{ backgroundColor: "#FFFFFF" }}
    >
      {/* Color accent top line */}
      <div
        className="absolute top-0 left-0 right-0 h-1 z-10 transition-all duration-300 group-hover:h-1.5"
        style={{ backgroundColor: accent.line }}
      />

      {/* Image area */}
      <div className="relative overflow-hidden" style={{ aspectRatio: "16/9" }}>
        {image ? (
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover transition-all duration-700 group-hover:scale-[1.08]"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        ) : (
          <div
            className="absolute inset-0 transition-transform duration-700 group-hover:scale-[1.04]"
            style={{
              background: gradient ?? `linear-gradient(135deg, ${accent.bg} 0%, #FFFFFF 100%)`,
            }}
          />
        )}
        {/* Hover overlay */}
        <div
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center"
          style={{ backgroundColor: "rgba(30,41,59,0.35)" }}
        >
          <span className="btn-primary text-xs py-2.5 px-5">Abrir projeto →</span>
        </div>
        {/* Project number */}
        <div
          className="absolute top-3 left-3 w-9 h-9 rounded-xl flex items-center justify-center text-xs font-bold z-10"
          style={{ backgroundColor: "rgba(255,255,255,0.95)", color: "#1E293B", boxShadow: "0 2px 8px rgba(0,0,0,0.1)" }}
        >
          {number}
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 p-6">
        {/* Category */}
        <span
          className="section-label-pill self-start mb-3"
          style={{ backgroundColor: accent.bg, color: accent.text }}
        >
          {category}
        </span>

        <h3
          className="font-bold text-lg leading-snug mb-2 transition-colors duration-200 group-hover:text-[#5B4B8A]"
          style={{ fontFamily: "var(--font-poppins, Poppins, sans-serif)", color: "#1E293B" }}
        >
          {title}
        </h3>

        <p className="text-sm leading-relaxed mb-4 flex-1" style={{ color: "#64748B" }}>
          {description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5 mb-5">
          {tags.slice(0, 3).map((tag) => (
            <span
              key={tag}
              className="text-xs px-2.5 py-1 rounded-full font-medium"
              style={{ backgroundColor: "#F1F5F9", color: "#475569", border: "1px solid #E2E8F0" }}
            >
              {tag}
            </span>
          ))}
        </div>

        {/* CTA */}
        <Link
          href={`/work/${slug}`}
          className="btn-primary self-start text-sm py-3 px-5"
        >
          Ver Caso de Estudo
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </Link>
      </div>
    </article>
  );
}
