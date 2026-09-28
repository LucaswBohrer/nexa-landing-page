import { type ReactNode, useRef } from "react";
import { motion, useMotionValue, useSpring } from "motion/react";

interface SpotlightCardProps { children: ReactNode; className?: string; }

export function SpotlightCard({ children, className = "" }: SpotlightCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const rotateX = useMotionValue(0);
  const rotateY = useMotionValue(0);
  const springX = useSpring(rotateX, { stiffness: 220, damping: 22 });
  const springY = useSpring(rotateY, { stiffness: 220, damping: 22 });

  function handleMouseMove(event: React.MouseEvent<HTMLDivElement>) {
    const card = cardRef.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    card.style.setProperty("--mouse-x", `${event.clientX - rect.left}px`);
    card.style.setProperty("--mouse-y", `${event.clientY - rect.top}px`);
    const x = (event.clientX - rect.left) / rect.width - 0.5;
    const y = (event.clientY - rect.top) / rect.height - 0.5;
    rotateX.set(-y * 5);
    rotateY.set(x * 5);
  }

  function handleMouseLeave() {
    rotateX.set(0);
    rotateY.set(0);
  }

  return (
    <motion.div ref={cardRef} onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave} style={{ rotateX: springX, rotateY: springY, transformPerspective: 900 }} className={`spotlight-card group relative overflow-hidden rounded-2xl border border-white/5 bg-white/[0.02] transition-shadow duration-500 hover:shadow-[0_20px_70px_rgba(0,0,0,0.25)] ${className}`}>
      <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100" style={{ background: "radial-gradient(300px circle at var(--mouse-x) var(--mouse-y), rgba(255,255,255,0.07), transparent 70%)" }} />
      <div className="relative z-10 h-full">{children}</div>
    </motion.div>
  );
}