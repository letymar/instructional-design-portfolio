'use client';

import { useEffect, useRef } from 'react';

// ── Tuning constants ────────────────────────────────────────────────────────
const LERP        = 0.38;   // snappy follow (was 0.16)
const GP_LERP     = 0.22;   // scale lerp speed
const TRAIL_LEN   = 20;     // shorter trail = snappier feel
const PULSE_MS    = 900;    // pulse travel speed
const HOVER_SCALE = 1.28;   // scale on interactive hover
const CLICK_SCALE = 0.65;   // scale on mousedown (press feedback)

export default function CustomCursor() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const gpRef     = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    if (window.matchMedia('(pointer: coarse)').matches) return;

    const canvas = canvasRef.current;
    const gp     = gpRef.current;
    if (!canvas || !gp) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    const c = ctx;

    // ── Resize ──────────────────────────────────────────────────────────────
    let W = 0, H = 0;
    const resize = () => {
      W = canvas.width  = window.innerWidth;
      H = canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    // ── State ────────────────────────────────────────────────────────────────
    let mx = -600, my = -600;
    let cx = -600, cy = -600;
    let gpScale    = 1;
    let targetScale = 1;
    let hasEntered  = false;
    let isHovering  = false;
    const trail: { x: number; y: number }[] = [];

    const lerp = (a: number, b: number, t: number) => a + (b - a) * t;

    // ── Mouse position ───────────────────────────────────────────────────────
    const onMove = (e: MouseEvent) => {
      mx = e.clientX;
      my = e.clientY;
      if (!hasEntered) { cx = mx; cy = my; hasEntered = true; }
    };
    document.addEventListener('mousemove', onMove);

    // ── Hide when mouse leaves the browser window ────────────────────────────
    const onLeave = () => { hasEntered = false; };
    const onEnter = (e: MouseEvent) => {
      // snap to entry position so it doesn't fly in from off-screen
      cx = e.clientX; cy = e.clientY;
      mx = e.clientX; my = e.clientY;
      hasEntered = true;
    };
    document.addEventListener('mouseleave', onLeave);
    document.addEventListener('mouseenter', onEnter);

    // ── Click feedback ───────────────────────────────────────────────────────
    const onDown = () => { targetScale = CLICK_SCALE; };
    const onUp   = () => { targetScale = isHovering ? HOVER_SCALE : 1.0; };
    document.addEventListener('mousedown', onDown);
    document.addEventListener('mouseup',   onUp);

    // ── Hover on interactive elements ────────────────────────────────────────
    const onIn  = () => { isHovering = true;  targetScale = HOVER_SCALE; };
    const onOut = () => { isHovering = false; targetScale = 1.0; };

    const bindInteractives = () => {
      document.querySelectorAll('a, button, [role="button"], input, select, textarea, label').forEach(el => {
        el.addEventListener('mouseenter', onIn);
        el.addEventListener('mouseleave', onOut);
      });
    };
    bindInteractives();

    const observer = new MutationObserver(bindInteractives);
    observer.observe(document.body, { childList: true, subtree: true });

    // ── Animation loop ───────────────────────────────────────────────────────
    let raf: number;
    let lastTs = 0;
    let pulseT  = 0;

    function frame(ts: number) {
      raf = requestAnimationFrame(frame);
      const dt = Math.min(ts - lastTs, 32);
      lastTs = ts;
      pulseT = (pulseT + dt) % PULSE_MS;

      cx = lerp(cx, mx, LERP);
      cy = lerp(cy, my, LERP);
      gpScale = lerp(gpScale, targetScale, GP_LERP);

      if (gp) {
        gp.style.transform = `translate(${cx}px, ${cy}px) translate(-50%, -54%) scale(${gpScale})`;
        gp.style.opacity   = hasEntered ? '1' : '0';
      }

      trail.unshift({ x: cx, y: cy });
      if (trail.length > TRAIL_LEN) trail.pop();

      c.clearRect(0, 0, W, H);
      if (trail.length < 3) return;

      // ── Trail: smooth quadratic bezier, tapered opacity + width ─────────
      for (let i = 1; i < trail.length - 1; i++) {
        const progress = 1 - i / trail.length;
        const alpha = progress * 0.42;
        const lw    = 0.6 + progress * 1.8;

        const x0 = (trail[i - 1].x + trail[i].x) / 2;
        const y0 = (trail[i - 1].y + trail[i].y) / 2;
        const x1 = (trail[i].x + trail[i + 1].x) / 2;
        const y1 = (trail[i].y + trail[i + 1].y) / 2;

        c.beginPath();
        c.lineWidth   = lw;
        c.strokeStyle = `rgba(99,102,241,${alpha.toFixed(3)})`;
        c.lineCap     = 'round';
        c.moveTo(x0, y0);
        c.quadraticCurveTo(trail[i].x, trail[i].y, x1, y1);
        c.stroke();
      }

      // ── Pulse dots ───────────────────────────────────────────────────────
      ([0, 0.5] as const).forEach(phaseOffset => {
        const t      = ((pulseT / PULSE_MS) + phaseOffset) % 1;
        const rawIdx = t * (trail.length - 1);
        const i      = Math.floor(rawIdx);
        if (i >= trail.length - 1) return;

        const f  = rawIdx - i;
        const px = lerp(trail[i].x, trail[i + 1].x, f);
        const py = lerp(trail[i].y, trail[i + 1].y, f);

        const alpha = t < 0.12 ? t / 0.12 : t > 0.78 ? (1 - t) / 0.22 : 1;
        const r     = 2.6 * (1 - t * 0.5);

        const grd = c.createRadialGradient(px, py, 0, px, py, r * 4);
        grd.addColorStop(0, `rgba(99,102,241,${(alpha * 0.35).toFixed(3)})`);
        grd.addColorStop(1, 'rgba(99,102,241,0)');
        c.beginPath();
        c.arc(px, py, r * 4, 0, Math.PI * 2);
        c.fillStyle = grd;
        c.fill();

        c.beginPath();
        c.arc(px, py, r, 0, Math.PI * 2);
        c.fillStyle = `rgba(129,140,248,${(alpha * 0.9).toFixed(3)})`;
        c.fill();
      });
    }

    raf = requestAnimationFrame(frame);

    return () => {
      cancelAnimationFrame(raf);
      observer.disconnect();
      window.removeEventListener('resize', resize);
      document.removeEventListener('mousemove', onMove);
      document.removeEventListener('mouseleave', onLeave);
      document.removeEventListener('mouseenter', onEnter);
      document.removeEventListener('mousedown', onDown);
      document.removeEventListener('mouseup',   onUp);
      document.querySelectorAll('a, button, [role="button"], input, select, textarea, label').forEach(el => {
        el.removeEventListener('mouseenter', onIn);
        el.removeEventListener('mouseleave', onOut);
      });
    };
  }, []);

  return (
    <>
      <canvas
        ref={canvasRef}
        aria-hidden="true"
        style={{ position: 'fixed', inset: 0, pointerEvents: 'none', zIndex: 99998 }}
      />
      <div
        ref={gpRef}
        aria-hidden="true"
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          pointerEvents: 'none',
          zIndex: 99999,
          willChange: 'transform',
          opacity: 0,
          transition: 'opacity 0.3s ease',
          filter: 'drop-shadow(0 1px 6px rgba(99,102,241,0.45))',
        }}
      >
        <svg
          width="44" height="28"
          viewBox="0 0 44 28"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect x="1" y="1" width="42" height="19" rx="6.5" stroke="#6366F1" strokeWidth="1.5" />
          <rect x="1" y="13" width="12" height="14" rx="5" stroke="#6366F1" strokeWidth="1.3" strokeOpacity="0.55" />
          <rect x="31" y="13" width="12" height="14" rx="5" stroke="#6366F1" strokeWidth="1.3" strokeOpacity="0.55" />
          <rect x="6.5" y="8.75" width="8" height="2.5" rx="0.6" stroke="#6366F1" strokeWidth="1.1" strokeOpacity="0.8" />
          <rect x="9.25" y="6" width="2.5" height="8" rx="0.6" stroke="#6366F1" strokeWidth="1.1" strokeOpacity="0.8" />
          <rect x="16.5" y="9.5" width="3.5" height="1.8" rx="0.9" stroke="#6366F1" strokeWidth="0.9" strokeOpacity="0.4" />
          <rect x="24" y="9.5" width="3.5" height="1.8" rx="0.9" stroke="#6366F1" strokeWidth="0.9" strokeOpacity="0.4" />
          <circle cx="33.5" cy="7"    r="2" stroke="#818CF8" strokeWidth="1.2" strokeOpacity="0.9" />
          <circle cx="37.5" cy="10.5" r="2" stroke="#34D399" strokeWidth="1.2" strokeOpacity="0.9" />
          <circle cx="29.5" cy="10.5" r="2" stroke="#FBBF24" strokeWidth="1.2" strokeOpacity="0.9" />
          <circle cx="33.5" cy="14"   r="2" stroke="#F87171" strokeWidth="1.2" strokeOpacity="0.9" />
        </svg>
      </div>
    </>
  );
}
