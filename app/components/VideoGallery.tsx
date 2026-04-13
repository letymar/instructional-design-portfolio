'use client';

import { useState, useEffect } from "react";
import Image from "next/image";

interface VideoGalleryProps {
  videos: string[];
  title: string;
}

interface ParsedVideo {
  src: string;           // direct mp4 or youtube embed URL
  thumb: string | null;  // thumbnail image URL
  isYoutube: boolean;
}

/* ─── URL helpers ─────────────────────────────────────────────────────────── */

function youtubeId(url: string): string | null {
  const m = url.match(/(?:youtube\.com\/watch\?v=|youtu\.be\/)([^&?/]+)/);
  return m ? m[1] : null;
}

function parseVideo(url: string): ParsedVideo {
  /* YouTube */
  const ytId = youtubeId(url);
  if (ytId) {
    return {
      src: `https://www.youtube.com/embed/${ytId}?autoplay=1&rel=0`,
      thumb: `https://img.youtube.com/vi/${ytId}/maxresdefault.jpg`,
      isYoutube: true,
    };
  }

  /* Cloudinary embed URL */
  if (url.includes("player.cloudinary.com/embed/")) {
    const params = new URLSearchParams(url.split("?")[1] ?? "");
    const cloud = params.get("cloud_name");
    const id = params.get("public_id");
    if (cloud && id) {
      const base = `https://res.cloudinary.com/${cloud}/video/upload/${id}`;
      return { src: `${base}.mp4`, thumb: `${base}.jpg`, isYoutube: false };
    }
  }

  /* Direct Cloudinary mp4 URL */
  if (url.includes("res.cloudinary.com") && url.match(/\.(mp4|webm|mov)$/i)) {
    return { src: url, thumb: url.replace(/\.(mp4|webm|mov)$/i, ".jpg"), isYoutube: false };
  }

  /* Fallback (local mp4, etc.) */
  return { src: url, thumb: null, isYoutube: false };
}

/* ─── Component ───────────────────────────────────────────────────────────── */

export default function VideoGallery({ videos, title }: VideoGalleryProps) {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const parsed = videos.map(parseVideo);

  useEffect(() => {
    if (selectedIndex === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSelectedIndex(null);
      if (e.key === "ArrowRight") setSelectedIndex((i) => i !== null ? (i + 1) % videos.length : null);
      if (e.key === "ArrowLeft") setSelectedIndex((i) => i !== null ? (i - 1 + videos.length) % videos.length : null);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [selectedIndex, videos.length]);

  const label = (i: number) => `${String(i + 1).padStart(2, "0")} / ${String(videos.length).padStart(2, "0")}`;

  return (
    <>
      {/* ── Thumbnail grid ──────────────────────────────────────────────── */}
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
        {parsed.map((v, i) => (
          <button
            key={i}
            onClick={() => setSelectedIndex(i)}
            className="group relative rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-1"
            style={{
              aspectRatio: "16/9",
              backgroundColor: "#1E293B",
              boxShadow: "0 4px 20px rgba(31,35,50,0.12)",
              cursor: "pointer",
            }}
          >
            {/* Thumbnail image */}
            {v.thumb && (
              <Image
                src={v.thumb}
                alt={`${title} — vídeo ${i + 1}`}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 640px) 50vw, 33vw"
              />
            )}

            {/* Dark overlay + play button */}
            <div
              className="absolute inset-0 flex flex-col items-center justify-center gap-2 transition-all duration-300"
              style={{ backgroundColor: v.thumb ? "rgba(0,0,0,0.35)" : "transparent" }}
            >
              <div
                className="w-12 h-12 rounded-full flex items-center justify-center transition-transform duration-300 group-hover:scale-110"
                style={{ backgroundColor: "rgba(30,58,138,0.95)", boxShadow: "0 4px 20px rgba(99,102,241,0.5)" }}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="white">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
              <span className="text-xs font-bold" style={{ color: "rgba(255,255,255,0.8)", letterSpacing: "0.1em" }}>
                VID {String(i + 1).padStart(2, "0")}
              </span>
            </div>
          </button>
        ))}
      </div>

      {/* ── Lightbox ────────────────────────────────────────────────────── */}
      {selectedIndex !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          style={{ backgroundColor: "rgba(0,0,0,0.9)", backdropFilter: "blur(10px)" }}
          onClick={() => setSelectedIndex(null)}
        >
          <div className="relative w-full max-w-4xl" onClick={(e) => e.stopPropagation()}>
            {/* Header */}
            <div className="flex items-center justify-between mb-3 px-1">
              <span className="text-xs font-bold uppercase tracking-[0.15em]" style={{ color: "rgba(255,255,255,0.45)" }}>
                {title} — {label(selectedIndex)}
              </span>
              <button
                onClick={() => setSelectedIndex(null)}
                className="w-8 h-8 rounded-full flex items-center justify-center transition-colors duration-200 hover:bg-white/10"
                style={{ color: "rgba(255,255,255,0.7)", cursor: "pointer" }}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 6L6 18M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Player */}
            {parsed[selectedIndex].isYoutube ? (
              <iframe
                key={parsed[selectedIndex].src}
                src={parsed[selectedIndex].src}
                allow="autoplay; fullscreen"
                allowFullScreen
                className="w-full rounded-2xl"
                style={{ aspectRatio: "16/9", border: "none", backgroundColor: "#000" }}
              />
            ) : (
              <video
                key={parsed[selectedIndex].src}
                src={parsed[selectedIndex].src}
                controls
                autoPlay
                playsInline
                className="w-full rounded-2xl"
                style={{ maxHeight: "75vh", backgroundColor: "#000" }}
              />
            )}

            {/* Prev / Next */}
            {videos.length > 1 && (
              <div className="flex items-center justify-between mt-3 px-1">
                <button
                  onClick={() => setSelectedIndex((selectedIndex - 1 + videos.length) % videos.length)}
                  className="inline-flex items-center gap-2 text-sm font-semibold px-4 py-2 rounded-full transition-all duration-200 hover:bg-white/10"
                  style={{ color: "rgba(255,255,255,0.7)", cursor: "pointer" }}
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M19 12H5M5 12l7-7M5 12l7 7" />
                  </svg>
                  Anterior
                </button>
                <button
                  onClick={() => setSelectedIndex((selectedIndex + 1) % videos.length)}
                  className="inline-flex items-center gap-2 text-sm font-semibold px-4 py-2 rounded-full transition-all duration-200 hover:bg-white/10"
                  style={{ color: "rgba(255,255,255,0.7)", cursor: "pointer" }}
                >
                  Próximo
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}
