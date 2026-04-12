'use client';

import { useLanguage } from "../contexts/LanguageContext";

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer
      id="contacto"
      style={{ backgroundColor: "#F1F5F9", borderTop: "1px solid #E2E8F0" }}
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-12 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left */}
          <div>
            <div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6"
              style={{ backgroundColor: "#D6C9FC" }}
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#5B4B8A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
              </svg>
              <span className="text-sm font-medium" style={{ color: "#5B4B8A" }}>{t.footer.badge}</span>
            </div>

            <h2
              className="font-bold mb-4 leading-tight"
              style={{
                fontFamily: "var(--font-poppins, Poppins, sans-serif)",
                fontSize: "clamp(1.8rem, 3.5vw, 2.5rem)",
                color: "#334155",
              }}
            >
              {t.footer.title}{" "}
              <span
                style={{
                  background: "linear-gradient(135deg, #5B4B8A 0%, #9B88FC 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                {t.footer.titleHighlight}
              </span>
              ?
            </h2>

            <p className="text-base mb-8 max-w-md" style={{ color: "#64748B" }}>
              {t.footer.description}
            </p>

            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href={`mailto:${t.footer.email}`}
                className="btn-primary text-sm py-3 px-6"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
                {t.footer.email}
              </a>
              <a
                href="https://www.linkedin.com/in/leticia-marinho-aa2358185/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary text-sm py-3 px-6"
              >
                {t.footer.linkedin}
              </a>
            </div>
          </div>

          {/* Right — decorative card */}
          <div className="hidden md:flex justify-end">
            <div className="card p-8 w-72" style={{ backgroundColor: "#FFFFFF" }}>
              <div
                className="w-14 h-14 rounded-2xl flex items-center justify-center mb-4"
                style={{ backgroundColor: "#CFF8E8" }}
              >
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#2D6A4F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
                  <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
                </svg>
              </div>
              <p className="font-bold text-lg mb-1" style={{ fontFamily: "var(--font-poppins, Poppins, sans-serif)", color: "#334155" }}>
                10+
              </p>
              <p className="text-sm" style={{ color: "#64748B" }}>
                {t.footer.tagline}
              </p>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex items-center justify-between mt-16 pt-6" style={{ borderTop: "1px solid #E2E8F0" }}>
          <span className="text-sm" style={{ color: "#94A3B8" }}>{t.footer.copyright}</span>
          <span className="text-sm" style={{ color: "#94A3B8" }}>{t.footer.role}</span>
        </div>
      </div>
    </footer>
  );
}
