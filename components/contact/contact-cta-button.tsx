"use client";

import { useState } from "react";
import { ContactDialog } from "@/components/contact/contact-dialog";

/** A pill CTA that opens the shared contact dialog. `eyebrow` sets the dialog's
    small label (e.g. "See how it works"); the rest of the dialog is unchanged. */
export function ContactCtaButton({
  label,
  eyebrow,
  className,
}: {
  label: string;
  eyebrow?: string;
  className?: string;
}) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button onClick={() => setOpen(true)} className={className}>
        {label}
        <span className="transition-transform duration-300 group-hover:translate-x-0.5">
          →
        </span>
      </button>
      <ContactDialog
        open={open}
        onClose={() => setOpen(false)}
        eyebrow={eyebrow}
      />
    </>
  );
}
