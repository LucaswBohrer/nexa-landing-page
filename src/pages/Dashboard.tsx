import { useState } from "react";
import {
  Activity,
  ArrowUpRight,
  BarChart3,
  Bot,
  ChevronRight,
  CircleCheck,
  Clock3,
  Command,
  Gauge,
  LayoutDashboard,
  LogOut,
  Menu,
  Play,
  Settings,
  Sparkles,
  Workflow,
  X,
  Zap,
} from "lucide-react";

const metrics = [
  { label: "Processos ativos", value: "1.284", change: "+12,4%", icon: Workflow },
  { label: "Execuções hoje", value: "8.492", change: "+18,7%", icon: Zap },
  { label: "Horas economizadas", value: "342h", change: "+24,1%", icon: Clock3 },
  { label: "Taxa de automação", value: "87,2%", change: "+4,8%", icon: Gauge },
];

const workflows = [
  { name: "Lead qualification", status: "Ativo", runs: "2.481", time: "1,8s" },
  { name: "Relatório semanal", status: "Ativo", runs: "842", time: "4,2s" },
  { name: "Follow-up automático", status: "Ativo", runs: "1.294", time: "2,1s" },
];

const activity = [
  { title: "Lead qualificado", detail: "CRM → Pipeline", time: "2 min atrás" },
  { title: "Relatório gerado", detail: "Analytics → PDF", time: "8 min atrás" },
  { title: "Email enviado", detail: "Marketing → Cliente", time: "12 min atrás" },
  { title: "Workflow concluído", detail: "Operations → ERP", time: "18 min atrás" },
];

function Dashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <main className="min-h-screen bg-[#050505] text-white">
      <div className="flex min-h-screen">
        <aside
          className={`fixed inset-y-0 left-0 z-50 w-64 border-r border-white/7 bg-[#080808] p-5 transition-transform duration-300 lg:static lg:translate-x-0 ${sidebarOpen ? "translate-x-0" : "-translate-x-full"}`}
        >
          <div className="flex h-full flex-col">
            <div className="flex items-center justify-between">
              <a href="/" className="flex items-center gap-3">
                <span className="grid h-9 w-9 place-items-center rounded-xl border border-white/10 bg-white/[0.06] text-sm font-semibold">
                  N
                </span>
                <span className="text-sm font-semibold tracking-[-0.02em]">NEXA</span>
              </a>
              <button
                type="button"
                aria-label="Fechar menu"
                onClick={() => setSidebarOpen(false)}
                className="rounded-lg p-2 text-white/45 hover:bg-white/5 hover:text-white lg:hidden"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            <nav className="mt-10 space-y-1">
              {[
                ["Overview", LayoutDashboard, true],
                ["Workflows", Workflow, false],
                ["Analytics", BarChart3, false],
                ["Activity", Activity, false],
              ].map(([label, Icon, active]) => (
                <button
                  key={label as string}
                  type="button"
                  className={`flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-left text-sm transition-colors ${active ? "bg-white/[0.08] text-white" : "text-white/45 hover:bg-white/[0.04] hover:text-white"}`}
                >
                  <Icon className="h-4 w-4" />
                  {label as string}
                </button>
              ))}
            </nav>

            <div className="mt-auto space-y-1">
              <button type="button" className="flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-sm text-white/45 hover:bg-white/[0.04] hover:text-white">
                <Settings className="h-4 w-4" />
                Settings
              </button>
              <a href="/" className="flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-sm text-white/45 hover:bg-white/[0.04] hover:text-white">
                <LogOut className="h-4 w-4" />
                Voltar para o site
              </a>
            </div>
          </div>
        </aside>

        {sidebarOpen && (
          <button
            type="button"
            aria-label="Fechar menu"
            onClick={() => setSidebarOpen(false)}
            className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm lg:hidden"
          />
        )}

        <section className="min-w-0 flex-1">
          <header className="sticky top-0 z-30 flex h-16 items-center justify-between border-b border-white/7 bg-[#050505]/85 px-5 backdrop-blur-xl sm:px-8">
            <button
              type="button"
              aria-label="Abrir menu"
              onClick={() => setSidebarOpen(true)}
              className="rounded-xl border border-white/8 p-2 text-white/55 hover:bg-white/5 hover:text-white lg:hidden"
            >
              <Menu className="h-4 w-4" />
            </button>

            <div className="hidden items-center gap-2 text-xs text-white/35 lg:flex">
              <Command className="h-3.5 w-3.5" />
              Workspace / Overview
            </div>

            <div className="ml-auto flex items-center gap-3">
              <div className="hidden items-center gap-2 rounded-full border border-white/8 bg-white/[0.03] px-3 py-1.5 text-xs text-white/55 sm:flex">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-[0_0_10px_rgba(52,211,153,0.8)]" />
                All systems operational
              </div>
              <div className="grid h-8 w-8 place-items-center rounded-full border border-white/10 bg-white/[0.08] text-xs font-medium">
                LB
              </div>
            </div>
          </header>

          <div className="mx-auto max-w-[1500px] px-5 py-8 sm:px-8 lg:px-10">
            <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
              <div>
                <p className="text-xs font-medium uppercase tracking-[0.2em] text-white/35">Monday, September 28</p>
                <h1 className="mt-2 text-3xl font-semibold tracking-[-0.04em] sm:text-4xl">Good morning, Lucas.</h1>
                <p className="mt-2 max-w-xl text-sm leading-6 text-white/45">
                  Sua operação está funcionando normalmente. Veja o que a NEXA automatizou enquanto você cuidava do negócio.
                </p>
              </div>
              <button
                type="button"
                className="inline-flex w-fit items-center gap-2 rounded-full bg-white px-4 py-2.5 text-sm font-medium text-black transition-transform hover:scale-[1.02] active:scale-[0.98]"
              >
                <Play className="h-3.5 w-3.5 fill-current" />
                Executar workflow
              </button>
            </div>

            <div className="mt-8 grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
              {metrics.map(({ label, value, change, icon: Icon }) => (
                <div key={label} className="rounded-2xl border border-white/7 bg-white/[0.025] p-5">
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-white/40">{label}</span>
                    <Icon className="h-4 w-4 text-white/30" />
                  </div>
                  <div className="mt-4 flex items-end justify-between gap-3">
                    <span className="text-2xl font-semibold tracking-[-0.04em]">{value}</span>
                    <span className="text-xs text-emerald-300/75">{change}</span>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 grid gap-6 xl:grid-cols-[1.4fr_0.6fr]">
              <section className="rounded-2xl border border-white/7 bg-white/[0.025]">
                <div className="flex items-center justify-between border-b border-white/7 px-5 py-4">
                  <div>
                    <h2 className="text-sm font-medium">Active workflows</h2>
                    <p className="mt-1 text-xs text-white/35">Automations running across your operation</p>
                  </div>
                  <button type="button" className="flex items-center gap-1 text-xs text-white/45 hover:text-white">
                    View all <ArrowUpRight className="h-3.5 w-3.5" />
                  </button>
                </div>
                <div className="divide-y divide-white/6">
                  {workflows.map((workflow) => (
                    <div key={workflow.name} className="flex items-center gap-4 px-5 py-4">
                      <div className="grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-white/[0.06]">
                        <Workflow className="h-4 w-4 text-white/60" />
                      </div>
                      <div className="min-w-0 flex-1">
                        <p className="truncate text-sm font-medium">{workflow.name}</p>
                        <p className="mt-1 text-xs text-white/35">{workflow.runs} runs · avg. {workflow.time}</p>
                      </div>
                      <span className="hidden rounded-full border border-emerald-400/15 bg-emerald-400/[0.06] px-2.5 py-1 text-[10px] uppercase tracking-[0.14em] text-emerald-300/70 sm:inline-flex">
                        {workflow.status}
                      </span>
                      <ChevronRight className="h-4 w-4 text-white/20" />
                    </div>
                  ))}
                </div>
              </section>

              <section className="relative overflow-hidden rounded-2xl border border-white/8 bg-white/[0.035] p-6">
                <div className="absolute -right-16 -top-16 h-48 w-48 rounded-full bg-white/[0.06] blur-3xl" />
                <div className="relative">
                  <div className="flex items-center justify-between">
                    <div className="grid h-10 w-10 place-items-center rounded-xl border border-white/10 bg-white/[0.06]">
                      <Bot className="h-5 w-5 text-white/70" />
                    </div>
                    <span className="flex items-center gap-1.5 text-[10px] uppercase tracking-[0.16em] text-white/35">
                      <Sparkles className="h-3 w-3" /> NEXA AI
                    </span>
                  </div>
                  <h2 className="mt-8 text-xl font-medium tracking-[-0.03em]">A operação está 12% mais eficiente.</h2>
                  <p className="mt-3 text-sm leading-6 text-white/40">
                    A NEXA identificou 4 oportunidades de otimização nos seus workflows ativos.
                  </p>
                  <button type="button" className="mt-7 inline-flex items-center gap-2 text-xs font-medium text-white/65 hover:text-white">
                    Ver recomendações <ChevronRight className="h-3.5 w-3.5" />
                  </button>
                </div>
              </section>
            </div>

            <section className="mt-6 rounded-2xl border border-white/7 bg-white/[0.025]">
              <div className="flex items-center justify-between border-b border-white/7 px-5 py-4">
                <div>
                  <h2 className="text-sm font-medium">Recent activity</h2>
                  <p className="mt-1 text-xs text-white/35">Everything NEXA has executed for you</p>
                </div>
                <Activity className="h-4 w-4 text-white/25" />
              </div>
              <div className="grid gap-1 p-2 sm:grid-cols-2 xl:grid-cols-4">
                {activity.map((item) => (
                  <div key={item.title} className="rounded-xl p-3 transition-colors hover:bg-white/[0.035]">
                    <div className="flex items-start gap-3">
                      <div className="mt-0.5 grid h-7 w-7 shrink-0 place-items-center rounded-lg bg-white/[0.06]">
                        <CircleCheck className="h-3.5 w-3.5 text-white/55" />
                      </div>
                      <div className="min-w-0">
                        <p className="truncate text-xs font-medium">{item.title}</p>
                        <p className="mt-1 truncate text-[11px] text-white/35">{item.detail}</p>
                        <p className="mt-2 text-[10px] uppercase tracking-[0.12em] text-white/20">{item.time}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </div>
        </section>
      </div>
    </main>
  );
}

export default Dashboard;
