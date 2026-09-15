// Decorative Abu Dhabi skyline rendered as a cosmic pixel-dot silhouette.
const BUILDINGS = [
  6, 10, 8, 14, 9, 18, 11, 22, 13, 16, 10, 20, 8, 12, 15, 9, 19, 11, 7, 14, 10,
  17, 8, 13, 6, 21, 9, 12, 16, 8,
];

export default function Skyline({ className = "", opacity = 0.55 }) {
  return (
    <svg
      viewBox="0 0 1440 220"
      preserveAspectRatio="none"
      className={className}
      style={{ opacity }}
      aria-hidden="true"
    >
      <defs>
        <pattern
          id="dotgrid"
          width="6"
          height="6"
          patternUnits="userSpaceOnUse"
        >
          <circle cx="1.2" cy="1.2" r="1.1" fill="currentColor" />
        </pattern>
      </defs>
      {BUILDINGS.map((h, i) => {
        const w = 1440 / BUILDINGS.length;
        const x = i * w;
        const height = h * 8;
        return (
          <rect
            key={i}
            x={x + 1}
            y={220 - height}
            width={w - 2}
            height={height}
            fill="url(#dotgrid)"
          />
        );
      })}
    </svg>
  );
}
