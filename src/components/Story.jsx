import { motion } from "framer-motion";
import {
  Heart,
  Sparkles,
  ArrowDownRight,
} from "lucide-react";

export function Story() {
  return (
    <>
      <style>{`

        /* =========================================================
           STORY SECTION — CINEMATIC LOVE CHAPTER
        ========================================================= */

        .story-new {
          position: relative;
          min-height: 100vh;
          padding: 120px 6vw;
          overflow: hidden;
          background:
            radial-gradient(
              circle at 12% 30%,
              rgba(184, 133, 76, .10),
              transparent 28%
            ),
            radial-gradient(
              circle at 88% 75%,
              rgba(154, 91, 75, .08),
              transparent 30%
            ),
            #211915;
          color: #f8efe3;
          isolation: isolate;
        }

        /* subtle grain */

        .story-grain {
          position: absolute;
          inset: 0;
          z-index: -1;
          pointer-events: none;
          opacity: .16;
          background-image:
            url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='180' height='180'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='.22'/%3E%3C/svg%3E");
          mix-blend-mode: screen;
        }

        /* ambient light */

        .story-light {
          position: absolute;
          border-radius: 50%;
          filter: blur(60px);
          pointer-events: none;
          z-index: -1;
        }

        .story-light.one {
          width: 360px;
          height: 360px;
          left: -180px;
          top: 15%;
          background: rgba(205, 155, 95, .10);
        }

        .story-light.two {
          width: 420px;
          height: 420px;
          right: -220px;
          bottom: 5%;
          background: rgba(158, 87, 72, .11);
        }

        /* layout */

        .story-layout {
          position: relative;
          max-width: 1220px;
          min-height: 720px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: 1.05fr .95fr;
          align-items: center;
          gap: clamp(55px, 8vw, 120px);
        }

        /* =========================================================
           IMAGE SIDE
           ========================================================= */

        .story-visual {
          position: relative;
          height: min(690px, 72vw);
          min-height: 530px;
        }

        .story-image-frame {
          position: absolute;
          inset: 0 7% 4% 0;
          overflow: hidden;
          background: #38271f;
          border: 1px solid rgba(230, 198, 151, .22);
          box-shadow:
            0 35px 90px rgba(0, 0, 0, .40),
            0 10px 30px rgba(0, 0, 0, .22);
        }

        .story-image-frame::before {
          content: "";
          position: absolute;
          inset: 14px;
          z-index: 3;
          border: 1px solid rgba(242, 213, 168, .35);
          pointer-events: none;
        }

        .story-image-frame::after {
          content: "";
          position: absolute;
          inset: 0;
          z-index: 2;
          background:
            linear-gradient(
              180deg,
              rgba(23, 13, 9, .04) 25%,
              rgba(23, 13, 9, .20) 70%,
              rgba(23, 13, 9, .58) 100%
            );
          pointer-events: none;
        }

        .story-image {
          width: 100%;
          height: 100%;
          display: block;
          object-fit: cover;
          object-position: center;
          filter:
            saturate(.78)
            contrast(1.02)
            sepia(.08);
          transform: scale(1.12);
          transition:
            transform 1.8s cubic-bezier(.22,1,.36,1),
            filter 1.2s ease;
        }

        .story-image-frame:hover .story-image {
          transform: scale(1.04);
          filter:
            saturate(.95)
            contrast(1.03)
            sepia(.03);
        }

        /* image corner ornament */

        .story-corner {
          position: absolute;
          z-index: 5;
          width: 58px;
          height: 58px;
          border-color: rgba(224, 187, 132, .65);
          pointer-events: none;
        }

        .story-corner.top-left {
          left: 25px;
          top: 25px;
          border-left: 1px solid;
          border-top: 1px solid;
        }

        .story-corner.bottom-right {
          right: 25px;
          bottom: 25px;
          border-right: 1px solid;
          border-bottom: 1px solid;
        }

        /* floating chapter label */

        .story-chapter {
          position: absolute;
          z-index: 10;
          left: -42px;
          top: 54px;
          width: 94px;
          height: 94px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          border-radius: 50%;
          background: rgba(39, 27, 21, .92);
          border: 1px solid rgba(218, 178, 120, .45);
          box-shadow:
            0 18px 45px rgba(0, 0, 0, .35);
          backdrop-filter: blur(12px);
        }

        .story-chapter::before {
          content: "";
          position: absolute;
          inset: 7px;
          border: 1px dashed rgba(218, 178, 120, .28);
          border-radius: 50%;
        }

        .story-chapter strong {
          position: relative;
          color: #dcb887;
          font-family: "Cormorant Garamond", Georgia, serif;
          font-size: 28px;
          font-weight: 400;
          line-height: 1;
        }

        .story-chapter span {
          position: relative;
          margin-top: 4px;
          color: rgba(247, 230, 204, .65);
          font-family: "DM Sans", sans-serif;
          font-size: 6px;
          letter-spacing: .25em;
          text-transform: uppercase;
        }

        /* photo caption */

        .story-photo-caption {
          position: absolute;
          z-index: 8;
          left: 42px;
          bottom: 35px;
          display: flex;
          align-items: center;
          gap: 12px;
          color: rgba(255, 242, 220, .88);
        }

        .story-photo-caption-line {
          width: 42px;
          height: 1px;
          background: rgba(231, 197, 145, .7);
        }

        .story-photo-caption span {
          font-family: "DM Sans", sans-serif;
          font-size: 7px;
          letter-spacing: .27em;
          text-transform: uppercase;
        }

        /* floating date */

        .story-date {
          position: absolute;
          z-index: 9;
          right: -8px;
          bottom: 20px;
          width: 125px;
          padding: 18px 20px;
          background: rgba(250, 239, 222, .96);
          color: #34231b;
          box-shadow: 0 18px 45px rgba(0,0,0,.28);
          transform: rotate(3deg);
        }

        .story-date::before {
          content: "";
          position: absolute;
          top: -9px;
          left: 50%;
          width: 48px;
          height: 17px;
          transform: translateX(-50%) rotate(-2deg);
          background: rgba(207, 169, 112, .65);
        }

        .story-date small {
          display: block;
          color: #a47a50;
          font-family: "DM Sans", sans-serif;
          font-size: 6px;
          font-weight: 700;
          letter-spacing: .25em;
          text-transform: uppercase;
        }

        .story-date strong {
          display: block;
          margin-top: 5px;
          font-family: "Cormorant Garamond", Georgia, serif;
          font-size: 25px;
          font-weight: 500;
          line-height: 1;
        }

        /* =========================================================
           COPY SIDE
           ========================================================= */

        .story-content {
          position: relative;
          max-width: 500px;
          padding: 25px 0;
        }

        .story-eyebrow {
          display: flex;
          align-items: center;
          gap: 13px;
          color: #d3aa75;
          font-family: "DM Sans", sans-serif;
          font-size: 8px;
          font-weight: 700;
          letter-spacing: .30em;
          text-transform: uppercase;
        }

        .story-eyebrow::before {
          content: "";
          width: 36px;
          height: 1px;
          background: rgba(211, 170, 117, .6);
        }

        .story-title {
          margin: 18px 0 25px;
          color: #f8eee2;
          font-family: "Cormorant Garamond", Georgia, serif;
          font-size: clamp(55px, 6.5vw, 82px);
          font-weight: 400;
          line-height: .83;
          letter-spacing: -.055em;
        }

        .story-title em {
          color: #d2a16e;
          font-weight: 400;
        }

        .story-intro {
          max-width: 430px;
          margin-bottom: 38px;
          color: rgba(239, 221, 199, .68);
          font-family: "Cormorant Garamond", Georgia, serif;
          font-size: clamp(18px, 2vw, 22px);
          line-height: 1.45;
        }

        /* timeline */

        .story-timeline {
          position: relative;
          padding-left: 31px;
        }

        .story-timeline::before {
          content: "";
          position: absolute;
          left: 5px;
          top: 7px;
          bottom: 8px;
          width: 1px;
          background:
            linear-gradient(
              to bottom,
              rgba(212, 170, 112, .55),
              rgba(212, 170, 112, .08)
            );
        }

        .story-point {
          position: relative;
          margin-bottom: 28px;
        }

        .story-point:last-child {
          margin-bottom: 0;
        }

        .story-point::before {
          content: "";
          position: absolute;
          left: -31px;
          top: 5px;
          width: 11px;
          height: 11px;
          border-radius: 50%;
          background: #2b1d18;
          border: 1px solid #d2a16e;
          box-shadow:
            0 0 0 5px rgba(210, 161, 110, .07);
        }

        .story-point-label {
          display: block;
          margin-bottom: 7px;
          color: #c99b69;
          font-family: "DM Sans", sans-serif;
          font-size: 6px;
          font-weight: 700;
          letter-spacing: .25em;
          text-transform: uppercase;
        }

        .story-point p {
          margin: 0;
          color: rgba(245, 227, 204, .72);
          font-family: "DM Sans", sans-serif;
          font-size: 13px;
          line-height: 1.7;
        }

        /* =========================================================
           SIGNATURE
           ========================================================= */

        .story-bottom {
          display: flex;
          align-items: center;
          gap: 25px;
          margin-top: 45px;
        }

        .story-signature {
          color: #f2ddc0;
          font-family: "Great Vibes", cursive;
          font-size: 39px;
          line-height: 1;
        }

        .story-signature span {
          display: inline-block;
          margin: 0 5px;
          color: #c9796c;
          font-family: Georgia, serif;
          font-size: 20px;
          animation: story-heart 2.4s ease-in-out infinite;
        }

        @keyframes story-heart {
          0%, 100% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.25);
          }
        }

        .story-bottom-line {
          width: 75px;
          height: 1px;
          background: rgba(211, 170, 117, .28);
        }

        .story-bottom-note {
          color: rgba(232, 210, 184, .42);
          font-family: "DM Sans", sans-serif;
          font-size: 6px;
          letter-spacing: .23em;
          text-transform: uppercase;
        }

        /* =========================================================
           FLOATING DECOR
           ========================================================= */

        .story-sparkle {
          position: absolute;
          z-index: 3;
          color: rgba(220, 184, 132, .55);
          pointer-events: none;
        }

        .story-sparkle.one {
          left: 4%;
          top: 18%;
        }

        .story-sparkle.two {
          left: 44%;
          bottom: 12%;
        }

        .story-sparkle.three {
          right: 6%;
          top: 19%;
        }

        /* =========================================================
           MOBILE
           ========================================================= */

        @media (max-width: 850px) {

          .story-new {
            min-height: auto;
            padding: 95px 20px 100px;
          }

          .story-layout {
            display: flex;
            flex-direction: column;
            min-height: auto;
            gap: 65px;
          }

          .story-visual {
            width: 100%;
            height: 105vw;
            min-height: 450px;
            max-height: 620px;
          }

          .story-image-frame {
            inset: 0 4% 4% 4%;
          }

          .story-chapter {
            left: -2px;
            top: 25px;
            width: 75px;
            height: 75px;
          }

          .story-chapter strong {
            font-size: 23px;
          }

          .story-chapter span {
            font-size: 5px;
          }

          .story-date {
            right: -2px;
            bottom: 5px;
            width: 108px;
            padding: 15px 17px;
          }

          .story-date strong {
            font-size: 22px;
          }

          .story-photo-caption {
            left: 30px;
            bottom: 27px;
          }

          .story-content {
            width: 100%;
            max-width: 560px;
            margin: 0 auto;
          }

          .story-title {
            font-size: clamp(52px, 14vw, 70px);
          }

          .story-intro {
            font-size: 18px;
          }

          .story-sparkle.one {
            left: 8%;
            top: 8%;
          }

          .story-sparkle.two {
            left: auto;
            right: 12%;
            bottom: 5%;
          }

          .story-sparkle.three {
            display: none;
          }
        }

        @media (max-width: 480px) {

          .story-new {
            padding: 82px 16px 90px;
          }

          .story-layout {
            gap: 52px;
          }

          .story-visual {
            height: 112vw;
            min-height: 400px;
          }

          .story-image-frame {
            inset: 0 2% 3% 2%;
          }

          .story-image-frame::before {
            inset: 10px;
          }

          .story-corner {
            width: 40px;
            height: 40px;
          }

          .story-corner.top-left {
            left: 17px;
            top: 17px;
          }

          .story-corner.bottom-right {
            right: 17px;
            bottom: 17px;
          }

          .story-chapter {
            left: -4px;
            top: 17px;
            width: 65px;
            height: 65px;
          }

          .story-chapter strong {
            font-size: 20px;
          }

          .story-date {
            right: -4px;
            width: 96px;
            padding: 13px 14px;
          }

          .story-date small {
            font-size: 5px;
          }

          .story-date strong {
            font-size: 19px;
          }

          .story-photo-caption {
            left: 24px;
            bottom: 22px;
            gap: 8px;
          }

          .story-photo-caption-line {
            width: 27px;
          }

          .story-photo-caption span {
            font-size: 5px;
            letter-spacing: .2em;
          }

          .story-eyebrow {
            font-size: 6px;
            letter-spacing: .24em;
          }

          .story-eyebrow::before {
            width: 25px;
          }

          .story-title {
            margin-top: 15px;
            font-size: 49px;
          }

          .story-intro {
            margin-bottom: 32px;
            font-size: 17px;
          }

          .story-timeline {
            padding-left: 27px;
          }

          .story-timeline::before {
            left: 4px;
          }

          .story-point::before {
            left: -27px;
            width: 9px;
            height: 9px;
          }

          .story-point {
            margin-bottom: 24px;
          }

          .story-point p {
            font-size: 12px;
            line-height: 1.65;
          }

          .story-bottom {
            margin-top: 35px;
            gap: 14px;
          }

          .story-signature {
            font-size: 34px;
          }

          .story-bottom-line {
            width: 35px;
          }

          .story-bottom-note {
            font-size: 5px;
          }
        }

        @media (prefers-reduced-motion: reduce) {

          .story-image {
            transform: scale(1.02) !important;
            transition: none !important;
          }

          .story-signature span {
            animation: none !important;
          }
        }

      `}</style>

      <section
        id="story"
        className="story-new"
      >
        <div className="story-grain" />

        <div className="story-light one" />
        <div className="story-light two" />

        {/* Floating decorative stars */}

        <motion.div
          className="story-sparkle one"
          animate={{
            y: [0, -10, 0],
            rotate: [0, 90, 180],
            opacity: [.25, .7, .25],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <Sparkles size={17} />
        </motion.div>

        <motion.div
          className="story-sparkle two"
          animate={{
            y: [0, -8, 0],
            rotate: [0, -60, 0],
            opacity: [.2, .55, .2],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
        >
          <Sparkles size={13} />
        </motion.div>

        <motion.div
          className="story-sparkle three"
          animate={{
            y: [0, 12, 0],
            rotate: [0, 80, 0],
            opacity: [.2, .6, .2],
          }}
          transition={{
            duration: 4.5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: .5,
          }}
        >
          <Sparkles size={20} />
        </motion.div>

        <div className="story-layout">

          {/* =====================================================
              PHOTO
              ===================================================== */}

          <div className="story-visual">

            <motion.div
              className="story-chapter"
              initial={{
                opacity: 0,
                scale: .5,
                rotate: -20,
              }}
              whileInView={{
                opacity: 1,
                scale: 1,
                rotate: 0,
              }}
              viewport={{
                once: true,
                amount: .3,
              }}
              transition={{
                duration: .8,
                type: "spring",
                stiffness: 130,
                damping: 12,
              }}
            >
              <strong>
                01
              </strong>

              <span>
                chapter
              </span>
            </motion.div>

            <motion.div
              className="story-image-frame"
              initial={{
                opacity: 0,
                scale: 1.08,
                y: 45,
              }}
              whileInView={{
                opacity: 1,
                scale: 1,
                y: 0,
              }}
              viewport={{
                once: true,
                amount: .2,
              }}
              transition={{
                duration: 1.3,
                ease: [.22, 1, .36, 1],
              }}
            >
              <motion.img
                className="story-image"
                src="https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1400&q=90"
                alt="Wedding couple"
                loading="lazy"
                initial={{
                  scale: 1.16,
                }}
                whileInView={{
                  scale: 1.04,
                }}
                viewport={{
                  once: true,
                  amount: .2,
                }}
                transition={{
                  duration: 2,
                  ease: [.22, 1, .36, 1],
                }}
              />

              <div className="story-corner top-left" />
              <div className="story-corner bottom-right" />

              <div className="story-photo-caption">
                <div className="story-photo-caption-line" />
                <span>
                  A moment worth remembering
                </span>
              </div>
            </motion.div>

            <motion.div
              className="story-date"
              initial={{
                opacity: 0,
                x: 45,
                rotate: 10,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
                rotate: 3,
              }}
              viewport={{
                once: true,
                amount: .25,
              }}
              transition={{
                duration: .9,
                delay: .45,
                ease: [.22, 1, .36, 1],
              }}
            >
              <small>
                The day we begin
              </small>

              <strong>
                16 · 02 · 27
              </strong>
            </motion.div>

          </div>

          {/* =====================================================
              STORY COPY
              ===================================================== */}

          <motion.div
            className="story-content"
            initial={{
              opacity: 0,
              x: 60,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
              amount: .2,
            }}
            transition={{
              duration: 1,
              ease: [.22, 1, .36, 1],
            }}
          >

            <div className="story-eyebrow">
              Our story
            </div>

            <h2 className="story-title">
              From a hello
              <br />
              <em>to forever.</em>
            </h2>

            <motion.p
              className="story-intro"
              initial={{
                opacity: 0,
                y: 20,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: .8,
                delay: .2,
              }}
            >
              It started with a simple hello,
              grew through countless conversations,
              and quietly became the love story
              we never knew we were waiting for.
            </motion.p>

            <div className="story-timeline">

              <motion.div
                className="story-point"
                initial={{
                  opacity: 0,
                  x: 20,
                }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  duration: .7,
                  delay: .25,
                }}
              >
                <span className="story-point-label">
                  The beginning
                </span>

                <p>
                  Somewhere between coffee,
                  conversations and shared smiles,
                  two strangers became something
                  a little more.
                </p>
              </motion.div>

              <motion.div
                className="story-point"
                initial={{
                  opacity: 0,
                  x: 20,
                }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  duration: .7,
                  delay: .4,
                }}
              >
                <span className="story-point-label">
                  The journey
                </span>

                <p>
                  Days turned into memories,
                  little moments turned into traditions,
                  and every chapter gave us another
                  reason to choose each other.
                </p>
              </motion.div>

              <motion.div
                className="story-point"
                initial={{
                  opacity: 0,
                  x: 20,
                }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  duration: .7,
                  delay: .55,
                }}
              >
                <span className="story-point-label">
                  The next chapter
                </span>

                <p>
                  And now, surrounded by our favourite
                  people, we're ready to begin the most
                  beautiful chapter yet.
                </p>
              </motion.div>

            </div>

            <motion.div
              className="story-bottom"
              initial={{
                opacity: 0,
                y: 15,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: .8,
                delay: .65,
              }}
            >
              <div className="story-signature">
                A
                <span>♡</span>
                M
              </div>

              <div className="story-bottom-line" />

              <div className="story-bottom-note">
                Forever starts here
              </div>
            </motion.div>

          </motion.div>

        </div>

      </section>
    </>
  );
}