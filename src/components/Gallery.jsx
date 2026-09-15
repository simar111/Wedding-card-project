import { motion } from "framer-motion";

import { gallery } from "../data/wedding";

import { SectionHeading } from "./SectionHeading";

export function Gallery() {
  return (
    <section
      id="gallery"
      className="section gallery"
    >
      <SectionHeading
        eyebrow="Little moments"
        title="A glimpse of our world"
        description="The laughter, the celebrations and all the little things that brought us here."
      />

      <div className="gallery-grid">
        {gallery.map(
          (image, index) => (
            <motion.figure
              key={image}
              className={`gallery-item gallery-${index}`}
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
                amount: 0.1,
              }}
              transition={{
                delay: index * 0.08,
                duration: 0.65,
              }}
              whileHover={{
                y: -7,
              }}
            >
              <img
                src={image}
                alt={`Wedding memory ${
                  index + 1
                }`}
                loading="lazy"
              />

              <div className="gallery-shine" />
            </motion.figure>
          )
        )}
      </div>
    </section>
  );
}