import {
  ArrowUpRight,
  Mail,
  MoveUp,
} from "lucide-react";

const columns = [
  {
    title: "Produto",
    links: [
      "Recursos",
      "Workflows",
      "Integrações",
      "Analytics",
    ],
  },
  {
    title: "Empresa",
    links: [
      "Sobre",
      "Carreiras",
      "Contato",
    ],
  },
  {
    title: "Recursos",
    links: [
      "Documentação",
      "Central de ajuda",
      "Status",
    ],
  },
];

export function Footer() {
  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  return (
    <footer className="relative overflow-hidden border-t border-white/[0.06] px-6 pb-8 pt-20">
      <div className="pointer-events-none absolute left-1/2 top-0 h-[300px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/[0.025] blur-[100px]" />

      <div className="relative z-10 mx-auto max-w-6xl">
        <div className="grid gap-14 lg:grid-cols-[1.5fr_2fr]">
          <div>
            <a
              href="#"
              className="text-2xl font-semibold tracking-[-0.04em]"
            >
              NEXA<span className="text-white/30">.</span>
            </a>

            <p className="mt-5 max-w-sm text-sm leading-6 text-white/30">
              Inteligência artificial para transformar trabalho
              repetitivo em operações inteligentes.
            </p>

            <div className="mt-7 flex items-center gap-3">
              <a
                href="#"
                aria-label="GitHub"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/[0.02] text-xs font-medium text-white/40 transition hover:border-white/20 hover:bg-white/[0.06] hover:text-white"
              >
                GH
              </a>

              <a
                href="#"
                aria-label="LinkedIn"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/[0.02] text-xs font-medium text-white/40 transition hover:border-white/20 hover:bg-white/[0.06] hover:text-white"
              >
                in
              </a>

              <a
                href="#"
                aria-label="Email"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/[0.02] text-white/40 transition hover:border-white/20 hover:bg-white/[0.06] hover:text-white"
              >
                <Mail size={15} />
              </a>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3">
            {columns.map((column) => (
              <div key={column.title}>
                <p className="text-xs font-medium uppercase tracking-[0.18em] text-white/30">
                  {column.title}
                </p>

                <div className="mt-5 space-y-3">
                  {column.links.map((link) => (
                    <a
                      key={link}
                      href="#"
                      className="group flex items-center gap-1 text-sm text-white/45 transition hover:text-white"
                    >
                      {link}

                      <ArrowUpRight
                        size={12}
                        className="opacity-0 transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:opacity-70"
                      />
                    </a>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="my-12 h-px bg-white/[0.06]" />

        <div className="flex flex-col gap-5 text-xs text-white/25 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} NEXA. Todos os direitos
            reservados.
          </p>

          <div className="flex items-center gap-6">
            <a
              href="#"
              className="transition hover:text-white/60"
            >
              Privacidade
            </a>

            <a
              href="#"
              className="transition hover:text-white/60"
            >
              Termos
            </a>

            <button
              onClick={scrollToTop}
              className="group flex items-center gap-2 transition hover:text-white/60"
            >
              Voltar ao topo

              <span className="flex h-7 w-7 items-center justify-center rounded-full border border-white/10 transition group-hover:border-white/20">
                <MoveUp size={13} />
              </span>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}