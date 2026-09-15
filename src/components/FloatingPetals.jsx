import { motion } from "framer-motion";

const petals = Array.from(
  { length: 18 },
  (_, index) => index
);

export function FloatingPetals() {
  return (
    <div
      className="petals"
      aria-hidden="true"
    >
      {petals.map((index) => (
        <motion.i
          key={index}
          initial={{
            y: "-10vh",
            x: `${(index * 67) % 100}vw`,
            rotate: index * 31,
            opacity: 0,
          }}
          animate={{
            y: "110vh",
            x: `${
              (index * 67 + 23) % 100
            }vw`,
            rotate:
              index * 31 + 520,
            opacity: [
              0,
              0.55,
              0.35,
              0,
            ],
          }}
          transition={{
            duration:
              12 + (index % 5) * 2,
            delay: index * 0.7,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      ))}
    </div>
  );
}