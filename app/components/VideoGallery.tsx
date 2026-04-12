'use client';

import { useState, useEffect } from "react";

interface VideoGalleryProps {
  videos: string[];
  title: string;
}

export default function VideoGallery({ videos, title }: VideoGalleryProps) {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  // Close on Escape key
  useEffect(() => {
    if (selectedIndex === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSelectedIndex(null);
      if (e.key === "ArrowRight") setSelectedIndex((i) => (i !== null ? (i + 1) % videos.length : null));
      if (e.key === "ArrowLeft") setSelectedIndex((i) => (i !== null ? (i - 1 + videos.length) % videos.length : null));
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [selectedIndex, videos.length]);

  const videoNumber = (i: number) => String(i + 1).padStart(2, "0");

  return (
    <>
      {/* Grid of thumbnails */}
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
        {videos.map((src, i) => (
          <button
            key={src}
            onClick={() => setSelectedIndex(i)}
            className="group relative rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-1"
            style={{
              aspectRatio: "16/9",
              backgroundColor: "#1E293B",
              boxShadow: "0 4px 20px rgba(31,35,50,0.12)",
              cursor: "pointer",
            }}
          >
            {/* Play icon */}
            <div
              className="absolute inset-0 flex flex-col items-center justify-center gap-2 transition-all duration-300 group-hover:bg-[#5B4B8A]/20"
            >
              <div
                className="w-12 h-12 rounded-full flex items-center justify-center transition-transform duration-300 group-hover:scale-110"
                style={{ backgroundColor: "rgba(91,75,138,0.9)", boxShadow: "0 4px 20px rgba(91,75,138,0.4)" }}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="white">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
              <span
                className="text-xs font-bold"
                style={{ color: "rgba(255,255,255,0.6)", letterSpacing: "0.12em" }}
              >
                VID {videoNumber(i)}
              </span>
            </div>
          </button>
        ))}
      </div>

      {/* Lightbox */}
      {selectedIndex !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          style={{ backgroundColor: "rgba(0,0,0,0.88)", backdropFilter: "blur(8px)" }}
          onClick={() => setSelectedIndex(null)}
        >
          {/* Video container */}
          <div
            className="relative w-full max-w-4xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="flex items-center justify-between mb-3 px-1">
              <span
                className="text-xs font-bold uppercase tracking-[0.15em]"
                style={{ color: "rgba(255,255,255,0.5)" }}
              >
                {title} — Vídeo {videoNumber(selectedIndex)} / {videoNumber(videos.length - 1)}
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

            {/* Video player */}
            <video
              key={videos[selectedIndex]}
              src={videos[selectedIndex]}
              controls
              autoPlay
              playsInline
              className="w-full rounded-2xl"
              style={{ maxHeight: "75vh", backgroundColor: "#000" }}
            />

            {/* Navigation arrows */}
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
