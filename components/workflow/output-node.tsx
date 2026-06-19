"use client";

import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { AnimatePresence, motion } from "framer-motion";
import type { WorkflowTemplate } from "@/lib/workflow-templates";

/* Vertical engagement rail mirrored from the workflow.png output frame. */
function SideIcon({ children, label }: { children: React.ReactNode; label: string }) {
  return (
    <div className="flex flex-col items-center gap-0.5 text-ink/90">
      <span className="flex h-7 w-7 items-center justify-center rounded-full bg-black/35 backdrop-blur-sm">
        {children}
      </span>
      <span className="text-[9px] font-medium text-ink/80">{label}</span>
    </div>
  );
}

export function OutputNode({ template }: { template: WorkflowTemplate }) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const modalVideoRef = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(true);
  const [expanded, setExpanded] = useState(false);
  // Portal target — the modal must render at <body> so a transformed ancestor
  // (the canvas card / motion wrappers) doesn't capture its `fixed` position.
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  const toggle = () => {
    const v = videoRef.current;
    if (!v) return;
    if (v.paused) v.play().catch(() => {});
    else v.pause();
  };

  // On open: play the enlarged clip with sound (the click is the user gesture
  // that lets it unmute) and close on Escape.
  useEffect(() => {
    if (!expanded) return;
    const v = modalVideoRef.current;
    if (v) {
      v.muted = false;
      v.currentTime = 0;
      v.play().catch(() => {});
    }
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setExpanded(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [expanded]);

  return (
    <div className="w-[230px] rounded-lg border border-pink-200/30 bg-surface-200/80 p-3 shadow-[0_20px_60px_-30px_rgba(243,166,198,0.6)] backdrop-blur-sm">
      {/* header: [✓] Video Complete */}
      <div className="mb-2.5 flex items-center gap-2">
        <span className="flex h-6 w-6 items-center justify-center rounded-md bg-pink-200/15 text-pink-200">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
            <path d="M4 12.5L9.5 18L20 6.5" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </span>
        <div className="leading-tight">
          <div className="text-[12px] font-semibold text-ink">Video Complete</div>
          <div className="text-[10px] text-muted">Native short-form, one click</div>
        </div>
      </div>

      {/* portrait video preview — click to play/pause, expand to enlarge */}
      <div className="group relative aspect-[9/16] overflow-hidden rounded-md border border-white/10 bg-surface-300">
        <video
          ref={videoRef}
          src={template.output.preview ?? template.output.video}
          poster={template.output.poster}
          muted
          loop
          playsInline
          autoPlay
          preload="metadata"
          onClick={toggle}
          onPlay={() => setPlaying(true)}
          onPause={() => setPlaying(false)}
          className="h-full w-full cursor-pointer object-cover"
        />

        {/* play / pause indicator — clicks pass through to the video */}
        <div
          className={`pointer-events-none absolute inset-0 flex items-center justify-center transition-opacity duration-300 ${
            playing ? "opacity-0 group-hover:opacity-100" : "opacity-100"
          }`}
        >
          <span className="flex h-11 w-11 items-center justify-center rounded-full bg-black/40 backdrop-blur-sm ring-1 ring-white/20">
            {playing ? (
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className="text-ink">
                <rect x="6" y="5" width="4" height="14" rx="1" />
                <rect x="14" y="5" width="4" height="14" rx="1" />
              </svg>
            ) : (
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className="ml-0.5 text-ink">
                <path d="M7 4.5v15l13-7.5z" />
              </svg>
            )}
          </span>
        </div>

        {/* expand button */}
        <button
          onClick={() => setExpanded(true)}
          aria-label="Expand video"
          className="absolute right-2 top-2 flex h-7 w-7 items-center justify-center rounded-full bg-black/40 text-ink/90 ring-1 ring-white/15 backdrop-blur-sm transition-colors hover:bg-black/60 hover:text-ink"
        >
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none">
            <path d="M9 4H4v5M15 4h5v5M9 20H4v-5M15 20h5v-5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>

        {/* engagement rail */}
        <div className="pointer-events-none absolute bottom-3 right-2 flex flex-col items-center gap-3">
          <SideIcon label="24K">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
              <path d="M12 20s-7-4.4-7-9.5A3.5 3.5 0 0 1 12 7a3.5 3.5 0 0 1 7 3.5C19 15.6 12 20 12 20z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
            </svg>
          </SideIcon>
          <SideIcon label="1.2K">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
              <path d="M21 11.5a8 8 0 0 1-11.6 7.1L4 20l1.4-5.1A8 8 0 1 1 21 11.5z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
            </svg>
          </SideIcon>
        </div>
      </div>

      {/* enlarged view — portalled to <body> so it isn't trapped by a
          transformed ancestor (which would break `fixed` full-screen). */}
      {mounted &&
        createPortal(
          <AnimatePresence>
            {expanded && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                onClick={() => setExpanded(false)}
                className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-2 backdrop-blur-sm"
              >
            {/* close — fixed to the screen corner */}
            <button
              onClick={() => setExpanded(false)}
              aria-label="Close"
              className="fixed right-4 top-4 z-[110] flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-black/50 text-ink/90 backdrop-blur-sm transition-colors hover:bg-black/70 hover:text-ink"
            >
              <svg width="16" height="16" viewBox="0 0 14 14" fill="none">
                <path d="M2 2l10 10M12 2L2 12" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
              </svg>
            </button>
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.22, ease: "easeOut" }}
              onClick={(e) => e.stopPropagation()}
              className="relative"
            >
              <video
                ref={modalVideoRef}
                src={template.output.video}
                poster={template.output.poster}
                controls
                loop
                playsInline
                className="h-[96vh] w-auto rounded-[8px] border border-white/10 shadow-2xl"
              />
            </motion.div>
              </motion.div>
            )}
          </AnimatePresence>,
          document.body,
        )}
    </div>
  );
}
