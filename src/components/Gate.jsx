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

          color: #f4edf5;

          background:
            radial-gradient(
              circle at 50% 48%,
              rgba(126, 91, 153, 0.42) 0%,
              rgba(75, 50, 96, 0.30) 28%,
              rgba(16, 13, 24, 0.82) 68%,
              #100d18 100%
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
              rgba(204,177,226,.18) 0%,
              rgba(172,137,199,.10) 28%,
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
              rgba(203,174,225,.8) 0deg,
              transparent 2deg,
              transparent 11deg,
              rgba(203,174,225,.65) 12deg,
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
            rgba(203,176,222,.25);

          border-radius: 50%;
        }

        .royal-mandala::after {
          content: "";

          position: absolute;
          inset: 21%;

          border:
            1px dashed
            rgba(203,176,222,.20);

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
            rgba(204,176,225,.2);

          border-radius: 50%;

          pointer-events: none;
        }

        .royal-inner-circle::before {
          content: "";

          position: absolute;

          inset: 9%;

          border:
            1px solid
            rgba(204,176,225,.12);

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

          background: #cdb6dc;

          box-shadow:
            0 0 7px rgba(219,190,234,.95),
            0 0 16px rgba(194,157,216,.35);
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

          color: #c8add9;
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

          color: #d0b6df;

          font-family:
            "Noto Serif Devanagari",
            "Nirmala UI",
            serif;

          font-size:
            clamp(13px, 1.3vw, 17px);

          letter-spacing: .08em;

          text-shadow:
            0 0 20px
            rgba(204,174,225,.35);
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
              #c4a9d7,
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

          color: #fffaf5;

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
          color: #b79acb;

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
          color: #bda3cf;

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
              #a88abf,
              #6b5575
            );

          box-shadow:
            0 5px 20px
            rgba(190,154,214,.25);
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
              #fff7fb,
              #b99bd0
            );

          box-shadow:
            0 0 10px
            rgba(239,215,246,.9),

            0 0 35px
            rgba(191,149,218,.45);

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

          color: #f2e9f4;

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
          color: #cbb0dc;
        }

        .royal-enter:hover {
          border-color: #e1d0ea;

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
              rgba(255,247,252,.35),
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

              #1b1526 0%,

              #2b2038 10%,

              #4f3a60 24%,

              #382a49 39%,

              #594267 52%,

              #31243f 67%,

              #463355 82%,

              #211a2d 94%,

              #171321 100%
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
              rgba(203,176,225,.10),
              transparent 68%
            );

          box-shadow:
            0 0 35px
            rgba(200,170,220,.08);
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
              #e8d8ee,
              #80658f
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
              rgba(204,177,225,.7) 15%,
              rgba(237,221,242,.9) 50%,
              rgba(204,177,225,.7) 85%,
              transparent
            );

          box-shadow:
            0 0 18px
            rgba(200,170,220,.2);
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
              rgba(239,225,248,.05) 48%,
              rgba(239,225,248,.13) 51%,
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

              rgba(255,250,247,.98) 0%,

              rgba(220,198,232,.55) 18%,

              rgba(184,151,207,.18) 42%,

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
              rgba(244,232,248,.55),
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
            rgba(238,225,242,.88);

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
            rgba(228,211,234,.45);

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
            rgba(203,175,222,.3);
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


        /* =====================================================
           DARK LAVENDER × OFF-WHITE — AESTHETIC OVERRIDES
        ===================================================== */

        .royal-gate {
          background:
            radial-gradient(circle at 50% 42%, rgba(151, 119, 180, .24) 0%, rgba(91, 67, 113, .18) 28%, rgba(16, 13, 24, .88) 72%),
            linear-gradient(135deg, #0e0b15, #1b1424 55%, #0c0a12);
          color: #f4edf5;
        }

        .royal-bg::before,
        .royal-bg::after {
          content: "";
          position: absolute;
          width: 42vw;
          height: 42vw;
          max-width: 560px;
          max-height: 560px;
          border-radius: 50%;
          filter: blur(75px);
          opacity: .20;
          pointer-events: none;
          animation: lavenderFloat 9s ease-in-out infinite;
        }

        .royal-bg::before {
          left: -12vw;
          top: 12vh;
          background: #9d78ba;
        }

        .royal-bg::after {
          right: -12vw;
          bottom: 5vh;
          background: #c9a9d8;
          animation-delay: -4s;
        }

        @keyframes lavenderFloat {
          0%, 100% { transform: translate3d(0, 0, 0) scale(1); }
          50% { transform: translate3d(2vw, -2vh, 0) scale(1.08); }
        }

        .royal-center-glow {
          background:
            radial-gradient(circle,
              rgba(230, 211, 239, .20) 0%,
              rgba(185, 151, 208, .11) 30%,
              transparent 70%);
          filter: blur(28px);
        }

        .royal-mandala {
          opacity: .18;
          background:
            repeating-conic-gradient(
              from 0deg,
              rgba(216, 190, 230, .70) 0deg,
              transparent 2deg,
              transparent 11deg,
              rgba(216, 190, 230, .52) 12deg,
              transparent 14deg
            );
          filter: drop-shadow(0 0 22px rgba(183, 154, 203, .10));
        }

        .royal-inner-circle {
          box-shadow:
            0 0 80px rgba(183, 154, 203, .08),
            inset 0 0 45px rgba(255,255,255,.025);
        }

        .royal-particles i {
          width: 3px;
          height: 3px;
          background: #e8d9ed;
          box-shadow:
            0 0 8px rgba(232,217,237,.95),
            0 0 18px rgba(190,157,215,.45);
        }

        .royal-content {
          filter: drop-shadow(0 18px 45px rgba(0,0,0,.18));
        }

        .royal-names h1 {
          color: #fffaf5;
          text-shadow:
            0 4px 30px rgba(0,0,0,.55),
            0 0 35px rgba(205,176,222,.16);
        }

        .royal-and {
          color: #d8bce5;
          text-shadow: 0 0 30px rgba(195,160,217,.42);
        }

        .royal-enter {
          border-color: rgba(215,190,229,.55);
          background:
            linear-gradient(135deg,
              rgba(205,176,222,.18),
              rgba(66,48,83,.55));
          color: #fffafc;
          box-shadow:
            0 15px 45px rgba(0,0,0,.38),
            inset 0 0 25px rgba(225,207,235,.05),
            0 0 0 1px rgba(255,255,255,.025);
          transition:
            transform .35s cubic-bezier(.22,1,.36,1),
            box-shadow .35s ease,
            border-color .35s ease;
        }

        .royal-enter:hover {
          border-color: #e6d5ec;
          box-shadow:
            0 18px 55px rgba(0,0,0,.45),
            0 0 38px rgba(195,160,217,.20),
            inset 0 0 25px rgba(232,217,239,.08);
        }

        .royal-enter svg {
          color: #e1cce9;
          animation: tinySparkle 2.2s ease-in-out infinite;
        }

        @keyframes tinySparkle {
          0%, 100% { transform: rotate(0deg) scale(1); opacity: .75; }
          50% { transform: rotate(12deg) scale(1.18); opacity: 1; }
        }

        .royal-shimmer {
          background:
            linear-gradient(
              90deg,
              transparent,
              rgba(255,250,253,.38),
              transparent
            );
        }

        .palace-door {
          background:
            radial-gradient(circle at 50% 45%, rgba(121,91,145,.22), transparent 42%),
            linear-gradient(
              90deg,
              #0f0b16 0%,
              #241b30 16%,
              #342541 35%,
              #2a2036 52%,
              #3d2c4b 68%,
              #241a30 86%,
              #100c16 100%
            );
          box-shadow:
            inset 0 0 120px rgba(0,0,0,.72),
            inset 0 0 35px rgba(220,198,231,.035);
          transform-style: preserve-3d;
        }

        .door-jaali {
          opacity: .16;
          background:
            repeating-linear-gradient(
              45deg,
              transparent 0,
              transparent 22px,
              rgba(221,202,232,.30) 23px,
              transparent 24px
            ),
            repeating-linear-gradient(
              -45deg,
              transparent 0,
              transparent 22px,
              rgba(221,202,232,.30) 23px,
              transparent 24px
            );
        }

        .door-medallion {
          border-color: rgba(218,198,228,.38);
          background:
            radial-gradient(circle, rgba(216,190,230,.12), transparent 68%);
          box-shadow:
            0 0 40px rgba(190,157,215,.10);
          animation: medallionPulse 4s ease-in-out infinite;
        }

        @keyframes medallionPulse {
          0%, 100% { box-shadow: 0 0 30px rgba(190,157,215,.06); }
          50% { box-shadow: 0 0 48px rgba(190,157,215,.16); }
        }

        .door-handle {
          background:
            radial-gradient(circle, #eee0f1, #9a7aaa);
          box-shadow:
            0 0 12px rgba(222,205,232,.45);
        }

        .door-frame {
          background:
            linear-gradient(
              to bottom,
              transparent,
              rgba(210,190,224,.60) 15%,
              rgba(242,231,245,.88) 50%,
              rgba(210,190,224,.60) 85%,
              transparent
            );
          box-shadow: 0 0 20px rgba(200,172,220,.18);
        }

        .royal-sound {
          border-color: rgba(218,198,230,.25);
          background: rgba(29,22,39,.55);
          color: rgba(242,232,245,.9);
          box-shadow: 0 8px 28px rgba(0,0,0,.18);
          transition: all .3s ease;
        }

        .royal-sound:hover {
          transform: translateY(-2px);
          border-color: rgba(230,215,237,.5);
          background: rgba(55,41,68,.62);
          box-shadow: 0 12px 35px rgba(0,0,0,.30);
        }

        .royal-reveal {
          background:
            radial-gradient(circle,
              rgba(255,252,249,.98) 0%,
              rgba(226,211,234,.60) 18%,
              rgba(189,157,211,.20) 43%,
              transparent 72%);
        }

        .royal-vignette {
          background:
            radial-gradient(
              ellipse at center,
              transparent 24%,
              rgba(0,0,0,.16) 58%,
              rgba(7,5,10,.78) 100%
            );
        }

        @media (max-width: 700px) {
          .royal-bg::before,
          .royal-bg::after {
            width: 70vw;
            height: 70vw;
            filter: blur(60px);
          }

          .royal-mandala {
            opacity: .11;
          }

          .royal-content {
            width: 94vw;
          }

          .royal-names h1 {
            text-shadow:
              0 3px 22px rgba(0,0,0,.5),
              0 0 25px rgba(205,176,222,.13);
          }
        }

      /* Cute Indian wedding decor */
      .royal-gate{background:radial-gradient(circle at 50% 32%,rgba(216,188,229,.18),transparent 42%),radial-gradient(circle at 10% 80%,rgba(196,169,215,.12),transparent 30%),radial-gradient(circle at 90% 20%,rgba(255,250,245,.07),transparent 25%),linear-gradient(145deg,#0d0914,#171020 40%,#2b2038 72%,#100b17)}
      .royal-bg::before{background:radial-gradient(circle,rgba(216,188,229,.18),transparent 68%);filter:blur(20px);animation:lavFloat 8s ease-in-out infinite}
      .royal-bg::after{background:radial-gradient(circle,rgba(255,250,245,.10),transparent 68%);filter:blur(28px);animation:lavFloat 11s ease-in-out infinite reverse}
      @keyframes lavFloat{0%,100%{transform:translate(-2%,-1%) scale(1);opacity:.65}50%{transform:translate(3%,2%) scale(1.08);opacity:1}}
      .royal-content{filter:drop-shadow(0 18px 35px rgba(0,0,0,.35))}
      .royal-content::before{content:"ॐ";position:absolute;left:50%;top:-72px;transform:translateX(-50%);color:#d8bce5;font-family:Georgia,serif;font-size:1.55rem;text-shadow:0 0 18px rgba(216,188,229,.55);animation:omFloat 4s ease-in-out infinite;pointer-events:none}
      @keyframes omFloat{0%,100%{transform:translateX(-50%) translateY(0);opacity:.7}50%{transform:translateX(-50%) translateY(-5px);opacity:1}}
      .mandala{filter:drop-shadow(0 0 20px rgba(196,169,215,.3))}
      .inner-circle{background:radial-gradient(circle at 50% 35%,rgba(255,250,245,.14),transparent 45%),linear-gradient(145deg,rgba(216,188,229,.10),rgba(196,169,215,.025));border-color:rgba(216,188,229,.58)!important;box-shadow:0 0 0 1px rgba(255,250,245,.08),0 0 42px rgba(196,169,215,.18),inset 0 0 35px rgba(196,169,215,.08)}
      .sanskrit{color:#d8bce5!important;text-shadow:0 0 20px rgba(216,188,229,.35)}
      .names{color:#fffaf5!important;text-shadow:0 2px 0 rgba(43,32,56,.8),0 0 24px rgba(255,250,245,.18)}
      .ampersand{color:#d8bce5!important;text-shadow:0 0 14px rgba(216,188,229,.7),0 0 28px rgba(196,169,215,.3)}
      .date,.city{color:rgba(255,250,245,.88)!important}
      .particle{background:#fffaf5!important;box-shadow:0 0 7px rgba(255,250,245,.8),0 0 16px rgba(216,188,229,.4)!important}
      .cute-indian-decor{position:absolute;inset:0;z-index:2;pointer-events:none;overflow:hidden}
      .decor-dot{position:absolute;width:7px;height:7px;border-radius:50%;background:#fffaf5;box-shadow:0 0 12px rgba(255,250,245,.8),0 0 22px rgba(216,188,229,.4);animation:dotTwinkle 3.4s ease-in-out infinite}
      .dot-a{left:8%;top:28%}.dot-b{left:15%;top:64%;animation-delay:1.2s}.dot-c{right:9%;top:34%;animation-delay:.8s}.dot-d{right:16%;top:70%;animation-delay:1.8s}
      @keyframes dotTwinkle{0%,100%{transform:scale(.65);opacity:.25}50%{transform:scale(1.3);opacity:.9}}
      .decor-petal,.decor-leaf{position:absolute;color:rgba(216,188,229,.75);font-family:Georgia,serif;text-shadow:0 0 15px rgba(216,188,229,.45);animation:petalFloat 7s ease-in-out infinite}.decor-petal{font-size:1.25rem}.decor-leaf{font-size:2.2rem;opacity:.4}
      .petal-a{left:12%;top:18%}.petal-b{left:7%;bottom:20%;animation-delay:1.8s}.petal-c{right:12%;top:16%;animation-delay:3s}.petal-d{right:8%;bottom:22%;animation-delay:4.2s}.leaf-a{left:2%;top:47%;transform:rotate(-28deg);animation-delay:2s}.leaf-b{right:2%;top:50%;transform:scaleX(-1) rotate(28deg);animation-delay:3.4s}
      @keyframes petalFloat{0%,100%{transform:translateY(0) rotate(0);opacity:.35}50%{transform:translateY(-12px) rotate(7deg);opacity:.85}}
      .decor-arch{position:absolute;width:min(34vw,430px);height:min(68vh,700px);border:1px solid rgba(216,188,229,.14);border-bottom:0;border-radius:50% 50% 0 0;top:18%;opacity:.75;box-shadow:inset 0 12px 30px rgba(216,188,229,.025)}.arch-left{left:-17%}.arch-right{right:-17%}
      .enter-button{background:linear-gradient(135deg,#fffaf5,#d8bce5)!important;color:#2b2038!important;border:1px solid rgba(255,250,245,.8)!important;box-shadow:0 10px 35px rgba(0,0,0,.28),0 0 30px rgba(196,169,215,.2)!important}.enter-button:hover{transform:translateY(-3px) scale(1.025)!important;box-shadow:0 16px 42px rgba(0,0,0,.34),0 0 38px rgba(216,188,229,.35)!important}
      .sound-toggle{background:rgba(255,250,245,.06)!important;border-color:rgba(216,188,229,.26)!important;color:#fffaf5!important;backdrop-filter:blur(14px)}.sound-toggle:hover{background:rgba(216,188,229,.12)!important;border-color:rgba(216,188,229,.52)!important}
      .palace-door{background:radial-gradient(circle at 50% 48%,rgba(216,188,229,.12),transparent 25%),linear-gradient(160deg,#181020,#30213d 48%,#21172d)!important;border-color:rgba(216,188,229,.38)!important;box-shadow:inset 0 0 0 1px rgba(255,250,245,.06),inset 0 0 60px rgba(196,169,215,.08),0 0 35px rgba(0,0,0,.3)}
      .jaali{opacity:.27!important;background-image:radial-gradient(circle at 50% 50%,rgba(255,250,245,.17) 0 1px,transparent 1.5px)!important;background-size:18px 18px!important}
      .door-medallion{background:radial-gradient(circle,#fffaf5 0%,#d8bce5 35%,#594267 72%,#2b2038 100%)!important;border-color:rgba(255,250,245,.7)!important;box-shadow:0 0 0 5px rgba(216,188,229,.08),0 0 30px rgba(216,188,229,.32)!important;animation:medPulse 3.2s ease-in-out infinite}
      @keyframes medPulse{0%,100%{box-shadow:0 0 0 5px rgba(216,188,229,.07),0 0 22px rgba(216,188,229,.18)}50%{box-shadow:0 0 0 8px rgba(216,188,229,.11),0 0 36px rgba(216,188,229,.38)}}
      .door-handle{background:#fffaf5!important;box-shadow:0 0 14px rgba(255,250,245,.38)!important}
      .royal-gate::after{content:"";position:absolute;inset:18px;border:1px solid rgba(255,250,245,.08);border-radius:26px;pointer-events:none;z-index:30}
      @media(max-width:600px){.royal-gate::after{inset:10px;border-radius:18px}.royal-content::before{top:-54px;font-size:1.25rem}.decor-arch{width:58vw;height:55vh;top:22%}.arch-left{left:-29%}.arch-right{right:-29%}.decor-leaf{font-size:1.6rem}}
      @media(prefers-reduced-motion:reduce){.decor-dot,.decor-petal,.decor-leaf,.decor-arch,.royal-bg::before,.royal-bg::after,.door-medallion,.royal-content::before{animation:none!important}}


      /* ===== Premium Indian Wedding finishing layer ===== */
      .royal-gate{
        background:
          radial-gradient(circle at 50% 30%,rgba(216,188,229,.18),transparent 38%),
          radial-gradient(circle at 8% 78%,rgba(196,169,215,.12),transparent 28%),
          radial-gradient(circle at 92% 18%,rgba(255,250,245,.08),transparent 26%),
          linear-gradient(145deg,#0b0810 0%,#15101d 34%,#24192f 68%,#0e0a15 100%);
      }
      .royal-bg::before{background:radial-gradient(circle,rgba(216,188,229,.18),transparent 68%);filter:blur(20px);animation:lavFloat 9s ease-in-out infinite}
      .royal-bg::after{background:radial-gradient(circle,rgba(255,250,245,.09),transparent 68%);filter:blur(32px);animation:lavFloat 12s ease-in-out infinite reverse}
      @keyframes lavFloat{0%,100%{transform:translate(-2%,-1%) scale(1);opacity:.55}50%{transform:translate(3%,2%) scale(1.08);opacity:1}}
      .royal-vignette{background:radial-gradient(circle at 50% 42%,transparent 30%,rgba(5,3,8,.28) 100%)!important}
      .royal-grain{opacity:.045!important}
      .royal-content{filter:drop-shadow(0 20px 42px rgba(0,0,0,.38))}
      .royal-content::before{content:"ॐ";position:absolute;left:50%;top:-66px;transform:translateX(-50%);color:#d8bce5;font-family:Georgia,serif;font-size:1.45rem;text-shadow:0 0 18px rgba(216,188,229,.6);animation:omFloat 4s ease-in-out infinite;pointer-events:none}
      @keyframes omFloat{0%,100%{transform:translateX(-50%) translateY(0);opacity:.62}50%{transform:translateX(-50%) translateY(-5px);opacity:1}}
      .royal-mandala{filter:drop-shadow(0 0 22px rgba(196,169,215,.32))}
      .royal-inner{background:radial-gradient(circle at 50% 35%,rgba(255,250,245,.13),transparent 45%),linear-gradient(145deg,rgba(216,188,229,.09),rgba(196,169,215,.025));border-color:rgba(216,188,229,.55)!important;box-shadow:0 0 0 1px rgba(255,250,245,.07),0 0 42px rgba(196,169,215,.18),inset 0 0 35px rgba(196,169,215,.08)}
      .royal-sanskrit{color:#d8bce5!important;text-shadow:0 0 20px rgba(216,188,229,.36);letter-spacing:.16em}
      .royal-names h1{color:#fffaf5!important;text-shadow:0 3px 0 rgba(43,32,56,.85),0 0 26px rgba(255,250,245,.18)}
      .royal-and{color:#d8bce5!important;text-shadow:0 0 14px rgba(216,188,229,.72),0 0 30px rgba(196,169,215,.32)}
      .royal-date,.royal-city{color:rgba(255,250,245,.88)!important}
      .royal-date::before,.royal-date::after{background:linear-gradient(90deg,transparent,rgba(216,188,229,.72),transparent)!important}
      .particle{background:#fffaf5!important;box-shadow:0 0 7px rgba(255,250,245,.82),0 0 17px rgba(216,188,229,.42)!important}

      .cute-indian-decor{position:absolute;inset:0;z-index:2;pointer-events:none;overflow:hidden}
      .decor-dot{position:absolute;width:6px;height:6px;border-radius:50%;background:#fffaf5;box-shadow:0 0 12px rgba(255,250,245,.8),0 0 22px rgba(216,188,229,.4);animation:dotTwinkle 3.5s ease-in-out infinite}
      .dot-a{left:8%;top:28%}.dot-b{left:15%;top:64%;animation-delay:1.2s}.dot-c{right:9%;top:34%;animation-delay:.8s}.dot-d{right:16%;top:70%;animation-delay:1.8s}
      @keyframes dotTwinkle{0%,100%{transform:scale(.65);opacity:.22}50%{transform:scale(1.35);opacity:.92}}
      .decor-petal,.decor-leaf{position:absolute;color:rgba(216,188,229,.76);font-family:Georgia,serif;text-shadow:0 0 16px rgba(216,188,229,.45);animation:petalFloat 7s ease-in-out infinite}
      .decor-petal{font-size:1.2rem}.decor-leaf{font-size:2.1rem;opacity:.38}
      .petal-a{left:12%;top:18%}.petal-b{left:7%;bottom:20%;animation-delay:1.8s}.petal-c{right:12%;top:16%;animation-delay:3s}.petal-d{right:8%;bottom:22%;animation-delay:4.2s}.leaf-a{left:2%;top:47%;transform:rotate(-28deg);animation-delay:2s}.leaf-b{right:2%;top:50%;transform:scaleX(-1) rotate(28deg);animation-delay:3.4s}
      @keyframes petalFloat{0%,100%{transform:translateY(0) rotate(0);opacity:.3}50%{transform:translateY(-12px) rotate(7deg);opacity:.85}}
      .decor-arch{position:absolute;width:min(34vw,430px);height:min(68vh,700px);border:1px solid rgba(216,188,229,.13);border-bottom:0;border-radius:50% 50% 0 0;top:18%;opacity:.72;box-shadow:inset 0 12px 30px rgba(216,188,229,.025)}
      .arch-left{left:-17%}.arch-right{right:-17%}

      .royal-enter{position:relative;overflow:hidden;border-color:rgba(255,250,245,.55)!important;background:linear-gradient(135deg,#fffaf5 0%,#ead9ef 52%,#c4a9d7 100%)!important;color:#2b2038!important;box-shadow:0 12px 34px rgba(0,0,0,.3),0 0 0 1px rgba(216,188,229,.25),0 0 32px rgba(196,169,215,.2)!important}
      .royal-enter::before{content:"";position:absolute;inset:0;background:linear-gradient(110deg,transparent 30%,rgba(255,255,255,.6) 50%,transparent 70%);transform:translateX(-120%);transition:transform .7s ease}
      .royal-enter:hover::before{transform:translateX(120%)}
      .royal-enter:hover{transform:translateY(-3px) scale(1.025);box-shadow:0 17px 44px rgba(0,0,0,.36),0 0 42px rgba(216,188,229,.34)!important}
      .royal-enter svg{color:#594267!important;animation:tinySparkle 2.4s ease-in-out infinite}

      .royal-sound{background:rgba(255,250,245,.055)!important;border-color:rgba(216,188,229,.24)!important;color:#fffaf5!important;backdrop-filter:blur(16px)}
      .royal-sound:hover{background:rgba(216,188,229,.12)!important;border-color:rgba(216,188,229,.5)!important;box-shadow:0 0 24px rgba(196,169,215,.18)}

      .royal-door{background:radial-gradient(circle at 50% 46%,rgba(216,188,229,.11),transparent 25%),linear-gradient(160deg,#17101f 0%,#30213d 48%,#21172d 100%)!important;border-color:rgba(216,188,229,.35)!important;box-shadow:inset 0 0 0 1px rgba(255,250,245,.055),inset 0 0 65px rgba(196,169,215,.08),0 0 35px rgba(0,0,0,.32)}
      .royal-door::before{border-color:rgba(216,188,229,.2)!important;box-shadow:inset 0 0 30px rgba(216,188,229,.05)}
      .door-jaali{opacity:.23!important;background-image:radial-gradient(circle at 50% 50%,rgba(255,250,245,.18) 0 1px,transparent 1.5px)!important;background-size:18px 18px!important}
      .door-medallion{background:radial-gradient(circle,#fffaf5 0%,#d8bce5 35%,#594267 72%,#2b2038 100%)!important;border-color:rgba(255,250,245,.68)!important;box-shadow:0 0 0 5px rgba(216,188,229,.08),0 0 30px rgba(216,188,229,.3)!important}
      .door-handle{background:#fffaf5!important;box-shadow:0 0 14px rgba(255,250,245,.38)!important}
      .royal-gate::after{content:"";position:absolute;inset:18px;border:1px solid rgba(255,250,245,.075);border-radius:26px;pointer-events:none;z-index:30}

      @media(max-width:600px){
        .royal-gate::after{inset:10px;border-radius:18px}
        .royal-content::before{top:-52px;font-size:1.2rem}
        .decor-arch{width:58vw;height:55vh;top:22%}
        .arch-left{left:-29%}.arch-right{right:-29%}.decor-leaf{font-size:1.55rem}
      }
      @media(prefers-reduced-motion:reduce){
        .decor-dot,.decor-petal,.decor-leaf,.decor-arch,.royal-bg::before,.royal-bg::after,.door-medallion,.royal-content::before,.royal-enter svg{animation:none!important}
      }

      `}
</style>


      {/* =====================================================
          BACKGROUND
      ===================================================== */}

      <div className="cute-indian-decor" aria-hidden="true"><span className="decor-dot dot-a"/><span className="decor-dot dot-b"/><span className="decor-dot dot-c"/><span className="decor-dot dot-d"/><span className="decor-petal petal-a">✦</span><span className="decor-petal petal-b">✧</span><span className="decor-petal petal-c">✦</span><span className="decor-petal petal-d">✧</span><span className="decor-leaf leaf-a">❧</span><span className="decor-leaf leaf-b">❧</span><span className="decor-arch arch-left"/><span className="decor-arch arch-right"/></div><div className="royal-bg" />

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