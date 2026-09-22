/**
 * Two-depth star texture (near layer twinkles, far layer static) laid over
 * a dark surface. Pure CSS background-image dots — no canvas, no per-frame
 * JS — so it stays cheap on sections that already carry a shader or GSAP
 * timeline.
 */
export default function Starfield({ className = "" }) {
  return (
    <div className={`absolute inset-0 overflow-hidden ${className}`} aria-hidden="true">
      <div className="stars-layer" />
      <div className="stars-layer stars-layer--near stars-layer--twinkle" style={{ backgroundPosition: "60px 90px" }} />
    </div>
  );
}
