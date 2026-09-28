import { BarChart3, Activity, ArrowLeft, ChevronDown, Clock3, LayoutDashboard, LogOut, Menu, Settings, Workflow, X, Zap } from "lucide-react";
import { useState } from "react";

const bars = [42, 58, 47, 71, 64, 82, 76, 91, 68, 88, 96, 84];
const days = ["01","02","03","04","05","06","07","08","09","10","11","12"];

const nav = [
  ["Overview", LayoutDashboard, "/dashboard"],
  ["Workflows", Workflow, "/dashboard/workflows"],
  ["Analytics", BarChart3, "/dashboard/analytics"],
  ["Activity", Activity, "/dashboard/activity"],
] as const;

function Analytics() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return <main className="min-h-screen bg-[#050505] text-white">
    <div className="flex min-h-screen">
      <aside className={`fixed inset-y-0 left-0 z-50 w-64 border-r border-white/7 bg-[#080808] p-5 transition-transform duration-300 lg:static lg:translate-x-0 ${sidebarOpen ? "translate-x-0" : "-translate-x-full"}`}>
        <div className="flex h-full flex-col">
          <div className="flex items-center justify-between">
            <a href="/" className="flex items-center gap-3"><span className="grid h-9 w-9 place-items-center rounded-xl border border-white/10 bg-white/[0.06] text-sm font-semibold">N</span><span className="text-sm font-semibold">NEXA</span></a>
            <button onClick={() => setSidebarOpen(false)} className="rounded-lg p-2 text-white/45 lg:hidden"><X className="h-4 w-4"/></button>
          </div>
          <nav className="mt-10 space-y-1">
            {nav.map(([label, Icon, href]) => <a key={label} href={href} className={`flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm ${label === "Analytics" ? "bg-white/[0.08] text-white" : "text-white/45 hover:bg-white/[0.04] hover:text-white"}`}><Icon className="h-4 w-4"/>{label}</a>)}
          </nav>
          <div className="mt-auto space-y-1">
            <a href="/dashboard/settings" className="flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm text-white/45 hover:bg-white/[0.04] hover:text-white"><Settings className="h-4 w-4"/>Settings</a>
            <a href="/" className="flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm text-white/45 hover:bg-white/[0.04] hover:text-white"><LogOut className="h-4 w-4"/>Voltar para o site</a>
          </div>
        </div>
      </aside>
      {sidebarOpen && <button onClick={() => setSidebarOpen(false)} className="fixed inset-0 z-40 bg-black/60 lg:hidden"/>}
      <section className="min-w-0 flex-1">
        <header className="sticky top-0 z-30 flex h-16 items-center border-b border-white/7 bg-[#050505]/85 px-5 backdrop-blur-xl sm:px-8">
          <button onClick={() => setSidebarOpen(true)} className="rounded-xl border border-white/8 p-2 text-white/55 lg:hidden"><Menu className="h-4 w-4"/></button>
          <div className="hidden items-center gap-2 text-xs text-white/35 lg:flex"><BarChart3 className="h-3.5 w-3.5"/>Workspace / Analytics</div>
          <div className="ml-auto flex items-center gap-3"><span className="hidden rounded-full border border-white/8 bg-white/[0.03] px-3 py-1.5 text-xs text-white/55 sm:block">● All systems operational</span><span className="grid h-8 w-8 place-items-center rounded-full border border-white/10 bg-white/[0.08] text-xs">LB</span></div>
        </header>
        <div className="mx-auto max-w-[1400px] px-5 py-8 sm:px-8 lg:px-10">
          <a href="/dashboard" className="inline-flex items-center gap-2 text-xs text-white/40 hover:text-white"><ArrowLeft className="h-3.5 w-3.5"/>Back to overview</a>
          <div className="mt-7 flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
            <div><p className="text-xs font-medium uppercase tracking-[0.2em] text-white/35">Performance intelligence</p><h1 className="mt-2 text-3xl font-semibold tracking-[-0.04em] sm:text-4xl">Analytics.</h1><p className="mt-2 max-w-2xl text-sm leading-6 text-white/45">Entenda como suas automações estão performando e quanto trabalho a NEXA está removendo da operação.</p></div>
            <button className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-4 py-2.5 text-xs text-white/60 hover:bg-white/[0.06]">Últimos 30 dias <ChevronDown className="h-3.5 w-3.5"/></button>
          </div>
          <div className="mt-8 grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
            {[["8.492","Execuções","18,7%","↑"],["99,2%","Taxa de sucesso","2,4%","↑"],["342h","Horas economizadas","24,1%","↑"],["1,8s","Tempo médio","12,6%","↓"]].map(([value,label,change,arrow]) => <div key={label} className="rounded-2xl border border-white/7 bg-white/[0.025] p-5"><p className="text-xs text-white/40">{label}</p><div className="mt-4 flex items-end justify-between"><span className="text-2xl font-semibold tracking-[-0.04em]">{value}</span><span className="text-xs text-emerald-300/75">{arrow} {change}</span></div></div>)}
          </div>
          <div className="mt-6 grid gap-6 xl:grid-cols-[1.6fr_0.7fr]">
            <section className="rounded-2xl border border-white/7 bg-white/[0.025] p-6">
              <div className="flex items-start justify-between"><div><h2 className="text-sm font-medium">Workflow executions</h2><p className="mt-1 text-xs text-white/35">Execuções diárias · últimos 12 dias</p></div><Zap className="h-4 w-4 text-white/25"/></div>
              <div className="mt-8 flex h-64 items-end gap-2 sm:gap-3">{bars.map((height,index) => <div key={days[index]} className="group flex h-full flex-1 flex-col justify-end gap-2"><div className="relative w-full rounded-t-lg bg-white/[0.08] transition-all duration-300 group-hover:bg-white/[0.16]" style={{height: `${height}%`}}><div className="absolute inset-x-0 bottom-0 rounded-t-lg bg-white/70" style={{height: `${Math.max(18,height*0.48)}%`}}/></div><span className="text-center text-[9px] text-white/20">{days[index]}</span></div>)}</div>
            </section>
            <section className="rounded-2xl border border-white/7 bg-white/[0.025] p-6"><div className="flex items-center gap-3"><div className="grid h-10 w-10 place-items-center rounded-xl bg-white/[0.06]"><Clock3 className="h-4 w-4 text-white/55"/></div><div><h2 className="text-sm font-medium">Time saved</h2><p className="text-xs text-white/30">Impact this month</p></div></div><p className="mt-8 text-4xl font-semibold tracking-[-0.05em]">342<span className="ml-1 text-xl text-white/35">h</span></p><div className="mt-5 h-2 overflow-hidden rounded-full bg-white/[0.07]"><div className="h-full w-[78%] rounded-full bg-white"/></div><div className="mt-3 flex justify-between text-xs text-white/30"><span>Goal: 440h</span><span>78%</span></div><div className="mt-8 border-t border-white/7 pt-5"><p className="text-xs text-white/35">Equivalent to</p><p className="mt-1 text-lg font-medium">42,75 workdays</p></div></section>
          </div>
          <section className="mt-6 rounded-2xl border border-white/7 bg-white/[0.025] p-6"><div className="flex items-center justify-between"><div><h2 className="text-sm font-medium">Top workflows</h2><p className="mt-1 text-xs text-white/35">Performance by automation</p></div><Workflow className="h-4 w-4 text-white/25"/></div><div className="mt-5 grid gap-3 md:grid-cols-3">{[["Lead qualification","2.481","99,6%"],["Follow-up automático","1.294","98,9%"],["Relatório semanal","842","99,8%"]].map(([name,runs,success]) => <div key={name} className="rounded-xl border border-white/6 bg-white/[0.02] p-4"><p className="text-sm font-medium">{name}</p><div className="mt-4 flex justify-between text-xs text-white/35"><span>{runs} runs</span><span>{success} success</span></div><div className="mt-3 h-1 overflow-hidden rounded-full bg-white/[0.07]"><div className="h-full w-[96%] rounded-full bg-white/60"/></div></div>)}</div></section>
        </div>
      </section>
    </div>
  </main>;
}
export default Analytics;
