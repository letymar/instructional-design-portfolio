'use client';

import { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import LoadingScreen from './LoadingScreen';

export default function ClientRoot({ children }: { children: React.ReactNode }) {
  const [loading, setLoading] = useState(true);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    // Only show loading screen once per browser session
    if (typeof sessionStorage !== 'undefined' && sessionStorage.getItem('_intro_shown')) {
      setLoading(false);
    }
  }, []);

  function handleComplete() {
    if (typeof sessionStorage !== 'undefined') {
      sessionStorage.setItem('_intro_shown', '1');
    }
    setLoading(false);
  }

  // Avoid server/client mismatch — show nothing on SSR, then hydrate
  if (!mounted) return <>{children}</>;

  return (
    <>
      <AnimatePresence>
        {loading && <LoadingScreen key="loading-screen" onComplete={handleComplete} />}
      </AnimatePresence>
      {children}
    </>
  );
}
