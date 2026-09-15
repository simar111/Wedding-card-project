export function Floral({ className = "" }) {
  return (
    <svg
      className={`floral ${className}`}
      viewBox="0 0 180 180"
      fill="none"
      aria-hidden="true"
    >
      <g
        stroke="currentColor"
        strokeWidth="1.2"
        opacity=".72"
      >
        <path d="M90 174C87 126 72 75 30 20" />

        <path d="M88 145C115 113 137 79 151 38" />

        <path
          d="
            M67 96
            C46 94 29 81 24 63
            C43 62 61 74 67 96Z
          "
        />

        <path
          d="
            M111 115
            C133 111 151 95 157 76
            C137 78 120 91 111 115Z
          "
        />

        <path
          d="
            M51 72
            C34 58 28 39 34 21
            C51 33 57 53 51 72Z
          "
        />

        <path
          d="
            M129 81
            C146 67 152 48 146 31
            C130 43 124 62 129 81Z
          "
        />

        <circle cx="90" cy="119" r="4" />
        <circle cx="90" cy="119" r="13" />
      </g>
    </svg>
  );
}