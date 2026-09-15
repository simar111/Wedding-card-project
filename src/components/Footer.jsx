import { wedding } from "../data/wedding";

import { Ornament } from "./Ornament";

export function Footer() {
  return (
    <footer>
      <Ornament />

      <div className="footer-names">
        {wedding.groom}

        <i>&</i>

        {wedding.bride}
      </div>

      <p>
        With love, laughter &
        a lifetime ahead.
      </p>

      <small>
        Made with ♥ · Jaipur · 2027
      </small>
    </footer>
  );
}