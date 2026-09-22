import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useScroll, useSpring } from "framer-motion";
import { ChevronRight } from "lucide-react";

/**
 * A tall, sticky-background scroll sequence: one full-viewport "chapter" per
 * case study. The background (video where we have one, image otherwise)
 * crossfades as the reader scrolls past each chapter's slice of the track.
 * "Explore more" opens the full write-up in CaseStudyModal.
 */
export default function ScrollCaseStudies({ studies, onExplore }) {
  const containerRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const videoRefs = useRef([]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  useEffect(() => {
    const unsubscribe = scrollYProgress.on("change", (latest) => {
      const next = Math.min(
        Math.floor(latest * studies.length),
        studies.length - 1
      );
      setActiveIndex((prev) => (prev === next ? prev : next));
    });
    return () => unsubscribe();
  }, [scrollYProgress, studies.length]);

  useEffect(() => {
    videoRefs.current.forEach((el, i) => {
      if (!el) return;
      if (i === activeIndex) {
        el.play?.().catch(() => {});
      } else {
        el.pause?.();
      }
    });
  }, [activeIndex]);

  return (
    <section
      ref={containerRef}
      className="relative w-full"
      style={{ height: `${studies.length * 100}vh` }}
    >
      {/* Background */}
      <div className="sticky top-0 h-screen w-full overflow-hidden rounded-3xl">
        <Backdrop studies={studies} activeIndex={activeIndex} videoRefs={videoRefs} />
      </div>

      <ChapterNav activeIndex={activeIndex} total={studies.length} progress={scrollYProgress} />

      {/* Foreground copy, one block per chapter */}
      <div className="absolute inset-0 top-0 z-30 pointer-events-none">
        {studies.map((study) => (
          <div
            key={study.id}
            className="flex h-screen w-full items-end sm:items-center justify-start px-6 sm:px-10 lg:px-16 pb-20 sm:pb-0"
          >
            <motion.div
              variants={textContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, margin: "-20%" }}
              className="max-w-2xl pointer-events-auto"
            >
              <motion.div variants={fadeIn} className="flex items-center gap-4 mb-5">
                <div className="h-0.5 w-10 gradient-bar rounded-full" />
                <span className="text-xs font-bold uppercase tracking-[0.3em] text-magenta">
                  Case Study {study.index}
                </span>
              </motion.div>

              <div className="overflow-hidden mb-5 py-1">
                <motion.h3
                  variants={textReveal}
                  className="font-display text-3xl sm:text-5xl lg:text-6xl font-semibold text-paper tracking-tight leading-[1.05]"
                >
                  {study.title}
                </motion.h3>
              </div>

              <motion.p
                variants={fadeIn}
                className="max-w-xl text-base sm:text-lg text-faint leading-relaxed"
              >
                {study.desc}
              </motion.p>

              <motion.button
                type="button"
                variants={fadeIn}
                whileHover={{ x: 6 }}
                whileTap={{ scale: 0.97 }}
                onClick={() => onExplore(study)}
                className="mt-8 group flex items-center gap-4 text-paper font-medium"
              >
                <span className="relative h-11 w-11 rounded-full border border-cardline flex items-center justify-center overflow-hidden">
                  <span className="absolute inset-0 gradient-diagonal translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                  <ChevronRight size={18} className="relative z-10" />
                </span>
                <span className="tracking-widest uppercase text-xs">Explore more</span>
              </motion.button>
            </motion.div>
          </div>
        ))}
      </div>
    </section>
  );
}

function Backdrop({ studies, activeIndex, videoRefs }) {
  return (
    <div className="absolute inset-0 h-full w-full overflow-hidden bg-ink-deep">
      {studies.map((study, index) => (
        <motion.div
          key={study.id}
          initial={{ opacity: 0 }}
          animate={{
            opacity: index === activeIndex ? 1 : 0,
            zIndex: index === activeIndex ? 10 : 0,
          }}
          transition={{ duration: 1.1, ease: "easeInOut" }}
          className="absolute inset-0 h-full w-full"
        >
          {study.video ? (
            <video
              ref={(el) => {
                videoRefs.current[index] = el;
              }}
              src={study.video}
              className="h-full w-full object-cover"
              muted
              loop
              playsInline
              preload={index === 0 ? "auto" : "none"}
            />
          ) : (
            <img
              src={study.image}
              alt={study.imageAlt}
              className="h-full w-full object-cover"
              loading={index === 0 ? "eager" : "lazy"}
            />
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-ink-deep via-ink-deep/30 to-ink-deep/10" />
          <div
            className="absolute inset-0"
            style={{
              background:
                "radial-gradient(circle at 20% 15%, rgba(224,36,154,0.16), transparent 45%), radial-gradient(circle at 80% 85%, rgba(123,47,247,0.2), transparent 50%)",
            }}
          />
        </motion.div>
      ))}
      <FilmGrain />
    </div>
  );
}

function FilmGrain() {
  return (
    <div className="pointer-events-none absolute inset-0 z-20 opacity-[0.06] mix-blend-overlay">
      <div
        className="absolute inset-0 h-full w-full"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='1'/%3E%3C/svg%3E\")",
          backgroundRepeat: "repeat",
        }}
      />
    </div>
  );
}

function ChapterNav({ activeIndex, total, progress }) {
  const smoothProgress = useSpring(progress, { stiffness: 100, damping: 30 });

  return (
    <motion.div
      className="fixed bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 z-50 flex items-center gap-4 rounded-full bg-ink/90 backdrop-blur-xl border border-cardline p-2 pl-5 pr-2 shadow-2xl"
      initial={{ y: 100, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: false, amount: 0.1 }}
    >
      <div className="flex flex-col">
        <span className="text-[10px] uppercase tracking-widest text-faint">
          {activeIndex + 1} / {total}
        </span>
        <AnimatePresence mode="wait">
          <motion.span
            key={activeIndex}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            className="text-xs font-semibold text-paper min-w-[92px]"
          >
            Case Study {String(activeIndex + 1).padStart(2, "0")}
          </motion.span>
        </AnimatePresence>
      </div>

      <div className="relative h-11 w-11 flex items-center justify-center">
        <svg className="h-full w-full -rotate-90 transform">
          <circle cx="22" cy="22" r="17" className="stroke-cardline" strokeWidth="2" fill="none" />
          <motion.circle
            cx="22"
            cy="22"
            r="17"
            className="stroke-magenta"
            strokeWidth="2"
            fill="none"
            strokeDasharray="107"
            style={{ pathLength: smoothProgress }}
          />
        </svg>
        <span className="absolute h-2 w-2 rounded-full gradient-diagonal" />
      </div>
    </motion.div>
  );
}

const textContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const textReveal = {
  hidden: { y: "100%", opacity: 0 },
  visible: { y: "0%", opacity: 1, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } },
};

const fadeIn = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay: 0.3, ease: "easeOut" } },
};
