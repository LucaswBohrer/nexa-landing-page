import { motion, useMotionValue, useSpring, useTransform } from "motion/react";
import { Bot, Sparkles, Zap } from "lucide-react";
import { useRef } from "react";

const nodes = [
  { x: "8%", y: "25%", icon: Zap },
  { x: "88%", y: "22%", icon: Sparkles },
  { x: "14%", y: "76%", icon: Bot },
  { x: "84%", y: "74%", icon: Zap },
];

export function AIOrb() {
  const containerRef = useRef<HTMLDivElement>(null);
  const pointerX = useMotionValue(0);
  const pointerY = useMotionValue(0);
  const springX = useSpring(pointerX, { stiffness: 120, damping: 20 });
  const springY = useSpring(pointerY, { stiffness: 120, damping: 20 });
  const orbX = useTransform(springX, [-1, 1], [-10, 10]);
  const orbY = useTransform(springY, [-1, 1], [-10, 10]);
  const glowX = useTransform(springX, [-1, 1], [-24, 24]);
  const glowY = useTransform(springY, [-1, 1], [-24, 24]);
  const labelX = useTransform(springX, [-1, 1], [-80, 80]);
  const labelY = useTransform(springY, [-1, 1], [70, -70]);

  function handlePointerMove(event: React.PointerEvent<HTMLDivElement>) {
    const element = containerRef.current;
    if (!element || event.pointerType === "touch") return;
    const rect = element.getBoundingClientRect();
    const x = (event.clientX - (rect.left + rect.width / 2)) / (rect.width / 2);
    const y = (event.clientY - (rect.top + rect.height / 2)) / (rect.height / 2);
    pointerX.set(Math.max(-1, Math.min(1, x)));
    pointerY.set(Math.max(-1, Math.min(1, y)));
  }

  function handlePointerLeave() { pointerX.set(0); pointerY.set(0); }

  return (
    <motion.div ref={containerRef} onPointerMove={handlePointerMove} onPointerLeave={handlePointerLeave} className="relative mx-auto h-[min(320px,85vw)] w-[min(320px,85vw)] cursor-crosshair sm:h-[420px] sm:w-[420px] lg:h-[520px] lg:w-[520px]" style={{ perspective: 900 }}>
      <motion.div className="absolute left-1/2 top-1/2 h-[260px] w-[260px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/[0.06] blur-[80px]" style={{ x: glowX, y: glowY }} animate={{ scale: [1, 1.2, 1], opacity: [0.35, 0.6, 0.35] }} transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }} />
      <motion.div className="absolute left-1/2 top-1/2 h-[360px] w-[360px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/[0.06]" style={{ x: orbX, y: orbY }} animate={{ rotate: 360 }} transition={{ duration: 35, repeat: Infinity, ease: "linear" }} />
      <motion.div className="absolute left-1/2 top-1/2 h-[300px] w-[300px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-white/[0.08]" style={{ x: orbX, y: orbY }} animate={{ rotate: -360 }} transition={{ duration: 24, repeat: Infinity, ease: "linear" }} />
      <motion.svg className="pointer-events-none absolute inset-0 h-full w-full" viewBox="0 0 520 520" fill="none" style={{ x: orbX, y: orbY }}>
        <motion.path d="M65 130 L260 260 L455 115" stroke="rgba(255,255,255,0.12)" strokeWidth="1" strokeDasharray="5 8" animate={{ strokeDashoffset: [0, -40] }} transition={{ duration: 3, repeat: Infinity, ease: "linear" }} />
        <motion.path d="M75 395 L260 260 L440 385" stroke="rgba(255,255,255,0.12)" strokeWidth="1" strokeDasharray="5 8" animate={{ strokeDashoffset: [0, 40] }} transition={{ duration: 3.5, repeat: Infinity, ease: "linear" }} />
        <path d="M65 130 L455 115" stroke="rgba(255,255,255,0.05)" strokeWidth="1" />
        <path d="M75 395 L440 385" stroke="rgba(255,255,255,0.05)" strokeWidth="1" />
      </motion.svg>
      <motion.div className="absolute left-1/2 top-1/2 flex h-40 w-40 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-white/10 bg-black/70 shadow-[0_0_100px_rgba(255,255,255,0.08)] backdrop-blur-xl" style={{ x: orbX, y: orbY }} animate={{ boxShadow: ["0 0 70px rgba(255,255,255,0.05)", "0 0 120px rgba(255,255,255,0.12)", "0 0 70px rgba(255,255,255,0.05)"], scale: [1, 1.02, 1] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}>
        <motion.div className="flex h-24 w-24 items-center justify-center rounded-full bg-white text-black" animate={{ scale: [1, 1.04, 1] }} transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}><Bot size={38} strokeWidth={1.5} /></motion.div>
      </motion.div>
      {nodes.map((node, index) => { const Icon = node.icon; return <motion.div key={`${node.x}-${node.y}`} className="absolute flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-black/70 text-white/60 shadow-xl backdrop-blur-xl" style={{ left: node.x, top: node.y, x: orbX }} animate={{ y: [0, -12, 0], opacity: [0.55, 1, 0.55] }} transition={{ duration: 3 + index * 0.4, repeat: Infinity, ease: "easeInOut", delay: index * 0.4 }}><Icon size={17} /></motion.div>; })}
      <motion.div className="absolute left-1/2 top-1/2 h-2 w-2 rounded-full bg-white shadow-[0_0_20px_rgba(255,255,255,0.8)]" animate={{ x: [0, 130, 0, -130, 0], y: [-150, 0, 150, 0, -150] }} transition={{ duration: 8, repeat: Infinity, ease: "linear" }} />
      <motion.div className="pointer-events-none absolute left-1/2 top-1/2 rounded-full border border-white/10 bg-black/70 px-3 py-1.5 text-[9px] uppercase tracking-[0.2em] text-white/40 backdrop-blur-xl" style={{ x: labelX, y: labelY }} initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: [0.25, 0.7, 0.25], scale: [0.98, 1, 0.98] }} transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}>AI optimizing</motion.div>
    </motion.div>
  );
}
