import { ArrowUpRight, BrainCircuit, Sparkles } from "lucide-react";
import { motion } from "motion/react";
import { AuroraBackground } from "../components/AuroraBackground";

export function Intelligence() {
  return (
    <section className="relative min-h-[85vh] overflow-hidden border-t border-white/5">
      <AuroraBackground />

      <div className="relative z-10 mx-auto flex min-h-[85vh] max-w-6xl items-center px-6 py-32">
        <div className="w-full">
          <div className="mx-auto max-w-3xl text-center">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="mb-7 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-xs text-white/40 backdrop-blur-xl"
            >
              <BrainCircuit size={14} />

              NEXA Intelligence
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 25, filter: "blur(10px)" }}
              whileInView={{
                opacity: 1,
                y: 0,
                filter: "blur(0px)",
              }}
              viewport={{ once: true }}
              transition={{
                duration: 0.9,
                delay: 0.1,
              }}
              className="text-5xl font-semibold leading-[0.95] tracking-[-0.05em] sm:text-6xl md:text-7xl"
            >
              Intelligence that moves
              <br />
              <span className="text-white/30">
                with your business.
              </span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.7,
                delay: 0.25,
              }}
              className="mx-auto mt-8 max-w-xl text-sm leading-7 text-white/35 sm:text-base"
            >
              A NEXA observa seus processos, encontra oportunidades de
              automação e transforma operações complexas em fluxos simples.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.7,
                delay: 0.4,
              }}
              className="mt-10 flex justify-center"
            >
              <button className="group flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-medium text-black transition hover:scale-[1.02]">
                Explore a NEXA

                <ArrowUpRight
                  size={16}
                  className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </button>
            </motion.div>
          </div>

          {/* Floating intelligence indicators */}
          <div className="relative mx-auto mt-20 h-20 max-w-3xl">
            <FloatingNode
              className="left-[5%] top-0"
              icon={<Sparkles size={13} />}
              text="Pattern detected"
            />

            <FloatingNode
              className="right-[5%] top-8"
              icon={<BrainCircuit size={13} />}
              text="AI optimizing"
            />

            <FloatingNode
              className="left-1/2 top-14 -translate-x-1/2"
              icon={<Sparkles size={13} />}
              text="Workflow completed"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

interface FloatingNodeProps {
  className?: string;
  icon: React.ReactNode;
  text: string;
}

function FloatingNode({
  className = "",
  icon,
  text,
}: FloatingNodeProps) {
  return (
    <motion.div
      animate={{
        y: [0, -8, 0],
      }}
      transition={{
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      className={`absolute flex items-center gap-2 rounded-full border border-white/5 bg-black/40 px-3 py-2 text-[10px] text-white/30 backdrop-blur-xl ${className}`}
    >
      <span className="text-white/40">{icon}</span>

      {text}
    </motion.div>
  );
}