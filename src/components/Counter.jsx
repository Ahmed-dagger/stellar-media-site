import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";

/** Splits "280M+" into { num: 280, decimals: 0, hasCommas: false, suffix: "M+" }. */
function parseValue(raw) {
  const match = String(raw).match(/^([\d,]*\d(?:\.\d+)?)(.*)$/);
  if (!match) return null;
  const numStr = match[1].replace(/,/g, "");
  const num = parseFloat(numStr);
  if (Number.isNaN(num)) return null;
  const decimals = numStr.includes(".") ? numStr.split(".")[1].length : 0;
  return { num, decimals, hasCommas: match[1].includes(","), suffix: match[2] };
}

function format(n, { decimals, hasCommas }) {
  const fixed = n.toFixed(decimals);
  if (!hasCommas) return fixed;
  const [intPart, decPart] = fixed.split(".");
  const withCommas = intPart.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  return decPart ? `${withCommas}.${decPart}` : withCommas;
}

/** Renders a stat that counts up from zero to its value the first time it scrolls into view. */
export default function Counter({ value, duration = 1.8, className }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.6 });
  const [display, setDisplay] = useState(null);
  const parsed = parseValue(value);

  useEffect(() => {
    if (!inView || !parsed) return;
    let raf;
    const start = performance.now();

    const tick = (now) => {
      const t = Math.min((now - start) / (duration * 1000), 1);
      const eased = 1 - Math.pow(1 - t, 3);
      setDisplay(format(parsed.num * eased, parsed));
      if (t < 1) raf = requestAnimationFrame(tick);
    };

    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inView]);

  if (!parsed) {
    return (
      <span ref={ref} className={className}>
        {value}
      </span>
    );
  }

  return (
    <span ref={ref} className={className}>
      {display ?? format(0, parsed)}
      {parsed.suffix}
    </span>
  );
}
