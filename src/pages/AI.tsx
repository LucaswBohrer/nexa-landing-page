import { useEffect, useMemo, useState } from "react";
import { Activity, ArrowLeft, BarChart3, Bot, Check, ChevronRight, Clock3, LayoutDashboard, LogOut, Menu, Settings, Sparkles, Workflow, X, Zap } from "lucide-react";

type RunRecord = { id: number; workflow: string; completedAt: string; duration: string };

const demoRecommendations = [
  {
    title: "Lead qualification pode ganhar uma etapa de priorização",
    detail: "A NEXA sugere separar leads de alta intenção antes da atualização do CRM.",
    impact: "Alto impacto",
    icon: Zap,
  },
  {
    title: "Relatório semanal pode ser executado mais cedo",
    detail: "Os dados já estão disponíveis antes da janela atual de execução.",
    impact: "Eficiência",
    icon: Clock3,
  },
  {
    title: "Follow-up automático tem espaço para personalização",
    detail: "Adicionar contexto do último contato pode reduzir etapas manuais do time.",
    impact: "Oportunidade",
    icon: Sparkles,
  },
];

function AI() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [history, setHistory] = useState<RunRecord[]>([]);
  const [analyzing, setAnalyzing] = useState(false);
  const [recommendations, setRecommendations] = useState(demoRecommendations);
  const [summary, setSummary] = useState("Execute a análise para gerar recomendações com IA.");
  const [error, setError] = useState("");
  const [analyzed, setAnalyzed] = useState(false);

  useEffect(() => {
    try {
      setHistory(JSON.parse(window.localStorage.getItem("nexa:workflow-history") ?? "[]") as RunRecord[]);
    } catch {
      setHistory([]);
    }
  }, []);

  const workflowCounts = useMemo(() => {
    const counts = new Map<string, number>();
    history.forEach((run) => counts.set(run.workflow, (counts.get(run.workflow) ?? 0) + 1));
    return Array.from(counts.entries()).sort((a, b) => b[1] - a[1]);
  }, [history]);

  async function runAnalysis() {
    setAnalyzing(true);
    setAnalyzed(false);
    setError("");

    try {
      const response = await fetch("/api/analyze", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          history: history.slice(0, 20),
          workflowCounts,
        }),
      });

      const data = (await response.json()) as {
        summary?: string;
        recommendations?: typeof demoRecommendations;
        error?: string;
      };

      if (!response.ok) throw new Error(data.error ?? "Não foi possível concluir a análise.");

      setSummary(data.summary ?? "Análise concluída com base no histórico dos workflows.");
      if (data.recommendations?.length) {
        const icons = [Zap, Clock3, Sparkles, Workflow];
        setRecommendations(data.recommendations.map((item, index) => ({ ...item, icon: icons[index % icons.length] })));
      }
      setAnalyzed(true);
    } catch (analysisError) {
      setError(analysisError instanceof Error ? analysisError.message : "Erro ao analisar a operação.");
    } finally {
      setAnalyzing(false);
    }
  }

  return (
    <main className="min-h-screen bg-[#050505] text-white">
      <div className="flex min-h-screen">
        <aside className={"fixed inset-y-0 left-0 z-50 w-64 border-r border-white/7 bg-[#080808] p-5 transition-transform duration-300 lg:static lg:translate-x-0 " + (sidebarOpen ? "translate-x-0" : "-translate-x-full")}>
          <div className="flex h-full flex-col">
            <div className="flex items-center justify-between">
              <a href="/" className="flex items-center gap-3"><span className="grid h-9 w-9 place-items-center rounded-xl border border-white/10 bg-white/[0.06] text-sm font-semibold">N</span><span className="text-sm font-semibold">NEXA</span></a>
              <button type="button" aria-label="Fechar menu" onClick={() => setSidebarOpen(false)} className="rounded-lg p-2 text-white/45 hover:bg-white/5 lg:hidden"><X className="h-4 w-4" /></button>
            </div>
            <nav className="mt-10 space-y-1">
              <a href="/dashboard" className="flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm text-white/45 hover:bg-white/[0.04] hover:text-white"><LayoutDashboard className="h-4 w-4" />Overview</a>
              <a href="/dashboard/workflows" className="flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm text-white/45 hover:bg-white/[0.04] hover:text-white"><Workflow className="h-4 w-4" />Workflows</a>
              <a href="/dashboard/analytics" className="flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm text-white/45 hover:bg-white/[0.04] hover:text-white"><BarChart3 className="h-4 w-4" />Analytics</a>
              <a href="/dashboard/activity" className="flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm text-white/45 hover:bg-white/[0.04] hover:text-white"><Activity className="h-4 w-4" />Activity</a>
              <a href="/dashboard/ai" className="flex items-center gap-3 rounded-xl bg-white/[0.08] px-3 py-2.5 text-sm"><Bot className="h-4 w-4" />NEXA AI</a>
            </nav>
            <div className="mt-auto space-y-1">
              <a href="/dashboard/settings" className="flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm text-white/45 hover:bg-white/[0.04] hover:text-white"><Settings className="h-4 w-4" />Settings</a>
              <a href="/" className="flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm text-white/45 hover:bg-white/[0.04] hover:text-white"><LogOut className="h-4 w-4" />Voltar para o site</a>
            </div>
          </div>
        </aside>

        {sidebarOpen && <button type="button" aria-label="Fechar menu" onClick={() => setSidebarOpen(false)} className="fixed inset-0 z-40 bg-black/60 lg:hidden" />}

        <section className="min-w-0 flex-1">
          <header className="sticky top-0 z-30 flex h-16 items-center justify-between border-b border-white/7 bg-[#050505]/85 px-5 backdrop-blur-xl sm:px-8">
            <button type="button" aria-label="Abrir menu" onClick={() => setSidebarOpen(true)} className="rounded-xl border border-white/8 p-2 text-white/55 hover:bg-white/5 hover:text-white lg:hidden"><Menu className="h-4 w-4" /></button>
            <div className="hidden items-center gap-2 text-xs text-white/35 lg:flex"><Bot className="h-3.5 w-3.5" />Workspace / NEXA AI</div>
            <div className="ml-auto flex items-center gap-3"><span className="hidden rounded-full border border-white/8 bg-white/[0.03] px-3 py-1.5 text-xs text-white/55 sm:block">Demo intelligence</span><span className="grid h-8 w-8 place-items-center rounded-full border border-white/10 bg-white/[0.08] text-xs">LB</span></div>
          </header>

          <div className="mx-auto max-w-[1250px] px-5 py-8 sm:px-8 lg:px-10">
            <a href="/dashboard" className="inline-flex items-center gap-2 text-xs text-white/40 hover:text-white"><ArrowLeft className="h-3.5 w-3.5" />Back to overview</a>

            <div className="mt-7 flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
              <div>
                <p className="text-xs font-medium uppercase tracking-[0.2em] text-white/35">NEXA intelligence</p>
                <h1 className="mt-2 text-3xl font-semibold tracking-[-0.04em] sm:text-4xl">Deixe a NEXA pensar junto.</h1>
                <p className="mt-2 max-w-2xl text-sm leading-6 text-white/45">Analise a atividade dos seus workflows e transforme execução em oportunidades de otimização.</p>
              </div>
              <button type="button" onClick={runAnalysis} disabled={analyzing} className="inline-flex w-fit items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-medium text-black transition-transform hover:scale-[1.02] active:scale-[0.98] disabled:opacity-50">
                <Sparkles className="h-3.5 w-3.5" />{analyzing ? "Analisando..." : analyzed ? "Análise concluída" : "Analisar operação"}
              </button>
            </div>

            <section className="relative mt-8 overflow-hidden rounded-3xl border border-white/8 bg-white/[0.025] p-6 sm:p-8">
              <div className="absolute -right-32 -top-32 h-80 w-80 rounded-full bg-white/[0.055] blur-3xl" />
              <div className="relative grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
                <div>
                  <div className="flex items-center gap-3">
                    <div className="grid h-12 w-12 place-items-center rounded-2xl border border-white/10 bg-white/[0.06]"><Bot className="h-5 w-5 text-white/75" /></div>
                    <div><p className="text-sm font-medium">NEXA AI</p><p className="mt-1 text-xs text-white/30">Operations intelligence</p></div>
                  </div>
                  <h2 className="mt-7 max-w-xl text-2xl font-medium tracking-[-0.035em] sm:text-3xl">Sua operação já produz sinais. A IA transforma esses sinais em ação.</h2>
                  <p className="mt-4 max-w-xl text-sm leading-6 text-white/40">{summary}</p>
                  <div className="mt-6 flex flex-wrap items-center gap-2">
                    <div className="inline-flex items-center gap-2 rounded-full border border-white/8 bg-white/[0.03] px-3 py-2 text-[10px] uppercase tracking-[0.16em] text-white/35"><span className="h-1.5 w-1.5 rounded-full bg-white/70" />Gemini API · server-side</div>
                    {error && <span className="text-xs text-white/35">{error}</span>}
                  </div>
                </div>
                <div className="grid gap-3 sm:grid-cols-3 lg:grid-cols-1">
                  <div className="rounded-2xl border border-white/7 bg-black/20 p-5"><p className="text-xs text-white/35">Execuções analisadas</p><p className="mt-2 text-3xl font-semibold tracking-[-0.04em]">{history.length}</p></div>
                  <div className="rounded-2xl border border-white/7 bg-black/20 p-5"><p className="text-xs text-white/35">Workflows observados</p><p className="mt-2 text-3xl font-semibold tracking-[-0.04em]">{workflowCounts.length}</p></div>
                  <div className="rounded-2xl border border-white/7 bg-black/20 p-5"><p className="text-xs text-white/35">Oportunidades</p><p className="mt-2 text-3xl font-semibold tracking-[-0.04em]">4</p></div>
                </div>
              </div>
            </section>

            <div className="mt-6 grid gap-6 xl:grid-cols-[1.35fr_0.65fr]">
              <section className="rounded-2xl border border-white/7 bg-white/[0.025]">
                <div className="flex items-center justify-between border-b border-white/7 px-5 py-4"><div><h2 className="text-sm font-medium">AI recommendations</h2><p className="mt-1 text-xs text-white/35">Oportunidades detectadas pela NEXA</p></div><Sparkles className="h-4 w-4 text-white/25" /></div>
                <div className="divide-y divide-white/6">
                  {recommendations.map(({ title, detail, impact: label, icon: Icon }) => (
                    <div key={title} className="flex gap-4 p-5 transition-colors hover:bg-white/[0.02]">
                      <div className="grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-white/[0.06]"><Icon className="h-4 w-4 text-white/55" /></div>
                      <div className="min-w-0 flex-1"><div className="flex flex-wrap items-center gap-2"><h3 className="text-sm font-medium">{title}</h3><span className="rounded-full border border-white/8 px-2 py-0.5 text-[9px] uppercase tracking-[0.14em] text-white/30">{label}</span></div><p className="mt-2 text-xs leading-5 text-white/35">{detail}</p><button type="button" className="mt-3 inline-flex items-center gap-1 text-xs text-white/45 hover:text-white">Explorar oportunidade <ChevronRight className="h-3.5 w-3.5" /></button></div>
                    </div>
                  ))}
                </div>
              </section>

              <section className="h-fit rounded-2xl border border-white/7 bg-white/[0.025]">
                <div className="border-b border-white/7 px-5 py-4"><h2 className="text-sm font-medium">Observed workflows</h2><p className="mt-1 text-xs text-white/35">Base usada nesta análise</p></div>
                <div className="p-3">
                  {workflowCounts.length ? workflowCounts.map(([name, count]) => <div key={name} className="flex items-center gap-3 rounded-xl p-3 hover:bg-white/[0.03]"><div className="grid h-8 w-8 place-items-center rounded-lg bg-white/[0.06]"><Workflow className="h-3.5 w-3.5 text-white/50" /></div><div className="min-w-0 flex-1"><p className="truncate text-xs font-medium">{name}</p><p className="mt-1 text-[10px] text-white/25">{count} execution{count === 1 ? "" : "s"}</p></div><Check className="h-3.5 w-3.5 text-emerald-300/55" /></div>) : <div className="p-4 text-xs leading-5 text-white/30">Execute um workflow primeiro para alimentar o contexto da NEXA AI.</div>}
                </div>
              </section>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}

export default AI;
