'use client';

import { useScroll, useSpring, motion } from 'framer-motion';

export default function ScrollProgressBar() {
  const { scrollYProgress } = useScroll();
  // Spring smoothing so the bar never stutters
  const scaleX = useSpring(scrollYProgress, { stiffness: 200, damping: 30, restDelta: 0.001 });

  return (
    <motion.div
      aria-hidden="true"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        height: '2.5px',
        transformOrigin: '0%',
        scaleX,
        background: 'linear-gradient(90deg, #1E3A8A 0%, #6366F1 60%, #818CF8 100%)',
        zIndex: 100000,
        boxShadow: '0 0 8px rgba(99,102,241,0.5)',
      }}
    />
  );
}
