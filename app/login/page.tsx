'use client';

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useLanguage } from "../contexts/LanguageContext";

const PASSWORD = "leticia2026";

export default function LoginPage() {
  const router = useRouter();
  const [value, setValue] = useState("");
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const { t } = useLanguage();

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (value === PASSWORD) {
      setLoading(true);
      localStorage.setItem("portfolio_unlocked", "1");
      router.replace("/");
    } else {
      setError(true);
      setValue("");
      setTimeout(() => setError(false), 3000);
    }
  }

  return (
    <main className="min-h-screen flex items-center justify-center px-6 relative overflow-hidden"
      style={{ backgroundColor: "#F8FAFC" }}
    >
      <div
        className="absolute w-96 h-96 rounded-full top-20 -left-20 pointer-events-none"
        style={{ backgroundColor: "#A7C7E7", filter: "blur(80px)", opacity: 0.4, animation: "float 8s ease-in-out infinite" }}
      />
      <div
        className="absolute w-80 h-80 rounded-full bottom-20 right-10 pointer-events-none"
        style={{ backgroundColor: "#D8C4F1", filter: "blur(80px)", opacity: 0.35, animation: "float 8s ease-in-out infinite", animationDelay: "2s" }}
      />

      <div
        className="relative w-full max-w-sm rounded-[28px] p-10"
        style={{ backgroundColor: "#FFFFFF", boxShadow: "0 24px 60px rgba(31, 35, 50, 0.12)", animation: "fade-in-up 0.6s ease forwards" }}
      >
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
          <input
            type="password"
            value={value}
            onChange={(e) => setValue(e.target.value)}
            placeholder={t.login.placeholder}
            autoComplete="current-password"
            autoFocus
            className="w-full rounded-2xl px-5 py-4 text-sm outline-none transition-all duration-200"
            style={{ backgroundColor: "#F8FAFC", border: "2px solid #E2E8F0", color: "#334155" }}
            onFocus={(e) => { e.currentTarget.style.borderColor = "#7B68EE"; e.currentTarget.style.boxShadow = "0 0 0 4px rgba(123,104,238,0.12)"; }}
            onBlur={(e) => { e.currentTarget.style.borderColor = "#E2E8F0"; e.currentTarget.style.boxShadow = "none"; }}
          />

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
      </div>
    </main>
  );
}
