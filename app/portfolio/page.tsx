'use client';

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Nav from "@/app/components/Nav";
import Footer from "@/app/components/Footer";
import ProjectBlock from "@/app/components/ProjectBlock";
import RevealWrapper from "@/app/components/RevealWrapper";
import { useLanguage } from "@/app/contexts/LanguageContext";
import { projects as allProjects } from "@/lib/projects";

export default function PortfolioPage() {
  const router = useRouter();
  const [authChecked, setAuthChecked] = useState(false);
  const { t } = useLanguage();
  const p = t.portfolio_page;

  useEffect(() => {
    const unlocked = sessionStorage.getItem("portfolio_unlocked");
    if (!unlocked) {
      router.replace("/login?from=/portfolio");
    } else {
      setAuthChecked(true);
    }
  }, [router]);

  if (!authChecked) {
    return <div className="min-h-screen" style={{ backgroundColor: "#FAFAFA" }} />;
  }

  return (
    <>
      <Nav />
      <main className="pt-[65px]" style={{ backgroundColor: "#FAFAFA" }}>

        {/* ── HEADER ─────────────────────────────────────────────────────── */}
        <section className="py-20 md:py-28 px-6 lg:px-12" style={{ backgroundColor: "#FFFFFF" }}>
          <div className="mx-auto max-w-7xl">
            <RevealWrapper>
              <div className="text-center">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6" style={{ backgroundColor: "#EEF2FF" }}>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#4F46E5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
                  </svg>
                  <span className="text-sm font-semibold" style={{ color: "#4F46E5" }}>{p.badge}</span>
                </div>

                <h1
                  className="font-bold mb-4"
                  style={{ fontFamily: "var(--font-poppins, Poppins, sans-serif)", fontSize: "clamp(2rem, 5vw, 3.5rem)", color: "#111827" }}
                >
                  {allProjects.length} {p.title}{" "}
                  <span style={{ background: "linear-gradient(135deg, #4F46E5 0%, #818CF8 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
                    {p.titleHighlight}
                  </span>
                </h1>

                <p className="text-base max-w-xl mx-auto" style={{ color: "#6B7280" }}>
                  {p.description}
                </p>

                {/* Quick logout */}
                <button
                  onClick={() => {
                    sessionStorage.removeItem("portfolio_unlocked");
                    router.push("/");
                  }}
                  className="mt-6 text-xs font-medium px-3 py-1.5 rounded-full transition-all duration-200 hover:bg-red-50"
                  style={{ color: "#94A3B8", border: "1px solid #E2E8F0", cursor: "pointer" }}
                >
                  Sair ×
                </button>
              </div>
            </RevealWrapper>
          </div>
        </section>

        {/* ── PROJECT GRID ───────────────────────────────────────────────── */}
        <section className="py-16 px-6 lg:px-12" style={{ backgroundColor: "#FAFAFA" }}>
          <div className="mx-auto max-w-7xl">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {allProjects.map((project, i) => (
                <RevealWrapper key={project.number} delay={i * 70}>
                  <ProjectBlock
                    number={project.number}
                    title={project.title}
                    category={project.category}
                    tags={project.tags}
                    description={project.shortDescription}
                    image={project.heroImage}
                    gradient={project.heroGradient}
                    reverse={project.reverse}
                    slug={project.slug}
                    colorIndex={i}
                  />
                </RevealWrapper>
              ))}
            </div>
          </div>
        </section>

        {/* ── BACK TO HOME ───────────────────────────────────────────────── */}
        <div style={{ backgroundColor: "#FAFAFA", borderTop: "1px solid rgba(30,58,138,0.06)" }}>
          <div className="max-w-7xl mx-auto px-6 lg:px-12 py-10 flex justify-center">
            <Link href="/" className="btn-secondary text-sm py-3 px-6">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M19 12H5M5 12l7-7M5 12l7 7" />
              </svg>
              Voltar ao início
            </Link>
          </div>
        </div>

      </main>
      <Footer />
    </>
  );
}
