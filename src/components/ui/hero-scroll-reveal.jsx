import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import { useStartProject } from "../StartProjectModal";
import Starfield from "./Starfield";
import QuadStar from "./QuadStar";
import stellarLogo from "../../assets/stellar-logo-white.png";
import { CLIENTS } from "../../data/content";

/**
 * Astronaut-helmet-POV space banner, generated via Higgsfield. Drop the
 * rendered file at src/assets/hero-space-banner.mp4 (and an optional poster
 * frame at hero-space-banner.jpg) to replace this placeholder path.
 */
const HERO_VIDEO_SRC = "/hero-space-banner.mp4";
const HERO_VIDEO_POSTER = "/hero-space-banner.png";

gsap.registerPlugin(ScrollTrigger, SplitText);

const clientLogos = import.meta.glob("../../assets/clients/*.png", {
  eager: true,
  import: "default",
});

function clientLogoSrc(file) {
  return clientLogos[`../../assets/clients/${file}.png`];
}

export function HeroScrollReveal({
  topText = "Beyond the stars.",
  headingText = (
    <>
      A galaxy of institutions,
      <br />
      aligned around one mission.
    </>
  ),
  clients = CLIENTS,
  subText = "From federal authorities to global brands, content, production, and performance planned and produced without handovers.",
  className = "",
}) {
  const benefitRef = useRef(null);
  const revealWrapperRef = useRef(null);
  const revealBoxRef = useRef(null);
  const badgeRef = useRef(null);
  const paraRef = useRef(null);
  const logoRefs = useRef([]);
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

    logoRefs.current.forEach((logoEl) => {
      if (!logoEl) return;
      revealTl.to(
        logoEl,
        {
          duration: 0.8,
          opacity: 1,
          y: 0,
          ease: "circ.out",
        },
        ">-0.35"
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

      {/* Section 1 — logo mark, opening tagline, astronaut-helmet-POV space banner */}
      <section className="w-full min-h-screen flex flex-col justify-center items-center text-center px-4 sm:px-8 py-8 relative bg-ink overflow-hidden">
        <video
          className="absolute inset-0 h-full w-full object-cover"
          src={HERO_VIDEO_SRC}
          poster={HERO_VIDEO_POSTER}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
        />
        <Starfield />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_30%,rgba(6,6,26,0.9)_80%)]" />

        <img
          src={stellarLogo}
          alt="Digital Stellar Media"
          className="relative h-16 sm:h-24 w-auto mb-8 drop-shadow-[0_0_24px_rgba(123,47,247,0.45)]"
        />

        <span className="relative flex items-center gap-2 font-body text-xs tracking-[0.3em] text-magenta uppercase mb-8">
          <QuadStar />
          Content · Production · Performance
        </span>
        <p className="relative font-display font-semibold text-[clamp(3rem,10vw,9rem)] tracking-tight leading-[1.02]">
          {topText}
        </p>
        <p dir="rtl" className="relative mt-6 font-display text-lg sm:text-xl gradient-text">
          لا تقنع بما دون النجوم
        </p>
        <span className="relative mt-8 text-xs tracking-[0.3em] text-faint uppercase">
          Digital Stellar Media · Abu Dhabi · Est. 2018
        </span>

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

      {/* Section 2 — kinetic headline, partner galaxy, pinned reveal */}
      <section ref={benefitRef} className="relative w-full min-h-[140vh] md:min-h-[160vh] pb-16 md:pb-20 bg-ink overflow-hidden">
        <Starfield className="opacity-60" />

        <div className="max-w-5xl mx-auto px-4 sm:px-6 py-16 md:py-24 flex flex-col items-center text-center relative z-10">
          <div className="w-full mb-8 sm:mb-12 md:mb-14">
            <p
              ref={paraRef}
              className="font-display text-[clamp(2rem,5vw,5rem)] font-semibold tracking-tight leading-tight gradient-text overflow-visible"
            >
              {headingText}
            </p>
          </div>

          {/* Partner constellation — logos laid out row by row */}
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-6 sm:gap-x-10 sm:gap-y-8 max-w-4xl mx-auto my-4 sm:my-6 mb-8 sm:mb-14">
            {clients.map((client, idx) => (
              <div
                key={client.file}
                ref={(el) => {
                  logoRefs.current[idx] = el;
                }}
                className="opacity-0 translate-y-4 will-change-transform"
              >
                <img
                  src={clientLogoSrc(client.file)}
                  alt={client.name}
                  className="h-6 sm:h-7 w-auto opacity-70 hover:opacity-100 transition-opacity"
                />
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
                    "radial-gradient(circle at 30% 20%, rgba(31,200,219,0.22), transparent 45%), radial-gradient(circle at 75% 30%, rgba(224,36,154,0.18), transparent 45%), radial-gradient(circle at 50% 80%, rgba(123,47,247,0.3), transparent 55%), #06061A",
                }}
              />
              <Starfield />
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
