import { ArrowRight } from "lucide-react";
import { motion } from "motion/react";
import type { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  variant?: "primary" | "secondary";
}

export function Button({
  children,
  variant = "primary",
}: ButtonProps) {
  const base =
    "group relative inline-flex items-center gap-2 overflow-hidden rounded-full px-6 py-3 text-sm font-medium transition-all duration-300 active:scale-[0.97]";

  const variants = {
    primary:
      "bg-white text-black hover:scale-[1.02] hover:bg-white/90 hover:shadow-[0_10px_40px_rgba(255,255,255,0.12)]",
    secondary:
      "border border-white/10 bg-white/[0.03] text-white hover:border-white/20 hover:bg-white/[0.06] hover:shadow-[0_10px_40px_rgba(255,255,255,0.05)]",
  };

  return (
    <button whileTap={{ scale: 0.97 }}
      className={`${base} ${variants[variant]}`}>
      {children}

      <ArrowRight
        size={16}
        className="relative z-10 transition-transform duration-300 group-hover:translate-x-1"
      />
    </button>
  );
}