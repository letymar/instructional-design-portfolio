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

// Cycling pastel card header backgrounds
const cardColors = [
  { bg: "#D6C9FC", text: "#5B4B8A" },  // lavender
  { bg: "#CFF8E8", text: "#2D6A4F" },  // mint
  { bg: "#C9E7FC", text: "#1E5A7A" },  // sky
  { bg: "#F9C8D7", text: "#8B4557" },  // blush
  { bg: "#FFF6C9", text: "#8B7355" },  // butter
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
  const cardColor = cardColors[colorIndex % cardColors.length];

  return (
    <article
      className="card flex flex-col overflow-hidden"
      style={{ backgroundColor: "#FFFFFF" }}
    >
      {/* Image / Gradient top */}
      <div
        className="relative overflow-hidden"
        style={{ aspectRatio: "16/9" }}
      >
        {image ? (
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-[1.05]"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        ) : (
          <div
            className="absolute inset-0"
            style={{
              background:
                gradient ??
                `linear-gradient(135deg, ${cardColor.bg} 0%, #FFFFFF 100%)`,
            }}
          />
        )}
        {/* Number overlay */}
        <div
          className="absolute top-4 left-4 w-10 h-10 rounded-2xl flex items-center justify-center text-sm font-bold"
          style={{ backgroundColor: "rgba(255,255,255,0.92)", color: "#334155" }}
        >
          {number}
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 p-6">
        {/* Category badge */}
        <span
          className="inline-flex self-start text-xs font-semibold px-3 py-1.5 rounded-full mb-3"
          style={{ backgroundColor: cardColor.bg, color: cardColor.text }}
        >
          {category}
        </span>

        <h3
          className="font-bold text-lg leading-snug mb-2"
          style={{
            fontFamily: "var(--font-poppins, Poppins, sans-serif)",
            color: "#334155",
          }}
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
              style={{ backgroundColor: "#F1F5F9", color: "#64748B" }}
            >
              {tag}
            </span>
          ))}
        </div>

        {/* CTA */}
        <Link
          href={`/work/${slug}`}
          className="inline-flex items-center gap-2 text-sm font-semibold rounded-full px-5 py-2.5 transition-all duration-200 self-start hover:opacity-90"
          style={{
            background: "linear-gradient(135deg, #A7C7E7 0%, #D8C4F1 100%)",
            color: "#ffffff",
            boxShadow: "0 4px 15px rgba(167,199,231,0.4)",
          }}
        >
          Ver Caso de Estudo
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </Link>
      </div>
    </article>
  );
}
