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
}

export default function ProjectBlock({
  number,
  title,
  category,
  tags,
  description,
  image,
  gradient,
  reverse = false,
  slug,
}: ProjectBlockProps) {
  return (
    <article
      className={`group flex flex-col ${
        reverse ? "md:flex-row-reverse" : "md:flex-row"
      } gap-10 md:gap-16 items-center py-16 md:py-20 transition-all duration-300`}
      style={{ borderBottom: "1px solid rgba(255,255,255,0.05)" }}
    >
      {/* Lado do texto */}
      <div className="flex-1 min-w-0">
        <span
          className="block leading-none mb-4 select-none transition-colors duration-300"
          style={{
            fontFamily: "var(--font-playfair), Georgia, serif",
            fontSize: "clamp(4rem, 8vw, 7rem)",
            fontWeight: 400,
            color: "#14141A",
          }}
        >
          {number}
        </span>

        <span
          className="block text-xs uppercase tracking-[0.2em] mb-3"
          style={{ color: "#8B7CF6" }}
        >
          {category}
        </span>

        <h3
          className="leading-snug mb-4 transition-colors duration-200"
          style={{
            fontFamily: "var(--font-playfair), Georgia, serif",
            fontSize: "clamp(1.5rem, 3vw, 2rem)",
            fontWeight: 400,
            color: "#F0EFE8",
          }}
        >
          {title}
        </h3>

        <p
          className="text-sm leading-relaxed mb-6 max-w-md"
          style={{ color: "#7A7A8C" }}
        >
          {description}
        </p>

        <div className="flex flex-wrap gap-2 mb-6">
          {tags.map((tag) => (
            <span
              key={tag}
              className="text-xs px-3 py-1 rounded-full"
              style={{
                border: "1px solid rgba(255,255,255,0.07)",
                color: "#7A7A8C",
              }}
            >
              {tag}
            </span>
          ))}
        </div>

        <Link
          href={`/work/${slug}`}
          className="inline-flex items-center gap-2 text-sm transition-all duration-150"
          style={{ color: "#8B7CF6" }}
        >
          Ver Caso de Estudo
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </Link>
      </div>

      {/* Lado visual */}
      <div className="w-full md:w-[42%] flex-shrink-0">
        <div
          className="relative overflow-hidden rounded-xl transition-all duration-300 group-hover:shadow-[0_0_48px_rgba(139,124,246,0.12)]"
          style={{
            aspectRatio: "4/3",
            border: "1px solid rgba(255,255,255,0.05)",
          }}
        >
          {image ? (
            <Image
              src={image}
              alt={title}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
              sizes="(max-width: 768px) 100vw, 42vw"
            />
          ) : (
            <div
              className="absolute inset-0"
              style={{
                background:
                  gradient ??
                  "linear-gradient(135deg, #14141A 0%, #1F1A3A 100%)",
              }}
            />
          )}
        </div>
      </div>
    </article>
  );
}
