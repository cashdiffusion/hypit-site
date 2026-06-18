"use client";

import { motion } from "framer-motion";
import { TEMPLATES } from "@/lib/workflow-templates";
import { TemplateGraph } from "@/components/workflow/template-graph";

export function WorkflowTemplates() {
  return (
    <section className="relative bg-canvas px-6 pb-24 pt-32 lg:pt-36">
      {/* header */}
      <div className="mx-auto max-w-2xl text-center">
        <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-3 py-1">
          <span className="text-pink-300">✦</span>
          <span className="text-mono-label text-ink-200">Workflow Templates</span>
        </div>
        <h1 className="mt-6 text-h1 text-ink sm:text-display-l">
          Start from a proven workflow
        </h1>
        <p className="mx-auto mt-4 max-w-xl text-body-m text-muted">
          Each template wires the same nodes — product, script, persona, and
          voiceover — into one native short-form video. Pick a vibe and scale it.
        </p>
      </div>

      {/* template panels */}
      <div className="mx-auto mt-16 flex max-w-6xl flex-col gap-6">
        {TEMPLATES.map((t, i) => (
          <motion.div
            key={t.id}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="rounded-lg border border-white/10 bg-surface-100/60 p-6 lg:p-8"
          >
            {/* panel header */}
            <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <div className="flex items-center gap-2.5">
                  <span className="font-mono text-[13px] text-pink-200">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h2 className="text-h3 text-ink">{t.name}</h2>
                  {t.placeholder && (
                    <span className="rounded-full border border-white/12 px-2 py-0.5 text-[10px] font-medium uppercase tracking-[0.08em] text-muted">
                      Preview
                    </span>
                  )}
                </div>
                {t.tagline && (
                  <p className="mt-1.5 max-w-lg text-body-s text-muted">
                    {t.tagline}
                  </p>
                )}
              </div>
              <span
                aria-disabled="true"
                className="inline-flex shrink-0 cursor-default items-center gap-1.5 rounded-full border border-white/10 bg-white/[0.02] px-5 py-2.5 text-body-s font-medium tracking-[0.04em] text-muted"
              >
                Use template (coming soon)
              </span>
            </div>

            <TemplateGraph template={t} />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
