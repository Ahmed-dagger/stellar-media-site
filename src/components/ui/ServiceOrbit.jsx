import { useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

const GLOBE_RADIUS = 26;
const RING_RADIUS = 44;

/**
 * A wireframe globe with a cursor-reactive glowing core, orbited by the
 * service names positioned around it and tied back with dashed connectors —
 * replaces the plain service grid with the "squad" globe motif.
 */
export default function ServiceOrbit({ services }) {
  const containerRef = useRef(null);
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const springX = useSpring(mx, { stiffness: 55, damping: 14, mass: 0.6 });
  const springY = useSpring(my, { stiffness: 55, damping: 14, mass: 0.6 });

  const glowLeft = useTransform(springX, (v) => `${50 + v * 16}%`);
  const glowTop = useTransform(springY, (v) => `${50 + v * 16}%`);
  const wireRotate = useTransform(springX, (v) => v * 8);
  const wireTilt = useTransform(springY, (v) => v * -6);

  function handleMouseMove(e) {
    const rect = containerRef.current?.getBoundingClientRect();
    if (!rect) return;
    mx.set(((e.clientX - rect.left) / rect.width - 0.5) * 2);
    my.set(((e.clientY - rect.top) / rect.height - 0.5) * 2);
  }

  function handleMouseLeave() {
    mx.set(0);
    my.set(0);
  }

  const angleStep = (2 * Math.PI) / services.length;

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative mx-auto aspect-square w-full max-w-[640px] select-none"
    >
      {/* dashed connectors from globe surface to each orbiting label */}
      <svg viewBox="0 0 100 100" className="absolute inset-0 h-full w-full overflow-visible" aria-hidden="true">
        {services.map((s, i) => {
          const angle = -Math.PI / 2 + i * angleStep;
          const gx = 50 + Math.cos(angle) * GLOBE_RADIUS;
          const gy = 50 + Math.sin(angle) * GLOBE_RADIUS;
          const mxp = 50 + Math.cos(angle) * (GLOBE_RADIUS + 9);
          const myp = 50 + Math.sin(angle) * (GLOBE_RADIUS + 9);
          const lx = 50 + Math.cos(angle) * (RING_RADIUS - 3);
          const ly = 50 + Math.sin(angle) * (RING_RADIUS - 3);
          return (
            <path
              key={s.title}
              d={`M ${gx} ${gy} Q ${mxp} ${myp} ${lx} ${ly}`}
              fill="none"
              stroke="currentColor"
              strokeWidth="0.3"
              strokeDasharray="1.6 1.8"
              className="text-faint/60"
            />
          );
        })}
      </svg>

      {/* globe */}
      <div
        className="absolute rounded-full overflow-hidden"
        style={{
          left: `${50 - GLOBE_RADIUS}%`,
          top: `${50 - GLOBE_RADIUS}%`,
          width: `${GLOBE_RADIUS * 2}%`,
          height: `${GLOBE_RADIUS * 2}%`,
        }}
      >
        <div className="absolute inset-0 bg-[#06061A]" />
        <motion.div
          className="absolute rounded-full blur-2xl"
          style={{
            left: glowLeft,
            top: glowTop,
            x: "-50%",
            y: "-50%",
            width: "85%",
            height: "85%",
            background:
              "radial-gradient(circle, rgba(245,166,35,0.95) 0%, rgba(224,36,154,0.6) 38%, rgba(123,47,247,0.55) 62%, transparent 78%)",
          }}
        />
        <motion.div style={{ rotate: wireRotate, skewY: wireTilt }} className="absolute inset-0">
          <GlobeWireframe className="absolute inset-0 h-full w-full text-paper/50" />
        </motion.div>
        <div className="absolute inset-0 rounded-full ring-1 ring-inset ring-faint/30" />
      </div>

      {/* orbiting service labels */}
      {services.map((s, i) => {
        const angle = -Math.PI / 2 + i * angleStep;
        const lx = 50 + Math.cos(angle) * RING_RADIUS;
        const ly = 50 + Math.sin(angle) * RING_RADIUS;
        return (
          <motion.div
            key={s.title}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.5, delay: i * 0.06, ease: [0.16, 1, 0.3, 1] }}
            className="absolute w-32 sm:w-36 -translate-x-1/2 -translate-y-1/2 text-center"
            style={{ left: `${lx}%`, top: `${ly}%` }}
          >
            <span className="font-display text-sm sm:text-base font-semibold text-paper leading-tight">
              {s.title}
            </span>
          </motion.div>
        );
      })}
    </div>
  );
}

function GlobeWireframe({ className = "" }) {
  const meridianScales = [1, 0.74, 0.46, 0.16];
  const latitudeT = [-0.7, -0.38, 0, 0.38, 0.7];

  return (
    <svg viewBox="0 0 100 100" className={className} aria-hidden="true">
      <circle cx="50" cy="50" r="49" stroke="currentColor" strokeWidth="0.6" fill="none" />
      {meridianScales.map((k, i) => (
        <ellipse
          key={`meridian-${i}`}
          cx="50"
          cy="50"
          rx={49 * k}
          ry="49"
          stroke="currentColor"
          strokeWidth="0.4"
          fill="none"
          opacity="0.5"
        />
      ))}
      {latitudeT.map((t, i) => {
        const rx = 49 * Math.sqrt(Math.max(0, 1 - t * t));
        const ry = 7 * Math.sqrt(Math.max(0, 1 - t * t)) + 0.6;
        return (
          <ellipse
            key={`latitude-${i}`}
            cx="50"
            cy={50 + t * 49}
            rx={rx}
            ry={ry}
            stroke="currentColor"
            strokeWidth="0.4"
            fill="none"
            opacity="0.5"
          />
        );
      })}
    </svg>
  );
}
