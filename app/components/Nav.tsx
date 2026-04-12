import Link from "next/link";

export default function Nav() {
  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl"
      style={{
        backgroundColor: "rgba(248, 250, 252, 0.94)",
        borderBottom: "1px solid rgba(91,75,138,0.08)",
        boxShadow: "0 2px 20px rgba(91, 75, 138, 0.06)",
      }}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 lg:px-12 py-4">
        <Link
          href="/"
          className="font-bold text-lg tracking-tight"
          style={{
            fontFamily: "var(--font-poppins, Poppins, sans-serif)",
            color: "#1E293B",
          }}
        >
          Letícia Marinho
        </Link>

        <div className="hidden md:flex items-center gap-2 text-sm">
          <Link href="/#trabalho" className="nav-link">Projetos</Link>
          <Link href="/#abordagem" className="nav-link">Abordagem</Link>
          <Link href="/cv" className="nav-link">CV</Link>
          <Link href="/#contacto" className="nav-link">Contacto</Link>
        </div>

        <a
          href="mailto:letymarinho21@gmail.com"
          className="btn-primary text-sm"
        >
          Contactar
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </a>
      </div>
    </nav>
  );
}
