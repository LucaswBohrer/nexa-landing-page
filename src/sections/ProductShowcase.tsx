import {
  Activity,
  ArrowUpRight,
  Bot,
  Check,
  Clock3,
  MoreHorizontal,
  Zap,
} from "lucide-react";

const activities = [
  {
    title: "Lead qualificado",
    description: "CRM → Pipeline",
    time: "2 min atrás",
  },
  {
    title: "Relatório gerado",
    description: "Analytics → PDF",
    time: "8 min atrás",
  },
  {
    title: "Email enviado",
    description: "Marketing → Cliente",
    time: "12 min atrás",
  },
];

export function ProductShowcase() {
  return (
    <section
      id="recursos"
      className="relative overflow-hidden border-t border-white/5 px-6 py-32"
    >
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[500px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/[0.025] blur-3xl" />

      <div className="relative z-10 mx-auto max-w-6xl">
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <p className="mb-4 text-xs font-medium uppercase tracking-[0.2em] text-white/30">
            NEXA Automation Platform
          </p>

          <h2 className="text-4xl font-semibold tracking-[-0.04em] sm:text-5xl">
            Sua operação.
            <br />
            <span className="text-white/35">No piloto automático.</span>
          </h2>

          <p className="mt-6 text-white/40">
            Centralize seus processos, conecte suas ferramentas e deixe a IA
            executar o trabalho repetitivo.
          </p>
        </div>

        <div className="group relative overflow-hidden rounded-3xl border border-white/10 bg-[#0a0a0a] shadow-2xl shadow-black/50">
          {/* Glow interativo */}
          <div className="pointer-events-none absolute -inset-px opacity-0 transition duration-700 group-hover:opacity-100">
            <div className="absolute left-1/2 top-0 h-[300px] w-[600px] -translate-x-1/2 rounded-full bg-white/[0.05] blur-3xl" />
          </div>

          {/* Browser bar */}
          <div className="relative flex h-14 items-center border-b border-white/5 px-5">
            <div className="flex gap-2">
              <span className="h-2.5 w-2.5 rounded-full bg-white/10" />
              <span className="h-2.5 w-2.5 rounded-full bg-white/10" />
              <span className="h-2.5 w-2.5 rounded-full bg-white/10" />
            </div>

            <div className="absolute left-1/2 -translate-x-1/2 rounded-md bg-white/[0.03] px-4 py-1.5 text-[10px] text-white/20">
              app.nexa.ai
            </div>

            <MoreHorizontal
              size={16}
              className="ml-auto text-white/20"
            />
          </div>

          <div className="relative grid lg:grid-cols-[220px_1fr]">
            {/* Sidebar */}
            <aside className="hidden border-r border-white/5 p-5 lg:block">
              <div className="mb-8 flex items-center gap-2 text-sm font-semibold">
                <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-white text-black">
                  <Zap size={14} />
                </div>
                NEXA
              </div>

              <div className="space-y-1 text-xs">
                {["Overview", "Workflows", "Automations", "Analytics"].map(
                  (item, index) => (
                    <div
                      key={item}
                      className={`rounded-lg px-3 py-2.5 ${
                        index === 0
                          ? "bg-white/[0.07] text-white"
                          : "text-white/30"
                      }`}
                    >
                      {item}
                    </div>
                  ),
                )}
              </div>

              <div className="mt-8 rounded-xl border border-white/5 bg-white/[0.02] p-3">
                <div className="mb-2 flex items-center gap-2">
                  <Bot size={13} className="text-white/40" />
                  <span className="text-[10px] text-white/40">
                    NEXA AI
                  </span>
                </div>

                <p className="text-[10px] leading-4 text-white/25">
                  3 automações estão sendo executadas agora.
                </p>
              </div>
            </aside>

            {/* Dashboard */}
            <div className="p-5 sm:p-8">
              <div className="mb-8 flex items-center justify-between">
                <div>
                  <p className="text-xs text-white/30">
                    Monday, September 28
                  </p>

                  <h3 className="mt-1 text-xl font-medium">
                    Good morning.
                  </h3>
                </div>

                <div className="flex items-center gap-2 rounded-full border border-white/5 bg-white/[0.03] px-3 py-1.5">
                  <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-white/60" />
                  <span className="text-[10px] text-white/40">
                    All systems operational
                  </span>
                </div>
              </div>

              {/* Metrics */}
              <div className="grid gap-3 sm:grid-cols-3">
                <Metric
                  icon={<Activity size={14} />}
                  label="Processes"
                  value="1,284"
                  change="+18.4%"
                />

                <Metric
                  icon={<Zap size={14} />}
                  label="Automated"
                  value="87.2%"
                  change="+12.7%"
                />

                <Metric
                  icon={<Clock3 size={14} />}
                  label="Hours saved"
                  value="342"
                  change="+24.1%"
                />
              </div>

              {/* Activity */}
              <div className="mt-8">
                <div className="mb-4 flex items-center justify-between">
                  <span className="text-xs font-medium text-white/60">
                    Recent activity
                  </span>

                  <button className="flex items-center gap-1 text-[10px] text-white/30 transition hover:text-white/60">
                    View all
                    <ArrowUpRight size={11} />
                  </button>
                </div>

                <div className="divide-y divide-white/5 rounded-xl border border-white/5">
                  {activities.map((activity) => (
                    <div
                      key={activity.title}
                      className="flex items-center gap-3 p-4 transition hover:bg-white/[0.02]"
                    >
                      <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-white/5 bg-white/[0.03]">
                        <Check size={13} className="text-white/50" />
                      </div>

                      <div className="min-w-0 flex-1">
                        <p className="truncate text-xs text-white/60">
                          {activity.title}
                        </p>

                        <p className="mt-0.5 text-[10px] text-white/20">
                          {activity.description}
                        </p>
                      </div>

                      <span className="text-[10px] text-white/20">
                        {activity.time}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

interface MetricProps {
  icon: React.ReactNode;
  label: string;
  value: string;
  change: string;
}

function Metric({ icon, label, value, change }: MetricProps) {
  return (
    <div className="rounded-xl border border-white/5 bg-white/[0.02] p-4 transition duration-300 hover:border-white/10 hover:bg-white/[0.04]">
      <div className="flex items-center justify-between">
        <div className="text-white/30">{icon}</div>

        <span className="text-[10px] text-white/30">
          {change}
        </span>
      </div>

      <p className="mt-5 text-[10px] uppercase tracking-wider text-white/20">
        {label}
      </p>

      <p className="mt-1 text-2xl font-medium tracking-tight">
        {value}
      </p>
    </div>
  );
}