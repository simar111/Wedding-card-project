import { useState } from "react";
import { motion } from "framer-motion";
import {
  Sparkles,
  Volume2,
  VolumeX,
  ChevronDown,
} from "lucide-react";

import { wedding } from "../data/wedding";

export function Gate({ onOpen }) {
  const [opening, setOpening] = useState(false);
  const [muted, setMuted] = useState(true);

  const handleOpen = () => {
    if (opening) return;

    setOpening(true);

    // Let the complete door-opening animation finish
    // before revealing the actual website.
    setTimeout(() => {
      onOpen();
    }, 2400);
  };

  const particles = Array.from({ length: 32 }, (_, i) => i);

  return (
    <motion.section
      className={`royal-gate ${opening ? "is-opening" : ""}`}
      initial={{ opacity: 1 }}
      animate={{
        opacity: opening ? 1 : 1,
      }}
    >
      <style>{`

        /* =====================================================
           RESET / MAIN
        ===================================================== */

        .royal-gate,
        .royal-gate * {
          box-sizing: border-box;
        }

        .royal-gate {
          position: fixed;
          inset: 0;

          width: 100vw;
          height: 100vh;

          z-index: 99999;

          overflow: hidden;

          display: flex;
          align-items: center;
          justify-content: center;

          color: #f5dfb1;

          background:
            radial-gradient(
              circle at 50% 48%,
              rgba(133, 45, 48, 0.46) 0%,
              rgba(76, 19, 25, 0.3) 28%,
              rgba(28, 5, 10, 0.8) 68%,
              #090103 100%
            );

          font-family:
            "DM Sans",
            Arial,
            sans-serif;
        }


        /* =====================================================
           BACKGROUND
        ===================================================== */

        .royal-bg {
          position: absolute;
          inset: 0;

          z-index: 1;

          background:
            linear-gradient(
              120deg,
              rgba(255,255,255,.025),
              transparent 35%,
              rgba(255,255,255,.015)
            );
        }

        .royal-vignette {
          position: absolute;
          inset: 0;

          z-index: 5;

          pointer-events: none;

          background:
            radial-gradient(
              ellipse at center,
              transparent 25%,
              rgba(0,0,0,.15) 55%,
              rgba(0,0,0,.8) 100%
            );
        }


        /* =====================================================
           FILM GRAIN
        ===================================================== */

        .royal-grain {
          position: absolute;
          inset: 0;

          z-index: 6;

          pointer-events: none;

          opacity: .055;

          background-image:
            url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='180' height='180'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='.7'/%3E%3C/svg%3E");

          mix-blend-mode: overlay;
        }


        /* =====================================================
           CENTRAL LIGHT
        ===================================================== */

        .royal-center-glow {
          position: absolute;

          left: 50%;
          top: 50%;

          width: min(65vw, 720px);
          height: min(65vw, 720px);

          transform:
            translate(-50%, -50%);

          border-radius: 50%;

          z-index: 3;

          pointer-events: none;

          background:
            radial-gradient(
              circle,
              rgba(238,197,117,.16) 0%,
              rgba(195,126,55,.09) 28%,
              transparent 70%
            );

          filter: blur(20px);

          animation:
            royalGlow 5s ease-in-out infinite;
        }

        @keyframes royalGlow {

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
              scale(1.08);
          }

        }


        /* =====================================================
           MANDALA
        ===================================================== */

        .royal-mandala {
          position: absolute;

          left: 50%;
          top: 50%;

          width: min(67vw, 680px);
          height: min(67vw, 680px);

          transform:
            translate(-50%, -50%);

          z-index: 4;

          border-radius: 50%;

          opacity: .16;

          pointer-events: none;

          background:
            repeating-conic-gradient(
              from 0deg,
              rgba(221,180,101,.8) 0deg,
              transparent 2deg,
              transparent 11deg,
              rgba(221,180,101,.65) 12deg,
              transparent 14deg
            );

          -webkit-mask-image:
            radial-gradient(
              circle,
              transparent 50%,
              black 51%,
              black 53%,
              transparent 54%
            );

          mask-image:
            radial-gradient(
              circle,
              transparent 50%,
              black 51%,
              black 53%,
              transparent 54%
            );
        }

        .royal-mandala::before {
          content: "";

          position: absolute;
          inset: 11%;

          border:
            1px solid
            rgba(224,184,107,.25);

          border-radius: 50%;
        }

        .royal-mandala::after {
          content: "";

          position: absolute;
          inset: 21%;

          border:
            1px dashed
            rgba(224,184,107,.2);

          border-radius: 50%;
        }


        /* =====================================================
           INNER CIRCLE
        ===================================================== */

        .royal-inner-circle {
          position: absolute;

          left: 50%;
          top: 50%;

          width: min(43vw, 450px);
          height: min(43vw, 450px);

          transform:
            translate(-50%, -50%);

          z-index: 4;

          border:
            1px solid
            rgba(222,182,104,.2);

          border-radius: 50%;

          pointer-events: none;
        }

        .royal-inner-circle::before {
          content: "";

          position: absolute;

          inset: 9%;

          border:
            1px solid
            rgba(222,182,104,.12);

          border-radius: 50%;
        }

        .royal-inner-circle::after {
          content: "";

          position: absolute;

          inset: 20%;

          border:
            1px dotted
            rgba(222,182,104,.18);

          border-radius: 50%;
        }


        /* =====================================================
           PARTICLES
        ===================================================== */

        .royal-particles {
          position: absolute;
          inset: 0;

          z-index: 20;

          pointer-events: none;

          overflow: hidden;
        }

        .royal-particles i {
          position: absolute;

          width: 2px;
          height: 2px;

          border-radius: 50%;

          background: #e5c17c;

          box-shadow:
            0 0 7px rgba(229,193,124,.95),
            0 0 16px rgba(229,193,124,.35);
        }


        /* =====================================================
           TOP DECORATION
        ===================================================== */

        .royal-top {
          position: absolute;

          top: 6.5%;

          left: 50%;

          transform:
            translateX(-50%);

          z-index: 65;

          display: flex;
          align-items: center;

          gap: 14px;

          color: #dcb56c;
        }

        .royal-top span {
          font-size: 8px;

          opacity: .75;
        }

        .royal-top-line {
          width: 75px;
          height: 1px;

          background:
            linear-gradient(
              90deg,
              transparent,
              rgba(220,181,108,.8),
              transparent
            );
        }


        /* =====================================================
           CENTER CONTENT
        ===================================================== */

        .royal-content {
          position: relative;

          z-index: 75;

          width: min(92vw, 700px);

          display: flex;
          flex-direction: column;
          align-items: center;

          text-align: center;

          pointer-events: none;
        }


        /* =====================================================
           SANSKRIT
        ===================================================== */

        .royal-sanskrit {
          margin-bottom: 15px;

          color: #dfba70;

          font-family:
            "Noto Serif Devanagari",
            "Nirmala UI",
            serif;

          font-size:
            clamp(13px, 1.3vw, 17px);

          letter-spacing: .08em;

          text-shadow:
            0 0 20px
            rgba(222,181,105,.35);
        }


        /* =====================================================
           DIVIDER
        ===================================================== */

        .royal-divider {
          width: 90px;
          height: 1px;

          margin-bottom: 25px;

          background:
            linear-gradient(
              90deg,
              transparent,
              #dcb36a,
              transparent
            );
        }


        /* =====================================================
           NAMES
        ===================================================== */

        .royal-names {
          display: flex;

          align-items: center;
          justify-content: center;

          gap:
            clamp(12px, 3vw, 32px);
        }

        .royal-names h1 {
          margin: 0;

          color: #f8e7c3;

          font-family:
            "Cormorant Garamond",
            Georgia,
            serif;

          font-size:
            clamp(
              58px,
              8vw,
              105px
            );

          font-weight: 400;

          line-height: .85;

          letter-spacing: -.05em;

          text-shadow:
            0 4px 30px
            rgba(0,0,0,.55),

            0 0 30px
            rgba(222,181,104,.1);
        }

        .royal-and {
          color: #d9af62;

          font-family:
            "Great Vibes",
            cursive;

          font-size:
            clamp(38px, 4vw, 58px);

          line-height: 1;

          text-shadow:
            0 0 25px
            rgba(220,176,97,.35);
        }


        /* =====================================================
           DATE
        ===================================================== */

        .royal-date {
          margin-top: 27px;

          display: flex;
          align-items: center;

          gap: 12px;

          color:
            rgba(247,226,188,.72);

          font-family:
            "DM Sans",
            sans-serif;

          font-size: 9px;

          letter-spacing: .24em;

          text-transform: uppercase;
        }

        .royal-date b {
          color: #d9b067;

          font-size: 6px;
        }


        /* =====================================================
           DIYA
        ===================================================== */

        .royal-diya {
          position: relative;

          width: 48px;
          height: 35px;

          margin-top: 25px;
        }

        .diya-bowl {
          position: absolute;

          left: 50%;
          bottom: 0;

          width: 44px;
          height: 13px;

          transform:
            translateX(-50%);

          border-radius:
            0 0 50% 50%;

          background:
            linear-gradient(
              180deg,
              #e0b45f,
              #815021
            );

          box-shadow:
            0 5px 20px
            rgba(226,177,83,.25);
        }

        .diya-flame {
          position: absolute;

          left: 50%;
          top: 0;

          width: 13px;
          height: 20px;

          transform:
            translateX(-50%)
            rotate(45deg);

          border-radius:
            50% 50% 50% 0;

          background:
            linear-gradient(
              135deg,
              #fff1bd,
              #e6a741
            );

          box-shadow:
            0 0 10px
            rgba(255,207,102,.9),

            0 0 35px
            rgba(255,173,55,.55);

          animation:
            flameMove 1.1s
            ease-in-out infinite;
        }

        @keyframes flameMove {

          0%,
          100% {
            transform:
              translateX(-50%)
              rotate(45deg)
              scale(.9);
          }

          50% {
            transform:
              translateX(-50%)
              rotate(38deg)
              scale(1.1);
          }

        }


        /* =====================================================
           BUTTON
        ===================================================== */

        .royal-enter {
          position: relative;

          overflow: hidden;

          margin-top: 29px;

          min-width: 210px;

          padding: 15px 25px;

          display: flex;
          align-items: center;
          justify-content: center;

          gap: 10px;

          pointer-events: auto;

          border:
            1px solid
            rgba(224,184,108,.65);

          border-radius: 999px;

          background:
            linear-gradient(
              135deg,
              rgba(212,170,91,.17),
              rgba(68,15,21,.52)
            );

          color: #f4ddb0;

          font-family:
            "DM Sans",
            sans-serif;

          font-size: 9px;

          font-weight: 600;

          letter-spacing: .18em;

          text-transform: uppercase;

          cursor: pointer;

          backdrop-filter:
            blur(12px);

          box-shadow:
            0 12px 40px
            rgba(0,0,0,.35),

            inset 0 0 20px
            rgba(220,180,105,.04);
        }

        .royal-enter svg {
          color: #dfb76b;
        }

        .royal-enter:hover {
          border-color: #ebc983;

          box-shadow:
            0 15px 45px
            rgba(0,0,0,.42),

            0 0 35px
            rgba(221,178,97,.15);
        }


        /* =====================================================
           BUTTON SHIMMER
        ===================================================== */

        .royal-shimmer {
          position: absolute;

          top: 0;
          left: -120%;

          width: 55%;
          height: 100%;

          transform:
            skewX(-20deg);

          background:
            linear-gradient(
              90deg,
              transparent,
              rgba(255,245,214,.3),
              transparent
            );

          animation:
            royalButtonShimmer
            4s
            ease-in-out infinite;
        }

        @keyframes royalButtonShimmer {

          0% {
            left: -120%;
          }

          35%,
          100% {
            left: 150%;
          }

        }


        /* =====================================================
           PALACE DOORS
        ===================================================== */

        .palace-door {
          position: absolute;

          top: 0;
          bottom: 0;

          width: 50.5%;

          z-index: 50;

          overflow: hidden;

          background:
            linear-gradient(
              90deg,

              #170307 0%,

              #3b0a12 10%,

              #68151f 24%,

              #48101a 39%,

              #721a25 52%,

              #3e0a13 67%,

              #64131f 82%,

              #26050b 94%,

              #100204 100%
            );

          box-shadow:
            inset 0 0 100px
            rgba(0,0,0,.72);

          will-change:
            transform;
        }

        .palace-door-left {
          left: 0;

          transform-origin:
            left center;
        }

        .palace-door-right {
          right: 0;

          transform-origin:
            right center;
        }


        /* =====================================================
           DOOR INNER BORDER
        ===================================================== */

        .door-border {
          position: absolute;

          top: 5%;
          bottom: 5%;

          left: 5%;
          right: 5%;

          border:
            1px solid
            rgba(220,178,101,.17);
        }


        /* =====================================================
           JAALI
        ===================================================== */

        .door-jaali {
          position: absolute;

          inset: 0;

          opacity: .18;

          background:
            repeating-linear-gradient(
              45deg,
              transparent 0,
              transparent 22px,
              rgba(225,185,107,.42) 23px,
              transparent 24px
            ),

            repeating-linear-gradient(
              -45deg,
              transparent 0,
              transparent 22px,
              rgba(225,185,107,.42) 23px,
              transparent 24px
            );

          mask-image:
            linear-gradient(
              to bottom,
              transparent,
              black 10%,
              black 90%,
              transparent
            );
        }


        /* =====================================================
           DOOR PANEL DETAILS
        ===================================================== */

        .door-panel {
          position: absolute;

          top: 12%;
          bottom: 12%;

          width: 30%;

          border:
            1px solid
            rgba(220,178,101,.12);

          opacity: .7;
        }

        .palace-door-left .door-panel {
          right: 13%;
        }

        .palace-door-right .door-panel {
          left: 13%;
        }


        /* =====================================================
           DOOR CENTER ORNAMENT
        ===================================================== */

        .door-medallion {
          position: absolute;

          top: 50%;

          width: 95px;
          height: 95px;

          transform:
            translateY(-50%);

          border:
            1px solid
            rgba(224,184,108,.4);

          border-radius: 50%;

          background:
            radial-gradient(
              circle,
              rgba(226,183,101,.09),
              transparent 68%
            );

          box-shadow:
            0 0 35px
            rgba(220,178,100,.06);
        }

        .palace-door-left .door-medallion {
          right: 35px;
        }

        .palace-door-right .door-medallion {
          left: 35px;
        }

        .door-medallion::before {
          content: "";

          position: absolute;

          left: 50%;
          top: 50%;

          width: 62%;
          height: 62%;

          transform:
            translate(-50%, -50%)
            rotate(45deg);

          border:
            1px solid
            rgba(224,184,108,.32);
        }

        .door-medallion::after {
          content: "";

          position: absolute;

          left: 50%;
          top: 50%;

          width: 45%;
          height: 45%;

          transform:
            translate(-50%, -50%);

          border:
            1px solid
            rgba(224,184,108,.26);

          border-radius: 50%;
        }


        /* =====================================================
           DOOR HANDLE
        ===================================================== */

        .door-handle {
          position: absolute;

          top: 50%;

          width: 13px;
          height: 13px;

          transform:
            translateY(-50%);

          border:
            1px solid
            rgba(238,202,132,.8);

          border-radius: 50%;

          background:
            radial-gradient(
              circle,
              #f1d08a,
              #8d632c
            );

          box-shadow:
            0 0 10px
            rgba(232,192,112,.4);
        }

        .palace-door-left .door-handle {
          right: 18px;
        }

        .palace-door-right .door-handle {
          left: 18px;
        }


        /* =====================================================
           DOOR GOLD FRAME
        ===================================================== */

        .door-frame {
          position: absolute;

          top: 0;
          bottom: 0;

          width: 5px;

          background:
            linear-gradient(
              to bottom,
              transparent,
              rgba(218,177,101,.7) 15%,
              rgba(239,205,137,.9) 50%,
              rgba(218,177,101,.7) 85%,
              transparent
            );

          box-shadow:
            0 0 18px
            rgba(220,178,100,.2);
        }

        .palace-door-left .door-frame {
          right: 0;
        }

        .palace-door-right .door-frame {
          left: 0;
        }


        /* =====================================================
           DOOR LIGHT
        ===================================================== */

        .door-light {
          position: absolute;

          inset: -30%;

          background:
            linear-gradient(
              110deg,
              transparent 40%,
              rgba(255,225,169,.05) 48%,
              rgba(255,225,169,.13) 51%,
              transparent 60%
            );

          animation:
            doorLightMove
            6s
            ease-in-out infinite;
        }

        @keyframes doorLightMove {

          0%,
          100% {
            transform:
              translateX(-12%);
          }

          50% {
            transform:
              translateX(12%);
          }

        }


        /* =====================================================
           OPENING LIGHT
        ===================================================== */

        .royal-reveal {
          position: absolute;

          left: 50%;
          top: 50%;

          width: 25vw;
          height: 25vw;

          max-width: 500px;
          max-height: 500px;

          transform:
            translate(-50%, -50%);

          z-index: 90;

          border-radius: 50%;

          pointer-events: none;

          background:
            radial-gradient(
              circle,

              rgba(255,249,222,.98) 0%,

              rgba(239,204,133,.55) 18%,

              rgba(221,176,93,.18) 42%,

              transparent 72%
            );

          filter: blur(3px);

          animation:
            revealLight
            2.2s
            ease-out forwards;
        }

        @keyframes revealLight {

          0% {
            opacity: 0;

            transform:
              translate(-50%, -50%)
              scale(.15);
          }

          30% {
            opacity: .95;
          }

          65% {
            opacity: .7;
          }

          100% {
            opacity: 0;

            transform:
              translate(-50%, -50%)
              scale(2.8);
          }

        }


        /* =====================================================
           LIGHT RAYS
        ===================================================== */

        .royal-rays {
          position: absolute;

          left: 50%;
          top: 50%;

          width: 4px;
          height: 100vh;

          transform:
            translate(-50%, -50%);

          z-index: 88;

          pointer-events: none;

          opacity: 0;

          background:
            linear-gradient(
              to bottom,
              transparent,
              rgba(255,238,190,.55),
              transparent
            );
        }

        .is-opening .royal-rays {
          animation:
            raysReveal
            2s
            ease-out forwards;
        }

        @keyframes raysReveal {

          0% {
            opacity: 0;

            transform:
              translate(-50%, -50%)
              scaleX(.5);
          }

          25% {
            opacity: .75;
          }

          100% {
            opacity: 0;

            transform:
              translate(-50%, -50%)
              scaleX(12);
          }

        }


        /* =====================================================
           SOUND
        ===================================================== */

        .royal-sound {
          position: absolute;

          right: 25px;
          bottom: 24px;

          z-index: 100;

          width: 43px;
          height: 43px;

          display: grid;
          place-items: center;

          border:
            1px solid
            rgba(220,178,102,.3);

          border-radius: 50%;

          background:
            rgba(32,6,11,.52);

          color:
            rgba(241,215,165,.85);

          backdrop-filter:
            blur(12px);

          cursor: pointer;
        }


        /* =====================================================
           BOTTOM
        ===================================================== */

        .royal-bottom {
          position: absolute;

          bottom: 28px;

          left: 50%;

          transform:
            translateX(-50%);

          z-index: 65;

          display: flex;
          align-items: center;

          gap: 13px;

          color:
            rgba(238,210,157,.4);

          font-family:
            "DM Sans",
            sans-serif;

          font-size: 7px;

          letter-spacing: .3em;
        }

        .royal-bottom div {
          width: 25px;
          height: 1px;

          background:
            rgba(218,176,99,.3);
        }


        /* =====================================================
           OPENING STATE
        ===================================================== */

        .is-opening .royal-content {
          animation:
            contentReveal
            1.5s
            ease-out
            forwards;
        }

        @keyframes contentReveal {

          0% {
            opacity: 1;
            transform: scale(1);
          }

          45% {
            opacity: .95;
            transform: scale(1.02);
          }

          100% {
            opacity: 0;
            transform: scale(1.12);
          }

        }


        /* =====================================================
           MOBILE
        ===================================================== */

        @media (max-width: 700px) {

          .royal-top {
            top: 5%;
          }

          .royal-top-line {
            width: 40px;
          }

          .royal-mandala {
            width: 110vw;
            height: 110vw;

            opacity: .1;
          }

          .royal-inner-circle {
            width: 78vw;
            height: 78vw;
          }

          .royal-content {
            width: 94vw;
          }

          .royal-sanskrit {
            font-size: 12px;
          }

          .royal-divider {
            width: 70px;
            margin-bottom: 22px;
          }

          .royal-names {
            gap: 8px;
          }

          .royal-names h1 {
            font-size:
              clamp(
                45px,
                14vw,
                74px
              );
          }

          .royal-and {
            font-size: 31px;
          }

          .royal-date {
            margin-top: 23px;

            font-size: 7px;

            letter-spacing: .14em;
          }

          .royal-diya {
            margin-top: 21px;
          }

          .royal-enter {
            min-width: 185px;

            padding:
              13px 18px;

            margin-top: 26px;

            font-size: 8px;
          }

          .palace-door {
            width: 51%;
          }

          .door-medallion {
            width: 62px;
            height: 62px;
          }

          .palace-door-left
          .door-medallion {
            right: 18px;
          }

          .palace-door-right
          .door-medallion {
            left: 18px;
          }

          .door-handle {
            width: 9px;
            height: 9px;
          }

          .palace-door-left
          .door-handle {
            right: 9px;
          }

          .palace-door-right
          .door-handle {
            left: 9px;
          }

          .royal-sound {
            width: 37px;
            height: 37px;

            right: 17px;
            bottom: 17px;
          }

          .royal-bottom {
            bottom: 20px;
          }

          .royal-reveal {
            width: 75vw;
            height: 75vw;
          }

        }


        /* =====================================================
           SMALL PHONES
        ===================================================== */

        @media (max-width: 390px) {

          .royal-names {
            gap: 5px;
          }

          .royal-names h1 {
            font-size: 42px;
          }

          .royal-and {
            font-size: 27px;
          }

          .royal-date {
            flex-direction: column;
            gap: 4px;
          }

          .royal-date b {
            display: none;
          }

          .royal-bottom {
            display: none;
          }

        }


        /* =====================================================
           REDUCED MOTION
        ===================================================== */

        @media (prefers-reduced-motion: reduce) {

          .royal-center-glow,
          .royal-particles i,
          .door-light,
          .royal-shimmer,
          .diya-flame,
          .royal-mandala {
            animation: none !important;
          }

        }

      `}</style>


      {/* =====================================================
          BACKGROUND
      ===================================================== */}

      <div className="royal-bg" />

      <div className="royal-center-glow" />

      <div className="royal-vignette" />

      <div className="royal-grain" />


      {/* =====================================================
          MANDALA
      ===================================================== */}

      <motion.div
        className="royal-mandala"
        animate={{
          rotate: 360,
        }}
        transition={{
          duration: 70,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      <motion.div
        className="royal-inner-circle"
        animate={{
          rotate: -360,
        }}
        transition={{
          duration: 50,
          repeat: Infinity,
          ease: "linear",
        }}
      />


      {/* =====================================================
          GOLD PARTICLES
      ===================================================== */}

      <div className="royal-particles">

        {particles.map((index) => (
          <motion.i
            key={index}

            initial={{
              opacity: 0,

              x:
                `${(index * 41) % 100}vw`,

              y: "110vh",
            }}

            animate={{
              opacity: [
                0,
                .75,
                .4,
                0,
              ],

              x:
                `${((index * 41) + 13) % 100}vw`,

              y: "-10vh",
            }}

            transition={{
              duration:
                8 +
                (index % 6) * 1.5,

              delay:
                index * .25,

              repeat: Infinity,

              ease: "linear",
            }}
          />
        ))}

      </div>


      {/* =====================================================
          TOP
      ===================================================== */}

      <motion.div
        className="royal-top"

        initial={{
          opacity: 0,
          y: -15,
        }}

        animate={{
          opacity: 1,
          y: 0,
        }}

        transition={{
          delay: .5,
          duration: 1,
        }}
      >
        <span>✦</span>

        <div className="royal-top-line" />

        <span>✦</span>
      </motion.div>


      {/* =====================================================
          CENTER CONTENT
      ===================================================== */}

      <motion.div
        className="royal-content"

        initial={{
          opacity: 0,
          y: 25,
          scale: .96,
        }}

        animate={{
          opacity: 1,
          y: 0,
          scale: 1,
        }}

        transition={{
          delay: .55,
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
          className="royal-sanskrit"

          animate={{
            opacity: [
              .65,
              1,
              .65,
            ],
          }}

          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          ॥ शुभ विवाह ॥
        </motion.div>


        {/* Divider */}

        <motion.div
          className="royal-divider"

          initial={{
            width: 0,
          }}

          animate={{
            width: 90,
          }}

          transition={{
            delay: 1,
            duration: .8,
          }}
        />


        {/* Names */}

        <div className="royal-names">

          <motion.h1
            initial={{
              opacity: 0,
              x: -45,
            }}

            animate={{
              opacity: 1,
              x: 0,
            }}

            transition={{
              delay: .75,
              duration: 1,
            }}
          >
            {wedding.groom}
          </motion.h1>


          <motion.div
            className="royal-and"

            initial={{
              opacity: 0,
              scale: 0,
            }}

            animate={{
              opacity: 1,
              scale: 1,
            }}

            transition={{
              delay: 1,
              duration: .8,
              type: "spring",
              stiffness: 120,
            }}
          >
            &
          </motion.div>


          <motion.h1
            initial={{
              opacity: 0,
              x: 45,
            }}

            animate={{
              opacity: 1,
              x: 0,
            }}

            transition={{
              delay: .85,
              duration: 1,
            }}
          >
            {wedding.bride}
          </motion.h1>

        </div>


        {/* Date */}

        <motion.div
          className="royal-date"

          initial={{
            opacity: 0,
            y: 10,
          }}

          animate={{
            opacity: 1,
            y: 0,
          }}

          transition={{
            delay: 1.15,
            duration: .8,
          }}
        >

          <span>
            {wedding.dateShort}
          </span>

          <b>◆</b>

          <span>
            {wedding.city}
          </span>

        </motion.div>


        {/* Diya */}

        <motion.div
          className="royal-diya"

          initial={{
            opacity: 0,
            scale: .5,
          }}

          animate={{
            opacity: 1,
            scale: 1,
          }}

          transition={{
            delay: 1.25,
            duration: .7,
          }}
        >

          <div className="diya-bowl" />

          <div className="diya-flame" />

        </motion.div>


        {/* Button */}

        <motion.button
          className="royal-enter"

          onClick={handleOpen}

          disabled={opening}

          whileHover={
            !opening
              ? {
                  scale: 1.045,
                }
              : {}
          }

          whileTap={
            !opening
              ? {
                  scale: .97,
                }
              : {}
          }

          initial={{
            opacity: 0,
            y: 15,
          }}

          animate={{
            opacity: 1,
            y: 0,
          }}

          transition={{
            delay: 1.4,
            duration: .8,
          }}
        >

          <span>
            {opening
              ? "Opening..."
              : "Enter Celebration"}
          </span>

          {!opening && (
            <Sparkles size={15} />
          )}

          {!opening && (
            <i className="royal-shimmer" />
          )}

        </motion.button>

      </motion.div>


      {/* =====================================================
          LEFT PALACE DOOR
      ===================================================== */}

      <motion.div
        className="
          palace-door
          palace-door-left
        "

        animate={
          opening
            ? {
                x: "-103%",
                rotateY: 8,
              }
            : {
                x: 0,
                rotateY: 0,
              }
        }

        transition={{
          duration: 2.15,

          ease: [
            .76,
            0,
            .24,
            1,
          ],
        }}
      >

        <div className="door-border" />

        <div className="door-jaali" />

        <div className="door-panel" />

        <div className="door-medallion" />

        <div className="door-handle" />

        <div className="door-frame" />

        <div className="door-light" />

      </motion.div>


      {/* =====================================================
          RIGHT PALACE DOOR
      ===================================================== */}

      <motion.div
        className="
          palace-door
          palace-door-right
        "

        animate={
          opening
            ? {
                x: "103%",
                rotateY: -8,
              }
            : {
                x: 0,
                rotateY: 0,
              }
        }

        transition={{
          duration: 2.15,

          ease: [
            .76,
            0,
            .24,
            1,
          ],
        }}
      >

        <div className="door-border" />

        <div className="door-jaali" />

        <div className="door-panel" />

        <div className="door-medallion" />

        <div className="door-handle" />

        <div className="door-frame" />

        <div className="door-light" />

      </motion.div>


      {/* =====================================================
          GOLDEN REVEAL
      ===================================================== */}

      {opening && (
        <>
          <motion.div
            className="royal-reveal"

            initial={{
              opacity: 0,
              scale: .1,
            }}

            animate={{
              opacity: [
                0,
                .95,
                .75,
                0,
              ],

              scale: [
                .1,
                .65,
                1.4,
                2.6,
              ],
            }}

            transition={{
              duration: 2.2,
              ease: "easeOut",
            }}
          />

          <div className="royal-rays" />
        </>
      )}


      {/* =====================================================
          SOUND
      ===================================================== */}

      <button
        className="royal-sound"

        onClick={() =>
          setMuted(!muted)
        }

        aria-label="Toggle sound"
      >
        {muted ? (
          <VolumeX size={17} />
        ) : (
          <Volume2 size={17} />
        )}
      </button>


      {/* =====================================================
          BOTTOM
      ===================================================== */}

      <div className="royal-bottom">

        <span>WITH LOVE</span>

        <div />

        <span>2027</span>

      </div>

    </motion.section>
  );
}