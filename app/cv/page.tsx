'use client';

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Nav from "@/app/components/Nav";
import { useLanguage } from "@/app/contexts/LanguageContext";

/* ─── Static skill data (technical terms — language-agnostic) ──────────────── */

const SKILL_GROUPS_DATA = [
  {
    colorKey: 0,
    color: "#D6C9FC", accent: "#5B4B8A",
    skills: ["Instructional Design", "Learning Experience Design (LXD)", "Curriculum Development", "STEAM Education", "Gamification", "Project-Based Learning", "Educational Innovation"],
  },
  {
    colorKey: 1,
    color: "#CFF8E8", accent: "#065F46",
    skills: ["Scratch", "Arduino", "mBlock", "Robotics Kits", "Artificial Intelligence Tools", "Makey Makey", "Micro:bit", "Raspberry Pi"],
  },
  {
    colorKey: 2,
    color: "#C9E7FC", accent: "#0C4A6E",
    skills: ["UX Research", "User-Centered Design", "Usability Testing", "Learning Interface Design"],
  },
  {
    colorKey: 3,
    color: "#F9C8D7", accent: "#831843",
    skills: ["Digital Literacy", "Educational Project Management", "Teacher Training", "Community Learning Programs"],
  },
];

const JOB_COLORS = [
  { color: "#D6C9FC", accent: "#5B4B8A" },
  { color: "#CFF8E8", accent: "#065F46" },
  { color: "#C9E7FC", accent: "#0C4A6E" },
  { color: "#FFF6C9", accent: "#78350F" },
  { color: "#F9C8D7", accent: "#831843" },
  { color: "#D6C9FC", accent: "#5B4B8A" },
  { color: "#CFF8E8", accent: "#065F46" },
  { color: "#C9E7FC", accent: "#0C4A6E" },
];

/* ─── Component ───────────────────────────────────────────────────────────── */

