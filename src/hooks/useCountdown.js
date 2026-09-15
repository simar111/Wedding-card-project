import { useEffect, useState } from "react";

export function useCountdown(target) {
  const calculate = () => {
    return Math.max(
      0,
      new Date(target).getTime() - Date.now()
    );
  };

  const [milliseconds, setMilliseconds] = useState(calculate);

  useEffect(() => {
    const interval = setInterval(() => {
      setMilliseconds(calculate());
    }, 1000);

    return () => clearInterval(interval);
  }, [target]);

  return {
    days: Math.floor(milliseconds / 86400000),

    hours:
      Math.floor(milliseconds / 3600000) % 24,

    minutes:
      Math.floor(milliseconds / 60000) % 60,

    seconds:
      Math.floor(milliseconds / 1000) % 60,
  };
}