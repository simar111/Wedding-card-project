import { SectionHeading } from "./SectionHeading";

import { useCountdown } from "../hooks/useCountdown";

export function Countdown() {
  const countdown =
    useCountdown(
      "2027-02-16T17:30:00+05:30"
    );

  const items = [
    ["days", "Days"],
    ["hours", "Hours"],
    ["minutes", "Minutes"],
    ["seconds", "Seconds"],
  ];

  return (
    <section
      className="section countdown"
      id="countdown"
    >
      <div className="countdown-pattern" />

      <SectionHeading
        eyebrow="Until we say I do"
        title="The countdown begins"
      />

      <div className="timer">
        {items.map(
          ([key, label]) => (
            <div
              className="timer-item"
              key={key}
            >
              <strong>
                {String(
                  countdown[key]
                ).padStart(2, "0")}
              </strong>

              <span>
                {label}
              </span>
            </div>
          )
        )}
      </div>
    </section>
  );
}