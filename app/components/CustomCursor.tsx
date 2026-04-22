'use client';

import { useEffect, useRef } from 'react';

const LERP      = 0.38;
const TRAIL_LEN = 22;
const PULSE_MS  = 900;

export default function CustomCursor() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    if (window.matchMedia('(pointer: coarse)').matches) return;

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    const c = ctx;

    // ── Resize ──────────────────────────────────────────────────────────────
    let W = 0, H = 0;
    const resize = () => { W = canvas.width = window.innerWidth; H = canvas.height = window.innerHeight; };
    resize();
    window.addEventListener('resize', resize);

    // ── State ────────────────────────────────────────────────────────────────
    let mx = -600, my = -600;
    let cx = -600, cy = -600;
    let dotR = 3.5, targetDotR = 3.5;
    let hasEntered = false;
    let isHovering = false;
    const trail: { x: number; y: number }[] = [];

    const lerp = (a: number, b: number, t: number) => a + (b - a) * t;

    // ── Mouse position ───────────────────────────────────────────────────────
    const onMove = (e: MouseEvent) => {
      mx = e.clientX; my = e.clientY;
      if (!hasEntered) { cx = mx; cy = my; hasEntered = true; }
    };
    document.addEventListener('mousemove', onMove);

    // ── Window leave / enter ─────────────────────────────────────────────────
    const onLeave = () => { hasEntered = false; };
    const onEnter = (e: MouseEvent) => {
      cx = e.clientX; cy = e.clientY;
      mx = e.clientX; my = e.clientY;
      hasEntered = true;
    };
    document.addEventListener('mouseleave', onLeave);
    document.addEventListener('mouseenter', onEnter);

    // ── Click feedback ───────────────────────────────────────────────────────
    const onDown = () => { targetDotR = 2.0; };
    const onUp   = () => { targetDotR = isHovering ? 5.5 : 3.5; };
    document.addEventListener('mousedown', onDown);
    document.addEventListener('mouseup', onUp);

    // ── Hover on interactive elements ────────────────────────────────────────
    const onIn  = () => { isHovering = true;  targetDotR = 5.5; };
    const onOut = () => { isHovering = false; targetDotR = 3.5; };

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
      dotR = lerp(dotR, targetDotR, 0.22);

      trail.unshift({ x: cx, y: cy });
      if (trail.length > TRAIL_LEN) trail.pop();

      c.clearRect(0, 0, W, H);
      if (!hasEntered || trail.length < 3) return;

      // ── Trail: smooth quadratic bezier ────────────────────────────────────
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

      // ── Pulse dots ────────────────────────────────────────────────────────
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

      // ── Dot at cursor head (grows on hover, shrinks on click) ─────────────
      const grd = c.createRadialGradient(trail[0].x, trail[0].y, 0, trail[0].x, trail[0].y, dotR * 2.8);
      grd.addColorStop(0, 'rgba(99,102,241,0.22)');
      grd.addColorStop(1, 'rgba(99,102,241,0)');
      c.beginPath();
      c.arc(trail[0].x, trail[0].y, dotR * 2.8, 0, Math.PI * 2);
      c.fillStyle = grd;
      c.fill();

      c.beginPath();
      c.arc(trail[0].x, trail[0].y, dotR, 0, Math.PI * 2);
      c.fillStyle = 'rgba(99,102,241,0.88)';
      c.fill();
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
      document.removeEventListener('mouseup', onUp);
      document.querySelectorAll('a, button, [role="button"], input, select, textarea, label').forEach(el => {
        el.removeEventListener('mouseenter', onIn);
        el.removeEventListener('mouseleave', onOut);
      });
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      style={{ position: 'fixed', inset: 0, pointerEvents: 'none', zIndex: 99999 }}
    />
  );
}
