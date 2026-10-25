import { motion } from "framer-motion";
import {
  ChevronDown,
  MapPin,
  Sparkles,
} from "lucide-react";

import { wedding } from "../data/wedding";

export function Hero() {
  const particles = Array.from(
    { length: 26 },
    (_, index) => index
  );

  return (
    <>
      <style>{`

        /* =====================================================
           PREMIUM EDITORIAL HERO
        ===================================================== */

        .editorial-hero {
          position: relative;

          width: 100%;
          height: 100svh;
          min-height: 680px;

          overflow: hidden;

          display: flex;
          align-items: center;
          justify-content: center;

          background: #100d18;

          color: #fffaf5;

          isolation: isolate;
        }


        /* =====================================================
           BACKGROUND IMAGE
        ===================================================== */

        .editorial-bg {
          position: absolute;

          inset: -6%;

          z-index: -20;

          background-image:
            url("https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=2400&q=95");

          background-size: cover;

          background-position:
            center 38%;

          transform: scale(1.04);

          will-change: transform;

          animation:
            editorialZoom
            22s
            ease-in-out
            infinite alternate;
        }

        @keyframes editorialZoom {

          0% {
            transform:
              scale(1.04)
              translate3d(0, 0, 0);
          }

          100% {
            transform:
              scale(1.11)
              translate3d(-.6%, -.5%, 0);
          }

        }


        /* =====================================================
           CINEMATIC OVERLAY
        ===================================================== */

        .editorial-overlay {
          position: absolute;
          inset: 0;

          z-index: -15;

          background:
            linear-gradient(
              180deg,
              rgba(16, 13, 24, .82) 0%,
              rgba(43, 32, 56, .30) 25%,
              rgba(89, 66, 103, .08) 48%,
              rgba(16, 13, 24, .48) 70%,
              rgba(13, 10, 20, .94) 100%
            );
        }


        /* =====================================================
           WINE COLOR GRADE
        ===================================================== */

        .editorial-grade {
          position: absolute;
          inset: 0;

          z-index: -14;

          pointer-events: none;

          background:
            radial-gradient(
              ellipse at 50% 43%,
              rgba(196, 169, 215, .16),
              transparent 48%
            ),

            linear-gradient(
              90deg,
              rgba(43, 32, 56, .40),
              transparent 35%,
              transparent 65%,
              rgba(43, 32, 56, .40)
            );

          mix-blend-mode: color;
        }


        /* =====================================================
           CENTRAL SPOTLIGHT
        ===================================================== */

        .editorial-spotlight {
          position: absolute;

          left: 50%;
          top: 46%;

          width: min(70vw, 900px);
          height: min(70vw, 900px);

          transform:
            translate(-50%, -50%);

          z-index: -10;

          border-radius: 50%;

          pointer-events: none;

          background:
            radial-gradient(
              circle,
              rgba(255, 250, 245, .14) 0%,
              rgba(216, 188, 229, .07) 30%,
              transparent 70%
            );

          filter: blur(20px);

          animation:
            spotlightPulse
            6s
            ease-in-out
            infinite;
        }

        @keyframes spotlightPulse {

          0%,
          100% {
            opacity: .55;

            transform:
              translate(-50%, -50%)
              scale(.92);
          }

          50% {
            opacity: 1;

            transform:
              translate(-50%, -50%)
              scale(1.07);
          }

        }


        /* =====================================================
           FILM GRAIN
        ===================================================== */

        .editorial-grain {
          position: absolute;
          inset: 0;

          z-index: 30;

          pointer-events: none;

          opacity: .055;

          background-image:
            url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='180' height='180'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.8' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='.7'/%3E%3C/svg%3E");

          mix-blend-mode: overlay;
        }


        /* =====================================================
           GOLD DUST
        ===================================================== */

        .editorial-particles {
          position: absolute;
          inset: 0;

          z-index: 12;

          overflow: hidden;

          pointer-events: none;
        }

        .editorial-particles i {
          position: absolute;

          width: 2px;
          height: 2px;

          border-radius: 50%;

          background: #d8bce5;

          box-shadow:
            0 0 7px
            rgba(216, 188, 229, .9),

            0 0 16px
            rgba(196, 169, 215, .28);
        }


        /* =====================================================
           OUTER FRAME
        ===================================================== */

        .editorial-frame {
          position: absolute;

          inset: 22px;

          z-index: 25;

          pointer-events: none;

          border:
            1px solid
            rgba(216, 188, 229, .26);
        }

        .editorial-frame::before {
          content: "";

          position: absolute;

          inset: 6px;

          border:
            1px solid
            rgba(255, 250, 245, .08);
        }


        /* =====================================================
           FRAME CORNERS
        ===================================================== */

        .editorial-corner {
          position: absolute;

          width: 45px;
          height: 45px;

          border-color:
            rgba(216, 188, 229, .72);
        }

        .editorial-corner.tl {
          top: -1px;
          left: -1px;

          border-top: 1px solid;
          border-left: 1px solid;
        }

        .editorial-corner.tr {
          top: -1px;
          right: -1px;

          border-top: 1px solid;
          border-right: 1px solid;
        }

        .editorial-corner.bl {
          bottom: -1px;
          left: -1px;

          border-bottom: 1px solid;
          border-left: 1px solid;
        }

        .editorial-corner.br {
          bottom: -1px;
          right: -1px;

          border-bottom: 1px solid;
          border-right: 1px solid;
        }


        /* =====================================================
           TOP BRAND
        ===================================================== */

        .editorial-top {
          position: absolute;

          top: 8%;

          left: 50%;

          transform:
            translateX(-50%);

          z-index: 35;

          display: flex;
          align-items: center;

          gap: 13px;

          color: #d8bce5;
        }

        .editorial-top-line {
          width: 72px;
          height: 1px;

          background:
            linear-gradient(
              90deg,
              transparent,
              rgba(216, 188, 229, .72),
              transparent
            );
        }

        .editorial-top span {
          font-size: 8px;

          opacity: .75;
        }


        /* =====================================================
           MAIN CONTENT
        ===================================================== */

        .editorial-content {
          position: relative;

          z-index: 20;

          width: min(900px, 92vw);

          display: flex;
          flex-direction: column;
          align-items: center;

          text-align: center;
        }


        /* =====================================================
           SANSKRIT
        ===================================================== */

        .editorial-sanskrit {
          margin-bottom: 17px;

          color: #d8bce5;

          font-family:
            "Noto Serif Devanagari",
            "Nirmala UI",
            serif;

          font-size:
            clamp(13px, 1.25vw, 17px);

          letter-spacing: .08em;

          text-shadow:
            0 0 25px
            rgba(216, 188, 229, .36);
        }


        /* =====================================================
           EYEBROW
        ===================================================== */

        .editorial-eyebrow {
          display: flex;
          align-items: center;

          gap: 10px;

          margin-bottom: 30px;

          color:
            rgba(255, 250, 245, .72);

          font-family:
            "DM Sans",
            sans-serif;

          font-size: 8px;

          font-weight: 600;

          letter-spacing: .34em;

          text-transform: uppercase;
        }

        .editorial-eyebrow-line {
          width: 25px;
          height: 1px;

          background:
            rgba(216, 188, 229, .65);
        }


        /* =====================================================
           NAME AREA
        ===================================================== */

        .editorial-names {
          position: relative;

          display: flex;
          flex-direction: column;

          align-items: center;

          gap: 0;
        }


        /* =====================================================
           GOLD ORNAMENT CIRCLE
        ===================================================== */

        .editorial-orbit {
          position: absolute;

          left: 50%;
          top: 50%;

          width: 370px;
          height: 370px;

          transform:
            translate(-50%, -50%);

          border:
            1px solid
            rgba(216, 188, 229, .22);

          border-radius: 50%;

          pointer-events: none;

          opacity: .7;
        }

        .editorial-orbit::before {
          content: "";

          position: absolute;

          inset: 18px;

          border:
            1px dashed
            rgba(216, 188, 229, .16);

          border-radius: 50%;
        }

        .editorial-orbit::after {
          content: "✦";

          position: absolute;

          left: 50%;
          top: -7px;

          transform:
            translateX(-50%);

          color: #c4a9d7;

          font-size: 12px;

          background:
            rgba(43, 32, 56, .55);

          padding: 0 8px;
        }


        /* =====================================================
           NAMES
        ===================================================== */

        .editorial-name {
          position: relative;

          margin: 0;

          color: #fffaf5;

          font-family:
            "Cormorant Garamond",
            Georgia,
            serif;

          font-size:
            clamp(
              75px,
              10vw,
              145px
            );

          font-weight: 400;

          line-height: .68;

          letter-spacing:
            -.055em;

          text-shadow:
            0 6px 40px
            rgba(0,0,0,.55),

            0 0 45px
            rgba(226,184,104,.08);
        }


        /* =====================================================
           AMPERSAND
        ===================================================== */

        .editorial-ampersand {
          position: relative;

          z-index: 5;

          margin:
            20px 0 18px;

          color: #c4a9d7;

          font-family:
            "Great Vibes",
            cursive;

          font-size:
            clamp(
              45px,
              5vw,
              70px
            );

          line-height: .8;

          text-shadow:
            0 0 30px
            rgba(196,169,215,.38);
        }


        /* =====================================================
           DATE PANEL
        ===================================================== */

        .editorial-details {
          display: flex;
          align-items: center;

          margin-top: 37px;

          padding:
            10px 20px;

          border:
            1px solid
            rgba(216, 188, 229, .28);

          border-radius: 999px;

          background:
            rgba(20, 5, 9, .27);

          backdrop-filter:
            blur(14px);

          box-shadow:
            inset 0 0 25px
            rgba(216,188,229,.035);
        }

        .editorial-details span {
          color:
            rgba(255, 250, 245, .86);

          font-family:
            "DM Sans",
            sans-serif;

          font-size: 8px;

          letter-spacing: .2em;

          text-transform: uppercase;
        }

        .editorial-details b {
          margin:
            0 12px;

          color: #c4a9d7;

          font-size: 6px;
        }


        /* =====================================================
           VENUE
        ===================================================== */

        .editorial-venue {
          display: flex;
          align-items: center;

          gap: 7px;

          margin-top: 13px;

          color:
            rgba(255, 250, 245, .68);

          font-family:
            "DM Sans",
            sans-serif;

          font-size: 8px;

          letter-spacing: .16em;

          text-transform: uppercase;
        }

        .editorial-venue svg {
          width: 11px;
          height: 11px;

          color: #c4a9d7;
        }


        /* =====================================================
           BOTTOM QUOTE
        ===================================================== */

        .editorial-quote {
          margin:
            22px 0 0;

          color:
            rgba(255, 250, 245, .80);

          font-family:
            "Cormorant Garamond",
            Georgia,
            serif;

          font-size:
            clamp(16px, 1.6vw, 21px);

          font-style: italic;

          letter-spacing: .015em;
        }


        /* =====================================================
           SCROLL
        ===================================================== */

        .editorial-scroll {
          position: absolute;

          left: 50%;
          bottom: 27px;

          transform:
            translateX(-50%);

          z-index: 35;

          display: flex;
          flex-direction: column;
          align-items: center;

          gap: 7px;

          color:
            rgba(255, 250, 245, .58);

          font-family:
            "DM Sans",
            sans-serif;

          font-size: 7px;

          letter-spacing: .25em;

          text-transform: uppercase;

          white-space: nowrap;
        }

        .editorial-scroll svg {
          width: 17px;
          height: 17px;

          color: #c4a9d7;
        }


        /* =====================================================
           SIDE DATE - DESKTOP
        ===================================================== */

        .editorial-side-date {
          position: absolute;

          left: 5.5%;
          top: 50%;

          transform:
            translateY(-50%);

          z-index: 35;

          display: flex;
          flex-direction: column;
          align-items: center;

          gap: 9px;

          color:
            rgba(255, 250, 245, .62);

          font-family:
            "DM Sans",
            sans-serif;

          font-size: 7px;

          letter-spacing: .2em;

          writing-mode:
            vertical-rl;

          text-transform: uppercase;
        }

        .editorial-side-date::before,
        .editorial-side-date::after {
          content: "";

          width: 1px;
          height: 48px;

          background:
            linear-gradient(
              to bottom,
              transparent,
              rgba(216,188,229,.58),
              transparent
            );
        }


        /* =====================================================
           SIDE SPARK
        ===================================================== */

        .editorial-side-spark {
          position: absolute;

          right: 5.5%;
          top: 50%;

          transform:
            translateY(-50%);

          z-index: 35;

          display: flex;
          flex-direction: column;
          align-items: center;

          gap: 8px;

          color: #c4a9d7;

          opacity: .7;
        }

        .editorial-side-spark::before,
        .editorial-side-spark::after {
          content: "";

          width: 1px;
          height: 45px;

          background:
            linear-gradient(
              to bottom,
              transparent,
              rgba(216,188,229,.52),
              transparent
            );
        }

        .editorial-side-spark span {
          font-size: 10px;
        }


        /* =====================================================
           MOBILE
        ===================================================== */

        @media (max-width: 700px) {

          .editorial-hero {
            min-height: 100svh;
            height: 100svh;
          }


          /* Mobile photo crop */

          .editorial-bg {
            inset: -8% -18%;

            background-position:
              55% center;

            animation:
              mobileEditorialZoom
              20s
              ease-in-out
              infinite alternate;
          }

          @keyframes mobileEditorialZoom {

            0% {
              transform:
                scale(1.07)
                translate3d(0,0,0);
            }

            100% {
              transform:
                scale(1.16)
                translate3d(-1.2%,-.5%,0);
            }

          }


          /* Stronger readability */

          .editorial-overlay {
            background:
              linear-gradient(
                180deg,
                rgba(16,13,24,.76),
                rgba(43,32,56,.18) 34%,
                rgba(16,13,24,.48) 55%,
                rgba(13,10,20,.96) 100%
              );
          }


          /* Frame */

          .editorial-frame {
            inset: 12px;
          }

          .editorial-frame::before {
            inset: 4px;
          }


          .editorial-corner {
            width: 27px;
            height: 27px;
          }


          /* Top */

          .editorial-top {
            top: 5.5%;
          }

          .editorial-top-line {
            width: 38px;
          }

          .editorial-top span {
            font-size: 7px;
          }


          /* Content */

          .editorial-content {
            width: 92vw;

            padding:
              0 4px 45px;
          }


          /* Sanskrit */

          .editorial-sanskrit {
            margin-bottom: 12px;

            font-size: 11px;
          }


          /* Eyebrow */

          .editorial-eyebrow {
            margin-bottom: 25px;

            font-size: 6px;

            letter-spacing: .25em;
          }

          .editorial-eyebrow-line {
            width: 16px;
          }


          /* Orbit */

          .editorial-orbit {
            width: 285px;
            height: 285px;
          }


          /* Names */

          .editorial-name {
            font-size:
              clamp(
                58px,
                18vw,
                88px
              );

            line-height: .7;
          }


          /* Ampersand */

          .editorial-ampersand {
            margin:
              18px 0 17px;

            font-size: 38px;
          }


          /* Details */

          .editorial-details {
            margin-top: 29px;

            padding:
              8px 13px;
          }

          .editorial-details span {
            font-size: 6px;

            letter-spacing: .13em;
          }

          .editorial-details b {
            margin:
              0 8px;
          }


          /* Venue */

          .editorial-venue {
            margin-top: 10px;

            font-size: 6.5px;

            letter-spacing: .12em;
          }

          .editorial-venue svg {
            width: 9px;
            height: 9px;
          }


          /* Quote */

          .editorial-quote {
            max-width: 260px;

            margin-top: 16px;

            font-size: 14px;

            line-height: 1.2;
          }


          /* Hide desktop side elements */

          .editorial-side-date,
          .editorial-side-spark {
            display: none;
          }


          /* Scroll */

          .editorial-scroll {
            bottom: 16px;

            font-size: 5.5px;

            letter-spacing: .2em;

            gap: 4px;
          }

          .editorial-scroll svg {
            width: 15px;
            height: 15px;
          }


          /* Particles */

          .editorial-particles i {
            width: 2px;
            height: 2px;
          }

        }


        /* =====================================================
           VERY SMALL PHONES
        ===================================================== */

        @media (max-width: 390px) {

          .editorial-content {
            padding-bottom: 38px;
          }

          .editorial-sanskrit {
            font-size: 10px;
          }

          .editorial-eyebrow {
            margin-bottom: 21px;
          }

          .editorial-orbit {
            width: 245px;
            height: 245px;
          }

          .editorial-name {
            font-size: 52px;
          }

          .editorial-ampersand {
            margin:
              15px 0;

            font-size: 32px;
          }

          .editorial-details {
            margin-top: 24px;
          }

          .editorial-quote {
            font-size: 13px;
          }

        }


        /* =====================================================
           LANDSCAPE MOBILE
        ===================================================== */

        @media (
          max-width: 900px
        ) and (
          max-height: 600px
        ) {

          .editorial-content {
            transform:
              scale(.78)
              translateY(-2vh);
          }

          .editorial-scroll {
            bottom: 8px;
          }

          .editorial-top {
            top: 4%;
          }

        }


        /* =====================================================
           REDUCED MOTION
        ===================================================== */

        @media (prefers-reduced-motion: reduce) {

          .editorial-bg,
          .editorial-spotlight,
          .editorial-particles i {
            animation: none !important;
          }

        }


        /* =====================================================
           DARK LAVENDER + OFF-WHITE WEDDING LUXURY LAYER
        ===================================================== */
        .editorial-hero{
          background:
            radial-gradient(circle at 50% 42%, rgba(216,188,229,.16), transparent 36%),
            linear-gradient(135deg,#0b0810 0%,#171020 42%,#2b2038 72%,#100c17 100%);
        }
        .editorial-overlay{
          background:
            linear-gradient(180deg,rgba(16,13,24,.74),rgba(43,32,56,.16) 30%,rgba(43,32,56,.20) 52%,rgba(10,8,15,.88) 100%),
            linear-gradient(90deg,rgba(16,13,24,.58),transparent 35%,transparent 65%,rgba(16,13,24,.58));
        }
        .editorial-grade{
          background:
            radial-gradient(ellipse at 50% 44%,rgba(216,188,229,.18),transparent 48%),
            linear-gradient(90deg,rgba(43,32,56,.42),transparent 32%,transparent 68%,rgba(43,32,56,.42));
          mix-blend-mode:screen;
        }
        .editorial-spotlight{
          background:radial-gradient(circle,rgba(255,250,245,.17),rgba(216,188,229,.10) 30%,transparent 70%);
          filter:blur(24px);
        }
        .editorial-frame{
          border-color:rgba(255,250,245,.20);
          box-shadow:inset 0 0 50px rgba(216,188,229,.035);
        }
        .editorial-frame::before{border-color:rgba(216,188,229,.14)}
        .editorial-corner{border-color:rgba(216,188,229,.75)}
        .editorial-orbit{
          border-color:rgba(216,188,229,.30);
          box-shadow:0 0 45px rgba(196,169,215,.08);
        }
        .editorial-orbit::before{border-color:rgba(255,250,245,.18)}
        .editorial-orbit::after{
          color:#fffaf5;
          background:rgba(43,32,56,.72);
          text-shadow:0 0 15px rgba(216,188,229,.65);
        }
        .editorial-name{
          color:#fffaf5;
          text-shadow:0 8px 42px rgba(0,0,0,.62),0 0 42px rgba(216,188,229,.12);
        }
        .editorial-ampersand{
          color:#d8bce5;
          text-shadow:0 0 18px rgba(216,188,229,.75),0 0 38px rgba(196,169,215,.35);
        }
        .editorial-details{
          background:rgba(16,13,24,.42);
          border-color:rgba(216,188,229,.30);
          box-shadow:0 10px 35px rgba(0,0,0,.22),inset 0 0 25px rgba(216,188,229,.045);
        }
        .editorial-details b{color:#fffaf5}
        .editorial-venue svg,.editorial-scroll svg{color:#d8bce5}
        .editorial-particles i{
          background:#fffaf5;
          box-shadow:0 0 7px rgba(255,250,245,.9),0 0 18px rgba(216,188,229,.45);
        }
        .editorial-content::before{
          content:"ॐ";
          display:block;
          position:absolute;
          top:-72px;
          left:50%;
          transform:translateX(-50%);
          color:#d8bce5;
          font-family:"Noto Serif Devanagari","Nirmala UI",serif;
          font-size:20px;
          text-shadow:0 0 22px rgba(216,188,229,.55);
          animation:omFloat 4s ease-in-out infinite;
        }
        .editorial-content{filter:drop-shadow(0 16px 34px rgba(0,0,0,.28))}
        @keyframes omFloat{0%,100%{transform:translateX(-50%) translateY(0);opacity:.72}50%{transform:translateX(-50%) translateY(-5px);opacity:1}}
        .editorial-top span,.editorial-side-spark span{color:#fffaf5;text-shadow:0 0 14px rgba(216,188,229,.7)}
        .editorial-top-line{background:linear-gradient(90deg,transparent,rgba(216,188,229,.8),transparent)}
        .editorial-scroll{color:rgba(255,250,245,.64)}
        .editorial-side-spark{color:#d8bce5}
        .editorial-hero::before,.editorial-hero::after{
          content:"";
          position:absolute;
          pointer-events:none;
          z-index:4;
          width:260px;height:260px;
          border:1px solid rgba(216,188,229,.10);
          border-radius:50%;
          filter:blur(.2px);
        }
        .editorial-hero::before{left:-150px;top:18%;box-shadow:0 0 0 28px rgba(216,188,229,.025),0 0 0 56px rgba(216,188,229,.018)}
        .editorial-hero::after{right:-150px;bottom:14%;box-shadow:0 0 0 28px rgba(216,188,229,.025),0 0 0 56px rgba(216,188,229,.018)}
        @media(max-width:700px){
          .editorial-content::before{top:-48px;font-size:16px}
          .editorial-hero::before,.editorial-hero::after{width:170px;height:170px}
        }
        @media(prefers-reduced-motion:reduce){
          .editorial-content::before{animation:none}
        }

      `}</style>


      {/* =====================================================
          HERO
      ===================================================== */}

      <section
        id="home"
        className="editorial-hero"
      >

        {/* =================================================
            BACKGROUND
        ================================================= */}

        <motion.div
          className="editorial-bg"

          initial={{
            scale: 1.14,
            opacity: 0,
          }}

          animate={{
            scale: 1.04,
            opacity: 1,
          }}

          transition={{
            duration: 2.4,

            ease: [
              .22,
              1,
              .36,
              1,
            ],
          }}
        />


        <div className="editorial-overlay" />

        <div className="editorial-grade" />

        <div className="editorial-spotlight" />

        <div className="editorial-grain" />


        {/* =================================================
            GOLD PARTICLES
        ================================================= */}

        <div className="editorial-particles">

          {particles.map((index) => (
            <motion.i
              key={index}

              initial={{
                opacity: 0,

                x:
                  `${(index * 43) % 100}vw`,

                y: "105vh",
              }}

              animate={{
                opacity: [
                  0,
                  .7,
                  .35,
                  0,
                ],

                x:
                  `${((index * 43) + 12) % 100}vw`,

                y: "-10vh",
              }}

              transition={{
                duration:
                  9 +
                  (index % 6) * 1.7,

                delay:
                  index * .4,

                repeat: Infinity,

                ease: "linear",
              }}
            />
          ))}

        </div>


        {/* =================================================
            FRAME
        ================================================= */}

        <div className="editorial-frame">

          <span className="editorial-corner tl" />
          <span className="editorial-corner tr" />
          <span className="editorial-corner bl" />
          <span className="editorial-corner br" />

        </div>


        {/* =================================================
            TOP
        ================================================= */}

        <motion.div
          className="editorial-top"

          initial={{
            opacity: 0,
            y: -15,
          }}

          animate={{
            opacity: 1,
            y: 0,
          }}

          transition={{
            delay: .7,
            duration: 1,
          }}
        >

          <span>✦</span>

          <div className="editorial-top-line" />

          <span>✦</span>

        </motion.div>


        {/* =================================================
            LEFT DATE
        ================================================= */}

        <motion.div
          className="editorial-side-date"

          initial={{
            opacity: 0,
            x: -15,
          }}

          animate={{
            opacity: 1,
            x: 0,
          }}

          transition={{
            delay: 1.3,
            duration: .8,
          }}
        >

          <span>
            {wedding.dateShort}
          </span>

        </motion.div>


        {/* =================================================
            RIGHT DECORATION
        ================================================= */}

        <motion.div
          className="editorial-side-spark"

          initial={{
            opacity: 0,
            x: 15,
          }}

          animate={{
            opacity: 1,
            x: 0,
          }}

          transition={{
            delay: 1.4,
            duration: .8,
          }}
        >

          <span>✦</span>

        </motion.div>


        {/* =================================================
            CENTER CONTENT
        ================================================= */}

        <motion.div
          className="editorial-content"

          initial={{
            opacity: 0,
            y: 35,
          }}

          animate={{
            opacity: 1,
            y: 0,
          }}

          transition={{
            delay: .6,
            duration: 1.3,

            ease: [
              .22,
              1,
              .36,
              1,
            ],
          }}
        >

          {/* Sanskrit */}

          <motion.div
            className="editorial-sanskrit"

            initial={{
              opacity: 0,
              y: -12,
            }}

            animate={{
              opacity: 1,
              y: 0,
            }}

            transition={{
              delay: .85,
              duration: .8,
            }}
          >
            ॥ शुभ विवाह ॥
          </motion.div>


          {/* Eyebrow */}

          <motion.div
            className="editorial-eyebrow"

            initial={{
              opacity: 0,
            }}

            animate={{
              opacity: 1,
            }}

            transition={{
              delay: 1,
              duration: .8,
            }}
          >

            <span
              className="
                editorial-eyebrow-line
              "
            />

            <span>
              A NEW CHAPTER
            </span>

            <span
              className="
                editorial-eyebrow-line
              "
            />

          </motion.div>


          {/* =================================================
              NAMES
          ================================================= */}

          <div className="editorial-names">

            <motion.div
              className="editorial-orbit"

              animate={{
                rotate: 360,
              }}

              transition={{
                duration: 55,
                repeat: Infinity,
                ease: "linear",
              }}
            />


            <motion.h1
              className="editorial-name"

              initial={{
                opacity: 0,
                x: -50,
                filter: "blur(10px)",
              }}

              animate={{
                opacity: 1,
                x: 0,
                filter: "blur(0px)",
              }}

              transition={{
                delay: 1.05,
                duration: 1.2,

                ease: [
                  .22,
                  1,
                  .36,
                  1,
                ],
              }}
            >
              {wedding.groom}
            </motion.h1>


            <motion.div
              className="editorial-ampersand"

              initial={{
                opacity: 0,
                scale: 0,
                rotate: -25,
              }}

              animate={{
                opacity: 1,
                scale: 1,
                rotate: 0,
              }}

              transition={{
                delay: 1.4,
                duration: .8,

                type: "spring",

                stiffness: 110,

                damping: 10,
              }}
            >
              &
            </motion.div>


            <motion.h1
              className="editorial-name"

              initial={{
                opacity: 0,
                x: 50,
                filter: "blur(10px)",
              }}

              animate={{
                opacity: 1,
                x: 0,
                filter: "blur(0px)",
              }}

              transition={{
                delay: 1.15,
                duration: 1.2,

                ease: [
                  .22,
                  1,
                  .36,
                  1,
                ],
              }}
            >
              {wedding.bride}
            </motion.h1>

          </div>


          {/* =================================================
              DATE
          ================================================= */}

          <motion.div
            className="editorial-details"

            initial={{
              opacity: 0,
              y: 15,
              scale: .95,
            }}

            animate={{
              opacity: 1,
              y: 0,
              scale: 1,
            }}

            transition={{
              delay: 1.7,
              duration: .8,
            }}
          >

            <span>
              {wedding.dateShort}
            </span>

            <b>
              ◆
            </b>

            <span>
              {wedding.city}
            </span>

          </motion.div>


          {/* =================================================
              VENUE
          ================================================= */}

          <motion.div
            className="editorial-venue"

            initial={{
              opacity: 0,
              y: 10,
            }}

            animate={{
              opacity: 1,
              y: 0,
            }}

            transition={{
              delay: 1.85,
              duration: .8,
            }}
          >

            <MapPin />

            <span>
              {wedding.venue}
            </span>

          </motion.div>


          {/* =================================================
              QUOTE
          ================================================= */}

          <motion.p
            className="editorial-quote"

            initial={{
              opacity: 0,
            }}

            animate={{
              opacity: 1,
            }}

            transition={{
              delay: 2,
              duration: 1,
            }}
          >
            Two hearts. One beautiful beginning.
          </motion.p>

        </motion.div>


        {/* =================================================
            SCROLL
        ================================================= */}

        <motion.div
          className="editorial-scroll"

          initial={{
            opacity: 0,
          }}

          animate={{
            opacity: 1,
            y: [0, 7, 0],
          }}

          transition={{
            opacity: {
              delay: 2.2,
              duration: .8,
            },

            y: {
              delay: 2.2,
              duration: 1.7,
              repeat: Infinity,
              ease: "easeInOut",
            },
          }}
        >

          <span>
            Scroll to discover
          </span>

          <ChevronDown />

        </motion.div>

      </section>
    </>
  );
}