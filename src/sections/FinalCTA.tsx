import { ArrowUpRight, Sparkles } from "lucide-react";
import { motion } from "motion/react";
import { AIOrb } from "../components/AIOrb";
import { MagneticButton } from "../components/MagneticButton";

export function FinalCTA() {
  return (
    <section
      id="comece"
      className="relative overflow-hidden px-6 py-32"
    >
      {/* Background grid */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />

      {/* Glow */}
      <motion.div
        className="pointer-events-none absolute left-1/2 top-1/2 h-[700px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/[0.025] blur-[140px]"
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.3, 0.55, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <div className="relative z-10 mx-auto max-w-6xl">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <motion.div initial={{ opacity: 0, x: -28, filter: "blur(8px)" }} whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.8 }}>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-xs text-white/50">
              <Sparkles size={13} />
              Inteligência em movimento
            </div>

            <h2 className="max-w-full text-[3.1rem] font-semibold leading-[0.92] tracking-[-0.055em] sm:max-w-3xl sm:text-6xl md:text-7xl">
                Pare de trabalhar
              <br />
              <span className="text-white/30">
                contra o processo.
              </span>
            </h2>

            <p className="mt-7 max-w-xl text-base leading-7 text-white/40 sm:text-lg">
              Deixe a NEXA cuidar do trabalho repetitivo enquanto
              sua equipe se concentra no que realmente faz o negócio
              avançar.
            </p>

            <div className="mt-9 flex flex-col items-start gap-4 sm:flex-row sm:items-center">
              <MagneticButton>
                Começar gratuitamente
                <ArrowUpRight
                  size={16}
                  className="ml-1"
                />
              </MagneticButton>

              <span className="text-xs text-white/25">
                14 dias grátis · Sem cartão
              </span>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 28, scale: 0.96 }} whileInView={{ opacity: 1, x: 0, scale: 1 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.9, delay: 0.15 }} className="relative flex justify-center lg:justify-end">
            <AIOrb />
          </motion.div>
        </div>
      </div>
    </section>
  );
}