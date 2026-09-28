import { useEffect, useState } from "react";
import type { LucideIcon } from "lucide-react";
import { Activity, ArrowLeft, BarChart3, Check, ChevronRight, Circle, Clock3, LayoutDashboard, LogOut, Menu, Play, RotateCcw, Settings, Sparkles, Workflow, X, Zap } from "lucide-react";

type WorkflowStep = [label: string, detail: string, icon: LucideIcon];
type WorkflowTemplate = { name: string; description: string; steps: WorkflowStep[] };

const templates: WorkflowTemplate[] = [
  { name: "Lead qualification", description: "Qualifica novos leads e atualiza o CRM automaticamente.", steps: [
    ["Novo lead recebido", "Webhook → NEXA", Zap], ["IA analisa o lead", "NEXA AI → Scoring", Sparkles], ["CRM atualizado", "NEXA → HubSpot", Workflow], ["Follow-up preparado", "NEXA → Email", Activity],
  ]},
  { name: "Relatório semanal", description: "Consolida dados, gera o relatório e entrega o PDF.", steps: [
    ["Coletando dados", "Analytics → Sources", BarChart3], ["NEXA analisa métricas", "NEXA AI → Insights", Sparkles], ["Relatório gerado", "NEXA → PDF", Workflow], ["Email enviado", "NEXA → Finance", Activity],
  ]},
  { name: "Follow-up automático", description: "Encontra oportunidades e dispara o próximo contato.", steps: [
    ["Oportunidades encontradas", "CRM → Pipeline", Workflow], ["Mensagem personalizada", "NEXA AI → Copy", Sparkles], ["Email agendado", "NEXA → Marketing", Clock3], ["Atividade registrada", "NEXA → CRM", Check],
  ]},
];

type Status = "pending" | "running" | "completed";
type RunRecord = { id: number; workflow: string; completedAt: string; duration: string };

