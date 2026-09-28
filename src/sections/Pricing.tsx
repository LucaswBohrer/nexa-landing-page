import { motion } from "motion/react";
import { ArrowRight, Check, Sparkles } from "lucide-react";
import { MagneticButton } from "../components/MagneticButton";
import { SpotlightCard } from "../components/SpotlightCard";

const plans = [
  {
    name: "Starter",
    description: "Para começar a automatizar sua operação.",
    price: "49",
    features: [
      "Até 5 workflows",
      "1.000 execuções/mês",
      "Integrações essenciais",
      "Analytics básico",
    ],
  },
  {
    name: "Growth",
    description: "Para empresas que querem escalar com automação.",
    price: "149",
    featured: true,
    features: [
      "Workflows ilimitados",
      "10.000 execuções/mês",
      "IA avançada",
      "Analytics em tempo real",
      "Automações multi-etapas",
    ],
  },
  {
    name: "Scale",
    description: "Automação avançada para operações maiores.",
    price: "399",
    features: [
      "Execuções ilimitadas",
      "IA personalizada",
      "Integrações avançadas",
      "Controle e permissões",
      "Suporte prioritário",
    ],
  },
];

export function Pricing() {
  return (
    <section
      id="precos"
      className="relative overflow-hidden px-6 py-32"
    >
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[500px] w-[900px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/[0.025] blur-[120px]" />

      <div className="relative z-10 mx-auto max-w-6xl">
        <div className="mx-auto max-w-2xl text-center">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-xs text-white/50">
            <Sparkles size={13} />
            Simples e transparente
          </div>

          <h2 className="text-4xl font-semibold tracking-[-0.04em] sm:text-5xl md:text-6xl">
            Comece pequeno.
            <br />
            <span className="text-white/30">
              Automatize grande.
            </span>
          </h2>

          <p className="mt-6 text-base leading-7 text-white/40">
            Escolha o plano que acompanha o momento da sua operação.
            Sem contratos complicados. Sem burocracia.
          </p>
        </div>

        <div className="mt-16 grid gap-5 lg:grid-cols-3">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{
                duration: 0.7,
                delay: index * 0.1,
              }}
              whileHover={{
                y: -8,
              }}
              className="h-full"
            >
              <SpotlightCard
                className={`relative flex h-full flex-col p-7 ${
                  plan.featured
                    ? "border-white/20 bg-white/[0.05]"
                    : ""
                }`}
              >
                {plan.featured && (
                  <>
                    <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(255,255,255,0.09),transparent_55%)]" />

                    <div className="relative mb-4 inline-flex w-fit rounded-full border border-white/10 bg-white/10 px-3 py-1 text-[10px] font-medium uppercase tracking-[0.18em] text-white/70 lg:absolute lg:right-6 lg:top-6 lg:mb-0">
                      Mais popular
                    </div>
                  </>
                )}

                <div className="relative z-10">
                  <p className="text-sm font-medium text-white/70">
                    {plan.name}
                  </p>

                  <p className="mt-3 min-h-[48px] text-sm leading-6 text-white/35">
                    {plan.description}
                  </p>

                  <div className="mt-8 flex items-end gap-1">
                    <span className="text-sm text-white/40">
                      R$
                    </span>

                    <span className="text-5xl font-semibold tracking-[-0.05em]">
                      {plan.price}
                    </span>

                    <span className="mb-1 text-sm text-white/30">
                      /mês
                    </span>
                  </div>

                  <div className="my-8 h-px bg-white/10" />

                  <div className="space-y-4">
                    {plan.features.map((feature) => (
                      <div
                        key={feature}
                        className="flex items-center gap-3 text-sm text-white/55"
                      >
                        <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-white/[0.07]">
                          <Check size={12} />
                        </div>

                        {feature}
                      </div>
                    ))}
                  </div>

                  <div className="mt-10">
                    <MagneticButton
                      variant={
                        plan.featured ? "primary" : "secondary"
                      }
                    >
                      Começar agora
                      <ArrowRight
                        size={15}
                        className="ml-1 transition-transform group-hover:translate-x-1"
                      />
                    </MagneticButton>
                  </div>
                </div>
              </SpotlightCard>
            </motion.div>
          ))}
        </div>

        <p className="mt-8 text-center text-xs text-white/20">
          Todos os planos incluem 14 dias grátis. Sem cartão de
          crédito.
        </p>
      </div>
    </section>
  );
}