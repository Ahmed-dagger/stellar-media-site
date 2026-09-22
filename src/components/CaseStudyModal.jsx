import { useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Counter from "./Counter";

export default function CaseStudyModal({ study, onClose }) {
  useEffect(() => {
    if (!study) return;
    const onKey = (e) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [study, onClose]);

  return (
    <AnimatePresence>
      {study && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
        >
          <motion.div
            className="absolute inset-0 bg-ink-deep/85 backdrop-blur-sm"
            onClick={onClose}
          />

          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label={study.title}
            initial={{ opacity: 0, y: 24, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.98 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full max-w-5xl max-h-[90vh] rounded-3xl border border-cardline bg-ink overflow-hidden grid grid-cols-1 lg:grid-cols-2"
          >
            <div className="absolute top-0 left-0 right-0 h-[2px] gradient-bar z-20" />

            <button
              type="button"
              onClick={onClose}
              aria-label="Close"
              className="absolute top-5 right-5 z-30 h-9 w-9 flex items-center justify-center rounded-full bg-ink/80 backdrop-blur border border-cardline text-faint hover:text-paper transition-colors"
            >
              <svg width="16" height="16" viewBox="0 0 18 18" fill="none">
                <path
                  d="M1 1L17 17M17 1L1 17"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                />
              </svg>
            </button>

            {/* Media — video or image, left on desktop, top on mobile */}
            <div className="relative h-64 sm:h-80 lg:h-auto bg-ink-deep">
              {study.video ? (
                <video
                  key={study.video}
                  src={study.video}
                  className="absolute inset-0 h-full w-full object-cover"
                  controls
                  playsInline
                  poster={study.image}
                />
              ) : (
                <img
                  src={study.image}
                  alt={study.imageAlt}
                  className="absolute inset-0 h-full w-full object-cover"
                />
              )}
            </div>

            {/* Full write-up */}
            <div className="p-7 sm:p-9 lg:p-10 overflow-y-auto">
              <span className="text-xs font-bold uppercase tracking-[0.3em] text-magenta">
                Case Study {study.index}
              </span>
              <h3 className="mt-3 font-display text-2xl sm:text-3xl font-semibold text-paper leading-tight">
                {study.title}
              </h3>
              {study.client && (
                <p className="mt-2 text-sm text-faint">{study.client}</p>
              )}

              {study.scope?.length > 0 && (
                <div className="mt-6">
                  <span className="text-xs uppercase tracking-widest text-faint">Scope</span>
                  <ul className="mt-3 space-y-2">
                    {study.scope.map((item) => (
                      <li key={item} className="flex gap-3 text-sm text-paper/90 leading-relaxed">
                        <span className="mt-2 h-1 w-1 shrink-0 rounded-full gradient-diagonal" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              <p className="mt-6 text-sm sm:text-base text-faint leading-relaxed">
                {study.description}
              </p>

              {study.stats?.length > 0 && (
                <div className="mt-8 flex gap-8 border-t border-cardline pt-5">
                  {study.stats.map((s) => (
                    <div key={s.label}>
                      <Counter value={s.value} className="font-display text-2xl gradient-text" />
                      <div className="text-xs text-faint mt-1">{s.label}</div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
