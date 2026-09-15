import { useState } from "react";

import {
  Menu,
  X,
} from "lucide-react";

import { wedding } from "../data/wedding";

const links = [
  ["Story", "story"],
  ["Events", "events"],
  ["Gallery", "gallery"],
  ["Venue", "venue"],
  ["RSVP", "rsvp"],
];

export function Navbar() {
  const [open, setOpen] =
    useState(false);

  const goTo = (id) => {
    document
      .getElementById(id)
      ?.scrollIntoView({
        behavior: "smooth",
      });

    setOpen(false);
  };

  return (
    <header
      className={`nav ${
        open ? "open" : ""
      }`}
    >
      <button
        className="nav-brand"
        onClick={() =>
          goTo("home")
        }
      >
        <span>
          {wedding.groom[0]}
        </span>

        <i>&</i>

        <span>
          {wedding.bride[0]}
        </span>
      </button>

      <nav>
        {links.map(
          ([label, id]) => (
            <button
              key={id}
              onClick={() =>
                goTo(id)
              }
            >
              {label}
            </button>
          )
        )}
      </nav>

      <button
        className="nav-menu"
        onClick={() =>
          setOpen(!open)
        }
        aria-label="Toggle navigation"
      >
        {open ? <X /> : <Menu />}
      </button>
    </header>
  );
}