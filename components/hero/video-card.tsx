"use client";

import { motion } from "framer-motion";

export type VideoCardData = {
  label: string;
  views: string;
  /** Three-stop gradient for the thumbnail, top → bottom. */
  tone: [string, string, string];
  /** Soft "product light" blob colour inside the thumbnail. */
  blob: string;
  /** Optional video source (under /public) to play inside the frame.
      When set, it replaces the decorative gradient blob. */
  video?: string;
};

type VideoCardProps = VideoCardData & {
  /** Static tilt in degrees. */
  rotate: number;
  /** Tailwind width class, e.g. "w-[170px]" — drives the 9:16 frame. */
  widthClass: string;
  /** Float animation timing for organic, non-synced motion. */
  duration: number;
  delay: number;
  /** Depth cue — slightly fades cards meant to read as "further back". */
  opacity?: number;
};

export function VideoCard({
  label,
  views,
  tone,
  blob,
  video,
  rotate,
  widthClass,
  duration,
  delay,
  opacity = 1,
}: VideoCardProps) {
  return (
    <motion.div
      initial={{ y: 0 }}
      animate={{ y: [0, -14, 0] }}
      transition={{
        duration,
        delay,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      style={{ opacity }}
    >
      {/* Rotation lives on a separate layer so the float (translateY) never
          fights the tilt transform. */}
      <div style={{ transform: `rotate(${rotate}deg)` }} className="relative">
        {/* Soft pink glow behind the card */}
        <div
          aria-hidden
          className="absolute -inset-8 rounded-[48px] blur-3xl"
          style={{
            background: `radial-gradient(60% 60% at 50% 45%, ${blob}40, transparent 70%)`,
          }}
        />

        <div
          className={`relative ${widthClass} aspect-[9/16] overflow-hidden rounded-[8px] border border-white/10 bg-surface-200 shadow-[0_30px_80px_-20px_rgba(0,0,0,0.8)] ring-1 ring-inset ring-white/[0.06]`}
          style={{
            // Safari (Apple screens) won't clip a covered <video> to the
            // rounded corners unless the container is masked / GPU-promoted.
            WebkitMaskImage: "-webkit-radial-gradient(white, black)",
            transform: "translateZ(0)",
          }}
        >
          {/* Thumbnail — layered gradients evoke skincare / beauty / UGC stills */}
          <div
            className="absolute inset-0"
            style={{
              background: `linear-gradient(160deg, ${tone[0]} 0%, ${tone[1]} 55%, ${tone[2]} 100%)`,
            }}
          />
          {/* Real video fills the frame when provided; otherwise a soft
              "product light" blob stands in. */}
          {video ? (
            <video
              className="absolute inset-0 h-full w-full rounded-[8px] object-cover"
              src={video}
              autoPlay
              loop
              muted
              playsInline
              preload="auto"
            />
          ) : (
            <div
              aria-hidden
              className="absolute left-1/2 top-[42%] h-32 w-32 -translate-x-1/2 -translate-y-1/2 rounded-full blur-2xl"
              style={{ background: `${blob}55` }}
            />
          )}
          {/* top sheen */}
          <div
            aria-hidden
            className="absolute inset-x-0 top-0 h-1/2 bg-gradient-to-b from-white/10 to-transparent"
          />
          {/* bottom scrim for legibility */}
          <div
            aria-hidden
            className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/65 to-transparent"
          />

          {/* Top label chip — sits on a single line; labels are kept short
              enough to fit inside the narrow 9:16 frame. */}
          <div className="absolute left-3 top-3 inline-flex items-center gap-1.5 rounded-2xl border border-white/10 bg-black/35 px-2.5 py-1 backdrop-blur-md">
            <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-pink-200 shadow-[0_0_6px_1px] shadow-pink-200/70" />
            {/* Card label = compact Mono Label (smaller than the canonical
                text-mono-label token, to fit the narrow 9:16 frame) */}
            <span className="whitespace-nowrap font-mono text-[10px] font-medium uppercase leading-tight tracking-[0.08em] text-white/90">
              {label}
            </span>
          </div>

          {/* Bottom: play + views */}
          <div className="absolute inset-x-3 bottom-3 flex items-center justify-between">
            <span className="flex h-7 w-7 items-center justify-center rounded-full border border-white/15 bg-white/15 backdrop-blur-md">
              <svg
                width="9"
                height="11"
                viewBox="0 0 9 11"
                fill="none"
                className="ml-0.5"
              >
                <path d="M0 0L9 5.5L0 11V0Z" fill="white" />
              </svg>
            </span>
            <span className="font-mono text-[11px] text-white/85">
              {views}
            </span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
