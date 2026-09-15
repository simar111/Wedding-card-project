import { motion } from "framer-motion";

import {
  Heart,
  ArrowRight,
} from "lucide-react";

import { wedding } from "../data/wedding";

export function Rsvp() {
  const mailto =
    `mailto:${wedding.rsvpEmail}` +
    `?subject=Wedding RSVP`;

  return (
    <section
      id="rsvp"
      className="section rsvp"
    >
      <motion.div
        initial={{
          opacity: 0,
          y: 30,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        viewport={{
          once: true,
        }}
        transition={{
          duration: 0.8,
        }}
      >
        <Heart
          className="rsvp-heart"
          fill="currentColor"
        />

        <span className="eyebrow">
          Your presence is our present
        </span>

        <h2>
          Will you join us?
        </h2>

        <p>
          We cannot wait to celebrate
          this new chapter with the
          people who make our lives
          brighter.
        </p>

        <a
          href={mailto}
          className="luxury-btn dark-btn"
        >
          Kindly RSVP

          <ArrowRight size={16} />
        </a>
      </motion.div>
    </section>
  );
}