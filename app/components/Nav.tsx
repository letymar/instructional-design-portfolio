import Link from "next/link";

export default function Nav() {
  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl"
      style={{
        backgroundColor: "rgba(248, 250, 252, 0.92)",
        borderBottom: "1px solid #E2E8F0",
        boxShadow: "0 4px 20px rgba(31, 35, 50, 0.06)",
      }}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 lg:px-12 py-4">
        <Link
          href="/"
          className="font-semibold text-lg"
          style={{
            fontFamily: "var(--font-poppins, Poppins, sans-serif)",
            color: "#334155",
          }}
        >
          Letícia Marinho
        </Link>

        <div className="hidden md:flex items-center gap-1 text-sm">
          <Link href="/#trabalho" className="nav-link">Projetos</Link>
          <Link href="/#abordagem" className="nav-link">Abordagem</Link>
          <Link href="/#contacto" className="nav-link">Contacto</Link>
        </div>

        <a
          href="mailto:letymarinho21@gmail.com"
          className="rounded-full px-5 py-2 text-sm font-semibold transition-all duration-200 hover:opacity-90"
          style={{
            background: "linear-gradient(135deg, #A7C7E7 0%, #D8C4F1 100%)",
            color: "#ffffff",
            boxShadow: "0 4px 15px rgba(167, 199, 231, 0.4)",
          }}
        >
          Contactar
        </a>
      </div>
    </nav>
  );
}
