import { AnimatePresence, motion } from "motion/react";
import {
  ArrowUpRight,
  Menu,
  X,
} from "lucide-react";
import { useState } from "react";

const links = [
  { label: "Produto", href: "#produto" },
  { label: "Recursos", href: "#recursos" },
  { label: "Preços", href: "#precos" },
];

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  function closeMenu() {
    setMenuOpen(false);
  }

  return (
    <header className="fixed left-0 top-0 z-50 w-full px-4 py-4 sm:px-6 sm:py-5">
      <nav className="mx-auto max-w-6xl">
        <div className="flex items-center justify-between rounded-full border border-white/10 bg-black/40 px-4 py-2.5 backdrop-blur-xl sm:px-5 sm:py-3">
          {/* Logo */}
          <a
            href="#"
            onClick={closeMenu}
            className="relative z-10 text-lg font-semibold tracking-tight"
          >
            NEXA<span className="text-white/40">.</span>
          </a>

          {/* Desktop navigation */}
          <div className="hidden items-center gap-8 text-sm text-white/60 md:flex">
            {links.map((link) => (
              <a
                key={link.href}
                className="transition hover:text-white"
                href={link.href}
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Desktop CTA */}
          <a
            href="#comece"
            className="group hidden items-center gap-1 rounded-full bg-white px-4 py-2 text-sm font-medium text-black transition hover:bg-white/90 md:flex"
          >
            Começar
            <ArrowUpRight
              size={15}
              className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            />
          </a>

          {/* Mobile menu button */}
          <button
            type="button"
            aria-label={
              menuOpen
                ? "Fechar menu"
                : "Abrir menu"
            }
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((open) => !open)}
            className="relative z-10 flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] text-white/70 transition hover:border-white/20 hover:bg-white/[0.07] hover:text-white md:hidden"
          >
            <AnimatePresence mode="wait" initial={false}>
              {menuOpen ? (
                <motion.span
                  key="close"
                  initial={{ opacity: 0, rotate: -45, scale: 0.8 }}
                  animate={{ opacity: 1, rotate: 0, scale: 1 }}
                  exit={{ opacity: 0, rotate: 45, scale: 0.8 }}
                  transition={{ duration: 0.15 }}
                  className="flex"
                >
                  <X size={17} />
                </motion.span>
              ) : (
                <motion.span
                  key="menu"
                  initial={{ opacity: 0, rotate: 45, scale: 0.8 }}
                  animate={{ opacity: 1, rotate: 0, scale: 1 }}
                  exit={{ opacity: 0, rotate: -45, scale: 0.8 }}
                  transition={{ duration: 0.15 }}
                  className="flex"
                >
                  <Menu size={17} />
                </motion.span>
              )}
            </AnimatePresence>
          </button>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{
                opacity: 0,
                y: -10,
                scale: 0.98,
              }}
              animate={{
                opacity: 1,
                y: 0,
                scale: 1,
              }}
              exit={{
                opacity: 0,
                y: -10,
                scale: 0.98,
              }}
              transition={{
                duration: 0.2,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="mt-2 overflow-hidden rounded-3xl border border-white/10 bg-black/80 p-3 shadow-2xl backdrop-blur-2xl md:hidden"
            >
              <div className="space-y-1">
                {links.map((link, index) => (
                  <motion.a
                    key={link.href}
                    href={link.href}
                    onClick={closeMenu}
                    initial={{
                      opacity: 0,
                      x: -10,
                    }}
                    animate={{
                      opacity: 1,
                      x: 0,
                    }}
                    transition={{
                      delay: index * 0.04,
                    }}
                    className="flex items-center justify-between rounded-2xl px-4 py-3.5 text-sm text-white/60 transition hover:bg-white/[0.05] hover:text-white"
                  >
                    {link.label}

                    <ArrowUpRight
                      size={14}
                      className="text-white/30"
                    />
                  </motion.a>
                ))}
              </div>

              <div className="my-2 h-px bg-white/[0.06]" />

              <a
                href="#comece"
                onClick={closeMenu}
                className="group flex items-center justify-center gap-2 rounded-2xl bg-white px-4 py-3.5 text-sm font-medium text-black transition hover:bg-white/90"
              >
                Começar gratuitamente

                <ArrowUpRight
                  size={15}
                  className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </a>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
}