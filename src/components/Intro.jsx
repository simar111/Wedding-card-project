import { motion } from "framer-motion";

import { Heart } from "lucide-react";

import { SectionHeading } from "./SectionHeading";

export function Intro() {
  return (
    <section
      className="section intro"
      id="couple"
    >
      <div className="ambient-orb orb-one" />

      <div className="ambient-orb orb-two" />

      <SectionHeading
        eyebrow="A beautiful beginning"
        title="Two souls, one beautiful story"
        description="Some stories are written in books. Ours was written in little moments, shared smiles and a thousand reasons to choose each other — every single day."
      />

      <div className="couple-wrap">
        <Person
          name="Arjun"
          role="The Groom"
          image="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=900&q=90"
          quote="I found my forever in the most unexpected hello."
          side="left"
        />

        <motion.div
          className="couple-heart"
          initial={{
            scale: 0,
          }}
          whileInView={{
            scale: 1,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            type: "spring",
            stiffness: 120,
          }}
        >
          <Heart
            fill="currentColor"
          />

          <span>&</span>
        </motion.div>

        <Person
          name="Meera"
          role="The Bride"
          image="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=900&q=90"
          quote="And suddenly, every love song made sense."
          side="right"
        />
      </div>
    </section>
  );
}

function Person({
  name,
  role,
  image,
  quote,
  side,
}) {
  return (
    <motion.article
      className={`person ${side}`}
      initial={{
        opacity: 0,
        x:
          side === "left"
            ? -70
            : 70,
      }}
      whileInView={{
        opacity: 1,
        x: 0,
      }}
      viewport={{
        once: true,
        amount: 0.25,
      }}
      transition={{
        duration: 0.9,
      }}
    >
      <div className="portrait-wrap">
        <div className="portrait-ring" />

        <img
          src={image}
          alt={name}
        />
      </div>

      <h3>{name}</h3>

      <span>{role}</span>

      <p>
        “{quote}”
      </p>
    </motion.article>
  );
}