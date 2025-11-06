// src/components/Hero.tsx
"use client";

// import React, { useEffect, useRef } from "react";

import { Link } from "@/i18n/navigation";
import ProspectusPage from "./heroRight";

export default function Hero() {
  return (
    <section
      id="home"
      aria-labelledby="hero-heading"
      className="relative overflow-hidden"
    >
      {/* Global backdrop (soft gradients; no hard borders between sections) */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10"
      >
        {/* Wide angled gradient wash using theme tokens */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(120deg, color-mix(in oklab, var(--bg) 85%, black 15%) 0%, color-mix(in oklab, var(--bg) 70%, #0e1d2c 30%) 48%, color-mix(in oklab, #13263a 92%, var(--bg) 8%) 100%)",
          }}
        />

        {/* Parallax orbs */}
        <div className="hero-orb hero-orb-a" />
        <div className="hero-orb hero-orb-b" />
        <div className="hero-orb hero-orb-c" />

        {/* Organic morphing blobs */}
        <div className="hero-blob hero-blob-1" />
        <div className="hero-blob hero-blob-2" />
      </div>

      <div className="mx-auto max-w-[74rem] px-4 md:px-6">
        <div className="grid grid-cols-1 items-center gap-10 md:grid-cols-2 md:gap-12 min-h-screen md:min-h-[88vh] py-16 md:py-24">
          {/* Left: copy */}
          <div>
            <p className="eyebrow text-[color:var(--accent)]">
              Academic Discovery, Upgraded
            </p>

            <h1
              id="hero-heading"
              className="h1 mt-3 text-balance"
              style={{ color: "var(--ink)" }}
            >
              Find your <span className="grad-text">dream supervisor</span>, lab
              & university — in one click
            </h1>

            <p className="lead mt-4 text-pretty">
              The browser extension that turns any university page into a smart
              map of professors, topics, and verified contacts.
            </p>

            <div className="mt-7 flex flex-wrap gap-3">
              <a
                href="#"
                className="btn btn-primary text-sm"
                aria-label="Install the APCScholariest extension"
              >
                Install Extension
              </a>
              <a
                href="#skills-conversion"
                className="btn btn-ghost text-sm"
                aria-label="See how conversion is optimized"
              >
                See why it converts
              </a>
            </div>

            {/* Credibility chips */}
            <div
              className="mt-6 flex flex-wrap items-center gap-5 text-xs text-[color:var(--ink-soft)]"
              aria-label="Benefits"
            >
              <span className="flex items-center gap-2">
                <span className="dot bg-[color:var(--primary)]/90" />
                Privacy-first
              </span>
              <span className="flex items-center gap-2">
                <span className="dot bg-[color:var(--accent)]/90" />
                Multilingual
              </span>
              <span className="flex items-center gap-2">
                <span className="dot bg-[color:var(--cta)]" />
                Free to start
              </span>
            </div>

            {/* KPIs */}
            <div className="mt-8 grid max-w-md grid-cols-3 gap-3">
              <div className="kpi">
                <div className="kpi-num">5×</div>
                <div className="kpi-sub">Faster shortlisting</div>
              </div>
              <div className="kpi">
                <div className="kpi-num">95%</div>
                <div className="kpi-sub">Email precision</div>
              </div>
              <div className="kpi">
                <div className="kpi-num">190+</div>
                <div className="kpi-sub">Countries</div>
              </div>
            </div>
          </div>

          {/* Right: app mock */}

          <ProspectusPage />

          {/* <aside
            className="card p-4 md:p-5 relative"
            aria-label="Visual preview"
          >
            <div className="pointer-events-none absolute -inset-px rounded-xl opacity-40 [background:radial-gradient(1200px_600px_at_20%_-20%,rgba(255,255,255,.12),transparent)]" />

            <div className="rounded-xl border border-[color:var(--line)] bg-white/5 p-4">
              <div className="mb-4 h-4 w-28 rounded bg-[color:var(--line)]" />
              <div className="grid grid-cols-2 gap-3" aria-hidden="true">
                {Array.from({ length: 4 }).map((_, i) => (
                  <div
                    key={i}
                    className="rounded-lg border border-[color:var(--line)] bg-white/5 p-3 hover:-translate-y-[2px] transition"
                  >
                    <div className="h-3 w-20 rounded bg-[color:var(--line)]" />
                    <div className="mt-2 h-3 w-32 rounded bg-[color:var(--line)]" />
                    <div className="mt-2 h-3 w-16 rounded bg-[color:var(--line)]" />
                  </div>
                ))}
              </div>
            </div>
            <p className="mt-3 text-center text-xs text-[color:var(--ink-soft)]">
              Demo — parsed professors preview
            </p>
          </aside> */}
        </div>
      </div>

      {/* Local styles: motion + organic shapes using theme tokens */}
      <style jsx>{`
        /* Typography helpers (match your system) */
        .h1 {
          font-weight: 800;
          letter-spacing: -0.02em;
          line-height: 1.05;
          font-size: clamp(2.25rem, 3.4vw + 1rem, 3.75rem);
        }
        .eyebrow {
          font-size: 0.72rem;
          letter-spacing: 0.25em;
          text-transform: uppercase;
        }
        .lead {
          color: var(--ink-soft);
          max-width: 65ch;
        }

        /* Grad text accent */
        .grad-text {
          background: linear-gradient(
            90deg,
            var(--primary) 0%,
            var(--accent) 55%,
            #ff9bd7 100%
          );
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
        }

        .dot {
          width: 10px;
          height: 10px;
          border-radius: 999px;
          display: inline-block;
        }

        .kpi {
          background: color-mix(in oklab, var(--card) 82%, transparent 18%);
          border: 1px solid var(--line);
          border-radius: 14px;
          text-align: center;
          padding: 0.9rem;
          backdrop-filter: blur(8px);
        }
        .kpi-num {
          color: var(--ink);
          font-weight: 800;
          font-size: 1.25rem;
        }
        .kpi-sub {
          color: var(--ink-soft);
          font-size: 0.74rem;
          margin-top: 2px;
        }

        /* Orbs (parallax feel) */
        .hero-orb {
          position: absolute;
          filter: blur(60px);
          mix-blend: screen;
          opacity: 0.55;
          pointer-events: none;
          animation: float 18s ease-in-out infinite;
        }
        .hero-orb-a {
          width: 42rem;
          height: 42rem;
          left: -12rem;
          top: -10rem;
          background: color-mix(in oklab, var(--primary) 55%, transparent 45%);
        }
        .hero-orb-b {
          width: 36rem;
          height: 36rem;
          right: -10rem;
          top: -4rem;
          background: color-mix(in oklab, var(--accent) 52%, transparent 48%);
          animation-duration: 22s;
          animation-direction: reverse;
        }
        .hero-orb-c {
          width: 30rem;
          height: 30rem;
          left: 20%;
          bottom: -12rem;
          background: color-mix(in oklab, #ff9bd7 48%, transparent 52%);
          animation-duration: 24s;
        }

        /* Organic blobs (shape-morph + slight rotate) */
        .hero-blob {
          position: absolute;
          inset: auto;
          width: 34rem;
          height: 34rem;
          filter: blur(12px);
          opacity: 0.18;
          mix-blend-mode: screen;
          transform-origin: 50% 50%;
          will-change: border-radius, transform;
          animation: blob-morph 14s ease-in-out infinite;
        }
        .hero-blob-1 {
          right: -10rem;
          bottom: -8rem;
          background: radial-gradient(
            50% 60% at 50% 50%,
            color-mix(in oklab, var(--primary) 80%, white 10%) 0%,
            transparent 70%
          );
        }
        .hero-blob-2 {
          left: -8rem;
          top: 35%;
          width: 28rem;
          height: 28rem;
          animation-duration: 18s;
          background: radial-gradient(
            50% 60% at 50% 50%,
            color-mix(in oklab, var(--accent) 80%, white 10%) 0%,
            transparent 70%
          );
        }

        @keyframes float {
          0% {
            transform: translateY(0) translateX(0);
          }
          50% {
            transform: translateY(20px) translateX(10px);
          }
          100% {
            transform: translateY(0) translateX(0);
          }
        }

        @keyframes blob-morph {
          0% {
            border-radius: 42% 58% 62% 38% / 44% 39% 61% 56%;
            transform: rotate(0deg) translateZ(0);
          }
          50% {
            border-radius: 58% 42% 35% 65% / 52% 64% 36% 48%;
            transform: rotate(12deg) translateZ(0);
          }
          100% {
            border-radius: 42% 58% 62% 38% / 44% 39% 61% 56%;
            transform: rotate(0deg) translateZ(0);
          }
        }
      `}</style>
    </section>
  );
}