function Workflows() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [selected, setSelected] = useState(0);
  const [statuses, setStatuses] = useState<Status[]>(templates[0].steps.map(() => "pending"));
  const [running, setRunning] = useState(false);
  const [runs, setRuns] = useState(() => Number(window.localStorage.getItem("nexa:workflow-runs") ?? 0));
  const [history, setHistory] = useState<RunRecord[]>(() => {
    try { return JSON.parse(window.localStorage.getItem("nexa:workflow-history") ?? "[]") as RunRecord[]; } catch { return []; }
  });
  const workflow = templates[selected];
  const completed = statuses.filter((s) => s === "completed").length;
  const progress = Math.round((completed / workflow.steps.length) * 100);

  useEffect(() => {
    setStatuses(workflow.steps.map(() => "pending"));
    setRunning(false);
  }, [selected]);

  useEffect(() => {
    if (!running) return;
    if (completed >= workflow.steps.length) {
      setRunning(false);
      setRuns((value) => { const next = value + 1; window.localStorage.setItem("nexa:workflow-runs", String(next)); return next; });
      const record: RunRecord = { id: Date.now(), workflow: workflow.name, completedAt: new Date().toISOString(), duration: "5.6s" };
      setHistory((current) => { const next = [record, ...current].slice(0, 8); window.localStorage.setItem("nexa:workflow-history", JSON.stringify(next)); return next; });
      return;
    }
    setStatuses((current) => current.map((status, index) => index === completed ? "running" : status));
    const timer = window.setTimeout(() => {
      setStatuses((current) => current.map((status, index) => index === completed ? "completed" : status));
    }, 1400);
    return () => window.clearTimeout(timer);
  }, [running, completed, workflow.steps.length]);

  function execute() {
    if (progress === 100) setStatuses(workflow.steps.map(() => "pending"));
    window.setTimeout(() => setRunning(true), 80);
  }

  function reset() {
    setRunning(false);
    setStatuses(workflow.steps.map(() => "pending"));
  }

  return (
    <main className="min-h-screen bg-[#050505] text-white">
      <div className="flex min-h-screen">
        <aside className={"fixed inset-y-0 left-0 z-50 w-64 border-r border-white/7 bg-[#080808] p-5 transition-transform duration-300 lg:static lg:translate-x-0 " + (sidebarOpen ? "translate-x-0" : "-translate-x-full")}>
          <div className="flex h-full flex-col">
            <div className="flex items-center justify-between">
              <a href="/" className="flex items-center gap-3"><span className="grid h-9 w-9 place-items-center rounded-xl border border-white/10 bg-white/[0.06] text-sm font-semibold">N</span><span className="text-sm font-semibold">NEXA</span></a>
              <button type="button" onClick={() => setSidebarOpen(false)} className="rounded-lg p-2 text-white/45 hover:bg-white/5 lg:hidden"><X className="h-4 w-4" /></button>
            </div>
            <nav className="mt-10 space-y-1">
              <a href="/dashboard" className="flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm text-white/45 hover:bg-white/[0.04] hover:text-white"><LayoutDashboard className="h-4 w-4" />Overview</a>
              <a href="/dashboard/workflows" className="flex items-center gap-3 rounded-xl bg-white/[0.08] px-3 py-2.5 text-sm"><Workflow className="h-4 w-4" />Workflows</a>
              <a href="/dashboard/analytics" className="flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-left text-sm text-white/45 hover:bg-white/[0.04] hover:text-white"><BarChart3 className="h-4 w-4" />Analytics</a>
              <a href="/dashboard/activity" className="flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-left text-sm text-white/45 hover:bg-white/[0.04] hover:text-white"><Activity className="h-4 w-4" />Activity</a>
            </nav>
            <div className="mt-auto space-y-1">
              <a href="/dashboard/settings" className="flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-sm text-white/45 hover:bg-white/[0.04] hover:text-white"><Settings className="h-4 w-4" />Settings</a>
              <a href="/" className="flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-sm text-white/45"><LogOut className="h-4 w-4" />Voltar para o site</a>
            </div>
          </div>
        </aside>

        {sidebarOpen && <button type="button" onClick={() => setSidebarOpen(false)} className="fixed inset-0 z-40 bg-black/60 lg:hidden" />}

        <section className="min-w-0 flex-1">
          <header className="sticky top-0 z-30 flex h-16 items-center justify-between border-b border-white/7 bg-[#050505]/85 px-5 backdrop-blur-xl sm:px-8">
            <button type="button" onClick={() => setSidebarOpen(true)} className="rounded-xl border border-white/8 p-2 text-white/55 lg:hidden"><Menu className="h-4 w-4" /></button>
            <div className="hidden items-center gap-2 text-xs text-white/35 lg:flex"><Workflow className="h-3.5 w-3.5" />Workspace / Workflows</div>
            <div className="ml-auto flex items-center gap-3"><span className="hidden rounded-full border border-white/8 bg-white/[0.03] px-3 py-1.5 text-xs text-white/55 sm:block">● All systems operational</span><span className="grid h-8 w-8 place-items-center rounded-full border border-white/10 bg-white/[0.08] text-xs">LB</span></div>
          </header>

          <div className="mx-auto max-w-[1250px] px-5 py-8 sm:px-8 lg:px-10">
            <a href="/dashboard" className="inline-flex items-center gap-2 text-xs text-white/40 hover:text-white"><ArrowLeft className="h-3.5 w-3.5" />Back to overview</a>
            <div className="mt-7 flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
              <div><p className="text-xs font-medium uppercase tracking-[0.2em] text-white/35">Automation workspace</p><h1 className="mt-2 text-3xl font-semibold tracking-[-0.04em] sm:text-4xl">Execute a workflow.</h1><p className="mt-2 max-w-2xl text-sm leading-6 text-white/45">Escolha uma automação e veja a NEXA executar cada etapa em sequência. Esta é uma simulação local da experiência do produto.</p></div>
              <div className="rounded-full border border-white/8 bg-white/[0.03] px-3 py-2 text-xs text-white/45">{runs} {runs === 1 ? "execution" : "executions"} this session</div>
            </div>

            <div className="mt-8 grid gap-6 lg:grid-cols-[280px_1fr]">
              <section className="h-fit rounded-2xl border border-white/7 bg-white/[0.025] p-3">
                <p className="px-3 pb-3 pt-2 text-[10px] uppercase tracking-[0.18em] text-white/25">Workflows</p>
                {templates.map((item, index) => <button key={item.name} type="button" onClick={() => setSelected(index)} className={"mb-1 w-full rounded-xl p-3 text-left " + (selected === index ? "bg-white/[0.08]" : "text-white/45 hover:bg-white/[0.04]")}>
                  <div className="flex items-center gap-3"><span className="grid h-9 w-9 place-items-center rounded-xl border border-white/8 bg-white/[0.04]"><Workflow className="h-4 w-4" /></span><span className="min-w-0 flex-1"><span className="block truncate text-sm font-medium">{item.name}</span><span className="mt-1 block text-[11px] text-white/25">{item.steps.length} steps</span></span><ChevronRight className="h-4 w-4 text-white/20" /></div>
                </button>)}
              </section>

              <section className="overflow-hidden rounded-2xl border border-white/7 bg-white/[0.025]">
                <div className="border-b border-white/7 p-6">
                  <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-start">
                    <div><div className="flex items-center gap-2"><span className="rounded-full border border-emerald-400/15 bg-emerald-400/[0.06] px-2.5 py-1 text-[10px] uppercase tracking-[0.14em] text-emerald-300/70">Active</span><span className="text-xs text-white/25">v1.0</span></div><h2 className="mt-4 text-2xl font-medium">{workflow.name}</h2><p className="mt-2 max-w-xl text-sm leading-6 text-white/40">{workflow.description}</p></div>
                    <button type="button" disabled={running} onClick={execute} className="inline-flex shrink-0 items-center justify-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-medium text-black disabled:opacity-45"><Play className="h-3.5 w-3.5 fill-current" />{running ? "Executando..." : progress === 100 ? "Executar novamente" : "Executar workflow"}</button>
                  </div>
                  <div className="mt-7"><div className="mb-2 flex justify-between text-xs"><span className="text-white/40">{progress === 100 ? "Workflow completed" : running ? "NEXA está executando..." : "Ready to execute"}</span><span className="text-white/65">{progress}%</span></div><div className="h-1 overflow-hidden rounded-full bg-white/[0.07]"><div className="h-full rounded-full bg-white transition-[width] duration-500" style={{ width: progress + "%" }} /></div></div>
                </div>

                <div className="divide-y divide-white/6">
                  {workflow.steps.map((step, index) => {
                    const status = statuses[index];
                    const Icon = step[2];
                    return <div key={step[0]} className="flex items-center gap-4 px-6 py-5"><div className={"grid h-10 w-10 shrink-0 place-items-center rounded-xl border " + (status === "completed" ? "border-emerald-400/20 bg-emerald-400/[0.07]" : status === "running" ? "border-white/20 bg-white/[0.08]" : "border-white/8 bg-white/[0.03]")}>{status === "completed" ? <Check className="h-4 w-4 text-emerald-300" /> : status === "running" ? <span className="h-2.5 w-2.5 animate-pulse rounded-full bg-white shadow-[0_0_16px_rgba(255,255,255,0.8)]" /> : <Icon className="h-4 w-4 text-white/35" />}</div><div className="min-w-0 flex-1"><p className={"text-sm font-medium " + (status === "pending" ? "text-white/45" : "text-white")}>{step[0]}</p><p className="mt-1 text-xs text-white/30">{step[1]}</p></div><span className="hidden text-[10px] uppercase tracking-[0.14em] text-white/25 sm:block">{status === "completed" ? "Completed" : status === "running" ? "Running" : "Waiting"}</span></div>;
                  })}
                </div>

                <div className="flex flex-col justify-between gap-4 border-t border-white/7 bg-white/[0.015] p-5 sm:flex-row sm:items-center"><div className="flex items-center gap-2 text-xs text-white/35"><Circle className="h-2.5 w-2.5 fill-current text-emerald-300/70" />Local simulation · no external APIs</div><button type="button" onClick={reset} className="inline-flex items-center gap-2 text-xs text-white/40 hover:text-white"><RotateCcw className="h-3.5 w-3.5" />Reset execution</button></div>
              </section>
            </div>
          </div>
          <section className="mx-auto mt-6 max-w-[1250px] px-5 pb-8 sm:px-8 lg:px-10">
            <div className="rounded-2xl border border-white/7 bg-white/[0.025] p-6">
              <div className="flex items-center justify-between"><div><p className="text-[10px] uppercase tracking-[0.18em] text-white/25">Execution history</p><h2 className="mt-2 text-lg font-medium">Recent runs.</h2></div><span className="text-xs text-white/25">{history.length} saved</span></div>
              {history.length ? <div className="mt-5 divide-y divide-white/6">{history.slice(0,5).map((run)=><div key={run.id} className="flex items-center gap-4 py-4 first:pt-0 last:pb-0"><div className="grid h-9 w-9 shrink-0 place-items-center rounded-xl border border-emerald-400/15 bg-emerald-400/[0.06]"><Check className="h-4 w-4 text-emerald-300/80"/></div><div className="min-w-0 flex-1"><p className="truncate text-sm font-medium">{run.workflow}</p><p className="mt-1 text-xs text-white/30">{new Date(run.completedAt).toLocaleString("pt-BR")} · {run.duration}</p></div><span className="hidden text-[10px] uppercase tracking-[0.14em] text-emerald-300/60 sm:block">Success</span></div>)}</div> : <div className="mt-5 rounded-xl border border-dashed border-white/8 px-4 py-8 text-center"><p className="text-sm text-white/35">Nenhuma execução registrada ainda.</p><p className="mt-1 text-xs text-white/20">Execute um workflow para criar seu primeiro registro.</p></div>}
            </div>
          </section>
        </section>
      </div>
    </main>
  );
}

export default Workflows;
