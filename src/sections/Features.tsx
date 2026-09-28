import {
  BarChart3,
  BrainCircuit,
  Link2,
  ShieldCheck,
  Sparkles,
  Workflow,
} from "lucide-react";

import { motion } from "motion/react";
import { SpotlightCard } from "../components/SpotlightCard";

const features = [
  {
    icon: BrainCircuit,
    title: "IA que entende seu negócio",
    description:
      "A NEXA aprende seus processos e transforma tarefas repetitivas em fluxos inteligentes.",
    size: "large",
  },
  {
    icon: Workflow,
    title: "Workflows inteligentes",
    description:
      "Crie automações complexas sem precisar escrever código.",
    size: "normal",
  },
  {
    icon: Link2,
    title: "Conecte suas ferramentas",
    description:
      "CRM, email, planilhas, APIs e muito mais em um único fluxo.",
    size: "normal",
  },
  {
    icon: BarChart3,
    title: "Analytics em tempo real",
    description:
      "Descubra quanto tempo e dinheiro suas automações estão economizando.",
    size: "normal",
  },
  {
    icon: ShieldCheck,
    title: "Seguro por padrão",
    description:
      "Controle, permissões e monitoramento para manter seus processos protegidos.",
    size: "normal",
  },
  {
    icon: Sparkles,
    title: "Automação que evolui",
    description:
      "Quanto mais você usa, mais inteligente sua operação pode se tornar.",
    size: "large",
  },
];

export function Features() {
  return (
    <section
      id="produto"
      className="relative overflow-hidden border-t border-white/5 px-6 py-32"
    >
      <div className="mx-auto max-w-6xl">
        {/* Header */}
        <motion.div initial={{ opacity: 0, y: 24, filter: "blur(8px)" }} whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.8 }} className="mb-16">
          <p className="mb-4 text-xs font-medium uppercase tracking-[0.2em] text-white/30">
            Everything connected
          </p>

          <div className="grid gap-8 md:grid-cols-2 md:items-end">
            <h2 className="max-w-2xl text-4xl font-semibold tracking-[-0.04em] sm:text-5xl">
              Menos trabalho manual.
              <br />
              <span className="text-white/35">
                Mais tempo para crescer.
              </span>
            </h2>

            <p className="max-w-md text-sm leading-6 text-white/40 md:justify-self-end">
              Uma camada inteligente entre sua equipe e as tarefas que
              consomem tempo todos os dias.
            </p>
          </div>
        </div>

        {/* Grid */}
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => {
            const Icon = feature.icon;

            return (
              <motion.div initial={{ opacity: 0, y: 32, filter: "blur(6px)" }} whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }} viewport={{ once: true, margin: "-80px" }} transition={{ duration: 0.65, delay: features.indexOf(feature) * 0.07 }}>
                <SpotlightCard
                key={feature.title}
                className={
                  feature.size === "large"
                    ? "min-h-[300px]"
                    : "min-h-[250px]"
                }
              >
                <div className="flex h-full flex-col p-7">
                  <div className="flex items-center justify-between">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/5 bg-white/[0.03] text-white/50 transition duration-300 group-hover:border-white/10 group-hover:bg-white/[0.07] group-hover:text-white/80">
                      <Icon size={18} />
                    </div>

                    <span className="text-[10px] uppercase tracking-widest text-white/15">
                      NEXA
                    </span>
                  </div>

                  <div className="mt-auto">
                    <h3 className="text-base font-medium text-white/80">
                      {feature.title}
                    </h3>

                    <p className="mt-3 max-w-sm text-xs leading-6 text-white/30">
                      {feature.description}
                    </p>
                  </div>
                </div>
                </SpotlightCard>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}