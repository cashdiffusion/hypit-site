"use client";

import { useRef, useState } from "react";

/* Deterministic-looking waveform bar heights (no Math.random in render). */
const BARS = [
  5, 9, 14, 8, 17, 11, 6, 13, 19, 10, 7, 15, 9, 5, 12, 8, 16, 6, 11, 14, 7, 18,
  9, 6, 13, 10, 15, 8, 12, 7, 16, 9,
];

/** Voiceover waveform. When `audio` is set, the bars double as a play/pause
    toggle for the clip; otherwise they're a static preview. */
export function VoiceWave({
  name,
  duration,
  audio,
}: {
  name: string;
  duration: string;
  audio?: string;
}) {
  const ref = useRef<HTMLAudioElement>(null);
  const [playing, setPlaying] = useState(false);

  // Use the React state as the intent (not audio.paused, which stays true
  // while a preload="none" clip is still loading) so a second click always
  // stops playback immediately and rewinds to the start.
  const toggle = () => {
    const a = ref.current;
    if (!a) return;
    if (playing) {
      a.pause();
      a.currentTime = 0;
      setPlaying(false);
    } else {
      a.play().catch(() => {});
      setPlaying(true);
    }
  };

  return (
    <div>
      <button
        type="button"
        onClick={audio ? toggle : undefined}
        aria-label={audio ? (playing ? "Pause voiceover" : "Play voiceover") : undefined}
        className={`flex h-9 w-full items-center justify-between ${
          audio ? "cursor-pointer" : "cursor-default"
        }`}
      >
        {BARS.map((h, i) => (
          <span
            key={i}
            className={`w-[3px] shrink-0 rounded-full transition-colors duration-200 ${
              playing ? "bg-pink-200" : "bg-pink-200/60"
            }`}
            style={{ height: `${h}px` }}
          />
        ))}
      </button>
      <div className="mt-2 flex items-center justify-between text-[10px] text-muted">
        <span className="truncate">{name}</span>
        <span className="font-mono text-ink-200">{duration}</span>
      </div>
      {audio && (
        <audio
          ref={ref}
          src={audio}
          preload="none"
          onPlay={() => setPlaying(true)}
          onPause={() => setPlaying(false)}
          onEnded={() => setPlaying(false)}
        />
      )}
    </div>
  );
}
