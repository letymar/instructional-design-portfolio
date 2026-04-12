'use client';

import Link from "next/link";
import { useLanguage } from "../contexts/LanguageContext";

export default function Nav() {
  const { lang, setLang, t } = useLanguage();

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
          style={{ fontFamily: "var(--font-poppins, Poppins, sans-serif)", color: "#1E293B" }}
        >
          Letícia Marinho
        </Link>

        <div className="hidden md:flex items-center gap-2 text-sm">
          <Link href="/portfolio" className="nav-link flex items-center gap-1.5">
            {t.nav.portfolio}
            <span style={{ fontSize: "11px" }}>🔒</span>
          </Link>
          <Link href="/#abordagem" className="nav-link">{t.nav.approach}</Link>
          <Link href="/cv" className="nav-link">{t.nav.cv}</Link>

          {/* Language toggle */}
          <div
            className="flex items-center gap-0.5 ml-2 rounded-full p-0.5"
            style={{ backgroundColor: "rgba(91,75,138,0.08)" }}
          >
            <button
              onClick={() => setLang('pt')}
              className="text-xs font-bold px-2.5 py-1 rounded-full transition-all duration-200"
              style={{
                backgroundColor: lang === 'pt' ? '#5B4B8A' : 'transparent',
                color: lang === 'pt' ? '#ffffff' : '#5B4B8A',
                cursor: 'pointer',
              }}
            >
              PT
            </button>
            <button
              onClick={() => setLang('en')}
              className="text-xs font-bold px-2.5 py-1 rounded-full transition-all duration-200"
              style={{
                backgroundColor: lang === 'en' ? '#5B4B8A' : 'transparent',
                color: lang === 'en' ? '#ffffff' : '#5B4B8A',
                cursor: 'pointer',
              }}
            >
              EN
            </button>
          </div>
        </div>

        <a href="mailto:letymarinho21@gmail.com" className="btn-primary text-sm">
          {t.nav.contact}
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </a>
      </div>
    </nav>
  );
}
