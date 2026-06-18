"use client";

import { useRef } from "react";
import type { CaseCard } from "@/lib/client-cases";

export function ClientCaseCard({
  card,
  initial,
  brand,
  logo,
}: {
  card: CaseCard;
  initial: string;
  brand: string;
  logo?: string;
}) {
  const videoRef = useRef<HTMLVideoElement>(null);

  // Hover to play; on leave, pause and rewind to the first frame.
  const handleEnter = () => {
    videoRef.current?.play().catch(() => {});
  };
  const handleLeave = () => {
    const v = videoRef.current;
    if (!v) return;
    v.pause();
    v.currentTime = 0;
  };

  return (
    <article className="flex w-[176px] shrink-0 snap-start flex-col overflow-hidden rounded-2xl border border-white/10 bg-surface-200">
      {/* image / still / video */}
      <div
        className="relative aspect-[9/16]"
        onMouseEnter={handleEnter}
        onMouseLeave={handleLeave}
      >
        {card.video ? (
          <video
            ref={videoRef}
            className="absolute inset-0 h-full w-full object-cover"
            src={card.video}
            loop
            muted
            playsInline
            preload="metadata"
          />
        ) : (
          <div className="absolute inset-0" style={{ background: card.bg }} />
        )}
        {/* scrims for legibility, top + bottom */}
        <div className="absolute inset-x-0 top-0 h-2/5 bg-gradient-to-b from-black/60 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-1/4 bg-gradient-to-t from-black/55 to-transparent" />

        {/* top: brand chip + active badge */}
        <div className="absolute inset-x-0 top-0 flex flex-col gap-2 p-2.5">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-1.5">
              {logo ? (
                <img
                  src={logo}
                  alt={brand}
                  className="h-4 w-4 rounded-full object-cover"
                />
              ) : (
                <span className="flex h-4 w-4 items-center justify-center rounded-full bg-pink-300/20 text-[8px] font-bold text-pink-200">
                  {initial}
                </span>
              )}
              <span className="text-[10px] font-medium text-ink/90">
                {brand}
              </span>
            </div>
            <span className="rounded-full bg-pink-300/20 px-1.5 py-0.5 text-[8px] font-semibold uppercase tracking-[0.08em] text-pink-200">
              Active
            </span>
          </div>

          {/* headline — hidden on real video cards (clean footage, no overlay text) */}
          {!card.video && (
            <h4 className="text-[13px] font-semibold leading-snug text-ink">
              {card.headline.map((t, i) => (
                <span key={i} className={t.pink ? "text-pink-300" : ""}>
                  {t.text}
                </span>
              ))}
            </h4>
          )}
        </div>

        {/* tag */}
        <span className="absolute bottom-2.5 left-2.5 rounded-md bg-black/40 px-1.5 py-0.5 font-mono text-[9px] text-white/70 backdrop-blur-sm">
          {card.tag}
        </span>
      </div>

      {/* metrics footer */}
      <div className="flex items-center justify-between border-t border-white/5 px-3 py-2.5">
        <div>
          <div className="font-mono text-[9px] uppercase tracking-[0.1em] text-faint">
            Views
          </div>
          <div className="text-[13px] font-semibold text-ink">{card.value}</div>
        </div>
        <span className="text-[11px] font-semibold text-pink-300">
          {card.delta}
        </span>
      </div>
    </article>
  );
}
