"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { VideoCard, type VideoCardData } from "@/components/hero/video-card";
import { CapabilitiesMarquee } from "@/components/sections/capabilities-marquee";
import { BookDemoCta } from "@/components/contact/book-demo-cta";

/* The floating previews — two on the left, three on the right. Tones lean
   rose / beige / mauve so they read as beauty + skincare + UGC stills
   without any literal product imagery. */
const LEFT_CARDS: (VideoCardData & {
  rotate: number;
  widthClass: string;
  duration: number;
  delay: number;
  opacity?: number;
  /** Vertical anchor (top/bottom utility). */
  vpos: string;
  /** Horizontal anchor: card-centre distance in px from the hero centre
      (negative = left). Keeps cards framing the hero, not the viewport edge. */
  x: number;
})[] = [
  {
    label: "AI Tarot App",
    views: "860K",
    tone: ["#332a36", "#1f1822", "#0d0a0c"],
    blob: "#ee8fba",
    video: "/example%20video%201.preview.mp4",
    rotate: -8,
    widthClass: "w-[208px]",
    duration: 8.5,
    delay: 0.4,
    vpos: "top-[14%]",
    x: -535,
  },
  {
    label: "Wearable Headband",
    views: "1.2M",
    tone: ["#3a2532", "#241620", "#0e0a0d"],
    blob: "#f3a6c6",
    video: "/nuromova.mp4",
    rotate: -4,
    widthClass: "w-[172px]",
    duration: 7.8,
    delay: 1.4,
    opacity: 0.9,
    vpos: "top-[50%]",
    x: -445,
  },
];

// The first entry paints underneath the second where the two overlap.
const RIGHT_CARDS: typeof LEFT_CARDS = [
  {
    label: "Dialogue",
    views: "3.1M",
    tone: ["#3c2b2c", "#231a1b", "#0d0908"],
    blob: "#f6c1d7",
    video: "/video%204.mp4",
    rotate: 15,
    widthClass: "w-[184px]",
    duration: 8,
    delay: 2,
    opacity: 0.82,
    vpos: "top-[20%]",
    x: 535,
  },
  {
    label: "AI App Tier",
    views: "1.7M",
    tone: ["#352433", "#201521", "#0d090c"],
    blob: "#f3a6c6",
    video: "/video%203.mp4",
    rotate: 6,
    widthClass: "w-[162px]",
    duration: 7.4,
    delay: 0.4,
    opacity: 0.95,
    vpos: "top-[50%]",
    x: 445,
  },
];

export function Hero() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden px-6 pb-[10vh]">
      {/* Layered blurred-black backdrop — soft colour glows drifting over a
          near-black field, a faint film grain, and a vignette that fades the
          edges to pure black for that deep, out-of-focus look. */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 overflow-hidden"
      >
        {/* primary pink glow, upper-centre */}
        <div
          className="absolute left-1/2 top-[32%] h-[720px] w-[860px] -translate-x-1/2 -translate-y-1/2 rounded-full blur-[170px]"
          style={{
            background:
              "radial-gradient(circle, rgba(243,166,198,0.20) 0%, rgba(243,166,198,0.05) 45%, transparent 70%)",
          }}
        />
        {/* mauve glow, lower-left */}
        <div
          className="absolute left-[16%] top-[82%] h-[560px] w-[560px] -translate-x-1/2 -translate-y-1/2 rounded-full blur-[160px]"
          style={{
            background:
              "radial-gradient(circle, rgba(155,109,255,0.14) 0%, transparent 65%)",
          }}
        />
        {/* warm pink glow, right */}
        <div
          className="absolute left-[88%] top-[44%] h-[480px] w-[480px] -translate-x-1/2 -translate-y-1/2 rounded-full blur-[160px]"
          style={{
            background:
              "radial-gradient(circle, rgba(238,143,186,0.12) 0%, transparent 65%)",
          }}
        />
        {/* film grain */}
        <div
          className="absolute inset-0 opacity-[0.05] mix-blend-soft-light"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='160' height='160'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
          }}
        />
        {/* edge vignette to pure black */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(120% 95% at 50% 38%, transparent 52%, rgba(5,5,5,0.9) 100%)",
          }}
        />
        {/* bottom fade into the next section */}
        <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-canvas to-transparent" />
      </div>

      {/* Floating side cards — purely decorative, hidden on smaller screens.
          Each is anchored to the hero CENTRE (left-1/2 + a fixed px offset),
          so the cards frame the headline consistently at any screen width
          instead of drifting with the viewport edges. */}
      <div aria-hidden className="absolute inset-0 hidden xl:block">
        {[...LEFT_CARDS, ...RIGHT_CARDS].map((c) => (
          <div
            key={c.label}
            className={`absolute left-1/2 ${c.vpos}`}
            style={{ transform: `translateX(calc(-50% + ${c.x}px))` }}
          >
            <VideoCard {...c} />
          </div>
        ))}
      </div>

      {/* Center content */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="relative top-[15%] z-10 mx-auto flex max-w-5xl flex-col items-center text-center"
      >
        {/* Badge */}
        <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-1.5 shadow-[0_0_24px_-4px_rgba(243,166,198,0.35)] backdrop-blur-sm">
          <span className="h-1.5 w-1.5 rounded-full bg-pink-200 shadow-[0_0_8px_2px] shadow-pink-200/70" />
          <span className="text-mono-label text-ink-200">
            AI Creative Workflow Agent
          </span>
        </div>

        {/* Title */}
        <h1 className="mt-7 text-balance text-ink text-h1 sm:text-display-l sm:whitespace-nowrap lg:text-[54px] lg:leading-[1.1] lg:tracking-[-0.02em]">
          Create Short-form Ads{" "}
          <span className="font-script font-normal italic text-pink-300">
            with AI
          </span>
        </h1>

        {/* Subtitle */}
        <p className="mt-6 max-w-2xl text-balance text-muted text-[15px] leading-[1.6] sm:text-[18px]">
          Use Hypit to turn one creator-style video into hundreds of fresh ads
          for TikTok, Reels, and Shorts.
        </p>

        {/* CTAs */}
        <div className="mt-9 flex flex-col items-center gap-3 sm:flex-row">
          <BookDemoCta />
          <Link
            href="/workflows"
            className="group inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/[0.03] px-6 py-3 text-body-s font-medium tracking-[0.06em] text-ink transition-colors duration-300 hover:border-white/25 hover:bg-white/[0.07]"
          >
            VIEW EXAMPLE WORKFLOWS
            <span className="transition-transform duration-300 group-hover:translate-x-0.5">
              →
            </span>
          </Link>
        </div>
      </motion.div>

      {/* Capability marquee — pinned near the bottom of the first viewport */}
      <div className="absolute inset-x-0 bottom-8 z-[3]">
        <CapabilitiesMarquee />
      </div>
    </section>
  );
}
