import { motion } from "framer-motion";

import {
  Navigation,
  MapPin,
  Clock3,
} from "lucide-react";

import { wedding } from "../data/wedding";

import { SectionHeading } from "./SectionHeading";

export function Venue() {
  return (
    <section
      id="venue"
      className="section venue"
    >
      <div className="venue-card">
        <motion.div
          className="venue-copy"
          initial={{
            opacity: 0,
            x: -35,
          }}
          whileInView={{
            opacity: 1,
            x: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.8,
          }}
        >
          <SectionHeading
            eyebrow="The celebration"
            title={
              <>
                Maharaja
                <br />
                <em>Gardens</em>
              </>
            }
          />

          <div className="venue-meta">
            <span>
              <MapPin />

              {wedding.address}
            </span>

            <span>
              <Clock3 />

              {wedding.date}
              {" · "}
              {wedding.time}
            </span>
          </div>

          <a
            className="luxury-btn dark-btn"
            href={wedding.mapUrl}
            target="_blank"
            rel="noreferrer"
          >
            <Navigation size={15} />

            Get Directions
          </a>
        </motion.div>

        <div className="venue-photo">
          <div className="venue-glow" />
        </div>
      </div>
    </section>
  );
}