export default function CVPage() {
  const router = useRouter();
  const [authChecked, setAuthChecked] = useState(false);
  const { t } = useLanguage();
  const cv = t.cv;

  useEffect(() => {
    if (!sessionStorage.getItem("portfolio_unlocked")) {
      router.replace("/login");
    } else {
      setAuthChecked(true);
    }
  }, [router]);

  if (!authChecked) return <div className="min-h-screen" style={{ backgroundColor: "#F8FAFC" }} />;

  return (
    <>
      <Nav />
      <main className="pt-[65px]" style={{ backgroundColor: "#F8FAFC" }}>

        {/* ── HERO ───────────────────────────────────────────────────────── */}
        <section className="relative overflow-hidden px-6 lg:px-16 py-20 md:py-28" style={{ backgroundColor: "#FFFFFF" }}>
          <div
            className="absolute top-0 right-0 w-96 h-96 pointer-events-none"
            style={{ background: "radial-gradient(circle, rgba(214,201,252,0.4) 0%, transparent 70%)", transform: "translate(30%, -30%)" }}
          />
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-8">
              <div>
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6" style={{ backgroundColor: "#D6C9FC" }}>
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#5B4B8A" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" /><circle cx="12" cy="7" r="4" />
                  </svg>
                  <span className="text-xs font-bold uppercase tracking-wider" style={{ color: "#5B4B8A" }}>{cv.badge}</span>
                </div>

                <h1 className="font-bold leading-tight mb-3" style={{ fontFamily: "var(--font-poppins, Poppins, sans-serif)", fontSize: "clamp(2rem, 5vw, 3.5rem)", color: "#1E293B" }}>
                  Letícia Marinho
                </h1>

                <p className="font-semibold mb-6 leading-relaxed" style={{ fontSize: "clamp(0.9rem, 1.5vw, 1.1rem)", color: "#5B4B8A", maxWidth: "55ch" }}>
                  {cv.subtitle}
                </p>

                <div className="flex flex-wrap gap-3">
                  {[
                    { icon: "📍", label: "Porto, Portugal", href: null },
                    { icon: "📧", label: "leahmarinho@hotmail.com", href: "mailto:leahmarinho@hotmail.com" },
                    { icon: "🔗", label: "LinkedIn", href: "https://www.linkedin.com/in/leticia-marinho-aa2358185" },
                    { icon: "🎨", label: "Behance", href: "https://www.behance.net/leticiammarinho" },
                  ].map((c) =>
                    c.href ? (
                      <a key={c.label} href={c.href} target={c.href.startsWith("http") ? "_blank" : undefined} rel={c.href.startsWith("http") ? "noopener noreferrer" : undefined}
                        className="inline-flex items-center gap-2 text-sm font-medium px-4 py-2 rounded-full transition-all duration-200 hover:-translate-y-0.5"
                        style={{ backgroundColor: "#F1F5F9", color: "#475569", border: "1px solid #E2E8F0", cursor: "pointer" }}>
                        <span>{c.icon}</span> {c.label}
                      </a>
                    ) : (
                      <span key={c.label} className="inline-flex items-center gap-2 text-sm font-medium px-4 py-2 rounded-full"
                        style={{ backgroundColor: "#F1F5F9", color: "#475569", border: "1px solid #E2E8F0" }}>
                        <span>{c.icon}</span> {c.label}
                      </span>
                    )
                  )}
                </div>
              </div>

              <div className="flex gap-3 flex-shrink-0 print:hidden">
                <button onClick={() => window.print()} className="btn-secondary text-sm py-2.5 px-5" style={{ cursor: "pointer" }}>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="6 9 6 2 18 2 18 9" />
                    <path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2" />
                    <rect x="6" y="14" width="12" height="8" />
                  </svg>
                  {cv.printBtn}
                </button>
                <Link href="/" className="btn-primary text-sm py-2.5 px-5">
                  {cv.portfolioBtn}
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </section>

        <div className="max-w-7xl mx-auto px-6 lg:px-16"><div className="h-px" style={{ backgroundColor: "rgba(91,75,138,0.08)" }} /></div>

        {/* ── ABOUT ──────────────────────────────────────────────────────── */}
        <section className="px-6 lg:px-16 py-16" style={{ backgroundColor: "#FFFFFF" }}>
          <div className="max-w-7xl mx-auto">
            <SectionLabel color="#D6C9FC" accent="#5B4B8A" label={cv.sections.about} />
            <div className="grid lg:grid-cols-[1fr_1fr] gap-10 mt-8">
              <div className="space-y-4 text-base leading-loose" style={{ color: "#475569", maxWidth: "65ch" }}>
                {cv.about.map((p, i) => (
                  <p key={i} dangerouslySetInnerHTML={{ __html: p.replace(/<strong>/g, '<strong style="color:#1E293B">') }} />
                ))}
              </div>
              <div className="rounded-2xl p-6" style={{ backgroundColor: "#F8FAFC", border: "1px solid rgba(91,75,138,0.08)" }}>
                <p className="text-xs font-bold uppercase tracking-[0.15em] mb-4" style={{ color: "#5B4B8A" }}>{cv.sections.summary}</p>
                <ul className="space-y-2">
                  {cv.summary.map((s, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm" style={{ color: "#475569" }}>
                      <span className="w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0" style={{ backgroundColor: "#5B4B8A" }} />
                      {s}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        <Divider />

        {/* ── EXPERIENCE ─────────────────────────────────────────────────── */}
        <section className="px-6 lg:px-16 py-16" style={{ backgroundColor: "#F8FAFC" }}>
          <div className="max-w-7xl mx-auto">
            <SectionLabel color="#CFF8E8" accent="#065F46" label={cv.sections.experience} />
            <div className="mt-8 space-y-6">
              {cv.experience.map((job, i) => {
                const colors = JOB_COLORS[i] ?? JOB_COLORS[0];
                return (
                  <div key={i} className="card p-6 lg:p-8" style={{ backgroundColor: "#FFFFFF", borderLeft: `4px solid ${colors.color}` }}>
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-3">
                      <div>
                        <p className="font-bold text-lg leading-snug" style={{ fontFamily: "var(--font-poppins, Poppins, sans-serif)", color: "#1E293B" }}>
                          {job.role}
                        </p>
                        <div className="flex flex-wrap items-center gap-3 mt-1">
                          <span className="text-sm font-semibold px-3 py-1 rounded-full" style={{ backgroundColor: colors.color, color: colors.accent }}>
                            {job.company}
                          </span>
                          <span className="text-sm" style={{ color: "#94A3B8" }}>📍 {job.location}</span>
                        </div>
                      </div>
                      <span className="text-xs font-semibold px-3 py-1.5 rounded-full flex-shrink-0" style={{ backgroundColor: "#F1F5F9", color: "#64748B", border: "1px solid #E2E8F0" }}>
                        {job.period}
                      </span>
                    </div>

                    <p className="text-sm leading-relaxed mb-4" style={{ color: "#64748B" }}>{job.description}</p>

                    {"responsibilities" in job && job.responsibilities && job.responsibilities.length > 0 && (
                      <div className="grid sm:grid-cols-2 gap-1.5">
                        {job.responsibilities.map((r: string, j: number) => (
                          <div key={j} className="flex items-start gap-2 text-sm" style={{ color: "#475569" }}>
                            <span className="w-1.5 h-1.5 rounded-full mt-1.5 flex-shrink-0" style={{ backgroundColor: colors.accent }} />
                            {r}
                          </div>
                        ))}
                      </div>
                    )}

                    {"contributions" in job && job.contributions && job.contributions.length > 0 && (
                      <div className="mt-4 pt-4" style={{ borderTop: "1px solid #F1F5F9" }}>
                        <p className="text-xs font-bold uppercase tracking-wider mb-2" style={{ color: colors.accent }}>
                          {cv.sections.contributions}
                        </p>
                        <div className="grid sm:grid-cols-2 gap-1.5">
                          {job.contributions.map((c: string, j: number) => (
                            <div key={j} className="flex items-start gap-2 text-sm" style={{ color: "#475569" }}>
                              <span className="text-xs" style={{ color: colors.accent }}>✦</span>
                              {c}
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <Divider />

        {/* ── SKILLS ─────────────────────────────────────────────────────── */}
        <section className="px-6 lg:px-16 py-16" style={{ backgroundColor: "#FFFFFF" }}>
          <div className="max-w-7xl mx-auto">
            <SectionLabel color="#C9E7FC" accent="#0C4A6E" label={cv.sections.skills} />
            <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {SKILL_GROUPS_DATA.map((group, i) => (
                <div key={i} className="rounded-2xl p-5" style={{ backgroundColor: "#F8FAFC", border: "1px solid rgba(91,75,138,0.06)" }}>
                  <div className="text-xs font-bold uppercase tracking-[0.12em] mb-4 pb-3" style={{ color: group.accent, borderBottom: `2px solid ${group.color}` }}>
                    {cv.skillGroups[i]?.title ?? ""}
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {group.skills.map((skill) => (
                      <span key={skill} className="text-xs font-medium px-3 py-1.5 rounded-full" style={{ backgroundColor: group.color, color: group.accent }}>
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <Divider />

        {/* ── EDUCATION + CERTIFICATIONS ─────────────────────────────────── */}
        <section className="px-6 lg:px-16 py-16" style={{ backgroundColor: "#F8FAFC" }}>
          <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12">
            <div>
              <SectionLabel color="#FFF6C9" accent="#78350F" label={cv.sections.education} />
              <div className="mt-8 space-y-4">
                {cv.education.map((e, i) => (
                  <div key={i} className="flex items-start gap-4 p-4 rounded-2xl" style={{ backgroundColor: "#FFFFFF", border: "1px solid rgba(91,75,138,0.06)" }}>
                    <div className="w-9 h-9 rounded-xl flex-shrink-0 flex items-center justify-center text-sm font-bold" style={{ backgroundColor: "#FFF6C9", color: "#78350F" }}>
                      {e.period.slice(-4)}
                    </div>
                    <div>
                      <p className="text-sm font-semibold leading-snug" style={{ color: "#1E293B" }}>{e.degree}</p>
                      {e.institution && <p className="text-xs mt-0.5" style={{ color: "#64748B" }}>{e.institution}</p>}
                      <p className="text-xs mt-0.5 font-medium" style={{ color: "#94A3B8" }}>{e.period}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-8">
              <div>
                <SectionLabel color="#F9C8D7" accent="#831843" label={cv.sections.certifications} />
                <div className="mt-6 space-y-2">
                  {cv.certifications.map((c, i) => (
                    <div key={i} className="flex items-center gap-3 text-sm p-3 rounded-xl" style={{ backgroundColor: "#FFFFFF", border: "1px solid rgba(91,75,138,0.06)", color: "#475569" }}>
                      <span className="text-base">📜</span> {c}
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <SectionLabel color="#D6C9FC" accent="#5B4B8A" label={cv.sections.languages} />
                <div className="mt-6 flex gap-3">
                  {cv.languages.map((lang) => (
                    <div key={lang.lang} className="card p-4 flex-1 text-center" style={{ backgroundColor: "#FFFFFF" }}>
                      <p className="text-xs font-bold uppercase tracking-wider mb-1" style={{ color: "#5B4B8A" }}>{lang.lang}</p>
                      <p className="text-sm font-medium" style={{ color: "#64748B" }}>{lang.level}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <Divider />

        {/* ── PERSONAL APPROACH ──────────────────────────────────────────── */}
        <section className="px-6 lg:px-16 py-16" style={{ backgroundColor: "#FFFFFF" }}>
          <div className="max-w-7xl mx-auto">
            <SectionLabel color="#D6C9FC" accent="#5B4B8A" label={cv.sections.approach} />
            <div className="mt-8 max-w-2xl">
              <p className="text-base mb-6 leading-relaxed" style={{ color: "#64748B" }}>{cv.approachIntro}</p>
              <div className="flex flex-wrap gap-3">
                {cv.personalValues.map((v) => (
                  <span key={v} className="inline-flex items-center gap-2 text-sm font-semibold px-5 py-3 rounded-2xl" style={{ backgroundColor: "#F1F5F9", color: "#1E293B", border: "2px solid #D6C9FC" }}>
                    <span style={{ color: "#5B4B8A" }}>✔</span> {v}
                  </span>
                ))}
              </div>
              <p className="mt-8 text-base italic leading-relaxed" style={{ color: "#5B4B8A", fontFamily: "var(--font-poppins, Poppins, sans-serif)" }}>
                {cv.approachQuote}
              </p>
            </div>
          </div>
        </section>

        {/* ── BOTTOM NAV ─────────────────────────────────────────────────── */}
        <div className="print:hidden" style={{ backgroundColor: "#F8FAFC", borderTop: "1px solid rgba(91,75,138,0.06)" }}>
          <div className="max-w-7xl mx-auto px-6 lg:px-16 py-10 flex items-center justify-between">
            <Link href="/portfolio" className="inline-flex items-center gap-2 text-sm font-semibold btn-secondary px-5 py-3">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M19 12H5M5 12l7-7M5 12l7 7" />
              </svg>
              {cv.projectsBtn}
            </Link>
            <a href="mailto:letymarinho21@gmail.com" className="btn-primary text-sm py-3 px-5">
              {cv.contactBtn}
            </a>
          </div>
        </div>

      </main>
    </>
  );
}

/* ─── Helpers ─────────────────────────────────────────────────────────────── */

function SectionLabel({ label, color, accent }: { label: string; color: string; accent: string }) {
  return (
    <div className="flex items-center gap-3">
      <div className="h-0.5 w-8 rounded-full" style={{ backgroundColor: accent }} />
      <p className="font-bold text-sm uppercase tracking-[0.15em]" style={{ color: accent }}>{label}</p>
      <div className="flex-1 h-px" style={{ backgroundColor: color }} />
    </div>
  );
}

function Divider() {
  return (
    <div className="max-w-7xl mx-auto px-6 lg:px-16">
      <div className="h-px" style={{ backgroundColor: "rgba(91,75,138,0.06)" }} />
    </div>
  );
}
