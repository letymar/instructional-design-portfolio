'use client';

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Nav from "@/app/components/Nav";

/* ─── Data ────────────────────────────────────────────────────────────────── */

const experience = [
  {
    company: "CDI Portugal",
    role: "Learning Designer & Community Manager",
    location: "Porto, Portugal",
    period: "July 2024 — Present",
    color: "#D6C9FC",
    accent: "#5B4B8A",
    description: "Design and coordinate innovative learning experiences in programming, robotics, and educational technology.",
    responsibilities: [
      "Design hands-on STEAM learning experiences",
      "Create educational programs in robotics, AI, and digital literacy",
      "Coordinate activities at Centro de Cidadania Digital (CCD) Valongo and Centro de Inovação Carlos Fiolhais",
      "Support educators in integrating technology into classrooms",
      "Plan workshops, coding clubs, and technology-based projects",
      "Develop project-based learning experiences",
      "Build and manage learning communities",
    ],
    contributions: [
      "Development of robotics and programming learning pathways",
      "Implementation of digital literacy initiatives for schools and communities",
      "Design of educational experiences using Arduino, Scratch, AI tools, and robotics kits",
      "Creation of STEAM workshops and innovation-based learning experiences",
    ],
  },
  {
    company: "CDI Portugal",
    role: "Programming and Robotics Teacher",
    location: "Porto, Portugal",
    period: "September 2023 — July 2024",
    color: "#CFF8E8",
    accent: "#065F46",
    description: "Taught programming and robotics using visual and hands-on tools for children.",
    responsibilities: [
      "Teaching Scratch and visual programming",
      "Introducing robotics using mBlock and beginner robotics kits",
      "Developing computational thinking through games and challenges",
      "Supporting students in solving real-world problems through code",
      "Promoting creativity and logical reasoning",
    ],
  },
  {
    company: "CoderDojo",
    role: "Programming Instructor",
    location: "Valongo, Portugal",
    period: "January 2024 — Present",
    color: "#C9E7FC",
    accent: "#0C4A6E",
    description: "Teach coding and computational thinking to children using project-based learning approaches.",
    responsibilities: [],
  },
  {
    company: "Happy Code Portugal",
    role: "Programming Teacher",
    location: "Porto, Portugal",
    period: "March 2024 — June 2024",
    color: "#FFF6C9",
    accent: "#78350F",
    description: "Delivered programming lessons using Scratch, Minecraft, and Lego Education tools.",
    responsibilities: [],
  },
  {
    company: "MEWEEE",
    role: "UX Researcher",
    location: "United Kingdom (Remote)",
    period: "August 2022 — June 2024",
    color: "#F9C8D7",
    accent: "#831843",
    description: "Conducted user research to improve digital experiences and understand user needs.",
    responsibilities: [
      "Conduct usability testing sessions",
      "Perform stakeholder interviews",
      "Collect qualitative and quantitative research data",
      "Support UX strategy decisions",
    ],
  },
  {
    company: "Athena Educacional LTDA",
    role: "School Manager",
    location: "Brazil",
    period: "February 2019 — January 2022",
    color: "#D6C9FC",
    accent: "#5B4B8A",
    description: "Managed school operations and coordinated educational teams.",
    responsibilities: [
      "Lead pedagogical teams",
      "Improve teaching strategies",
      "Coordinate school planning",
      "Implement educational innovation initiatives",
    ],
  },
  {
    company: "Athena Centro Educacional",
    role: "Instructional Designer",
    location: "Brazil",
    period: "January 2017 — December 2019",
    color: "#CFF8E8",
    accent: "#065F46",
    description: "Designed educational materials and learning strategies aligned with institutional goals.",
    responsibilities: [
      "Develop learning materials",
      "Create digital educational resources",
      "Design teaching strategies",
      "Evaluate curriculum effectiveness",
    ],
  },
  {
    company: "Institute of Education Tavares Bueno",
    role: "Teacher",
    location: "Brazil",
    period: "February 2014 — August 2015",
    color: "#C9E7FC",
    accent: "#0C4A6E",
    description: "Taught early education and supported student learning development.",
    responsibilities: [],
  },
];

