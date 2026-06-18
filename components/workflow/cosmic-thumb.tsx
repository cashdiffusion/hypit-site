"use client";

import { useRef } from "react";

/** A 9:16 thumbnail. Plays `video` (hover or click) when provided; otherwise
    shows a cosmic gradient placeholder with a faux video play-bar. */
type CosmicThumbProps = {
  bg: string;
  className?: string;
  bar?: "full" | "mini";
  time?: string;
  /** Optional real video (path under /public). */
  video?: string;
};

export function CosmicThumb({
  bg,
  className = "",
  bar = "mini",
  time,
  video,
}: CosmicThumbProps) {
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleEnter = () => {
    videoRef.current?.play().catch(() => {});
  };
  const handleLeave = () => {
    const v = videoRef.current;
    if (!v) return;
    v.pause();
    v.currentTime = 0;
  };
  // Click toggles play/pause — covers touch devices where hover never fires.
  const handleClick = () => {
    const v = videoRef.current;
    if (!v) return;
    if (v.paused) v.play().catch(() => {});
    else v.pause();
  };

  return (
    <div
      className={`relative aspect-[9/16] overflow-hidden rounded-[8px] border border-white/10 ring-1 ring-inset ring-white/[0.05] ${
        video ? "cursor-pointer" : ""
      } ${className}`}
      onMouseEnter={video ? handleEnter : undefined}
      onMouseLeave={video ? handleLeave : undefined}
      onClick={video ? handleClick : undefined}
      style={
        video
          ? {
              // Force Safari (Apple screens) to clip the video to the corners.
              WebkitMaskImage: "-webkit-radial-gradient(white, black)",
              transform: "translateZ(0)",
            }
          : undefined
      }
    >
      {/* Gradient always sits underneath as a fallback (e.g. before the real
          video file exists); the video layers on top when present. */}
      <div className="absolute inset-0" style={{ background: bg }} />
      {video && (
        <video
          ref={videoRef}
          className="absolute inset-0 h-full w-full object-cover"
          src={video}
          loop
          muted
          playsInline
          preload="metadata"
        />
      )}
      {/* scrim for play-bar legibility */}
      <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/55 to-transparent" />

      {/* Faux play-bar — only on the gradient placeholder (real videos play). */}
      {!video && (
        <div className="absolute inset-x-3 bottom-3 flex items-center gap-2">
          <span
            className={`flex shrink-0 items-center justify-center rounded-full bg-white/15 backdrop-blur-md ${
              bar === "full" ? "h-7 w-7" : "h-5 w-5"
            }`}
          >
            <svg
              width={bar === "full" ? 8 : 6}
              height={bar === "full" ? 10 : 8}
              viewBox="0 0 9 11"
              fill="none"
              className="ml-0.5"
            >
              <path d="M0 0L9 5.5L0 11V0Z" fill="white" />
            </svg>
          </span>
          <div className="h-[3px] flex-1 overflow-hidden rounded-full bg-white/20">
            <div className="h-full w-[38%] rounded-full bg-pink-200" />
          </div>
          {bar === "full" && time && (
            <span className="font-mono text-[10px] text-white/80">{time}</span>
          )}
        </div>
      )}
    </div>
  );
}
