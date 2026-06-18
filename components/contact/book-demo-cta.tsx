"use client";

import { useState } from "react";
import { ContactDialog } from "@/components/contact/contact-dialog";

/** The hero's primary CTA — opens the contact dialog (email + WeChat). */
export function BookDemoCta() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="group inline-flex items-center gap-2 rounded-full bg-pink-200 px-6 py-3 text-body-s font-medium tracking-[0.06em] text-canvas shadow-[0_8px_30px_-6px_rgba(243,166,198,0.55)] transition-all duration-300 hover:bg-pink-300 hover:shadow-[0_10px_38px_-6px_rgba(243,166,198,0.7)]"
      >
        BOOK A DEMO
        <svg
          width="14"
          height="14"
          viewBox="0 0 14 14"
          fill="none"
          className="transition-transform duration-300 group-hover:scale-110"
        >
          <path
            d="M7 0L8.2 4.8L13 6L8.2 7.2L7 12L5.8 7.2L1 6L5.8 4.8L7 0Z"
            fill="currentColor"
          />
        </svg>
      </button>
      <ContactDialog open={open} onClose={() => setOpen(false)} />
    </>
  );
}
