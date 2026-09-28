import { motion, useMotionValue, useSpring } from "motion/react";
import type { ReactNode } from "react";

interface MagneticButtonProps {
  children: ReactNode;
  variant?: "primary" | "secondary";
}

export function MagneticButton({
  children,
  variant = "primary",
}: MagneticButtonProps) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springX = useSpring(x, {
    stiffness: 300,
    damping: 15,
  });

  const springY = useSpring(y, {
    stiffness: 300,
    damping: 15,
  });

  function handleMouseMove(event: React.MouseEvent<HTMLButtonElement>) {
    const rect = event.currentTarget.getBoundingClientRect();

    const relativeX = event.clientX - (rect.left + rect.width / 2);
    const relativeY = event.clientY - (rect.top + rect.height / 2);

    x.set(relativeX * 0.18);
    y.set(relativeY * 0.18);
  }

  function handleMouseLeave() {
    x.set(0);
    y.set(0);
  }

  const styles =
    variant === "primary"
      ? "bg-white text-black hover:bg-white/90"
      : "border border-white/10 bg-white/[0.03] text-white hover:border-white/20 hover:bg-white/[0.06]";

  return (
    <motion.button
      style={{
        x: springX,
        y: springY,
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      whileTap={{ scale: 0.96 }}
      className={`group relative inline-flex items-center justify-center overflow-hidden rounded-full px-7 py-3.5 text-sm font-medium transition-colors duration-300 ${styles}`}
    >
      <span className="relative z-10">{children}</span>

      <span className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
        <span className="absolute left-1/2 top-1/2 h-20 w-20 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/20 blur-2xl" />
      </span>
    </motion.button>
  );
}