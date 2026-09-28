import { motion } from "motion/react";

export function AuroraBackground() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <motion.div
        className="absolute left-1/2 top-1/2 h-[600px] w-[900px] -translate-x-1/2 -translate-y-1/2 rounded-full blur-[120px]"
        animate={{
          scale: [1, 1.15, 0.95, 1],
          opacity: [0.25, 0.4, 0.25],
          x: ["-50%", "-45%", "-55%", "-50%"],
          y: ["-50%", "-55%", "-45%", "-50%"],
        }}
        transition={{
          duration: 14,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        style={{
          background:
            "radial-gradient(circle, rgba(255,255,255,0.12) 0%, rgba(140,140,255,0.06) 30%, transparent 70%)",
        }}
      />

      <motion.div
        className="absolute left-1/2 top-1/2 h-[350px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full blur-[100px]"
        animate={{
          rotate: [0, 180, 360],
          scale: [1, 1.2, 1],
          opacity: [0.15, 0.3, 0.15],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
        style={{
          background:
            "linear-gradient(90deg, transparent, rgba(255,255,255,0.08), transparent)",
        }}
      />

      <div
        className="absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage:
            "radial-gradient(circle at center, white 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />
    </div>
  );
}