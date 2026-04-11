import { ReactNode } from "react";

interface SectionWrapperProps {
  children: ReactNode;
  id?: string;
  className?: string;
}

export default function SectionWrapper({
  children,
  id,
  className = "",
}: SectionWrapperProps) {
  return (
    <section
      id={id}
      className={`mx-auto w-full max-w-6xl px-6 md:px-12 ${className}`}
    >
      {children}
    </section>
  );
}
