import Link from "next/link";

export default function Nav() {
  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md"
      style={{
        borderBottom: "1px solid rgba(255,255,255,0.05)",
        backgroundColor: "rgba(11,11,15,0.85)",
      }}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 md:px-12 py-4">
        <Link
          href="/"
          className="text-sm font-semibold tracking-tight"
          style={{
            fontFamily: "var(--font-playfair), Georgia, serif",
            color: "#F0EFE8",
          }}
        >
          Letícia Marinho
        </Link>

        <div className="flex items-center gap-8 text-sm" style={{ color: "#7A7A8C" }}>
          <Link
            href="#trabalho"
            className="transition-colors duration-150 hover:text-[#F0EFE8]"
          >
            Trabalho
          </Link>
          <Link
            href="#abordagem"
            className="transition-colors duration-150 hover:text-[#F0EFE8]"
          >
            Abordagem
          </Link>
          <a
            href="mailto:letymarinho21@gmail.com"
            className="rounded-full px-4 py-1.5 text-sm transition-all duration-200"
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
    </nav>
  );
}
