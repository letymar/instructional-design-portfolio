'use client';

import { useState } from "react";
import Image from "next/image";

interface ImageGalleryProps {
  images: string[];
  title: string;
}

export default function ImageGallery({ images, title }: ImageGalleryProps) {
  const [lightbox, setLightbox] = useState<number | null>(null);

  if (images.length === 0) return null;

  function prev(e: React.MouseEvent) {
    e.stopPropagation();
    setLightbox((i) => (i !== null && i > 0 ? i - 1 : i));
  }

  function next(e: React.MouseEvent) {
    e.stopPropagation();
    setLightbox((i) => (i !== null && i < images.length - 1 ? i + 1 : i));
  }

  return (
    <>
      {/* Grid */}
      <div
        className={`grid gap-2 ${
          images.length === 1
            ? "grid-cols-1"
            : images.length === 2
            ? "grid-cols-2"
            : "grid-cols-2 md:grid-cols-3"
        }`}
      >
        {images.map((src, i) => (
          <button
            key={i}
            onClick={() => setLightbox(i)}
            className="relative overflow-hidden rounded-lg cursor-pointer group"
            style={{ aspectRatio: "4/3" }}
          >
            <Image
              src={src}
              alt={`${title} — imagem ${i + 1}`}
              fill
              className="object-cover transition-transform duration-400 group-hover:scale-[1.04]"
              sizes="(max-width: 768px) 50vw, 33vw"
            />
            <div
              className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200"
              style={{ backgroundColor: "rgba(51,65,85,0.35)" }}
            >
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7" />
              </svg>
            </div>
          </button>
        ))}
      </div>

      {/* Lightbox */}
      {lightbox !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center"
          style={{ backgroundColor: "rgba(0,0,0,0.92)" }}
          onClick={() => setLightbox(null)}
        >
          {/* Imagem */}
          <div
            className="relative mx-4"
            style={{ maxWidth: "90vw", maxHeight: "90vh" }}
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={images[lightbox]}
              alt={`${title} — imagem ${lightbox + 1}`}
              width={1200}
              height={900}
              className="object-contain rounded-lg"
              style={{ maxHeight: "85vh", width: "auto" }}
            />
            {/* Contador */}
            <p
              className="absolute bottom-3 left-1/2 -translate-x-1/2 text-xs"
              style={{ color: "rgba(255,255,255,0.5)" }}
            >
              {lightbox + 1} / {images.length}
            </p>
          </div>

          {/* Anterior */}
          {lightbox > 0 && (
            <button
              onClick={prev}
              className="absolute left-4 top-1/2 -translate-y-1/2 flex items-center justify-center w-10 h-10 rounded-full transition-all duration-150"
              style={{ border: "1px solid rgba(255,255,255,0.15)", color: "#F0EFE8" }}
            >
              ←
            </button>
          )}

          {/* Próxima */}
          {lightbox < images.length - 1 && (
            <button
              onClick={next}
              className="absolute right-4 top-1/2 -translate-y-1/2 flex items-center justify-center w-10 h-10 rounded-full transition-all duration-150"
              style={{ border: "1px solid rgba(255,255,255,0.15)", color: "#F0EFE8" }}
            >
              →
            </button>
          )}

          {/* Fechar */}
          <button
            onClick={() => setLightbox(null)}
            className="absolute top-4 right-4 flex items-center justify-center w-9 h-9 rounded-full text-sm transition-all duration-150"
            style={{ border: "1px solid rgba(255,255,255,0.15)", color: "#F0EFE8" }}
          >
            ✕
          </button>
        </div>
      )}
    </>
  );
}
