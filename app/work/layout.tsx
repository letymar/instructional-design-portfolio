'use client';

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function WorkLayout({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const [ready, setReady] = useState(false);

  useEffect(() => {
    if (!localStorage.getItem("portfolio_unlocked")) {
      router.replace(`/login?from=${encodeURIComponent(window.location.pathname)}`);
    } else {
      setReady(true);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (!ready) {
    return <div className="min-h-screen" style={{ backgroundColor: "#FAFAFA" }} />;
  }

  return <>{children}</>;
}