const skillGroups = [
  {
    title: "Learning Design",
    color: "#D6C9FC",
    accent: "#5B4B8A",
    skills: ["Instructional Design", "Learning Experience Design (LXD)", "Curriculum Development", "STEAM Education", "Gamification", "Project-Based Learning", "Educational Innovation"],
  },
  {
    title: "Technology & Robotics",
    color: "#CFF8E8",
    accent: "#065F46",
    skills: ["Scratch", "Arduino", "mBlock", "Robotics Kits", "Artificial Intelligence Tools", "Makey Makey", "Micro:bit", "Raspberry Pi"],
  },
  {
    title: "UX & Digital Design",
    color: "#C9E7FC",
    accent: "#0C4A6E",
    skills: ["UX Research", "User-Centered Design", "Usability Testing", "Learning Interface Design"],
  },
  {
    title: "Community & Education",
    color: "#F9C8D7",
    accent: "#831843",
    skills: ["Digital Literacy", "Educational Project Management", "Teacher Training", "Community Learning Programs"],
  },
];

const education = [
  { degree: "Postgraduate — UX & UI Design", institution: "University of State Minas Gerais", period: "2021 — 2022" },
  { degree: "Postgraduate — School Administration and Supervision", institution: "", period: "2019 — 2020" },
  { degree: "Bachelor's Degree — Pedagogy", institution: "University Iguaçu", period: "2015 — 2018" },
  { degree: "Teacher Training — Education", institution: "Colégio Estadual Presidente Rodrigues Alves", period: "2010 — 2013" },
  { degree: "UX Design", institution: "Interaction Design Foundation", period: "2023" },
];

const certifications = [
  "Agile Methods for UX Design",
  "Accessibility: How to Design for All",
  "Mobile UX Design: The Beginner's Guide",
  "From Educators to Entrepreneurial Facilitators",
  "Curso Completo de Design de Interface",
];

const summary = [
  "10+ years of experience in Education and Learning Design",
  "Specialist in Instructional Design and Learning Experience Design",
  "Strong experience in Educational Technology, Robotics, and AI Education",
  "Designer of STEAM-based educational experiences",
  "Experience in UX Research and Educational Innovation",
  "Coordinator of digital learning communities and educational projects",
  "Creator of hands-on learning projects using Scratch, Arduino, AI tools, and robotics",
  "Experienced in community-driven digital inclusion initiatives",
];

const personalValues = [
  "Practical", "Creative", "Accessible", "Meaningful", "Connected to real-world challenges",
];

/* ─── Component ───────────────────────────────────────────────────────────── */

