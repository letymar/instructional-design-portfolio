'use client';

import { useLanguage } from "../contexts/LanguageContext";
import ContactForm from "./ContactForm";

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer
      id="contacto"
      style={{ backgroundColor: "#F1F5F9", borderTop: "1px solid #E2E8F0" }}
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-12 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Left — intro */}
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

            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/leticia-marinho-aa2358185/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary text-sm py-3 px-6 inline-flex items-center gap-2"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                <rect x="2" y="9" width="4" height="12" />
                <circle cx="4" cy="4" r="2" />
              </svg>
              {t.footer.linkedin}
            </a>

            {/* Tagline card */}
            <div className="card mt-8 p-6 inline-flex items-center gap-4" style={{ backgroundColor: "#FFFFFF" }}>
              <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0" style={{ backgroundColor: "#CFF8E8" }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#2D6A4F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
                  <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
                </svg>
              </div>
              <div>
                <p className="font-bold text-sm" style={{ color: "#334155" }}>10+</p>
                <p className="text-xs" style={{ color: "#64748B" }}>{t.footer.tagline}</p>
              </div>
            </div>
          </div>

          {/* Right — contact form */}
          <ContactForm />
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
