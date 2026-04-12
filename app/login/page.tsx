'use client';

import { useState, Suspense } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { useLanguage } from "../contexts/LanguageContext";

const PASSWORD = "leticia2026";

function LoginForm() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const redirectTo = searchParams.get("from") ?? "/portfolio";
  const [value, setValue] = useState("");
  const [showPw, setShowPw] = useState(false);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const { t } = useLanguage();

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (value === PASSWORD) {
      setLoading(true);
      localStorage.setItem("portfolio_unlocked", "1");
      router.replace(redirectTo);
    } else {
      setError(true);
      setValue("");
      setTimeout(() => setError(false), 3000);
    }
  }

  return (
    <main
      className="min-h-screen flex items-center justify-center px-6 relative overflow-hidden"
      style={{ backgroundColor: "#F8FAFC" }}
    >
      {/* Background blobs */}
      <div className="absolute w-96 h-96 rounded-full top-20 -left-20 pointer-events-none"
        style={{ backgroundColor: "#A7C7E7", filter: "blur(80px)", opacity: 0.4, animation: "float 8s ease-in-out infinite" }} />
      <div className="absolute w-80 h-80 rounded-full bottom-20 right-10 pointer-events-none"
        style={{ backgroundColor: "#D8C4F1", filter: "blur(80px)", opacity: 0.35, animation: "float 8s ease-in-out infinite", animationDelay: "2s" }} />

      {/* Card */}
      <div
        className="relative w-full max-w-sm rounded-[28px] p-10"
        style={{ backgroundColor: "#FFFFFF", boxShadow: "0 24px 60px rgba(31, 35, 50, 0.12)", animation: "fade-in-up 0.6s ease forwards" }}
      >
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full mb-6" style={{ backgroundColor: "#D6C9FC" }}>
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#5B4B8A" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
            <path d="M7 11V7a5 5 0 0 1 10 0v4" />
          </svg>
          <span className="text-xs font-semibold" style={{ color: "#5B4B8A" }}>{t.login.badge}</span>
        </div>

        <h1 className="font-bold text-3xl mb-2 leading-tight" style={{ fontFamily: "var(--font-poppins, Poppins, sans-serif)", color: "#334155" }}>
          {t.login.title}
        </h1>
        <p className="text-sm mb-8" style={{ color: "#64748B" }}>
          {t.login.subtitle}
        </p>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          {/* Password input with show/hide toggle */}
          <div className="relative">
            <input
              type={showPw ? "text" : "password"}
              value={value}
              onChange={(e) => setValue(e.target.value)}
              placeholder={t.login.placeholder}
              autoComplete="current-password"
              autoFocus
              className="w-full rounded-2xl px-5 py-4 pr-12 text-sm outline-none transition-all duration-200"
              style={{ backgroundColor: "#F8FAFC", border: "2px solid #E2E8F0", color: "#334155" }}
              onFocus={(e) => { e.currentTarget.style.borderColor = "#7B68EE"; e.currentTarget.style.boxShadow = "0 0 0 4px rgba(123,104,238,0.12)"; }}
              onBlur={(e) => { e.currentTarget.style.borderColor = "#E2E8F0"; e.currentTarget.style.boxShadow = "none"; }}
            />
            <button
              type="button"
              onClick={() => setShowPw(v => !v)}
              className="absolute right-4 top-1/2 -translate-y-1/2 transition-opacity duration-200 hover:opacity-100"
              style={{ color: "#94A3B8", opacity: 0.7, cursor: "pointer" }}
              tabIndex={-1}
              aria-label={showPw ? "Ocultar senha" : "Mostrar senha"}
            >
              {showPw ? (
                /* Eye-off */
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94" />
                  <path d="M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19" />
                  <line x1="1" y1="1" x2="23" y2="23" />
                </svg>
              ) : (
                /* Eye */
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                  <circle cx="12" cy="12" r="3" />
                </svg>
              )}
            </button>
          </div>

          {error && (
            <p className="text-sm pl-1" style={{ color: "#EF4444", animation: "fade-in 0.2s ease forwards" }}>
              {t.login.error}
            </p>
          )}

          <button
            type="submit"
            disabled={loading}
            className="w-full rounded-2xl py-4 text-sm font-semibold tracking-wide transition-all duration-200"
            style={{
              backgroundColor: loading ? "#8B7CF6" : "#5B4B8A",
              color: "#ffffff",
              boxShadow: "0 8px 25px rgba(91, 75, 138, 0.4)",
              opacity: loading ? 0.8 : 1,
              cursor: loading ? "wait" : "pointer",
            }}
          >
            {loading ? t.login.loading : t.login.submit}
          </button>
        </form>

        {/* Back to home */}
        <div className="text-center mt-6">
          <a href="/" className="text-xs font-medium transition-colors duration-200 hover:text-[#5B4B8A]" style={{ color: "#94A3B8" }}>
            ← Voltar ao início
          </a>
        </div>
      </div>
    </main>
  );
}

export default function LoginPage() {
  return (
    <Suspense fallback={<div className="min-h-screen" style={{ backgroundColor: "#F8FAFC" }} />}>
      <LoginForm />
    </Suspense>
  );
}
