/** Four-point sparkle mark that precedes every section's eyebrow label. */
export default function QuadStar({ className = "h-4 w-4" }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={`shrink-0 ${className}`}
      aria-hidden="true"
    >
      <path d="M12 0C12.6 6.4 13.9 10.3 24 12C13.9 13.7 12.6 17.6 12 24C11.4 17.6 10.1 13.7 0 12C10.1 10.3 11.4 6.4 12 0Z" />
    </svg>
  );
}
