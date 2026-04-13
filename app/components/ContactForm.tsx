'use client';

import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import { useLanguage } from "../contexts/LanguageContext";

export default function ContactForm() {
  const { t } = useLanguage();
  const c = t.contact;
  const formRef = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [errors, setErrors] = useState<{ name?: string; email?: string; message?: string }>({});

  function validate(data: FormData) {
    const e: typeof errors = {};
    if (!String(data.get("user_name") ?? "").trim()) e.name = c.errorRequired;
    const email = String(data.get("user_email") ?? "").trim();
    if (!email) e.email = c.errorRequired;
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) e.email = c.errorEmail;
    if (!String(data.get("message") ?? "").trim()) e.message = c.errorRequired;
    return e;
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const form = formRef.current;
    if (!form) return;

    const data = new FormData(form);
    const errs = validate(data);
    if (Object.keys(errs).length) { setErrors(errs); return; }
    setErrors({});
    setStatus("sending");

    try {
      await emailjs.sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID ?? "",
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID ?? "",
        form,
        { publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY ?? "" }
      );
      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  const inputBase: React.CSSProperties = {
    width: "100%",
    backgroundColor: "#FAFAFA",
    border: "2px solid #E2E8F0",
    borderRadius: "14px",
    padding: "12px 16px",
    fontSize: "14px",
    color: "#111827",
    outline: "none",
    transition: "border-color 0.2s, box-shadow 0.2s",
  };

  const labelStyle: React.CSSProperties = {
    display: "block",
    fontSize: "13px",
    fontWeight: 600,
    color: "#475569",
    marginBottom: "6px",
  };

  function Field({ id, label, error, children }: { id: string; label: string; error?: string; children: React.ReactNode }) {
    return (
      <div>
        <label htmlFor={id} style={labelStyle}>{label}</label>
        {children}
        {error && <p style={{ fontSize: "12px", color: "#EF4444", marginTop: "4px" }}>{error}</p>}
      </div>
    );
  }

  if (status === "success") {
    return (
      <div
        className="rounded-3xl p-8 flex flex-col items-center text-center gap-4"
        style={{ backgroundColor: "#FFFFFF", boxShadow: "0 8px 32px rgba(99,102,241,0.10)" }}
      >
        <div className="w-16 h-16 rounded-2xl flex items-center justify-center" style={{ backgroundColor: "#CFF8E8" }}>
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#065F46" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="20 6 9 17 4 12" />
          </svg>
        </div>
        <h3 className="font-bold text-lg" style={{ fontFamily: "var(--font-poppins, Poppins, sans-serif)", color: "#111827" }}>
          {c.successTitle}
        </h3>
        <p style={{ color: "#6B7280", fontSize: "14px" }}>{c.successMessage}</p>
        <button
          onClick={() => setStatus("idle")}
          className="btn-secondary text-sm px-5 py-2.5 mt-2"
        >
          {c.sendAnother}
        </button>
      </div>
    );
  }

  return (
    <div
      className="rounded-3xl p-8"
      style={{ backgroundColor: "#FFFFFF", boxShadow: "0 8px 32px rgba(99,102,241,0.10)" }}
    >
      <form ref={formRef} onSubmit={handleSubmit} className="flex flex-col gap-5" noValidate>
        <Field id="user_name" label={c.labelName} error={errors.name}>
          <input
            id="user_name"
            name="user_name"
            type="text"
            placeholder={c.placeholderName}
            style={inputBase}
            onFocus={e => { e.currentTarget.style.borderColor = "#6366F1"; e.currentTarget.style.boxShadow = "0 0 0 4px rgba(99,102,241,0.10)"; }}
            onBlur={e => { e.currentTarget.style.borderColor = errors.name ? "#EF4444" : "#E2E8F0"; e.currentTarget.style.boxShadow = "none"; }}
          />
        </Field>

        <Field id="user_email" label={c.labelEmail} error={errors.email}>
          <input
            id="user_email"
            name="user_email"
            type="email"
            placeholder={c.placeholderEmail}
            style={inputBase}
            onFocus={e => { e.currentTarget.style.borderColor = "#6366F1"; e.currentTarget.style.boxShadow = "0 0 0 4px rgba(99,102,241,0.10)"; }}
            onBlur={e => { e.currentTarget.style.borderColor = errors.email ? "#EF4444" : "#E2E8F0"; e.currentTarget.style.boxShadow = "none"; }}
          />
        </Field>

        <Field id="message" label={c.labelMessage} error={errors.message}>
          <textarea
            id="message"
            name="message"
            rows={4}
            placeholder={c.placeholderMessage}
            style={{ ...inputBase, resize: "vertical", minHeight: "110px" }}
            onFocus={e => { e.currentTarget.style.borderColor = "#6366F1"; e.currentTarget.style.boxShadow = "0 0 0 4px rgba(99,102,241,0.10)"; }}
            onBlur={e => { e.currentTarget.style.borderColor = errors.message ? "#EF4444" : "#E2E8F0"; e.currentTarget.style.boxShadow = "none"; }}
          />
        </Field>

        {status === "error" && (
          <p style={{ fontSize: "13px", color: "#EF4444", textAlign: "center" }}>{c.errorSend}</p>
        )}

        <button
          type="submit"
          disabled={status === "sending"}
          className="w-full rounded-2xl py-4 text-sm font-semibold tracking-wide transition-all duration-200"
          style={{
            backgroundColor: status === "sending" ? "#818CF8" : "#1E3A8A",
            color: "#ffffff",
            boxShadow: "0 8px 25px rgba(30,58,138,0.35)",
            opacity: status === "sending" ? 0.85 : 1,
            cursor: status === "sending" ? "wait" : "pointer",
          }}
        >
          {status === "sending" ? c.sending : c.submit}
        </button>
      </form>
    </div>
  );
}
