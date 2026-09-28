import { useState } from "react";
import type { FormEvent } from "react";

function Login() {
  const [email, setEmail] = useState("demo@nexa.ai");
  const [password, setPassword] = useState("nexa-demo");
  const [error, setError] = useState("");

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!email.trim() || !password.trim()) {
      setError("Preencha email e senha para continuar.");
      return;
    }
    window.localStorage.setItem("nexa:auth", "demo");
    window.location.href = "/dashboard";
  }

  return (
    <main className="min-h-screen bg-[#050505] px-5 text-white">
      <div className="mx-auto flex min-h-screen max-w-md items-center justify-center">
        <section className="w-full rounded-3xl border border-white/8 bg-white/[0.025] p-7 shadow-[0_30px_100px_rgba(0,0,0,0.35)] sm:p-9">
          <a href="/" className="flex items-center gap-3">
            <span className="grid h-10 w-10 place-items-center rounded-xl border border-white/10 bg-white/[0.06] font-semibold">N</span>
            <span className="font-semibold">NEXA</span>
          </a>
          <p className="mt-10 text-xs uppercase tracking-[0.2em] text-white/30">Workspace access</p>
          <h1 className="mt-2 text-3xl font-semibold tracking-[-0.04em]">Entre na NEXA.</h1>
          <p className="mt-2 text-sm leading-6 text-white/40">Autenticação conceitual para demonstrar o fluxo de acesso ao produto.</p>
          <form onSubmit={submit} className="mt-8 space-y-4">
            <label className="block"><span className="text-xs text-white/40">Email</span><input value={email} onChange={(e) => setEmail(e.target.value)} className="mt-2 w-full rounded-xl border border-white/8 bg-black/20 px-4 py-3 text-sm outline-none transition focus:border-white/25" type="email" /></label>
            <label className="block"><span className="text-xs text-white/40">Senha</span><input value={password} onChange={(e) => setPassword(e.target.value)} className="mt-2 w-full rounded-xl border border-white/8 bg-black/20 px-4 py-3 text-sm outline-none transition focus:border-white/25" type="password" /></label>
            {error && <p className="text-xs text-white/50">{error}</p>}
            <button className="w-full rounded-xl bg-white px-4 py-3 text-sm font-medium text-black transition-transform hover:scale-[1.01] active:scale-[0.99]" type="submit">Entrar no workspace demo</button>
          </form>
          <p className="mt-5 text-center text-[11px] text-white/25">Demo only · nenhum dado é enviado para um servidor.</p>
        </section>
      </div>
    </main>
  );
}
export default Login;
