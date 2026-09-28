import {
  ArrowRight,
  Bot,
  Check,
  Database,
  Mail,
  Sparkles,
  UserPlus,
} from "lucide-react";
import { motion, useReducedMotion } from "motion/react";

const steps = [
  { icon: UserPlus, label: "Novo cliente", description: "Lead entrou pelo formulário" },
  { icon: Bot, label: "NEXA AI", description: "Analisa e qualifica automaticamente", featured: true },
  { icon: Database, label: "CRM atualizado", description: "Dados enviados para o pipeline" },
  { icon: Mail, label: "Email enviado", description: "Mensagem personalizada criada pela IA" },
];

export function Workflow() {
  const reduceMotion = useReducedMotion();

  return (
    <section id="automacoes" className="relative overflow-hidden border-t border-white/5 px-6 py-32">
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[500px] w-[900px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/[0.025] blur-3xl" />
      <div className="relative z-10 mx-auto max-w-6xl">
        <div className="mb-20 grid gap-8 md:grid-cols-2 md:items-end">
          <div>
            <p className="mb-4 text-xs font-medium uppercase tracking-[0.2em] text-white/30">Intelligent workflows</p>
            <h2 className="max-w-xl text-4xl font-semibold tracking-[-0.04em] sm:text-5xl">Você define o processo.<br /><span className="text-white/35">A NEXA executa.</span></h2>
          </div>
          <p className="max-w-md text-sm leading-6 text-white/40 md:justify-self-end">Conecte suas ferramentas e transforme tarefas manuais em automações inteligentes que trabalham continuamente.</p>
        </div>

        <div className="relative">
          <div className="absolute left-8 right-8 top-8 hidden h-px bg-gradient-to-r from-transparent via-white/10 to-transparent md:block" />
          <div className="grid gap-5 md:grid-cols-4">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <motion.div key={step.label} className="group relative" initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.35 }} transition={{ duration: 0.6, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}>
                  {index < steps.length - 1 && <div className="absolute left-[calc(100%+4px)] top-8 z-20 hidden w-4 md:block"><ArrowRight size={14} className="text-white/10 transition-all duration-500 group-hover:translate-x-1 group-hover:text-white/40" /></div>}
                  <div className={`relative min-h-[220px] overflow-hidden rounded-2xl border p-6 transition-all duration-500 ${step.featured ? "border-white/15 bg-white/[0.06] shadow-[0_0_60px_rgba(255,255,255,0.04)]" : "border-white/5 bg-white/[0.02] hover:border-white/10 hover:bg-white/[0.04]"}`}>
                    {step.featured && <motion.div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-white/[0.07] blur-3xl" animate={reduceMotion ? undefined : { scale: [1, 1.2, 1], opacity: [0.5, 0.8, 0.5] }} transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }} />}
                    <div className="relative z-10 flex h-full flex-col">
                      <div className="flex items-center justify-between">
                        <div className={`flex h-10 w-10 items-center justify-center rounded-xl border ${step.featured ? "border-white/10 bg-white text-black" : "border-white/5 bg-white/[0.03] text-white/50"}`}><Icon size={18} /></div>
                        <span className="text-[10px] text-white/20">0{index + 1}</span>
                      </div>
                      <div className="mt-auto"><h3 className="text-sm font-medium text-white/80">{step.label}</h3><p className="mt-2 text-xs leading-5 text-white/30">{step.description}</p></div>
                    </div>
                    <div className="absolute bottom-0 left-0 h-px w-0 bg-white/40 transition-all duration-500 group-hover:w-full" />
                    {index < steps.length - 1 && <div className="pointer-events-none absolute bottom-5 left-1/2 hidden h-px w-12 -translate-x-1/2 md:block"><motion.div className="absolute h-1.5 w-1.5 -translate-y-1/2 rounded-full bg-white shadow-[0_0_14px_rgba(255,255,255,0.8)]" animate={reduceMotion ? undefined : { x: [0, 48], opacity: [0, 1, 1, 0] }} transition={{ duration: 2.4, repeat: Infinity, delay: index * 0.6, ease: "easeInOut" }} /></div>}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        <motion.div className="mx-auto mt-12 flex w-fit items-center gap-3 rounded-full border border-white/5 bg-white/[0.02] px-4 py-2.5" initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.8 }} transition={{ duration: 0.5, delay: 0.25 }}>
          <div className="flex h-5 w-5 items-center justify-center rounded-full bg-white/[0.08]"><Check size={11} className="text-white/60" /></div>
          <span className="text-xs text-white/30">Workflow completed automatically</span>
          <Sparkles size={12} className="text-white/20" />
        </motion.div>
      </div>
    </section>
  );
}
