import {
  ArrowRight,
  BarChart3,
  Check,
  Mail,
  ShoppingCart,
  Sparkles,
} from "lucide-react";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const automations = [
  {
    number: "01",
    icon: ShoppingCart,
    eyebrow: "SALES",
    title: "Transforme leads em clientes.",
    description:
      "A NEXA identifica novos leads, analisa o perfil, atualiza seu CRM e dispara o próximo passo automaticamente.",
    steps: ["Novo lead", "IA qualifica", "CRM atualizado", "Follow-up"],
  },
  {
    number: "02",
    icon: Mail,
    eyebrow: "MARKETING",
    title: "Marketing que trabalha sozinho.",
    description:
      "Crie campanhas, personalize mensagens e acompanhe resultados sem precisar mover dados entre ferramentas.",
    steps: ["Segmentação", "Conteúdo", "Disparo", "Analytics"],
  },
  {
    number: "03",
    icon: BarChart3,
    eyebrow: "OPERATIONS",
    title: "Transforme dados em ação.",
    description:
      "A NEXA monitora seus indicadores e transforma informações dispersas em decisões automatizadas.",
    steps: ["Coleta", "Análise", "Insight", "Ação"],
  },
];

export function AutomationShowcase() {
  const sectionRef = useRef<HTMLElement>(null);
  const cardsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      cardsRef.current.forEach((card, index) => {
        if (!card) return;

        const panel = card.querySelector<HTMLElement>(".automation-panel");
        const glow = card.querySelector<HTMLElement>(".automation-glow");
        const progress = card.querySelector<HTMLElement>(".automation-progress");
        const steps = card.querySelectorAll<HTMLElement>(".automation-step");
        const check = card.querySelector<HTMLElement>(".automation-check");

        gsap.fromTo(
          card,
          { opacity: 0.65, y: 20 },
          {
            opacity: 1,
            y: 0,
            scrollTrigger: {
              trigger: card,
              start: "top 82%",
              end: "top 35%",
              scrub: 1,
            },
          },
        );

        gsap.to(card, {
          scale: 1 - (automations.length - index - 1) * 0.04,
          y: -(automations.length - index - 1) * 18,
          scrollTrigger: {
            trigger: card,
            start: "top 80%",
            end: "top 20%",
            scrub: 1,
          },
        });

        if (panel) {
          gsap.to(panel, {
            boxShadow:
              "0 35px 120px rgba(0,0,0,0.48), inset 0 0 70px rgba(255,255,255,0.025)",
            scrollTrigger: {
              trigger: card,
              start: "top 62%",
              end: "top 35%",
              scrub: 1,
            },
          });
        }

        if (glow) {
          gsap.fromTo(
            glow,
            { scale: 0.7, opacity: 0.15, x: 30 },
            {
              scale: 1.35,
              opacity: 0.8,
              x: -10,
              scrollTrigger: {
                trigger: card,
                start: "top 72%",
                end: "top 30%",
                scrub: 1,
              },
            },
          );
        }

        if (progress) {
          gsap.to(progress, {
            scaleX: 1,
            scrollTrigger: {
              trigger: card,
              start: "top 68%",
              end: "top 38%",
              scrub: 1,
            },
          });
        }

        steps.forEach((step, stepIndex) => {
          gsap.fromTo(
            step,
            { opacity: 0.2, y: 10 },
            {
              opacity: 1,
              y: 0,
              scrollTrigger: {
                trigger: card,
                start: `top ${68 - stepIndex * 6}%`,
                end: `top ${50 - stepIndex * 5}%`,
                scrub: 1,
              },
            },
          );
        });

        if (check) {
          gsap.fromTo(
            check,
            { scale: 0.7, opacity: 0 },
            {
              scale: 1,
              opacity: 1,
              scrollTrigger: {
                trigger: card,
                start: "top 46%",
                end: "top 35%",
                scrub: 1,
              },
            },
          );
        }
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden border-t border-white/5 px-6 py-32"
    >
      <div className="pointer-events-none absolute left-1/2 top-[45%] h-[700px] w-[1000px] -translate-x-1/2 rounded-full bg-white/[0.018] blur-[120px]" />

      <div className="mx-auto max-w-6xl">
        <div className="mb-20 max-w-2xl">
          <div className="mb-5 flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-white/25">
            <Sparkles size={13} />
            Automation engine
          </div>

          <h2 className="text-4xl font-semibold tracking-[-0.04em] sm:text-6xl">
            Automatize o que
            <br />
            <span className="text-white/30">estiver no seu caminho.</span>
          </h2>

          <p className="mt-7 max-w-lg text-sm leading-7 text-white/35">
            Da primeira interação com um cliente até os relatórios da sua
            operação. A NEXA conecta tudo e executa cada etapa.
          </p>
        </div>

        <div className="relative mx-auto max-w-4xl space-y-[-120px] pb-32 pt-10">
          {automations.map((automation, index) => {
            const Icon = automation.icon;

            return (
              <div
                key={automation.number}
                ref={(element) => {
                  if (element) cardsRef.current[index] = element;
                }}
                className="sticky top-28"
              >
                <div className="automation-panel group relative overflow-hidden rounded-[28px] border border-white/10 bg-[#0a0a0a] p-7 shadow-2xl shadow-black/40 sm:p-10">
                  <div className="automation-glow pointer-events-none absolute -right-32 -top-32 h-72 w-72 rounded-full bg-white/[0.035] blur-3xl" />

                  <div className="pointer-events-none absolute left-0 right-0 top-0 h-px overflow-hidden bg-white/5">
                    <div className="automation-progress h-full w-full origin-left scale-x-0 bg-gradient-to-r from-white/10 via-white/60 to-transparent" />
                  </div>

                  <div className="relative z-10">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] transition-all duration-500 group-hover:border-white/20 group-hover:bg-white/[0.08]">
                          <Icon size={18} className="text-white/60 transition-transform duration-500 group-hover:scale-110" />
                        </div>

                        <span className="text-xs font-medium tracking-[0.15em] text-white/30">
                          {automation.eyebrow}
                        </span>
                      </div>

                      <span className="text-xs text-white/15">
                        {automation.number}
                      </span>
                    </div>

                    <div className="mt-16 max-w-2xl">
                      <h3 className="text-3xl font-medium tracking-[-0.03em] sm:text-5xl">
                        {automation.title}
                      </h3>

                      <p className="mt-6 max-w-xl text-sm leading-7 text-white/35">
                        {automation.description}
                      </p>
                    </div>

                    <div className="mt-12 grid gap-2 sm:grid-cols-4">
                      {automation.steps.map((step, stepIndex) => (
                        <div
                          key={step}
                          className="automation-step group/step flex items-center gap-3 rounded-xl border border-white/5 bg-white/[0.02] px-4 py-3 transition-colors duration-300 hover:border-white/10 hover:bg-white/[0.04]"
                        >
                          <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-white/[0.05] text-[9px] text-white/30">
                            {stepIndex + 1}
                          </span>

                          <span className="text-xs text-white/40">
                            {step}
                          </span>

                          {stepIndex < automation.steps.length - 1 ? (
                            <ArrowRight
                              size={11}
                              className="ml-auto text-white/10 transition-transform duration-300 group-hover/step:translate-x-1 group-hover/step:text-white/30"
                            />
                          ) : (
                            <Check
                              size={11}
                              className="automation-check ml-auto text-white/20"
                            />
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
