'use client';

import { useEffect, useRef } from "react";

export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Only on non-touch devices
    if (window.matchMedia("(pointer: coarse)").matches) return;

    const dot = dotRef.current;
    const ring = ringRef.current;
    if (!dot || !ring) return;

    let mouseX = 0, mouseY = 0;
    let ringX = 0, ringY = 0;
    let animFrame: number;
    let isVisible = false;

    const onMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      if (!isVisible) {
        isVisible = true;
        dot.style.opacity = "1";
        ring.style.opacity = "1";
      }
      dot.style.transform = `translate(${mouseX}px, ${mouseY}px) translate(-50%,-50%)`;
    };

    const lerp = (a: number, b: number, t: number) => a + (b - a) * t;

    const animate = () => {
      ringX = lerp(ringX, mouseX, 0.35);
      ringY = lerp(ringY, mouseY, 0.35);
      ring.style.transform = `translate(${ringX}px, ${ringY}px) translate(-50%,-50%)`;
      animFrame = requestAnimationFrame(animate);
    };
    animFrame = requestAnimationFrame(animate);

    const onEnterInteractive = () => {
      dot.style.transform += " scale(0)";
      ring.style.width = "48px";
      ring.style.height = "48px";
      ring.style.backgroundColor = "rgba(99,102,241,0.12)";
      ring.style.borderColor = "#6366F1";
    };

    const onLeaveInteractive = () => {
      ring.style.width = "32px";
      ring.style.height = "32px";
      ring.style.backgroundColor = "transparent";
      ring.style.borderColor = "rgba(99,102,241,0.5)";
    };

    document.addEventListener("mousemove", onMove);

    const interactives = document.querySelectorAll("a, button, [role='button']");
    interactives.forEach((el) => {
      el.addEventListener("mouseenter", onEnterInteractive);
      el.addEventListener("mouseleave", onLeaveInteractive);
    });

    return () => {
      document.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(animFrame);
      interactives.forEach((el) => {
        el.removeEventListener("mouseenter", onEnterInteractive);
        el.removeEventListener("mouseleave", onLeaveInteractive);
      });
    };
  }, []);

  return (
    <>
      {/* Inner dot */}
      <div
        ref={dotRef}
        aria-hidden="true"
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "8px",
          height: "8px",
          borderRadius: "50%",
          backgroundColor: "#6366F1",
          pointerEvents: "none",
          zIndex: 99999,
          opacity: 0,
          transition: "opacity 0.3s ease",
          willChange: "transform",
        }}
      />
      {/* Outer ring */}
      <div
        ref={ringRef}
        aria-hidden="true"
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "32px",
          height: "32px",
          borderRadius: "50%",
          border: "1.5px solid rgba(99,102,241,0.5)",
          pointerEvents: "none",
          zIndex: 99998,
          opacity: 0,
          transition: "opacity 0.3s ease, width 0.2s ease, height 0.2s ease, background-color 0.2s ease, border-color 0.2s ease",
          willChange: "transform",
        }}
      />
    </>
  );
}
