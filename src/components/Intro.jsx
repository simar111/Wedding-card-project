import { motion } from "framer-motion";
import {
  Heart,
  Sparkles,
  ArrowDown,
} from "lucide-react";

export function Intro() {
  const floatingHearts = [
    {
      left: "12%",
      top: "18%",
      delay: 0,
      size: 11,
    },
    {
      left: "84%",
      top: "25%",
      delay: 1.4,
      size: 8,
    },
    {
      left: "19%",
      top: "76%",
      delay: 2.2,
      size: 7,
    },
    {
      left: "88%",
      top: "73%",
      delay: .8,
      size: 10,
    },
  ];

  return (
    <>
      <style>{`

        /* =====================================================
           LOVE STORY INTRO
        ===================================================== */

        .love-intro {
          position: relative;

          min-height: 100vh;

          padding:
            130px
            6vw
            140px;

          overflow: hidden;

          background:
            radial-gradient(
              circle at 50% 42%,
              rgba(213, 173, 104, .10),
              transparent 34%
            ),

            linear-gradient(
              135deg,
              #fbf7ef,
              #f5eadc 48%,
              #f8f0e6
            );

          color: #2a1b16;

          isolation: isolate;
        }


        /* =====================================================
           PAPER TEXTURE
        ===================================================== */

        .love-paper {
          position: absolute;

          inset: 0;

          z-index: -5;

          pointer-events: none;

          opacity: .35;

          background-image:
            url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='180' height='180'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.75' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='.15'/%3E%3C/svg%3E");

          mix-blend-mode: multiply;
        }


        /* =====================================================
           AMBIENT GLOWS
        ===================================================== */

        .love-glow {
          position: absolute;

          border-radius: 50%;

          pointer-events: none;

          filter: blur(35px);

          z-index: -2;
        }

        .love-glow.one {
          width: 340px;
          height: 340px;

          left: -170px;
          top: 22%;

          background:
            rgba(205, 150, 106, .13);
        }

        .love-glow.two {
          width: 390px;
          height: 390px;

          right: -190px;
          bottom: 10%;

          background:
            rgba(171, 115, 67, .10);
        }


        /* =====================================================
           HEADER
        ===================================================== */

        .love-header {
          position: relative;

          max-width: 700px;

          margin:
            0 auto 90px;

          text-align: center;
        }


        .love-eyebrow {
          display: inline-flex;

          align-items: center;

          gap: 9px;

          margin-bottom: 16px;

          color: #a47745;

          font-family:
            "DM Sans",
            sans-serif;

          font-size: 8px;

          font-weight: 700;

          letter-spacing: .28em;

          text-transform: uppercase;
        }

        .love-eyebrow::before,
        .love-eyebrow::after {
          content: "";

          width: 25px;
          height: 1px;

          background:
            rgba(164,119,69,.45);
        }


        .love-header h2 {
          margin: 0;

          color: #2b1c17;

          font-family:
            "Cormorant Garamond",
            Georgia,
            serif;

          font-size:
            clamp(
              48px,
              6vw,
              76px
            );

          font-weight: 400;

          line-height: .9;

          letter-spacing:
            -.045em;
        }

        .love-header h2 em {
          color: #a96e50;

          font-weight: 400;
        }


        .love-header p {
          max-width: 510px;

          margin:
            24px auto 0;

          color: #806e62;

          font-family:
            "Cormorant Garamond",
            Georgia,
            serif;

          font-size:
            clamp(17px, 1.8vw, 21px);

          line-height: 1.45;
        }


        /* =====================================================
           ALBUM AREA
        ===================================================== */

        .love-album {
          position: relative;

          max-width: 1050px;

          min-height: 520px;

          margin: auto;

          display: flex;

          align-items: center;

          justify-content: center;
        }


        /* =====================================================
           DOTTED LOVE PATH
        ===================================================== */

        .love-path {
          position: absolute;

          left: 50%;
          top: 50%;

          width: 470px;
          height: 210px;

          transform:
            translate(-50%, -50%);

          border-top:
            1px dashed
            rgba(171,126,74,.25);

          border-radius:
            50%;

          pointer-events: none;
        }


        .love-path::after {
          content: "♡";

          position: absolute;

          left: 50%;
          top: -13px;

          transform:
            translateX(-50%);

          padding:
            0 10px;

          background:
            #f7eee3;

          color:
            #b17b5a;

          font-family:
            Georgia,
            serif;

          font-size: 20px;
        }


        /* =====================================================
           PERSON CARD
        ===================================================== */

        .love-person {
          position: relative;

          width: 330px;

          z-index: 4;
        }


        .love-person.left {
          transform:
            translateX(-80px)
            rotate(-4deg);
        }

        .love-person.right {
          transform:
            translateX(80px)
            rotate(4deg);
        }


        /* =====================================================
           POLAROID
        ===================================================== */

        .love-photo-card {
          position: relative;

          width: 100%;

          padding:
            13px
            13px
            55px;

          background:
            #fffdf9;

          border:
            1px solid
            rgba(116,84,55,.08);

          box-shadow:
            0 25px 55px
            rgba(63,40,24,.14),

            0 5px 12px
            rgba(63,40,24,.07);

          transition:
            transform .6s
            cubic-bezier(
              .22,
              1,
              .36,
              1
            ),

            box-shadow .6s
            ease;
        }

        .love-person:hover
        .love-photo-card {
          transform:
            translateY(-14px)
            rotate(0deg);

          box-shadow:
            0 35px 75px
            rgba(63,40,24,.18),

            0 8px 20px
            rgba(63,40,24,.08);
        }


        /* =====================================================
           IMAGE
        ===================================================== */

        .love-photo {
          position: relative;

          aspect-ratio:
            4 / 4.65;

          overflow: hidden;

          background:
            #eadbc9;
        }

        .love-photo img {
          width: 100%;
          height: 100%;

          display: block;

          object-fit: cover;

          filter:
            saturate(.88)
            contrast(.96);

          transform:
            scale(1.02);

          transition:
            transform 1.2s
            cubic-bezier(
              .22,
              1,
              .36,
              1
            ),

            filter .8s
            ease;
        }

        .love-person:hover
        .love-photo img {
          transform:
            scale(1.08);

          filter:
            saturate(1)
            contrast(1);
        }


        /* =====================================================
           PHOTO OVERLAY
        ===================================================== */

        .love-photo::after {
          content: "";

          position: absolute;

          inset: 0;

          background:
            linear-gradient(
              180deg,
              transparent 55%,
              rgba(35,17,11,.18)
            );

          pointer-events: none;
        }


        /* =====================================================
           TAPE
        ===================================================== */

        .love-tape {
          position: absolute;

          top: -11px;
          left: 50%;

          width: 72px;
          height: 25px;

          transform:
            translateX(-50%)
            rotate(-2deg);

          background:
            rgba(224,194,147,.72);

          box-shadow:
            0 3px 6px
            rgba(70,40,20,.08);

          opacity: .85;

          z-index: 10;
        }

        .love-person.right
        .love-tape {
          transform:
            translateX(-50%)
            rotate(3deg);
        }


        /* =====================================================
           CARD CAPTION
        ===================================================== */

        .love-caption {
          position: absolute;

          left: 25px;
          right: 25px;
          bottom: 14px;

          display: flex;
          flex-direction: column;

          align-items: center;
        }

        .love-caption strong {
          color: #35241d;

          font-family:
            "Cormorant Garamond",
            Georgia,
            serif;

          font-size: 27px;

          font-weight: 500;

          line-height: 1;
        }

        .love-caption span {
          margin-top: 4px;

          color: #ad8666;

          font-family:
            "DM Sans",
            sans-serif;

          font-size: 6px;

          font-weight: 600;

          letter-spacing: .24em;

          text-transform: uppercase;
        }


        /* =====================================================
           NUMBER
        ===================================================== */

        .love-number {
          position: absolute;

          top: 20px;
          right: 22px;

          z-index: 15;

          width: 32px;
          height: 32px;

          display: grid;
          place-items: center;

          border-radius: 50%;

          background:
            rgba(255,252,247,.85);

          color: #9f754e;

          font-family:
            "DM Sans",
            sans-serif;

          font-size: 7px;

          letter-spacing: .08em;

          box-shadow:
            0 4px 15px
            rgba(30,15,8,.1);
        }


        /* =====================================================
           CENTER HEART
        ===================================================== */

        .love-center {
          position: absolute;

          left: 50%;
          top: 50%;

          transform:
            translate(-50%, -50%);

          z-index: 10;

          width: 84px;
          height: 84px;

          display: grid;
          place-items: center;

          border-radius: 50%;

          background:
            rgba(255,250,242,.94);

          border:
            1px solid
            rgba(174,128,74,.2);

          box-shadow:
            0 15px 40px
            rgba(67,38,20,.12);
        }

        .love-center::before {
          content: "";

          position: absolute;

          inset: -8px;

          border:
            1px dashed
            rgba(174,128,74,.28);

          border-radius: 50%;
        }

        .love-center svg {
          width: 25px;
          height: 25px;

          color: #b46e63;

          filter:
            drop-shadow(
              0 4px 8px
              rgba(180,110,99,.2)
            );
        }

        .love-center span {
          position: absolute;

          bottom: 14px;

          color: #b18a68;

          font-family:
            "DM Sans",
            sans-serif;

          font-size: 6px;

          letter-spacing: .2em;

          text-transform: uppercase;
        }


        /* =====================================================
           FLOATING HEARTS
        ===================================================== */

        .love-float {
          position: absolute;

          z-index: 8;

          color:
            rgba(178,111,100,.42);

          pointer-events: none;
        }


        /* =====================================================
           BOTTOM NOTE
        ===================================================== */

        .love-note {
          margin:
            85px auto 0;

          display: flex;
          flex-direction: column;

          align-items: center;

          color: #9a806d;
        }

        .love-note span {
          font-family:
            "Cormorant Garamond",
            Georgia,
            serif;

          font-size: 19px;

          font-style: italic;
        }

        .love-note small {
          margin-top: 8px;

          font-family:
            "DM Sans",
            sans-serif;

          font-size: 6px;

          letter-spacing: .25em;

          text-transform: uppercase;

          color:
            rgba(137,108,86,.55);
        }


        /* =====================================================
           MOBILE
        ===================================================== */

        @media (max-width: 700px) {

          .love-intro {
            min-height: auto;

            padding:
              95px
              18px
              105px;
          }


          .love-header {
            margin-bottom: 55px;
          }

          .love-eyebrow {
            font-size: 6px;

            letter-spacing: .23em;
          }

          .love-eyebrow::before,
          .love-eyebrow::after {
            width: 16px;
          }

          .love-header h2 {
            font-size:
              clamp(
                43px,
                13vw,
                59px
              );

            line-height: .88;
          }

          .love-header p {
            max-width: 320px;

            margin-top: 18px;

            font-size: 16px;

            line-height: 1.35;
          }


          /* Album */

          .love-album {
            min-height: 740px;

            width: 100%;

            display: block;
          }


          /* Hide path */

          .love-path {
            width: 260px;
            height: 420px;

            border-top: 0;

            border-left:
              1px dashed
              rgba(171,126,74,.22);

            border-radius: 0;

            transform:
              translate(-50%, -50%)
              rotate(12deg);
          }

          .love-path::after {
            top: 50%;
            left: -11px;

            transform:
              translateY(-50%);
          }


          /* Person */

          .love-person {
            position: absolute;

            width:
              min(78vw, 310px);
          }

          .love-person.left {
            left: 3%;

            top: 0;

            transform:
              rotate(-5deg);
          }

          .love-person.right {
            right: 3%;

            top: 330px;

            transform:
              rotate(5deg);
          }


          /* Photo */

          .love-photo-card {
            padding:
              10px
              10px
              45px;
          }


          .love-caption {
            left: 18px;
            right: 18px;
            bottom: 11px;
          }

          .love-caption strong {
            font-size: 23px;
          }

          .love-caption span {
            font-size: 5px;
          }


          /* Center heart */

          .love-center {
            width: 65px;
            height: 65px;

            left: 50%;
            top: 50%;

            transform:
              translate(-50%, -50%);
          }

          .love-center::before {
            inset: -6px;
          }

          .love-center svg {
            width: 20px;
            height: 20px;
          }

          .love-center span {
            bottom: 10px;

            font-size: 5px;
          }


          /* Numbers */

          .love-number {
            top: 15px;
            right: 15px;

            width: 27px;
            height: 27px;

            font-size: 6px;
          }


          /* Tape */

          .love-tape {
            width: 58px;
            height: 20px;

            top: -8px;
          }


          /* Note */

          .love-note {
            margin-top: 15px;
          }

          .love-note span {
            font-size: 16px;
          }

          .love-note small {
            font-size: 5px;
          }


          /* Floating hearts */

          .love-float {
            display: none;
          }

        }


        /* =====================================================
           SMALL PHONES
        ===================================================== */

        @media (max-width: 390px) {

          .love-intro {
            padding:
              82px
              14px
              90px;
          }

          .love-header {
            margin-bottom: 42px;
          }

          .love-header h2 {
            font-size: 40px;
          }

          .love-header p {
            max-width: 285px;

            font-size: 15px;
          }

          .love-album {
            min-height: 665px;
          }

          .love-person {
            width: 76vw;
          }

          .love-person.right {
            top: 295px;
          }

          .love-caption strong {
            font-size: 21px;
          }

          .love-center {
            width: 57px;
            height: 57px;
          }

          .love-center svg {
            width: 18px;
            height: 18px;
          }

        }


        /* =====================================================
           REDUCED MOTION
        ===================================================== */

        @media (prefers-reduced-motion: reduce) {

          .love-person,
          .love-photo img {
            transition: none !important;
          }

        }

      `}</style>


      {/* =====================================================
          SECTION
      ===================================================== */}

      <section
        id="couple"
        className="love-intro"
      >

        <div className="love-paper" />

        <div className="love-glow one" />

        <div className="love-glow two" />


        {/* =================================================
            FLOATING HEARTS
        ================================================= */}

        {floatingHearts.map(
          (heart, index) => (
            <motion.div
              key={index}

              className="love-float"

              style={{
                left: heart.left,
                top: heart.top,
              }}

              animate={{
                y: [
                  0,
                  -12,
                  0,
                ],

                rotate: [
                  -5,
                  8,
                  -5,
                ],

                opacity: [
                  .25,
                  .65,
                  .25,
                ],
              }}

              transition={{
                duration:
                  3.5 +
                  index * .5,

                delay:
                  heart.delay,

                repeat: Infinity,

                ease: "easeInOut",
              }}
            >

              <Heart
                size={heart.size}
                fill="currentColor"
              />

            </motion.div>
          )
        )}


        {/* =================================================
            HEADER
        ================================================= */}

        <motion.header
          className="love-header"

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
            amount: .3,
          }}

          transition={{
            duration: .9,

            ease: [
              .22,
              1,
              .36,
              1,
            ],
          }}
        >

          <div className="love-eyebrow">

            <span>
              Our little story
            </span>

          </div>


          <h2>
            Two souls,
            <br />

            <em>one beautiful story.</em>
          </h2>


          <p>
            Somewhere between a hello
            and forever, we found each other.
          </p>

        </motion.header>


        {/* =================================================
            ALBUM
        ================================================= */}

        <div className="love-album">


          {/* Love path */}

          <motion.div
            className="love-path"

            initial={{
              opacity: 0,
              scaleX: 0,
            }}

            whileInView={{
              opacity: 1,
              scaleX: 1,
            }}

            viewport={{
              once: true,
            }}

            transition={{
              duration: 1.2,
              delay: .3,
            }}
          />


          {/* =================================================
              ARJUN
          ================================================= */}

          <motion.article
            className="
              love-person
              left
            "

            initial={{
              opacity: 0,
              x: -100,
              rotate: -12,
            }}

            whileInView={{
              opacity: 1,
              x: 0,
              rotate: -4,
            }}

            viewport={{
              once: true,
              amount: .2,
            }}

            transition={{
              duration: 1.1,

              ease: [
                .22,
                1,
                .36,
                1,
              ],
            }}
          >

            <div
              className="
                love-photo-card
              "
            >

              <div
                className="
                  love-tape
                "
              />

              <div
                className="
                  love-number
                "
              >
                01
              </div>


              <div
                className="
                  love-photo
                "
              >

                <img
                  src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=1000&q=90"
                  alt="Arjun"
                  loading="lazy"
                />

              </div>


              <div
                className="
                  love-caption
                "
              >

                <strong>
                  Arjun
                </strong>

                <span>
                  The Groom
                </span>

              </div>

            </div>

          </motion.article>


          {/* =================================================
              CENTER HEART
          ================================================= */}

          <motion.div
            className="love-center"

            initial={{
              opacity: 0,
              scale: 0,
            }}

            whileInView={{
              opacity: 1,
              scale: 1,
            }}

            viewport={{
              once: true,
            }}

            transition={{
              delay: .55,

              duration: .8,

              type: "spring",

              stiffness: 120,

              damping: 12,
            }}
          >

            <motion.div
              animate={{
                scale: [
                  1,
                  1.1,
                  1,
                ],
              }}

              transition={{
                duration: 2.2,

                repeat: Infinity,

                ease: "easeInOut",
              }}
            >

              <Heart
                fill="currentColor"
              />

            </motion.div>

            <span>
              together
            </span>

          </motion.div>


          {/* =================================================
              MEERA
          ================================================= */}

          <motion.article
            className="
              love-person
              right
            "

            initial={{
              opacity: 0,
              x: 100,
              rotate: 12,
            }}

            whileInView={{
              opacity: 1,
              x: 0,
              rotate: 4,
            }}

            viewport={{
              once: true,
              amount: .2,
            }}

            transition={{
              duration: 1.1,
              delay: .12,

              ease: [
                .22,
                1,
                .36,
                1,
              ],
            }}
          >

            <div
              className="
                love-photo-card
              "
            >

              <div
                className="
                  love-tape
                "
              />

              <div
                className="
                  love-number
                "
              >
                02
              </div>


              <div
                className="
                  love-photo
                "
              >

                <img
                  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=1000&q=90"
                  alt="Meera"
                  loading="lazy"
                />

              </div>


              <div
                className="
                  love-caption
                "
              >

                <strong>
                  Meera
                </strong>

                <span>
                  The Bride
                </span>

              </div>

            </div>

          </motion.article>

        </div>


        {/* =================================================
            BOTTOM NOTE
        ================================================= */}

        <motion.div
          className="love-note"

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
          }}
        >

          <span>
            And this is only the beginning...
          </span>

          <small>
            More memories to come
          </small>

        </motion.div>


      </section>
    </>
  );
}