"use client";

import { motion, type Variants } from "framer-motion";
import {
  ORIGINAL_SOURCES,
  OUTPUT_VARIANTS,
} from "@/lib/workflow-content";
import { CosmicThumb } from "@/components/workflow/cosmic-thumb";
import { SourceSlot } from "@/components/workflow/source-slot";
import { WorkflowEngine } from "@/components/workflow/workflow-engine";

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};
const item: Variants = {
  hidden: { opacity: 0, y: 22 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

function StageHeader({
  n,
  label,
  title,
  sub,
}: {
  n: string;
  label: string;
  title: string;
  sub: string;
}) {
  return (
    <div className="mb-6 text-center lg:mb-0 lg:h-[104px]">
      <div className="text-mono-label">
        <span className="text-pink-200">{n}</span>
        <span className="text-muted"> / {label}</span>
      </div>
      <h3 className="mt-3 text-title text-ink">{title}</h3>
      <p className="mt-1.5 text-body-s text-muted">{sub}</p>
    </div>
  );
}

/* Horizontal on desktop, rotated to point down when columns stack on mobile. */
function StageArrow() {
  return (
    <div className="flex shrink-0 items-center justify-center rotate-90 lg:rotate-0">
      <svg width="46" height="14" viewBox="0 0 46 14" fill="none">
        <path
          d="M0 7 H40"
          stroke="#f3a6c6"
          strokeOpacity="0.4"
          strokeWidth="1.2"
          strokeDasharray="2 3"
        />
        <path
          d="M38 2 L44 7 L38 12"
          stroke="#f3a6c6"
          strokeOpacity="0.7"
          strokeWidth="1.4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
}

export function Workflow() {
  return (
    <section
      id="features"
      className="relative scroll-mt-24 bg-canvas px-6 pb-24 pt-10 lg:pb-32 lg:pt-12"
    >
      {/* Section header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="mx-auto mb-14 max-w-7xl text-left lg:mb-16"
      >
        <h2 className="text-h2 text-ink">
          Deconstruct. Structure.{" "}
          <span className="text-pink-300">Scale.</span>
        </h2>
        <p className="mt-4 text-body-m text-muted sm:whitespace-nowrap">
          Turn a single winning video into a repeatable workflow engine for
          high-volume content testing.
        </p>
      </motion.div>

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
        className="mx-auto flex max-w-7xl flex-col items-center gap-8 lg:flex-row lg:items-start lg:justify-center lg:gap-4"
      >
        {/* 01 — Original */}
        <motion.div variants={item} className="flex flex-col items-center">
          <StageHeader
            n="01"
            label="ORIGINAL"
            title="Original Source"
            sub="Your source content"
          />
          <div className="flex w-[210px] flex-col gap-3 lg:h-[410px]">
            {ORIGINAL_SOURCES.map((s) => (
              <SourceSlot key={s.id} src={s.src} className="flex-1" />
            ))}
          </div>
        </motion.div>

        <motion.div variants={item} className="lg:mt-[302px]">
          <StageArrow />
        </motion.div>

        {/* 02 — Workflow Engine */}
        <motion.div
          variants={item}
          className="flex w-full max-w-[480px] flex-col items-center"
        >
          <StageHeader
            n="02"
            label="WORKFLOW"
            title="Workflow Engine"
            sub="Deconstruct. Structure. Reuse."
          />
          <WorkflowEngine />
        </motion.div>

        <motion.div variants={item} className="lg:mt-[302px]">
          <StageArrow />
        </motion.div>

        {/* 03 — Outputs */}
        <motion.div variants={item} className="flex flex-col items-center">
          <StageHeader
            n="03"
            label="OUTPUTS"
            title="Scalable Video Variants"
            sub="Endless combinations. Infinite scale."
          />
          <div className="grid w-full max-w-[280px] grid-cols-3 gap-x-2.5 gap-y-3 lg:max-w-none">
            {OUTPUT_VARIANTS.map((v) => (
              <div key={v.label}>
                <CosmicThumb
                  bg={v.bg}
                  video={v.video}
                  bar="mini"
                  className="w-full lg:h-[175px] lg:w-auto"
                />
                <div className="mt-1.5 text-center text-[11px] text-muted">
                  {v.label}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