export default function CVPage() {
  const router = useRouter();
  const [authChecked, setAuthChecked] = useState(false);

  useEffect(() => {
    if (!localStorage.getItem("portfolio_unlocked")) {
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
        <section
          className="relative overflow-hidden px-6 lg:px-16 py-20 md:py-28"
          style={{ backgroundColor: "#FFFFFF" }}
        >
          {/* Background blob */}
          <div
            className="absolute top-0 right-0 w-96 h-96 pointer-events-none"
            style={{ background: "radial-gradient(circle, rgba(214,201,252,0.4) 0%, transparent 70%)", transform: "translate(30%, -30%)" }}
          />

          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-8">
              <div>
                {/* Badge */}
                <div
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6"
                  style={{ backgroundColor: "#D6C9FC" }}
                >
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#5B4B8A" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" /><circle cx="12" cy="7" r="4" />
                  </svg>
                  <span className="text-xs font-bold uppercase tracking-wider" style={{ color: "#5B4B8A" }}>Curriculum Vitae</span>
                </div>

                <h1
                  className="font-bold leading-tight mb-3"
                  style={{ fontFamily: "var(--font-poppins, Poppins, sans-serif)", fontSize: "clamp(2rem, 5vw, 3.5rem)", color: "#1E293B" }}
                >
                  Letícia Marinho
                </h1>

                <p
                  className="font-semibold mb-6 leading-relaxed"
                  style={{ fontSize: "clamp(0.9rem, 1.5vw, 1.1rem)", color: "#5B4B8A", maxWidth: "55ch" }}
                >
                  Learning Designer · Instructional Designer · EdTech & AI Educator · Programming & Robotics Teacher
                </p>

                {/* Contact row */}
                <div className="flex flex-wrap gap-3">
                  {[
                    { icon: "📍", label: "Porto, Portugal", href: null },
                    { icon: "📧", label: "leahmarinho@hotmail.com", href: "mailto:leahmarinho@hotmail.com" },
                    { icon: "🔗", label: "LinkedIn", href: "https://www.linkedin.com/in/leticia-marinho-aa2358185" },
                    { icon: "🎨", label: "Behance", href: "https://www.behance.net/leticiammarinho" },
                  ].map((c) =>
                    c.href ? (
                      <a
                        key={c.label}
                        href={c.href}
                        target={c.href.startsWith("http") ? "_blank" : undefined}
                        rel={c.href.startsWith("http") ? "noopener noreferrer" : undefined}
                        className="inline-flex items-center gap-2 text-sm font-medium px-4 py-2 rounded-full transition-all duration-200 hover:-translate-y-0.5"
                        style={{ backgroundColor: "#F1F5F9", color: "#475569", border: "1px solid #E2E8F0", cursor: "pointer" }}
                      >
                        <span>{c.icon}</span> {c.label}
                      </a>
                    ) : (
                      <span
                        key={c.label}
                        className="inline-flex items-center gap-2 text-sm font-medium px-4 py-2 rounded-full"
                        style={{ backgroundColor: "#F1F5F9", color: "#475569", border: "1px solid #E2E8F0" }}
                      >
                        <span>{c.icon}</span> {c.label}
                      </span>
                    )
                  )}
                </div>
              </div>

              {/* Print / Back buttons */}
              <div className="flex gap-3 flex-shrink-0 print:hidden">
                <button
                  onClick={() => window.print()}
                  className="btn-secondary text-sm py-2.5 px-5"
                  style={{ cursor: "pointer" }}
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="6 9 6 2 18 2 18 9" />
                    <path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2" />
                    <rect x="6" y="14" width="12" height="8" />
                  </svg>
                  Imprimir PDF
                </button>
                <Link href="/" className="btn-primary text-sm py-2.5 px-5">
                  Ver Portfólio
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </section>

        <div className="max-w-7xl mx-auto px-6 lg:px-16">
          <div className="h-px" style={{ backgroundColor: "rgba(91,75,138,0.08)" }} />
        </div>

        {/* ── ABOUT ──────────────────────────────────────────────────────── */}
        <section className="px-6 lg:px-16 py-16" style={{ backgroundColor: "#FFFFFF" }}>
          <div className="max-w-7xl mx-auto">
            <SectionLabel color="#D6C9FC" accent="#5B4B8A" label="Sobre" />
            <div className="grid lg:grid-cols-[1fr_1fr] gap-10 mt-8">
              <div>
                <p className="text-base leading-loose" style={{ color: "#475569", maxWidth: "65ch" }}>
                  I am a <strong style={{ color: "#1E293B" }}>Learning Experience Designer</strong> and educator with over a decade of experience in education, technology, and digital innovation.
                </p>
                <p className="text-base leading-loose mt-4" style={{ color: "#475569", maxWidth: "65ch" }}>
                  My work focuses on designing meaningful, hands-on learning experiences that combine{" "}
                  <strong style={{ color: "#1E293B" }}>technology, creativity, and real-world problem solving</strong>.
                </p>
                <p className="text-base leading-loose mt-4" style={{ color: "#475569", maxWidth: "65ch" }}>
                  Currently, I work at <strong style={{ color: "#1E293B" }}>CDI Portugal</strong>, where I design and coordinate educational programs in{" "}
                  <strong style={{ color: "#1E293B" }}>programming, robotics, artificial intelligence, and digital literacy</strong>, supporting children, youth, educators, and communities.
                </p>
                <p className="text-base leading-loose mt-4" style={{ color: "#475569", maxWidth: "65ch" }}>
                  I am passionate about transforming complex technological concepts into{" "}
                  <strong style={{ color: "#1E293B" }}>engaging, accessible, and impactful learning experiences</strong>, especially through STEAM education, gamification, and project-based learning.
                </p>
              </div>
              {/* Summary list */}
              <div
                className="rounded-2xl p-6"
                style={{ backgroundColor: "#F8FAFC", border: "1px solid rgba(91,75,138,0.08)" }}
              >
                <p className="text-xs font-bold uppercase tracking-[0.15em] mb-4" style={{ color: "#5B4B8A" }}>Resumo Profissional</p>
                <ul className="space-y-2">
                  {summary.map((s, i) => (
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
            <SectionLabel color="#CFF8E8" accent="#065F46" label="Experiência Profissional" />
            <div className="mt-8 space-y-6">
              {experience.map((job, i) => (
                <div
                  key={i}
                  className="card p-6 lg:p-8"
                  style={{ backgroundColor: "#FFFFFF", borderLeft: `4px solid ${job.color}` }}
                >
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-3">
                    <div>
                      <p
                        className="font-bold text-lg leading-snug"
                        style={{ fontFamily: "var(--font-poppins, Poppins, sans-serif)", color: "#1E293B" }}
                      >
                        {job.role}
                      </p>
                      <div className="flex flex-wrap items-center gap-3 mt-1">
                        <span
                          className="text-sm font-semibold px-3 py-1 rounded-full"
                          style={{ backgroundColor: job.color, color: job.accent }}
                        >
                          {job.company}
                        </span>
                        <span className="text-sm" style={{ color: "#94A3B8" }}>
                          📍 {job.location}
                        </span>
                      </div>
                    </div>
                    <span
                      className="text-xs font-semibold px-3 py-1.5 rounded-full flex-shrink-0"
                      style={{ backgroundColor: "#F1F5F9", color: "#64748B", border: "1px solid #E2E8F0" }}
                    >
                      {job.period}
                    </span>
                  </div>

                  <p className="text-sm leading-relaxed mb-4" style={{ color: "#64748B" }}>
                    {job.description}
                  </p>

                  {job.responsibilities.length > 0 && (
                    <div className="grid sm:grid-cols-2 gap-1.5">
                      {job.responsibilities.map((r, j) => (
                        <div key={j} className="flex items-start gap-2 text-sm" style={{ color: "#475569" }}>
                          <span className="w-1.5 h-1.5 rounded-full mt-1.5 flex-shrink-0" style={{ backgroundColor: job.accent }} />
                          {r}
                        </div>
                      ))}
                    </div>
                  )}

                  {job.contributions && job.contributions.length > 0 && (
                    <div className="mt-4 pt-4" style={{ borderTop: "1px solid #F1F5F9" }}>
                      <p className="text-xs font-bold uppercase tracking-wider mb-2" style={{ color: job.accent }}>
                        Contribuições Principais
                      </p>
                      <div className="grid sm:grid-cols-2 gap-1.5">
                        {job.contributions.map((c, j) => (
                          <div key={j} className="flex items-start gap-2 text-sm" style={{ color: "#475569" }}>
                            <span className="text-xs" style={{ color: job.accent }}>✦</span>
                            {c}
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        <Divider />

        {/* ── SKILLS ─────────────────────────────────────────────────────── */}
        <section className="px-6 lg:px-16 py-16" style={{ backgroundColor: "#FFFFFF" }}>
          <div className="max-w-7xl mx-auto">
            <SectionLabel color="#C9E7FC" accent="#0C4A6E" label="Competências" />
            <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {skillGroups.map((group) => (
                <div
                  key={group.title}
                  className="rounded-2xl p-5"
                  style={{ backgroundColor: "#F8FAFC", border: "1px solid rgba(91,75,138,0.06)" }}
                >
                  <div
                    className="text-xs font-bold uppercase tracking-[0.12em] mb-4 pb-3"
                    style={{ color: group.accent, borderBottom: `2px solid ${group.color}` }}
                  >
                    {group.title}
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {group.skills.map((skill) => (
                      <span
                        key={skill}
                        className="text-xs font-medium px-3 py-1.5 rounded-full"
                        style={{ backgroundColor: group.color, color: group.accent }}
                      >
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
            {/* Education */}
            <div>
              <SectionLabel color="#FFF6C9" accent="#78350F" label="Formação Académica" />
              <div className="mt-8 space-y-4">
                {education.map((e, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-4 p-4 rounded-2xl"
                    style={{ backgroundColor: "#FFFFFF", border: "1px solid rgba(91,75,138,0.06)" }}
                  >
                    <div
                      className="w-9 h-9 rounded-xl flex-shrink-0 flex items-center justify-center text-sm font-bold"
                      style={{ backgroundColor: "#FFF6C9", color: "#78350F" }}
                    >
                      {e.period.slice(-4)}
                    </div>
                    <div>
                      <p className="text-sm font-semibold leading-snug" style={{ color: "#1E293B" }}>
                        {e.degree}
                      </p>
                      {e.institution && (
                        <p className="text-xs mt-0.5" style={{ color: "#64748B" }}>{e.institution}</p>
                      )}
                      <p className="text-xs mt-0.5 font-medium" style={{ color: "#94A3B8" }}>{e.period}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Certifications + Languages + Approach */}
            <div className="space-y-8">
              {/* Certifications */}
              <div>
                <SectionLabel color="#F9C8D7" accent="#831843" label="Certificações" />
                <div className="mt-6 space-y-2">
                  {certifications.map((c, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-3 text-sm p-3 rounded-xl"
                      style={{ backgroundColor: "#FFFFFF", border: "1px solid rgba(91,75,138,0.06)", color: "#475569" }}
                    >
                      <span className="text-base">📜</span> {c}
                    </div>
                  ))}
                </div>
              </div>

              {/* Languages */}
              <div>
                <SectionLabel color="#D6C9FC" accent="#5B4B8A" label="Idiomas" />
                <div className="mt-6 flex gap-3">
                  <div className="card p-4 flex-1 text-center" style={{ backgroundColor: "#FFFFFF" }}>
                    <p className="text-xs font-bold uppercase tracking-wider mb-1" style={{ color: "#5B4B8A" }}>Português</p>
                    <p className="text-sm font-medium" style={{ color: "#64748B" }}>Nativo</p>
                  </div>
                  <div className="card p-4 flex-1 text-center" style={{ backgroundColor: "#FFFFFF" }}>
                    <p className="text-xs font-bold uppercase tracking-wider mb-1" style={{ color: "#5B4B8A" }}>English</p>
                    <p className="text-sm font-medium" style={{ color: "#64748B" }}>Professional</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <Divider />

        {/* ── PERSONAL APPROACH ──────────────────────────────────────────── */}
        <section className="px-6 lg:px-16 py-16" style={{ backgroundColor: "#FFFFFF" }}>
          <div className="max-w-7xl mx-auto">
            <SectionLabel color="#D6C9FC" accent="#5B4B8A" label="Abordagem Pessoal" />
            <div className="mt-8 max-w-2xl">
              <p className="text-base mb-6 leading-relaxed" style={{ color: "#64748B" }}>
                I believe learning should be:
              </p>
              <div className="flex flex-wrap gap-3">
                {personalValues.map((v) => (
                  <span
                    key={v}
                    className="inline-flex items-center gap-2 text-sm font-semibold px-5 py-3 rounded-2xl"
                    style={{ backgroundColor: "#F1F5F9", color: "#1E293B", border: "2px solid #D6C9FC" }}
                  >
                    <span style={{ color: "#5B4B8A" }}>✔</span> {v}
                  </span>
                ))}
              </div>
              <p
                className="mt-8 text-base italic leading-relaxed"
                style={{ color: "#5B4B8A", fontFamily: "var(--font-poppins, Poppins, sans-serif)" }}
              >
                "Every learning experience I design aims to empower learners to{" "}
                <strong>create, explore, and solve problems through technology</strong>."
              </p>
            </div>
          </div>
        </section>

        {/* ── BOTTOM NAV ─────────────────────────────────────────────────── */}
        <div className="print:hidden" style={{ backgroundColor: "#F8FAFC", borderTop: "1px solid rgba(91,75,138,0.06)" }}>
          <div className="max-w-7xl mx-auto px-6 lg:px-16 py-10 flex items-center justify-between">
            <Link href="/#trabalho" className="inline-flex items-center gap-2 text-sm font-semibold btn-secondary px-5 py-3">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M19 12H5M5 12l7-7M5 12l7 7" />
              </svg>
              Ver Projetos
            </Link>
            <a href="mailto:letymarinho21@gmail.com" className="btn-primary text-sm py-3 px-5">
              Falar comigo
            </a>
          </div>
        </div>

      </main>
    </>
  );
}

/* ─── Helper components ───────────────────────────────────────────────────── */

function SectionLabel({ label, color, accent }: { label: string; color: string; accent: string }) {
  return (
    <div className="flex items-center gap-3">
      <div className="h-0.5 w-8 rounded-full" style={{ backgroundColor: accent }} />
      <p
        className="font-bold text-sm uppercase tracking-[0.15em]"
        style={{ color: accent }}
      >
        {label}
      </p>
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
