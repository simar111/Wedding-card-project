import { motion } from "framer-motion";

import {
  ChevronDown,
} from "lucide-react";

import { Floral } from "./Floral";

import { wedding } from "../data/wedding";

export function Hero() {
  return (
    <section
      id="home"
      className="hero"
    >
      <div className="hero-image" />

      <div className="hero-shade" />

      <Floral
        className="hero-floral hf-left"
      />

      <Floral
        className="hero-floral hf-right"
      />

      <motion.div
        className="hero-content"
        initial={{
          opacity: 0,
          y: 30,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          delay: 0.5,
          duration: 1.2,
        }}
      >
        <span className="sanskrit">
          ॥ शुभ विवाह ॥
        </span>

        <p className="hero-pre">
          WITH THE BLESSINGS OF OUR FAMILIES
        </p>

        <h1>
          {wedding.groom}

          <i>&</i>

          {wedding.bride}
        </h1>

        <div className="hero-meta">
          <span>
            {wedding.dateShort}
          </span>

          <b>◆</b>

          <span>
            {wedding.city}
          </span>
        </div>

        <p className="hero-tag">
          Two hearts. One promise.
          A lifetime of love.
        </p>
      </motion.div>

      <motion.div
        className="hero-scroll"
        animate={{
          y: [0, 9, 0],
        }}
        transition={{
          repeat: Infinity,
          duration: 1.7,
        }}
      >
        Scroll to discover

        <ChevronDown />
      </motion.div>
    </section>
  );
}