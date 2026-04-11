import Link from "next/link";
import { ReactNode } from "react";

interface ButtonProps {
  variant?: "primary" | "ghost";
  href?: string;
  children: ReactNode;
  onClick?: () => void;
  className?: string;
  external?: boolean;
}

export default function Button({
  variant = "primary",
  href,
  children,
  onClick,
  className = "",
  external = false,
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center px-6 py-2.5 rounded-full text-sm font-medium tracking-wide transition-all duration-200 cursor-pointer";

  const primaryStyle = {
    backgroundColor: "#8B7CF6",
    color: "#ffffff",
  };

  const ghostStyle = {
    border: "1px solid rgba(255,255,255,0.1)",
    color: "#F0EFE8",
    backgroundColor: "transparent",
  };

  const combined = `${base} ${className}`;

  if (href) {
    if (external) {
      return (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={combined}
          style={variant === "primary" ? primaryStyle : ghostStyle}
        >
          {children}
        </a>
      );
    }
    return (
      <Link
        href={href}
        className={combined}
        style={variant === "primary" ? primaryStyle : ghostStyle}
      >
        {children}
      </Link>
    );
  }

  return (
    <button
      onClick={onClick}
      className={combined}
      style={variant === "primary" ? primaryStyle : ghostStyle}
    >
      {children}
    </button>
  );
}
