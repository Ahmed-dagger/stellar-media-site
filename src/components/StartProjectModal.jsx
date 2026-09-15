import { createContext, useContext, useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { CONTACT } from "../data/content";

const WHATSAPP_NUMBER = "971559888290";
const WHATSAPP_MESSAGE = "Hi Stellar Media, I'd like to start a project.";
const EMAIL_SUBJECT = "Let's start a project";

const StartProjectContext = createContext(() => {});

export function useStartProject() {
  return useContext(StartProjectContext);
}

export function StartProjectProvider({ children }) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (e) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <StartProjectContext.Provider value={() => setOpen(true)}>
      {children}

      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-[100] flex items-center justify-center p-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
          >
            <motion.div
              className="absolute inset-0 bg-ink-deep/80 backdrop-blur-sm"
              onClick={() => setOpen(false)}
            />

            <motion.div
              role="dialog"
              aria-modal="true"
              aria-label="Start a project"
              initial={{ opacity: 0, y: 24, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 16, scale: 0.97 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-full max-w-md rounded-3xl border border-cardline bg-ink p-8 sm:p-10 text-center overflow-hidden"
            >
              <div className="absolute top-0 left-0 right-0 h-[2px] gradient-bar" />

              <button
                type="button"
                onClick={() => setOpen(false)}
                aria-label="Close"
                className="absolute top-5 right-5 text-faint hover:text-paper transition-colors"
              >
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                  <path
                    d="M1 1L17 17M17 1L1 17"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                  />
                </svg>
              </button>

              <span className="font-body text-xs tracking-[0.3em] text-magenta uppercase">
                Let's talk
              </span>
              <h3 className="mt-4 font-display text-2xl sm:text-3xl font-semibold text-paper">
                How should we start?
              </h3>
              <p className="mt-3 text-sm text-faint">
                Pick whichever is easiest, we reply fast either way.
              </p>

              <div className="mt-8 flex flex-col gap-3">
                <a
                  href={`mailto:${CONTACT.email}?subject=${encodeURIComponent(EMAIL_SUBJECT)}`}
                  onClick={() => setOpen(false)}
                  className="flex items-center justify-center gap-3 rounded-full px-6 py-3.5 text-sm font-medium text-ink bg-paper hover:opacity-90 transition-opacity"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                    <path
                      d="M3 5.5h18v13a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1v-13Z"
                      stroke="currentColor"
                      strokeWidth="1.6"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M3.5 6l8.5 7 8.5-7"
                      stroke="currentColor"
                      strokeWidth="1.6"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  Connect via Email
                </a>

                <a
                  href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`}
                  target="_blank"
                  rel="noreferrer"
                  onClick={() => setOpen(false)}
                  className="flex items-center justify-center gap-3 rounded-full px-6 py-3.5 text-sm font-medium text-paper bg-[#25D366]/15 border border-[#25D366]/40 hover:bg-[#25D366]/25 transition-colors"
                >
                  <svg viewBox="0 0 24 24" fill="#25D366" className="h-[18px] w-[18px]" aria-hidden="true">
                    <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38a9.9 9.9 0 0 0 4.74 1.21h.01c5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0 0 12.04 2zm0 1.67c2.24 0 4.35.87 5.93 2.46a8.23 8.23 0 0 1 2.43 5.87c0 4.58-3.73 8.31-8.32 8.31a8.3 8.3 0 0 1-4.24-1.16l-.3-.18-3.12.82.83-3.04-.2-.31a8.26 8.26 0 0 1-1.27-4.4c0-4.59 3.73-8.37 8.19-8.37zm-4.8 4.8c-.16 0-.43.06-.65.31-.22.25-.86.84-.86 2.04 0 1.2.88 2.36 1 2.52.13.17 1.71 2.69 4.19 3.71 2.06.85 2.48.68 2.93.64.45-.04 1.45-.59 1.66-1.16.2-.57.2-1.06.14-1.16-.06-.1-.23-.16-.49-.28-.25-.13-1.46-.72-1.69-.8-.23-.08-.4-.13-.56.13-.17.25-.65.8-.79.97-.15.17-.29.19-.55.06-.25-.13-1.06-.39-2.02-1.24-.75-.67-1.25-1.49-1.4-1.74-.15-.25-.02-.39.11-.51.11-.11.25-.29.37-.44.13-.15.17-.25.25-.42.08-.17.04-.31-.02-.44-.06-.13-.55-1.35-.76-1.85-.2-.48-.4-.42-.56-.42z" />
                  </svg>
                  Connect via WhatsApp
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </StartProjectContext.Provider>
  );
}
