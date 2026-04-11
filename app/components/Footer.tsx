export default function Footer() {
  return (
    <footer
      id="contacto"
      style={{
        borderTop: "1px solid rgba(255,255,255,0.05)",
        backgroundColor: "#14141A",
      }}
    >
      <div className="mx-auto max-w-6xl px-6 md:px-12 py-24">
        {/* Headline */}
        <p
          className="text-4xl md:text-5xl font-normal leading-tight mb-4 max-w-xl"
          style={{
            fontFamily: "var(--font-playfair), Georgia, serif",
            color: "#F0EFE8",
          }}
        >
          Aprendizagem é uma{" "}
          <span
            className="italic"
            style={{ color: "#8B7CF6" }}
          >
            experiência
          </span>
          .
        </p>

        <p className="text-sm leading-relaxed mb-12 max-w-md" style={{ color: "#7A7A8C" }}>
          Disponível para projetos de design instrucional, LXD, formação e
          consultoria em EdTech.
        </p>

        {/* Links */}
        <div className="flex flex-col sm:flex-row gap-3 mb-20">
          <a
            href="mailto:letymarinho21@gmail.com"
            className="inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm transition-all duration-200"
            style={{
              border: "1px solid rgba(255,255,255,0.08)",
              color: "#F0EFE8",
              backgroundColor: "transparent",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = "#8B7CF6";
              e.currentTarget.style.color = "#8B7CF6";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = "rgba(255,255,255,0.08)";
              e.currentTarget.style.color = "#F0EFE8";
            }}
          >
            letymarinho21@gmail.com
          </a>
          <a
            href="https://www.linkedin.com/in/leticia-marinho-aa2358185/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm transition-all duration-200"
            style={{
              border: "1px solid rgba(255,255,255,0.08)",
              color: "#7A7A8C",
              backgroundColor: "transparent",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = "#F0EFE8";
              e.currentTarget.style.borderColor = "rgba(255,255,255,0.15)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = "#7A7A8C";
              e.currentTarget.style.borderColor = "rgba(255,255,255,0.08)";
            }}
          >
            LinkedIn →
          </a>
        </div>

        {/* Bottom bar */}
        <div
          className="flex items-center justify-between pt-8"
          style={{ borderTop: "1px solid rgba(255,255,255,0.05)" }}
        >
          <span className="text-xs" style={{ color: "#7A7A8C" }}>
            © 2026 Letícia Marinho
          </span>
          <span className="text-xs" style={{ color: "#7A7A8C" }}>
            Learning Designer · Lisboa
          </span>
        </div>
      </div>
    </footer>
  );
}
