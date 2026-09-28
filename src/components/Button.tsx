import { ArrowRight } from "lucide-react";
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
    "group inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-medium transition-all duration-300";

  const variants = {
    primary:
      "bg-white text-black hover:scale-[1.02] hover:bg-white/90",
    secondary:
      "border border-white/10 bg-white/[0.03] text-white hover:border-white/20 hover:bg-white/[0.06]",
  };

  return (
    <button className={`${base} ${variants[variant]}`}>
      {children}

      <ArrowRight
        size={16}
        className="transition-transform duration-300 group-hover:translate-x-1"
      />
    </button>
  );
}