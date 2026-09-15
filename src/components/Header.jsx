import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown, Menu, X } from "lucide-react";
import { NAV_LINKS, SERVICES } from "../data/content";
import logo from "../assets/stellar-logo.png";
import { useStartProject } from "./StartProjectModal";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const openStartProject = useStartProject();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const close = () => {
    setMobileOpen(false);
    setServicesOpen(false);
  };

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
        scrolled
          ? "bg-ink/85 backdrop-blur-md border-b border-cardline"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-10 h-18 py-4 flex items-center justify-between">
        <a href="#home" onClick={close} className="flex items-center">
          <img
            src={logo}
            alt="Stellar Media"
            className="h-14 w-auto brightness-0 invert"
          />
        </a>

        <nav className="hidden md:flex items-center gap-9 font-body text-sm text-paper/80">
          {NAV_LINKS.map((link) =>
            link.dropdown ? (
              <div
                key={link.label}
                className="relative"
                onMouseEnter={() => setServicesOpen(true)}
                onMouseLeave={() => setServicesOpen(false)}
              >
                <button className="flex items-center gap-1 hover:text-paper transition-colors py-2">
                  {link.label}
                  <ChevronDown
                    size={14}
                    className={`transition-transform duration-300 ${
                      servicesOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>
                <AnimatePresence>
                  {servicesOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 10, scale: 0.98 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 10, scale: 0.98 }}
                      transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
                      className="absolute left-1/2 -translate-x-1/2 top-full pt-4 w-[560px]"
                    >
                      <div className="rounded-2xl border border-cardline bg-ink-deep/95 backdrop-blur-xl shadow-2xl shadow-black/40 p-3 grid grid-cols-2 gap-1">
                        {SERVICES.map((s) => (
                          <a
                            key={s.title}
                            href="#services"
                            onClick={close}
                            className="group flex items-start gap-3 rounded-xl px-4 py-3 hover:bg-white/5 transition-colors"
                          >
                            <span className="font-display text-xs text-magenta mt-0.5">
                              {s.n}
                            </span>
                            <span>
                              <span className="block text-sm text-paper font-medium group-hover:gradient-text">
                                {s.title}
                              </span>
                              <span className="block text-xs text-muted mt-0.5 leading-snug">
                                {s.desc}
                              </span>
                            </span>
                          </a>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ) : (
              <a
                key={link.label}
                href={link.href}
                className="hover:text-paper transition-colors py-2"
              >
                {link.label}
              </a>
            )
          )}
        </nav>

        <button
          type="button"
          onClick={openStartProject}
          className="hidden md:inline-flex items-center rounded-full px-5 py-2.5 text-sm font-medium text-ink bg-paper hover:opacity-90 transition-opacity"
        >
          Start a project
        </button>

        <button
          className="md:hidden text-paper"
          onClick={() => setMobileOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden overflow-hidden bg-ink border-t border-cardline"
          >
            <div className="px-6 py-6 flex flex-col gap-1">
              {NAV_LINKS.map((link) =>
                link.dropdown ? (
                  <div key={link.label} className="py-2">
                    <button
                      onClick={() => setServicesOpen((v) => !v)}
                      className="flex items-center justify-between w-full text-paper py-2"
                    >
                      {link.label}
                      <ChevronDown
                        size={16}
                        className={`transition-transform ${
                          servicesOpen ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                    <AnimatePresence>
                      {servicesOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          className="overflow-hidden pl-2"
                        >
                          {SERVICES.map((s) => (
                            <a
                              key={s.title}
                              href="#services"
                              onClick={close}
                              className="block py-2 text-sm text-muted"
                            >
                              {s.title}
                            </a>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ) : (
                  <a
                    key={link.label}
                    href={link.href}
                    onClick={close}
                    className="py-3 text-paper border-b border-cardline/60"
                  >
                    {link.label}
                  </a>
                )
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
