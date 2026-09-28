import { type ReactNode, useRef } from "react";

interface SpotlightCardProps {
  children: ReactNode;
  className?: string;
}

export function SpotlightCard({
  children,
  className = "",
}: SpotlightCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);

  function handleMouseMove(event: React.MouseEvent<HTMLDivElement>) {
    const card = cardRef.current;

    if (!card) return;

    const rect = card.getBoundingClientRect();

    card.style.setProperty("--mouse-x", `${event.clientX - rect.left}px`);
    card.style.setProperty("--mouse-y", `${event.clientY - rect.top}px`);
  }

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      className={`spotlight-card group relative overflow-hidden rounded-2xl border border-white/5 bg-white/[0.02] ${className}`}
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        style={{
          background:
            "radial-gradient(300px circle at var(--mouse-x) var(--mouse-y), rgba(255,255,255,0.07), transparent 70%)",
        }}
      />

      <div className="relative z-10 h-full">
        {children}
      </div>
    </div>
  );
}