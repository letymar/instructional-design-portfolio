'use client';

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function WorkLayout({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const [ready, setReady] = useState(false);

  useEffect(() => {
    if (!localStorage.getItem("portfolio_unlocked")) {
      router.replace("/login");
    } else {
      setReady(true);
    }
  }, [router]);

  if (!ready) {
    return <div className="min-h-screen" style={{ backgroundColor: "#0B0B0F" }} />;
  }

  return <>{children}</>;
}
