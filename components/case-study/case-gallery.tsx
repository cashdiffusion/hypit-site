"use client";

import { useRef } from "react";

type Clip = { src: string; label: string };

/** A 9:16 clip that plays on hover and toggles on click. */
function GalleryClip({ src, label }: Clip) {
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
  const handleClick = () => {
    const v = videoRef.current;
    if (!v) return;
    if (v.paused) v.play().catch(() => {});
    else v.pause();
  };

  return (
    <figure className="shrink-0">
      <div
        onMouseEnter={handleEnter}
        onMouseLeave={handleLeave}
        onClick={handleClick}
        className="relative aspect-[9/16] w-full cursor-pointer overflow-hidden rounded-[8px] border border-white/10 bg-surface-200 ring-1 ring-inset ring-white/[0.05]"
        style={{
          WebkitMaskImage: "-webkit-radial-gradient(white, black)",
          transform: "translateZ(0)",
        }}
      >
        <video
          ref={videoRef}
          className="absolute inset-0 h-full w-full object-cover"
          src={src}
          loop
          muted
          playsInline
          preload="metadata"
        />
        <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/60 to-transparent" />
        <span className="absolute bottom-2.5 left-2.5 rounded-md bg-black/40 px-1.5 py-0.5 font-mono text-[9px] text-white/75 backdrop-blur-sm">
          {label}
        </span>
      </div>
    </figure>
  );
}

export function CaseGallery({ clips }: { clips: Clip[] }) {
  return (
    <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
      {clips.map((c) => (
        <GalleryClip key={c.src} {...c} />
      ))}
    </div>
  );
}
