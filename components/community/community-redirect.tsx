"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { DISCORD_INVITE } from "@/lib/links";

const RINGS = [280, 440, 600, 760];

export function CommunityRedirect() {
  const [count, setCount] = useState(3);
  const [cancelled, setCancelled] = useState(false);

  useEffect(() => {
    if (cancelled) return;
    if (count <= 0) {
      window.location.href = DISCORD_INVITE;
      return;
    }
    const t = setTimeout(() => setCount((c) => c - 1), 1000);
    return () => clearTimeout(t);
  }, [count, cancelled]);

  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-canvas px-6">
      {/* concentric rings + center glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
      >
        {RINGS.map((s) => (
          <div
            key={s}
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/[0.06]"
            style={{ width: s, height: s }}
          />
        ))}
      </div>
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-1/2 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full blur-[120px]"
        style={{
          background:
            "radial-gradient(circle, rgba(243,166,198,0.12) 0%, transparent 70%)",
        }}
      />

      <div className="relative z-10 flex max-w-xl flex-col items-center text-center">
        {/* badge */}
        <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-3 py-1">
          <span className="h-1.5 w-1.5 rounded-full bg-pink-300" />
          <span className="text-mono-label text-ink-200">Community</span>
        </div>

        {/* discord mark */}
        <div className="mt-7 flex h-20 w-20 items-center justify-center rounded-2xl border border-white/10 bg-surface-200 shadow-[0_0_44px_-10px_rgba(243,166,198,0.5)]">
          <svg width="40" height="40" viewBox="0 0 24 24" fill="#ffffff">
            <path d="M19.3 5.4A17 17 0 0 0 15 4l-.3.5a13 13 0 0 1 3.7 1.8 12 12 0 0 0-10.8 0A13 13 0 0 1 11.3 4.5L11 4a17 17 0 0 0-4.3 1.4C3.9 9.5 3.1 13.5 3.5 17.5a17 17 0 0 0 5.2 2.6l.6-1.6-1.5-.7.4-.3a12 12 0 0 0 10.6 0l.4.3-1.5.7.6 1.6a17 17 0 0 0 5.2-2.6c.5-4.7-.8-8.7-3.2-12.1ZM9.5 15c-.8 0-1.5-.8-1.5-1.7s.7-1.7 1.5-1.7 1.5.8 1.5 1.7-.7 1.7-1.5 1.7Zm5 0c-.8 0-1.5-.8-1.5-1.7s.7-1.7 1.5-1.7 1.5.8 1.5 1.7-.7 1.7-1.5 1.7Z" />
          </svg>
        </div>

        {/* title */}
        <h1 className="mt-8 text-h1 text-ink sm:text-display-l">
          Join the <span className="text-pink-300">Hypit</span> Discord
        </h1>

        {/* subtitle */}
        <p className="mt-4 max-w-md text-body-m text-muted">
          Share winning ads, swap scripts, and ship ideas with creators who are
          already hypinting their products.
        </p>

        {/* countdown */}
        <div className="mt-8 flex items-center gap-2">
          <span
            className={`h-1.5 w-1.5 rounded-full ${
              cancelled ? "bg-faint" : "bg-pink-300"
            }`}
          />
          <span className="text-mono-label text-muted">
            {cancelled
              ? "Auto-redirect cancelled"
              : `Redirecting in ${count}s`}
          </span>
        </div>

        {/* actions */}
        <div className="mt-6 flex flex-col items-center gap-3 sm:flex-row">
          <a
            href={DISCORD_INVITE}
            className="group inline-flex items-center gap-1.5 rounded-full bg-white px-6 py-3 text-body-s font-medium tracking-[0.04em] text-canvas transition-colors duration-300 hover:bg-white/90"
          >
            Open Discord now
            <svg width="13" height="13" viewBox="0 0 16 16" fill="none" className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
              <path d="M4 12L12 4M12 4H6M12 4V10" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
          <button
            onClick={() => setCancelled(true)}
            className="inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-white/[0.03] px-6 py-3 text-body-s font-medium tracking-[0.04em] text-ink transition-colors duration-300 hover:border-white/30 hover:bg-white/[0.07]"
          >
            Cancel auto-redirect
          </button>
        </div>

        {/* back home */}
        <Link
          href="/"
          className="mt-8 text-[13px] text-muted transition-colors hover:text-ink"
        >
          ← Back to home
        </Link>
      </div>
    </section>
  );
}
