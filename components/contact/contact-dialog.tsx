"use client";

import { useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { CALENDAR_LINK, CONTACT_EMAIL } from "@/lib/links";

export function ContactDialog({
  open,
  onClose,
  eyebrow = "Book a demo",
}: {
  open: boolean;
  onClose: () => void;
  /** Small label above "Let's talk" — defaults to "Book a demo". */
  eyebrow?: string;
}) {
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          onClick={onClose}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/70 p-6 backdrop-blur-sm"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 10 }}
            transition={{ duration: 0.22, ease: "easeOut" }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-md rounded-2xl border border-white/10 bg-surface-200 p-6 text-left"
          >
            {/* close */}
            <button
              onClick={onClose}
              aria-label="Close"
              className="absolute right-4 top-4 flex h-8 w-8 items-center justify-center rounded-full text-muted transition-colors hover:bg-white/5 hover:text-ink"
            >
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M2 2l10 10M12 2L2 12" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
              </svg>
            </button>

            <div className="text-mono-label text-pink-300">{eyebrow}</div>
            <h3 className="mt-2 text-h3 text-ink">Let&apos;s talk</h3>
            <p className="mt-1.5 text-body-s text-muted">
              Reach us by email or schedule a call — we&apos;ll get back fast.
            </p>

            {/* Email */}
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="group mt-6 flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.02] p-4 transition-colors hover:border-pink-200/30 hover:bg-white/[0.05]"
            >
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-pink-300/15 text-pink-200">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <rect x="3" y="5" width="18" height="14" rx="2.5" stroke="currentColor" strokeWidth="1.6" />
                  <path d="M4 7l8 6 8-6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
              <span className="flex min-w-0 flex-col gap-0.5">
                <span className="text-[12px] leading-none text-muted">Email us</span>
                <span className="truncate text-body-s font-medium leading-none text-ink">
                  {CONTACT_EMAIL}
                </span>
              </span>
              <span className="ml-auto text-muted transition-transform duration-300 group-hover:translate-x-0.5">
                →
              </span>
            </a>

            {/* Calendar */}
            <a
              href={CALENDAR_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="group mt-3 flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.02] p-4 transition-colors hover:border-pink-200/30 hover:bg-white/[0.05]"
            >
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-pink-300/15 text-pink-200">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <rect x="3" y="4.5" width="18" height="16" rx="2.5" stroke="currentColor" strokeWidth="1.6" />
                  <path d="M3 9h18M8 3v3M16 3v3" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
                </svg>
              </span>
              <span className="flex min-w-0 flex-col gap-0.5">
                <span className="text-[12px] leading-none text-muted">Book a time</span>
                <span className="truncate text-body-s font-medium leading-none text-ink">
                  Schedule on Google Calendar
                </span>
              </span>
              <span className="ml-auto text-muted transition-transform duration-300 group-hover:translate-x-0.5">
                →
              </span>
            </a>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
