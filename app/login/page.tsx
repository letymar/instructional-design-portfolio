'use client';

import { useState } from "react";
import { useRouter } from "next/navigation";

const PASSWORD = "leticia2026";

export default function LoginPage() {
  const router = useRouter();
  const [value, setValue] = useState("");
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

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
    <main
      className="min-h-screen flex items-center justify-center px-6"
      style={{ backgroundColor: "#0B0B0F" }}
    >
      <div
        className="w-full max-w-sm"
        style={{ animation: "fade-in-up 0.6s ease forwards" }}
      >
        {/* Nome */}
        <p
          className="text-xs uppercase tracking-[0.2em] mb-3"
          style={{ color: "#7A7A8C" }}
        >
          Portfólio Privado
        </p>
        <h1
          className="text-4xl font-normal mb-10 leading-tight"
          style={{
            fontFamily: "var(--font-playfair), Georgia, serif",
            color: "#F0EFE8",
          }}
        >
          Letícia Marinho
        </h1>

        {/* Formulário */}
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <div className="relative">
            <input
              type="password"
              value={value}
              onChange={(e) => setValue(e.target.value)}
              placeholder="Palavra-passe"
              autoComplete="current-password"
              autoFocus
              className="w-full rounded-lg px-4 py-3.5 text-sm outline-none transition-all duration-200"
              style={{
                backgroundColor: "#14141A",
                border: "1px solid rgba(255,255,255,0.08)",
                color: "#F0EFE8",
              }}
              onFocus={(e) => {
                e.currentTarget.style.borderColor = "#8B7CF6";
              }}
              onBlur={(e) => {
                e.currentTarget.style.borderColor = "rgba(255,255,255,0.08)";
              }}
            />
          </div>

          {error && (
            <p
              className="text-sm pl-1"
              style={{
                color: "#F87171",
                animation: "fade-in 0.2s ease forwards",
              }}
            >
              Palavra-passe incorreta.
            </p>
          )}

          <button
            type="submit"
            disabled={loading}
            className="w-full rounded-lg py-3.5 text-sm font-medium tracking-wide transition-opacity duration-150"
            style={{
              backgroundColor: "#8B7CF6",
              color: "#ffffff",
              opacity: loading ? 0.7 : 1,
              cursor: loading ? "wait" : "pointer",
            }}
          >
            {loading ? "A entrar..." : "Entrar"}
          </button>
        </form>
      </div>
    </main>
  );
}
