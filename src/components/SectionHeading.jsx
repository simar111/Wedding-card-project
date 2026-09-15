import { motion } from "framer-motion";

import { Ornament } from "./Ornament";

export function SectionHeading({
  eyebrow,
  title,
  description,
  dark = false,
}) {
  return (
    <motion.div
      className={`section-heading ${
        dark ? "dark-heading" : ""
      }`}
      initial={{
        opacity: 0,
        y: 35,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
        amount: 0.25,
      }}
      transition={{
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      <span className="eyebrow">
        {eyebrow}
      </span>

      <h2>{title}</h2>

      {description && (
        <p>{description}</p>
      )}

      <Ornament />
    </motion.div>
  );
}