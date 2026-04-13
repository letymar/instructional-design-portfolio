'use client';

import { useEffect, useRef } from 'react';

// ── Tuning constants ────────────────────────────────────────────────────────
const LERP        = 0.16;   // gamepad follow speed  (0.1=laggy, 0.25=snappy)
const TRAIL_LEN   = 38;     // stored trail points
const PULSE_MS    = 1100;   // ms for a pulse dot to travel head→tail
const HOVER_SCALE = 1.35;   // gamepad scale when over interactive element

export default function CustomCursor() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const gpRef     = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // ── Skip on touch / stylus devices ─────────────────────────────────────
    if (typeof window === 'undefined') return;
    if (window.matchMedia('(pointer: coarse)').matches) return;

    const canvas = canvasRef.current;
    const gp     = gpRef.current;
    if (!canvas || !gp) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    const c = ctx!; // capture non-null for use inside closure

    // ── Resize handler ──────────────────────────────────────────────────────
    let W = 0, H = 0;
    const resize = () => {
      W = canvas.width  = window.innerWidth;
      H = canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    // ── State ───────────────────────────────────────────────────────────────
    let mx = -600, my = -600;           // raw mouse position
    let cx = -600, cy = -600;           // lerped gamepad position
    let gpScale    = 1;
    let targetScale = 1;
    let hasEntered = false;
    const trail: { x: number; y: number }[] = [];

    const lerp = (a: number, b: number, t: number) => a + (b - a) * t;

    // ── Mouse tracking ──────────────────────────────────────────────────────
    const onMove = (e: MouseEvent) => {
      mx = e.clientX;
      my = e.clientY;
      // Snap gamepad on first move so it doesn't fly from off-screen
      if (!hasEntered) { cx = mx; cy = my; hasEntered = true; }
    };
    document.addEventListener('mousemove', onMove);

    // ── Interactive hover ───────────────────────────────────────────────────
    const onIn  = () => { targetScale = HOVER_SCALE; };
    const onOut = () => { targetScale = 1.0; };

    const bindInteractives = () => {
      document.querySelectorAll('a, button, [role="button"]').forEach(el => {
        el.addEventListener('mouseenter', onIn);
        el.addEventListener('mouseleave', onOut);
      });
    };
    bindInteractives();

    // Rebind after navigation (Next.js swaps DOM)
    const observer = new MutationObserver(bindInteractives);
    observer.observe(document.body, { childList: true, subtree: true });

    // ── Animation loop ──────────────────────────────────────────────────────
    let raf: number;
    let lastTs = 0;
    let pulseT  = 0;

    function frame(ts: number) {
      raf = requestAnimationFrame(frame);
      const dt = Math.min(ts - lastTs, 32);
      lastTs = ts;
      pulseT = (pulseT + dt) % PULSE_MS;

      // Lerp gamepad toward mouse
      cx = lerp(cx, mx, LERP);
      cy = lerp(cy, my, LERP);
      gpScale = lerp(gpScale, targetScale, 0.13);

      // Update gamepad DOM element
      if (gp) {
        gp.style.transform = `translate(${cx}px, ${cy}px) translate(-50%, -54%) scale(${gpScale})`;
        gp.style.opacity   = hasEntered ? '1' : '0';
      }

      // Record lerped position as trail (so trail matches gamepad path exactly)
      trail.unshift({ x: cx, y: cy });
      if (trail.length > TRAIL_LEN) trail.pop();

      c.clearRect(0, 0, W, H);
      if (trail.length < 3) return;

      // ── Trail: smooth quadratic bezier segments, tapered opacity ─────────
      for (let i = 1; i < trail.length - 1; i++) {
        const progress = 1 - i / trail.length;   // 1 = near cursor, 0 = tail
        const alpha = progress * 0.48;
        const lw    = 0.7 + progress * 1.5;      // thicker near cursor

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

      // ── Pulse dots: two dots travelling head → tail ───────────────────────
      // Offset by half a period so they're always separated
      ([0, 0.5] as const).forEach(phaseOffset => {
        const t       = ((pulseT / PULSE_MS) + phaseOffset) % 1;
        const rawIdx  = t * (trail.length - 1);
        const i       = Math.floor(rawIdx);
        if (i >= trail.length - 1) return;

        const f  = rawIdx - i;
        const px = lerp(trail[i].x, trail[i + 1].x, f);
        const py = lerp(trail[i].y, trail[i + 1].y, f);

        // Fade in at head, fade out at tail
        const alpha = t < 0.12 ? t / 0.12 : t > 0.78 ? (1 - t) / 0.22 : 1;
        const r     = 2.8 * (1 - t * 0.55);   // shrinks toward tail

        // Soft outer glow
        const grd = c.createRadialGradient(px, py, 0, px, py, r * 4);
        grd.addColorStop(0, `rgba(99,102,241,${(alpha * 0.38).toFixed(3)})`);
        grd.addColorStop(1, 'rgba(99,102,241,0)');
        c.beginPath();
        c.arc(px, py, r * 4, 0, Math.PI * 2);
        c.fillStyle = grd;
        c.fill();

        // Bright core
        c.beginPath();
        c.arc(px, py, r, 0, Math.PI * 2);
        c.fillStyle = `rgba(129,140,248,${(alpha * 0.92).toFixed(3)})`;
        c.fill();
      });
    }

    raf = requestAnimationFrame(frame);

    return () => {
      cancelAnimationFrame(raf);
      observer.disconnect();
      window.removeEventListener('resize', resize);
      document.removeEventListener('mousemove', onMove);
      document.querySelectorAll('a, button, [role="button"]').forEach(el => {
        el.removeEventListener('mouseenter', onIn);
        el.removeEventListener('mouseleave', onOut);
      });
    };
  }, []);

  return (
    <>
      {/* ── Canvas — trail + pulse dots ──────────────────────────────────── */}
      <canvas
        ref={canvasRef}
        aria-hidden="true"
        style={{ position: 'fixed', inset: 0, pointerEvents: 'none', zIndex: 99998 }}
      />

      {/* ── Gamepad cursor ────────────────────────────────────────────────── */}
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
          transition: 'opacity 0.4s ease',
          filter: 'drop-shadow(0 1px 6px rgba(99,102,241,0.45))',
        }}
      >
        {/*
          Minimal SNES-style controller — outline only, no fills.
          Design:
            Body  44×19   → rounded rect, stroke #6366F1
            Grips 12×14   → rounded rects at bottom-left + bottom-right
            D-pad         → cross (two rects)
            ABXY          → 4 circles in diamond (B/A/X/Y colors)
            Select/Start  → two tiny rounded rects
        */}
        <svg
          width="44" height="28"
          viewBox="0 0 44 28"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* ── Body ────────────────────────────────────────────── */}
          <rect
            x="1" y="1" width="42" height="19" rx="6.5"
            stroke="#6366F1" strokeWidth="1.5"
          />
          {/* ── Left grip ───────────────────────────────────────── */}
          <rect
            x="1" y="13" width="12" height="14" rx="5"
            stroke="#6366F1" strokeWidth="1.3" strokeOpacity="0.55"
          />
          {/* ── Right grip ──────────────────────────────────────── */}
          <rect
            x="31" y="13" width="12" height="14" rx="5"
            stroke="#6366F1" strokeWidth="1.3" strokeOpacity="0.55"
          />

          {/* ── D-pad ───────────────────────────────────────────── */}
          {/* horizontal arm */}
          <rect
            x="6.5" y="8.75" width="8" height="2.5" rx="0.6"
            stroke="#6366F1" strokeWidth="1.1" strokeOpacity="0.8"
          />
          {/* vertical arm */}
          <rect
            x="9.25" y="6" width="2.5" height="8" rx="0.6"
            stroke="#6366F1" strokeWidth="1.1" strokeOpacity="0.8"
          />

          {/* ── Select ──────────────────────────────────────────── */}
          <rect
            x="16.5" y="9.5" width="3.5" height="1.8" rx="0.9"
            stroke="#6366F1" strokeWidth="0.9" strokeOpacity="0.4"
          />
          {/* ── Start ───────────────────────────────────────────── */}
          <rect
            x="24" y="9.5" width="3.5" height="1.8" rx="0.9"
            stroke="#6366F1" strokeWidth="0.9" strokeOpacity="0.4"
          />

          {/* ── ABXY buttons — diamond arrangement ──────────────── */}
          {/* X (top)   — blue  */}
          <circle cx="33.5" cy="7"    r="2" stroke="#818CF8" strokeWidth="1.2" strokeOpacity="0.9" />
          {/* A (right) — green */}
          <circle cx="37.5" cy="10.5" r="2" stroke="#34D399" strokeWidth="1.2" strokeOpacity="0.9" />
          {/* Y (left)  — yellow */}
          <circle cx="29.5" cy="10.5" r="2" stroke="#FBBF24" strokeWidth="1.2" strokeOpacity="0.9" />
          {/* B (bottom)— red   */}
          <circle cx="33.5" cy="14"   r="2" stroke="#F87171" strokeWidth="1.2" strokeOpacity="0.9" />
        </svg>
      </div>
    </>
  );
}
