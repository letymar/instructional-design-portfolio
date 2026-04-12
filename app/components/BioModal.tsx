'use client';

import Image from "next/image";
import { useEffect } from "react";

interface BioModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const interests = [
  "Design Instrucional & LXD",
  "Educação tecnológica",
  "Gamificação aplicada",
  "Impacto social & inclusão digital",
];

export default function BioModal({ isOpen, onClose }: BioModalProps) {
  // Bloquear scroll quando modal está aberto
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-end md:items-center justify-center px-0 md:px-6"
      style={{
        backgroundColor: "rgba(51,65,85,0.4)",
        backdropFilter: "blur(8px)",
        animation: "fade-in 0.25s ease forwards",
      }}
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-2xl overflow-y-auto"
        style={{
          backgroundColor: "#FFFFFF",
          borderRadius: "28px 28px 0 0",
          maxHeight: "90vh",
          animation: "slide-up 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards",
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Handle bar */}
        <div className="flex justify-center pt-4 pb-2">
          <div className="w-10 h-1 rounded-full" style={{ backgroundColor: "#E2E8F0" }} />
        </div>

        <div className="px-8 pb-10 pt-4 md:px-10">
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-5 right-5 w-9 h-9 rounded-full flex items-center justify-center transition-all duration-150"
            style={{ backgroundColor: "#F1F5F9", color: "#64748B" }}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>

          {/* Photo + name */}
          <div className="flex items-center gap-5 mb-8">
            <div className="relative flex-shrink-0">
              <Image
                src="/leticia.jpg"
                alt="Letícia Marinho"
                width={96}
                height={96}
                className="rounded-full object-cover"
                style={{ border: "3px solid #E2E8F0" }}
              />
              {/* Online indicator */}
              <div
                className="absolute bottom-1 right-1 w-4 h-4 rounded-full border-2 border-white"
                style={{ backgroundColor: "#4ADE80" }}
              />
            </div>
            <div>
              <p
                className="text-xs font-bold uppercase tracking-[0.18em] mb-1"
                style={{ color: "#8B7CF6" }}
              >
                ✦ Cientista
              </p>
              <h2
                className="font-bold text-2xl"
                style={{
                  fontFamily: "var(--font-poppins, Poppins, sans-serif)",
                  color: "#334155",
                }}
              >
                Letícia Marinho
              </h2>
              <p className="text-sm" style={{ color: "#64748B" }}>
                Learning Experience Designer · CDI Portugal
              </p>
            </div>
          </div>

          {/* Bio */}
          <div className="space-y-4 text-sm leading-relaxed mb-8" style={{ color: "#64748B" }}>
            <p>
              Sou professora e Learning Experience Designer com mais de uma
              década de experiência na área da educação, com foco na criação
              de experiências de aprendizagem inovadoras que integram
              tecnologia, criatividade e impacto social.
            </p>
            <p>
              Atualmente, trabalho no <strong style={{ color: "#334155" }}>CDI Portugal</strong>, onde
              desenvolvo e coordeno projetos educativos nas áreas de
              programação, robótica e literacia digital, atuando no
              Centro de Cidadania Digital de Valongo e no Centro de
              Inovação Carlos Fiolhais, na Maia.
            </p>
            <p>
              Tenho-me especializado no desenho pedagógico de atividades
              STEAM, na dinamização de clubes tecnológicos e na criação de
              projetos com forte componente prática — robótica educativa,
              inteligência artificial, gamificação e cidadania digital.
            </p>
            <p
              className="italic font-medium"
              style={{ color: "#5B4B8A" }}
            >
              &ldquo;Acredito que a educação deve ser prática, significativa e
              conectada com o mundo real — e é isso que procuro construir
              em cada projeto.&rdquo;
            </p>
          </div>

          {/* Interesses */}
          <div>
            <p
              className="text-xs font-semibold uppercase tracking-wider mb-3"
              style={{ color: "#94A3B8" }}
            >
              Áreas de interesse
            </p>
            <div className="flex flex-wrap gap-2">
              {interests.map((item) => (
                <span
                  key={item}
                  className="text-sm px-4 py-2 rounded-full font-medium"
                  style={{ backgroundColor: "#D6C9FC", color: "#5B4B8A" }}
                >
                  {item}
                </span>
              ))}
            </div>
          </div>

          {/* Contact links */}
          <div className="flex gap-3 mt-8 pt-6" style={{ borderTop: "1px solid #E2E8F0" }}>
            <a
              href="mailto:letymarinho21@gmail.com"
              className="inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold transition-all duration-200 hover:opacity-90"
              style={{
                background: "linear-gradient(135deg, #A7C7E7 0%, #D8C4F1 100%)",
                color: "#ffffff",
              }}
            >
              Enviar email
            </a>
            <a
              href="https://www.linkedin.com/in/leticia-marinho-aa2358185/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold"
              style={{
                backgroundColor: "#F1F5F9",
                border: "1px solid #E2E8F0",
                color: "#334155",
              }}
            >
              LinkedIn →
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
