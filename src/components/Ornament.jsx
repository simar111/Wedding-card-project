export function Ornament({ className = "" }) {
  return (
    <svg
      className={`ornament-svg ${className}`}
      viewBox="0 0 240 70"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M8 35H72"
        stroke="currentColor"
        opacity=".45"
      />

      <path
        d="M168 35H232"
        stroke="currentColor"
        opacity=".45"
      />

      <path
        d="
          M120 8
          L127 28
          L147 35
          L127 42
          L120 62
          L113 42
          L93 35
          L113 28
          Z
        "
        stroke="currentColor"
      />

      <circle
        cx="120"
        cy="35"
        r="4"
        fill="currentColor"
      />

      <circle
        cx="90"
        cy="35"
        r="2"
        fill="currentColor"
      />

      <circle
        cx="150"
        cy="35"
        r="2"
        fill="currentColor"
      />
    </svg>
  );
}