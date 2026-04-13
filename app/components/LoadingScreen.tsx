'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function LoadingScreen({ onComplete }: { onComplete: () => void }) {
  const [stage, setStage] = useState(0);
  const [typedText, setTypedText] = useState('');
  const fullText = 'Inicializando experiência...';

  useEffect(() => {
    const t1 = setTimeout(() => setStage(1), 150);   // controller in
    const t2 = setTimeout(() => setStage(2), 800);   // cable draws
    const t3 = setTimeout(() => setStage(3), 1550);  // monitor flickers
    const t4 = setTimeout(() => setStage(4), 2000);  // text types
    const t5 = setTimeout(() => onComplete(), 3200); // exit
    return () => [t1, t2, t3, t4, t5].forEach(clearTimeout);
  }, [onComplete]);

  useEffect(() => {
    if (stage < 4) { setTypedText(''); return; }
    let i = 0;
    const iv = setInterval(() => {
      if (i <= fullText.length) { setTypedText(fullText.slice(0, i)); i++; }
      else clearInterval(iv);
    }, 40);
    return () => clearInterval(iv);
  }, [stage]);

  const cableLength = 80;

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.7, ease: 'easeInOut' } }}
      style={{
        position: 'fixed', inset: 0, zIndex: 99999,
        backgroundColor: '#07091A',
        display: 'flex', flexDirection: 'column',
        alignItems: 'center', justifyContent: 'center',
        gap: '0',
      }}
    >
      {/* Subtle grid background */}
      <div style={{
        position: 'absolute', inset: 0, pointerEvents: 'none',
        backgroundImage: 'radial-gradient(circle, rgba(99,102,241,0.08) 1px, transparent 1px)',
        backgroundSize: '40px 40px',
      }} />

      {/* SVG */}
      <svg width="140" height="220" viewBox="0 0 140 220" fill="none">
        {/* ── Controller ─────────────────────────────────── */}
        <motion.g
          initial={{ opacity: 0, y: -12, scale: 0.88 }}
          animate={stage >= 1 ? { opacity: 1, y: 0, scale: 1 } : {}}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* Body */}
          <rect x="12" y="8" width="116" height="68" rx="22" stroke="rgba(255,255,255,0.88)" strokeWidth="2"/>
          {/* Left grip */}
          <rect x="12" y="48" width="28" height="32" rx="10" stroke="rgba(255,255,255,0.5)" strokeWidth="1.5"/>
          {/* Right grip */}
          <rect x="100" y="48" width="28" height="32" rx="10" stroke="rgba(255,255,255,0.5)" strokeWidth="1.5"/>
          {/* D-pad */}
          <rect x="28" y="30" width="9" height="26" rx="3" stroke="rgba(255,255,255,0.55)" strokeWidth="1.5"/>
          <rect x="21" y="37" width="23" height="12" rx="3" stroke="rgba(255,255,255,0.55)" strokeWidth="1.5"/>
          {/* ABXY buttons */}
          <circle cx="96" cy="34" r="5.5" stroke="rgba(165,180,252,0.7)" strokeWidth="1.5"/>
          <circle cx="108" cy="27" r="5.5" stroke="rgba(110,231,183,0.7)" strokeWidth="1.5"/>
          <circle cx="108" cy="41" r="5.5" stroke="rgba(253,186,116,0.7)" strokeWidth="1.5"/>
          <circle cx="120" cy="34" r="5.5" stroke="rgba(248,113,113,0.7)" strokeWidth="1.5"/>
          {/* Select / Start */}
          <rect x="55" y="36" width="12" height="6" rx="3" stroke="rgba(255,255,255,0.35)" strokeWidth="1.5"/>
          <rect x="73" y="36" width="12" height="6" rx="3" stroke="rgba(255,255,255,0.35)" strokeWidth="1.5"/>
          {/* Analog sticks */}
          <circle cx="40" cy="58" r="8" stroke="rgba(255,255,255,0.3)" strokeWidth="1.5"/>
          <circle cx="100" cy="58" r="8" stroke="rgba(255,255,255,0.3)" strokeWidth="1.5"/>
        </motion.g>

        {/* ── Cable ──────────────────────────────────────── */}
        <motion.path
          d={`M70 76 C70 96 70 106 70 ${76 + cableLength}`}
          stroke="rgba(255,255,255,0.65)"
          strokeWidth="2.5"
          strokeLinecap="round"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={stage >= 2 ? { pathLength: 1, opacity: 1 } : {}}
          transition={{ duration: 0.65, ease: 'easeInOut', opacity: { duration: 0.1 } }}
        />

        {/* Energy pulse */}
        {stage >= 2 && (
          <motion.circle
            cx="70" r="4"
            style={{ fill: '#6366F1', filter: 'drop-shadow(0 0 6px #6366F1)' }}
            initial={{ cy: 76, opacity: 0 }}
            animate={{ cy: 76 + cableLength, opacity: [0, 1, 1, 0] }}
            transition={{ duration: 0.6, delay: 0.35, ease: 'easeIn' }}
          />
        )}

        {/* ── Monitor ────────────────────────────────────── */}
        <motion.g
          initial={{ opacity: 0, y: 8 }}
          animate={stage >= 3 ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.35, ease: 'easeOut' }}
        >
          {/* Outer shell */}
          <rect x="24" y="156" width="92" height="58" rx="5" stroke="rgba(255,255,255,0.9)" strokeWidth="2"/>
          {/* Screen bezel */}
          <rect x="31" y="162" width="78" height="40" rx="2" stroke="rgba(255,255,255,0.35)" strokeWidth="1"/>
          {/* Screen — flickers on */}
          <motion.rect
            x="33" y="164" width="74" height="36" rx="1"
            animate={stage >= 3 ? {
              fill: ['rgba(99,102,241,0)', 'rgba(99,102,241,0.5)', 'rgba(99,102,241,0.05)', 'rgba(99,102,241,0.22)'],
            } : { fill: 'rgba(99,102,241,0)' }}
            transition={{ duration: 0.5, times: [0, 0.15, 0.35, 1] }}
          />
          {/* Screen glow */}
          {stage >= 3 && (
            <motion.rect
              x="33" y="164" width="74" height="36" rx="1"
              fill="none"
              initial={{ opacity: 0 }}
              animate={{ opacity: [0, 1, 0.6, 0.9] }}
              transition={{ duration: 0.5, times: [0, 0.15, 0.35, 1] }}
              style={{ filter: 'drop-shadow(0 0 10px rgba(99,102,241,0.9))' }}
            />
          )}
          {/* Scanlines */}
          {stage >= 3 && [167, 173, 179, 185, 191].map((y) => (
            <motion.line
              key={y} x1="34" y1={y} x2="106" y2={y}
              stroke="rgba(255,255,255,0.04)" strokeWidth="1"
              initial={{ opacity: 0 }} animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            />
          ))}
          {/* Stand */}
          <line x1="70" y1="214" x2="70" y2="224" stroke="rgba(255,255,255,0.7)" strokeWidth="2"/>
          <line x1="52" y1="224" x2="88" y2="224" stroke="rgba(255,255,255,0.7)" strokeWidth="2"/>
        </motion.g>
      </svg>

      {/* Status text */}
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={stage >= 4 ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.4 }}
        style={{ marginTop: '32px', textAlign: 'center', userSelect: 'none' }}
      >
        <p style={{
          fontFamily: 'var(--font-poppins, Poppins, monospace)',
          fontSize: '13px',
          color: 'rgba(255,255,255,0.65)',
          letterSpacing: '0.12em',
          minHeight: '20px',
          fontWeight: 500,
        }}>
          {typedText}
          <motion.span
            animate={{ opacity: [1, 0] }}
            transition={{ duration: 0.55, repeat: Infinity }}
            style={{ display: 'inline-block', width: '1px', height: '13px', backgroundColor: 'rgba(99,102,241,0.9)', marginLeft: '2px', verticalAlign: 'middle' }}
          />
        </p>
        <motion.p
          initial={{ opacity: 0 }}
          animate={stage >= 4 ? { opacity: 1 } : {}}
          transition={{ delay: 0.5 }}
          style={{
            fontFamily: 'var(--font-poppins, Poppins, monospace)',
            fontSize: '10px', letterSpacing: '0.18em',
            color: 'rgba(255,255,255,0.25)', marginTop: '10px',
            textTransform: 'uppercase',
          }}
        >
          Letícia Marinho · Learning Designer
        </motion.p>
      </motion.div>
    </motion.div>
  );
}
