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
    video: "/example%20video%201.mp4",
    rotate: -8,
    widthClass: "w-[208px]",
    duration: 8.5,
    delay: 0.4,
    vpos: "top-[14%]",
    x: -610,
  },
  {
    label: "Wearable Headband Device",
    views: "1.2M",
    tone: ["#3a2532", "#241620", "#0e0a0d"],
    blob: "#f3a6c6",
    video: "/video%20example%202.mp4",
    rotate: -4,
    widthClass: "w-[172px]",
    duration: 7.8,
    delay: 1.4,
    opacity: 0.9,
    vpos: "top-[50%]",
    x: -520,
  },
];

const RIGHT_CARDS: typeof LEFT_CARDS = [
  {
    label: "AI App Tier",
    views: "1.7M",
    tone: ["#352433", "#201521", "#0d090c"],
    blob: "#f3a6c6",
    video: "/video%203.mp4",
    rotate: 10,
    widthClass: "w-[162px]",
    duration: 7.4,
    delay: 0.4,
    opacity: 0.95,
    vpos: "top-[20%]",
    x: 545,
  },
  {
    label: "Dialogue",
    views: "3.1M",
    tone: ["#3c2b2c", "#231a1b", "#0d0908"],
    blob: "#f6c1d7",
    video: "/video%204.mp4",
    rotate: 13,
    widthClass: "w-[184px]",
    duration: 8,
    delay: 2,
    vpos: "bottom-[22%]",
    x: 520,
  },
];

export function Hero() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden px-6 pb-[10vh]">
      {/* Ambient pink glow — the only colour in an otherwise black field */}
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-1/2 h-[640px] w-[640px] -translate-x-1/2 -translate-y-1/2 rounded-full blur-[140px]"
        style={{
          background:
            "radial-gradient(circle, rgba(243,166,198,0.16) 0%, rgba(243,166,198,0.04) 45%, transparent 70%)",
        }}
      />
      {/* Subtle bottom vignette */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-canvas to-transparent"
      />

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
        className="relative z-10 mx-auto flex max-w-5xl flex-col items-center text-center"
      >
        {/* Badge */}
        <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-1.5 shadow-[0_0_24px_-4px_rgba(243,166,198,0.35)] backdrop-blur-sm">
          <span className="h-1.5 w-1.5 rounded-full bg-pink-200 shadow-[0_0_8px_2px] shadow-pink-200/70" />
          <span className="text-mono-label text-ink-200">
            AI Creative Workflow Agent
          </span>
        </div>

        {/* Title */}
        <h1 className="mt-7 text-balance text-ink text-h1 sm:text-display-l sm:whitespace-nowrap lg:text-display-xl">
          Create Short-form Ads with AI
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
