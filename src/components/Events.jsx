import { motion } from "framer-motion";

import {
  Clock3,
  MapPin,
} from "lucide-react";

import { events } from "../data/wedding";

import { SectionHeading } from "./SectionHeading";

export function Events() {
  return (
    <section
      id="events"
      className="section events"
    >
      <SectionHeading
        dark
        eyebrow="Save the dates"
        title="The wedding festivities"
        description="Three celebrations, countless memories, one beautiful beginning."
      />

      <div className="timeline">
        {events.map((event, index) => (
          <motion.article
            className="event"
            key={event.title}
            initial={{
              opacity: 0,
              y: 45,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
              amount: 0.2,
            }}
            transition={{
              delay: index * 0.12,
              duration: 0.75,
            }}
          >
            <div className="event-date">
              <strong>
                {event.date}
              </strong>

              <span>
                {event.month}
              </span>
            </div>

            <div className="event-symbol">
              {event.icon}
            </div>

            <div className="event-body">
              <h3>
                {event.title}
              </h3>

              <p>
                {event.description}
              </p>

              <div>
                <span>
                  <Clock3 />

                  {event.time}
                </span>

                <span>
                  <MapPin />

                  {event.place}
                </span>
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}