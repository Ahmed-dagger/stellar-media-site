import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import { MeshGradient, GodRays } from "@paper-design/shaders-react";
import { useStartProject } from "../StartProjectModal";

gsap.registerPlugin(ScrollTrigger, SplitText);

/**
 * Stellar Media brand tags for the kinetic reveal — one clipped badge per
 * service line, cycling the signature gradient stops (amber, magenta,
 * violet, cyan) across the ink surface.
 */
const DEFAULT_TAGS = [
  { text: "Social Media Management", background: "#F5A623", color: "#0A0A1E" },
  { text: "Content Creation", background: "#E0249A", color: "#FDFBF7" },
  { text: "Creative & Branding", background: "#7B2FF7", color: "#FDFBF7" },
  { text: "Web Development", background: "#1FC8DB", color: "#0A0A1E" },
  { text: "Strategy Solutions", background: "#24243E", color: "#FDFBF7" },
  { text: "Digital Media Buying", background: "#F5A623", color: "#0A0A1E" },
  { text: "SEO", background: "#E0249A", color: "#FDFBF7" },
  { text: "Video Production", background: "#7B2FF7", color: "#FDFBF7" },
];

export function HeroScrollReveal({
  topText = (
    <>
      For the institutions shaping the region's future,
      <br />
      one agency answers.
    </>
  ),
  headingText = (
    <>
      Beyond the stars,
      <br />
      one campaign at a time.
    </>
  ),
  tags = DEFAULT_TAGS,
  subText = "Content, production, and performance, planned and produced without handovers.",
  bottomText = (
    <>
      Seen. Believed.
      <br />
      Measured.
    </>
  ),
  className = "",
}) {
  const benefitRef = useRef(null);
  const revealWrapperRef = useRef(null);
  const revealBoxRef = useRef(null);
  const badgeRef = useRef(null);
  const paraRef = useRef(null);
  const tagRefs = useRef([]);
  const openStartProject = useStartProject();

  useEffect(() => {
    let split = null;
    let words = [];

    try {
      split = new SplitText(paraRef.current, {
        type: "words",
        wordsClass: "reveal-word inline-block origin-left mr-[0.25em] will-change-transform",
      });
      words = split.words;
    } catch {
      if (paraRef.current) {
        words = Array.from(paraRef.current.querySelectorAll(".reveal-word"));
      }
    }

    if (words.length > 0) {
      gsap.set(words, { opacity: 0, rotate: 8, yPercent: 30 });
    }

    if (badgeRef.current) {
      gsap.to(badgeRef.current, {
        rotate: 360,
        duration: 18,
        repeat: -1,
        ease: "none",
      });
    }

    const revealTl = gsap.timeline({
      scrollTrigger: {
        trigger: benefitRef.current,
        start: "top 70%",
        end: "top -10%",
        scrub: 1.5,
      },
    });

    if (words.length > 0) {
      revealTl.to(words, {
        stagger: 0.2,
        opacity: 1,
        rotate: 0,
        yPercent: 0,
        ease: "power1.inOut",
      });
    }

    tagRefs.current.forEach((tagEl) => {
      if (!tagEl) return;
      revealTl.to(
        tagEl,
        {
          duration: 1,
          opacity: 1,
          clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
          ease: "circ.out",
        },
        ">-0.4"
      );
    });

    const mm = gsap.matchMedia();

    mm.add("(max-width: 639.9px)", () => {
      gsap.set(revealBoxRef.current, { clipPath: "circle(18% at 50% 50%)" });
      gsap.timeline({
        scrollTrigger: {
          trigger: revealWrapperRef.current,
          start: "top top",
          end: "+=1400",
          scrub: 1.2,
          pin: true,
          pinSpacing: true,
          anticipatePin: 1,
        },
      }).fromTo(
        revealBoxRef.current,
        { clipPath: "circle(18% at 50% 50%)" },
        { clipPath: "circle(150% at 50% 50%)", ease: "none" }
      );
    });

    mm.add("(min-width: 640px) and (max-width: 1023.9px)", () => {
      gsap.set(revealBoxRef.current, { clipPath: "circle(12% at 50% 50%)" });
      gsap.timeline({
        scrollTrigger: {
          trigger: revealWrapperRef.current,
          start: "top top",
          end: "+=1800",
          scrub: 1.3,
          pin: true,
          pinSpacing: true,
          anticipatePin: 1,
        },
      }).fromTo(
        revealBoxRef.current,
        { clipPath: "circle(12% at 50% 50%)" },
        { clipPath: "circle(150% at 50% 50%)", ease: "none" }
      );
    });

    mm.add("(min-width: 1024px)", () => {
      gsap.set(revealBoxRef.current, { clipPath: "circle(8% at 50% 50%)" });
      gsap.timeline({
        scrollTrigger: {
          trigger: revealWrapperRef.current,
          start: "top top",
          end: "+=2200",
          scrub: 1.5,
          pin: true,
          pinSpacing: true,
          anticipatePin: 1,
        },
      }).fromTo(
        revealBoxRef.current,
        { clipPath: "circle(8% at 50% 50%)" },
        { clipPath: "circle(150% at 50% 50%)", ease: "none" }
      );
    });

    return () => {
      if (split?.revert) split.revert();
      revealTl.kill();
      mm.revert();
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return (
    <div
      id="home"
      className={`relative w-full bg-ink text-paper font-body overflow-x-hidden ${className}`}
    >
      <div className="absolute top-0 left-0 right-0 h-[2px] gradient-bar z-20" />

      {/* Section 1 — opening statement */}
      <section className="w-full min-h-screen flex flex-col justify-center items-center text-center px-4 sm:px-8 py-8 relative bg-ink overflow-hidden">
        <MeshGradient
          className="absolute inset-0 h-full w-full"
          colors={["#0A0A1E", "#7B2FF7", "#E0249A", "#1FC8DB", "#F5A623"]}
          distortion={0.85}
          swirl={0.35}
          grainMixer={0.2}
          grainOverlay={0.1}
          speed={0.25}
        />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_35%,rgba(10,10,30,0.85)_78%)]" />
        <span className="relative font-body text-xs tracking-[0.3em] text-magenta uppercase mb-8">
          Content · Production · Performance
        </span>
        <p className="relative font-display font-semibold text-[clamp(1.8rem,4.5vw,4.5rem)] tracking-tight leading-[1.05]">
          {topText}
        </p>
        <span className="relative mt-10 text-xs tracking-[0.3em] text-faint uppercase">
          Digital Stellar Media · Abu Dhabi · Est. 2018
        </span>
      </section>

      {/* Section 2 — kinetic headline, service tags, pinned reveal */}
      <section ref={benefitRef} className="relative w-full min-h-[140vh] md:min-h-[160vh] pb-16 md:pb-20 bg-ink">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 py-16 md:py-24 flex flex-col items-center text-center relative z-10">
          <div className="w-full mb-8 sm:mb-12 md:mb-14">
            <p
              ref={paraRef}
              className="font-display text-[clamp(2rem,5vw,5rem)] font-semibold tracking-tight leading-tight gradient-text overflow-visible"
            >
              {headingText}
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-2.5 sm:gap-4 max-w-4xl mx-auto my-4 sm:my-6 mb-8 sm:mb-14">
            {tags.map((tag, idx) => (
              <div
                key={tag.id || `tag-${idx}`}
                ref={(el) => {
                  tagRefs.current[idx] = el;
                }}
                className="px-5 sm:px-7 py-2.5 sm:py-3.5 rounded-full text-[clamp(0.8rem,1.6vw,1.05rem)] font-medium font-display tracking-tight opacity-0 shadow-2xl will-change-[clip-path,opacity]"
                style={{
                  backgroundColor: tag.background,
                  color: tag.color,
                  clipPath: "polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%)",
                }}
              >
                {tag.text}
              </div>
            ))}
          </div>

          {subText && (
            <p className="text-[clamp(0.95rem,1.5vw,1.35rem)] text-faint font-normal max-w-xl mt-2 sm:mt-4 px-4">
              {subText}
            </p>
          )}
        </div>

        {/* Pinned circle reveal — cosmic skyline panel */}
        <div className="relative w-full bg-ink">
          <div
            ref={revealWrapperRef}
            className="w-full h-screen flex justify-center items-center relative overflow-hidden bg-ink"
          >
            <div className="absolute inset-0 w-full h-full pointer-events-none bg-ink z-[1]" />

            <div
              ref={revealBoxRef}
              className="relative w-full h-full overflow-hidden flex justify-center items-center bg-ink will-change-[clip-path] z-[2]"
            >
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "radial-gradient(circle at 30% 20%, rgba(245,166,35,0.25), transparent 45%), radial-gradient(circle at 75% 30%, rgba(224,36,154,0.22), transparent 45%), radial-gradient(circle at 50% 80%, rgba(123,47,247,0.28), transparent 55%), #06061A",
                }}
              />
              <CosmicSkyline className="absolute bottom-0 left-0 w-full h-[55%] text-faint/50" />

              <div className="relative z-10 flex flex-col items-center text-center px-6">
                <span
                  ref={badgeRef}
                  className="mb-8 flex h-20 w-20 sm:h-28 sm:w-28 items-center justify-center rounded-full border border-dashed border-faint/40"
                >
                  <span className="h-2.5 w-2.5 rounded-full gradient-diagonal" />
                </span>
                <p className="font-display text-3xl sm:text-5xl font-semibold gradient-text max-w-2xl leading-tight">
                  One billion impressions, measured honestly.
                </p>
                <p className="mt-4 text-faint text-sm sm:text-base max-w-md">
                  Eight years of paid media for governments, cultures, and brands.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3 — closing line */}
      <section className="w-full min-h-[70vh] flex flex-col justify-center items-center text-center px-4 sm:px-8 py-16 relative z-10 bg-ink overflow-hidden">
        <GodRays
          className="absolute inset-0 h-full w-full"
          colorBack="#06061A"
          colorBloom="#7B2FF7"
          colors={["#F5A623", "#E0249A", "#7B2FF7", "#1FC8DB"]}
          density={0.7}
          intensity={0.6}
          spotty={0.4}
          midSize={0.35}
          midIntensity={0.3}
          bloom={0.4}
          speed={0.4}
        />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_30%,rgba(6,6,26,0.82)_75%)]" />
        <p className="relative font-display font-semibold text-[clamp(1.8rem,4.5vw,4.5rem)] tracking-tight leading-tight">
          {bottomText}
        </p>
        <p dir="rtl" className="relative mt-6 font-display text-xl sm:text-2xl gradient-text">
          لا تقنع بما دون النجوم
        </p>
        <div className="relative mt-10 flex flex-wrap justify-center gap-4">
          <a
            href="#work"
            className="rounded-full px-7 py-3.5 text-sm font-medium text-ink bg-paper hover:opacity-90 transition-opacity"
          >
            See our work
          </a>
          <button
            type="button"
            onClick={openStartProject}
            className="rounded-full px-7 py-3.5 text-sm font-medium text-paper border border-cardline hover:border-faint transition-colors"
          >
            Start a project
          </button>
        </div>
      </section>
    </div>
  );
}

/** The same pixel-dot skyline motif used through the brand, reused here at scale. */
function CosmicSkyline({ className = "" }) {
  const buildings = [
    6, 10, 8, 14, 9, 18, 11, 22, 13, 16, 10, 20, 8, 12, 15, 9, 19, 11, 7, 14, 10, 17, 8, 13, 6, 21,
    9, 12, 16, 8,
  ];
  return (
    <svg viewBox="0 0 1440 220" preserveAspectRatio="none" className={className} aria-hidden="true">
      <defs>
        <pattern id="hero-dotgrid" width="6" height="6" patternUnits="userSpaceOnUse">
          <circle cx="1.2" cy="1.2" r="1.1" fill="currentColor" />
        </pattern>
      </defs>
      {buildings.map((h, i) => {
        const w = 1440 / buildings.length;
        const x = i * w;
        const height = h * 8;
        return (
          <rect
            key={i}
            x={x + 1}
            y={220 - height}
            width={w - 2}
            height={height}
            fill="url(#hero-dotgrid)"
          />
        );
      })}
    </svg>
  );
}

export default HeroScrollReveal;
