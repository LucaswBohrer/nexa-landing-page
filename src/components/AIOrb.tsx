import { motion } from "motion/react";
import { Bot, Sparkles, Zap } from "lucide-react";

const nodes = [
  { x: "8%", y: "25%", icon: Zap },
  { x: "88%", y: "22%", icon: Sparkles },
  { x: "14%", y: "76%", icon: Bot },
  { x: "84%", y: "74%", icon: Zap },
];

export function AIOrb() {
  return (
    <div className="relative mx-auto h-[min(320px,85vw)] w-[min(320px,85vw)] sm:h-[420px] sm:w-[420px] lg:h-[520px] lg:w-[520px]">
      {/* Atmosphere */}
      <motion.div
        className="absolute left-1/2 top-1/2 h-[260px] w-[260px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/[0.06] blur-[80px]"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.35, 0.6, 0.35],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Outer rings */}
      <motion.div
        className="absolute left-1/2 top-1/2 h-[360px] w-[360px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/[0.06]"
        animate={{ rotate: 360 }}
        transition={{
          duration: 35,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      <motion.div
        className="absolute left-1/2 top-1/2 h-[300px] w-[300px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-white/[0.08]"
        animate={{ rotate: -360 }}
        transition={{
          duration: 24,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      {/* Connection lines */}
      <svg
        className="pointer-events-none absolute inset-0 h-full w-full"
        viewBox="0 0 520 520"
        fill="none"
      >
        <motion.path
          d="M65 130 L260 260 L455 115"
          stroke="rgba(255,255,255,0.12)"
          strokeWidth="1"
          strokeDasharray="5 8"
          animate={{ strokeDashoffset: [0, -40] }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "linear",
          }}
        />

        <motion.path
          d="M75 395 L260 260 L440 385"
          stroke="rgba(255,255,255,0.12)"
          strokeWidth="1"
          strokeDasharray="5 8"
          animate={{ strokeDashoffset: [0, 40] }}
          transition={{
            duration: 3.5,
            repeat: Infinity,
            ease: "linear",
          }}
        />

        <motion.path
          d="M65 130 L455 115"
          stroke="rgba(255,255,255,0.05)"
          strokeWidth="1"
        />

        <motion.path
          d="M75 395 L440 385"
          stroke="rgba(255,255,255,0.05)"
          strokeWidth="1"
        />
      </svg>

      {/* Central core */}
      <motion.div
        className="absolute left-1/2 top-1/2 flex h-40 w-40 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-white/10 bg-black/70 shadow-[0_0_100px_rgba(255,255,255,0.08)] backdrop-blur-xl"
        animate={{
          boxShadow: [
            "0 0 70px rgba(255,255,255,0.05)",
            "0 0 120px rgba(255,255,255,0.12)",
            "0 0 70px rgba(255,255,255,0.05)",
          ],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <motion.div
          className="flex h-24 w-24 items-center justify-center rounded-full bg-white text-black"
          animate={{
            scale: [1, 1.04, 1],
          }}
          transition={{
            duration: 2.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <Bot size={38} strokeWidth={1.5} />
        </motion.div>
      </motion.div>

      {/* Floating nodes */}
      {nodes.map((node, index) => {
        const Icon = node.icon;

        return (
          <motion.div
            key={`${node.x}-${node.y}`}
            className="absolute flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-black/70 text-white/60 shadow-xl backdrop-blur-xl"
            style={{
              left: node.x,
              top: node.y,
            }}
            animate={{
              y: [0, -12, 0],
              opacity: [0.55, 1, 0.55],
            }}
            transition={{
              duration: 3 + index * 0.4,
              repeat: Infinity,
              ease: "easeInOut",
              delay: index * 0.4,
            }}
          >
            <Icon size={17} />
          </motion.div>
        );
      })}

      {/* Orbiting dot */}
      <motion.div
        className="absolute left-1/2 top-1/2 h-2 w-2 rounded-full bg-white shadow-[0_0_20px_rgba(255,255,255,0.8)]"
        animate={{
          x: [0, 130, 0, -130, 0],
          y: [-150, 0, 150, 0, -150],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "linear",
        }}
      />
    </div>
  );
}