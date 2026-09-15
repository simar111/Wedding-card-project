import { motion } from "framer-motion";

import { SectionHeading } from "./SectionHeading";

export function Story() {
  return (
    <section
      id="story"
      className="story"
    >
      <motion.div
        className="story-photo"
        initial={{
          scale: 1.1,
        }}
        whileInView={{
          scale: 1,
        }}
        viewport={{
          once: true,
        }}
        transition={{
          duration: 1.2,
        }}
      >
        <img
          src="https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1400&q=90"
          alt="Wedding couple"
        />
      </motion.div>

      <div className="story-copy">
        <SectionHeading
          eyebrow="Our story"
          title={
            <>
              From a hello
              <br />
              <em>to forever.</em>
            </>
          }
        />

        <p>
          It started over coffee,
          grew through countless
          conversations and became
          a promise neither of us
          wants to break.
        </p>

        <p>
          Now, with our favourite
          people around us, we're
          ready for the next chapter
          — surrounded by everyone
          who made our journey special.
        </p>

        <div className="signature">
          A <span>♡</span> M
        </div>
      </div>
    </section>
  );
}