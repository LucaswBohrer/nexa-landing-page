import { ArrowDown, Sparkles } from "lucide-react";
import { Button } from "../components/Button";
import { SplitText } from "../components/SplitText";

export function Hero() {
  return (
    <section className="relative flex min-h-[720px] items-center justify-center overflow-hidden px-5 pb-16 pt-28 sm:min-h-screen sm:px-6">
      {/* Glow principal */}
<div
  className="pointer-events-none absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/[0.035] blur-3xl"
  style={{
    animation: "nexa-pulse 8s ease-in-out infinite",
  }}
/>
      {/* Grid */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />

      <div className="relative z-10 mx-auto flex max-w-5xl flex-col items-center text-center">
        <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-xs text-white/60 backdrop-blur">
          <Sparkles size={14} />
          Automação inteligente para empresas
        </div>

        <h1 className="max-w-4xl text-[3.25rem] font-semibold leading-[0.94] tracking-[-0.055em] sm:text-6xl md:text-7xl lg:text-8xl">
  <SplitText>
    O trabalho repetitivo
  </SplitText>

  <br />

  <span className="text-white/35">
    <SplitText>
      não deveria ser seu trabalho.
    </SplitText>
  </span>
</h1>

        <p className="mt-8 max-w-2xl text-base leading-7 text-white/50 sm:text-lg">
          A NEXA usa inteligência artificial para automatizar processos,
          conectar ferramentas e liberar seu time para focar no que realmente
          importa.
        </p>

        <div className="mt-10 flex flex-col items-center gap-3 sm:flex-row">
          <Button>Começar gratuitamente</Button>

          <Button variant="secondary">Ver como funciona</Button>
        </div>

        <div className="mt-8 flex items-center gap-2 text-xs text-white/30">
  <span className="relative flex h-2 w-2">
    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-white/40" />
    <span className="relative inline-flex h-2 w-2 rounded-full bg-white/60" />
  </span>

  NEXA AI está online
</div>

        <div className="mt-20 flex items-center gap-2 text-xs text-white/30">
          <ArrowDown size={14} />
          Explore a NEXA
        </div>
      </div>

      {/* Elementos decorativos */}
      <div className="absolute left-[8%] top-[32%] hidden h-2 w-2 animate-pulse rounded-full bg-white/60 lg:block" />

      <div className="absolute right-[12%] top-[26%] hidden h-1.5 w-1.5 animate-pulse rounded-full bg-white/40 lg:block" />

      <div className="absolute bottom-[20%] left-[20%] hidden h-px w-20 bg-gradient-to-r from-transparent via-white/20 to-transparent lg:block" />

      <div className="absolute bottom-[28%] right-[18%] hidden h-px w-24 bg-gradient-to-r from-transparent via-white/20 to-transparent lg:block" />
    </section>
  );
}