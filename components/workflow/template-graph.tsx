"use client";

import { useEffect, useRef, useState } from "react";
import type { NodeType, WorkflowTemplate } from "@/lib/workflow-templates";
import { FlowNode } from "@/components/workflow/flow-node";
import { OutputNode } from "@/components/workflow/output-node";

const INPUTS: NodeType[] = ["product", "script", "persona", "voice"];

/* Desktop canvas placement — scattered like a node editor (see the reference
   in /public/排列顺序.png). Mobile falls back to a simple stacked column. */
const CARD = [
  "lg:left-[64px] lg:top-[0px] lg:w-[256px]", // product (top-left)
  "lg:left-[34px] lg:top-[332px] lg:w-[256px]", // script (lower-left)
  "lg:left-[348px] lg:top-[206px] lg:w-[280px]", // persona (mid)
  "lg:left-[336px] lg:top-[440px] lg:w-[236px]", // voice (right of script)
];

type Geo = {
  w: number;
  h: number;
  starts: { x: number; y: number }[];
  end: { x: number; y: number };
};

export function TemplateGraph({ template }: { template: WorkflowTemplate }) {
  const wrapRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const outRef = useRef<HTMLDivElement>(null);
  const [geo, setGeo] = useState<Geo | null>(null);

  // Measure each card's right-centre and the output's left-centre relative to
  // the canvas, then draw wires between them — so cards can sit anywhere and
  // the connectors always reach them.
  useEffect(() => {
    const wrap = wrapRef.current;
    if (!wrap) return;
    const measure = () => {
      const W = wrap.getBoundingClientRect();
      if (!W.width || !W.height) return;
      const starts = cardRefs.current.map((c) => {
        if (!c) return { x: 0, y: 0 };
        const r = c.getBoundingClientRect();
        return { x: r.right - W.left, y: r.top - W.top + r.height / 2 };
      });
      let end = { x: W.width, y: W.height / 2 };
      if (outRef.current) {
        const r = outRef.current.getBoundingClientRect();
        end = { x: r.left - W.left, y: r.top - W.top + r.height / 2 };
      }
      setGeo({ w: W.width, h: W.height, starts, end });
    };
    measure();
    const ro = new ResizeObserver(measure);
    ro.observe(wrap);
    cardRefs.current.forEach((c) => c && ro.observe(c));
    if (outRef.current) ro.observe(outRef.current);
    return () => ro.disconnect();
  }, [template.id]);

  return (
    <div
      ref={wrapRef}
      className="relative flex flex-col items-center gap-6 lg:block lg:h-[580px] lg:w-[880px] xl:w-[1040px]"
    >
      {/* desktop wires — each card's right-centre fans into the output */}
      {geo && (
        <svg
          aria-hidden
          width={geo.w}
          height={geo.h}
          viewBox={`0 0 ${geo.w} ${geo.h}`}
          className="pointer-events-none absolute inset-0 z-0 hidden lg:block"
        >
          {geo.starts.map((s, i) => {
            const mx = s.x + (geo.end.x - s.x) * 0.5;
            return (
              <path
                key={i}
                d={`M${s.x} ${s.y} C ${mx} ${s.y}, ${mx} ${geo.end.y}, ${geo.end.x} ${geo.end.y}`}
                fill="none"
                stroke="#f3a6c6"
                strokeOpacity="0.3"
                strokeWidth="1.2"
                strokeDasharray="3 3"
                style={{ animation: "flow-dash 2s linear infinite" }}
              />
            );
          })}
        </svg>
      )}

      {/* glowing port dots (desktop) — on each card edge + the convergence */}
      {geo && (
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 z-20 hidden lg:block"
        >
          {geo.starts.map((s, i) => (
            <span
              key={i}
              className="absolute h-1.5 w-1.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-pink-200 shadow-[0_0_8px_2px] shadow-pink-200/60"
              style={{ left: s.x, top: s.y }}
            />
          ))}
          <span
            className="absolute h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-pink-100 shadow-[0_0_12px_3px] shadow-pink-200/70"
            style={{ left: geo.end.x, top: geo.end.y }}
          />
        </div>
      )}

      {/* input nodes — stacked on mobile, scattered canvas on desktop */}
      {INPUTS.map((type, i) => (
        <div
          key={type}
          ref={(el) => {
            cardRefs.current[i] = el;
          }}
          className={`z-10 w-full max-w-[300px] lg:absolute lg:max-w-none ${CARD[i]}`}
        >
          <FlowNode index={i} type={type} template={template} />
        </div>
      ))}

      {/* mobile connector — downward arrow */}
      <div className="flex rotate-90 items-center justify-center lg:hidden">
        <svg width="40" height="14" viewBox="0 0 46 14" fill="none">
          <path d="M0 7 H40" stroke="#f3a6c6" strokeOpacity="0.4" strokeWidth="1.2" strokeDasharray="2 3" />
          <path d="M38 2 L44 7 L38 12" stroke="#f3a6c6" strokeOpacity="0.7" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>

      {/* output node + ambient glow */}
      <div
        ref={outRef}
        className="relative z-10 shrink-0 lg:absolute lg:right-0 lg:top-1/2 lg:-translate-y-1/2"
      >
        <div
          aria-hidden
          className="pointer-events-none absolute left-1/2 top-1/2 h-[260px] w-[260px] -translate-x-1/2 -translate-y-1/2 rounded-full blur-[90px]"
          style={{
            background:
              "radial-gradient(circle, rgba(243,166,198,0.18) 0%, transparent 70%)",
          }}
        />
        <div className="relative">
          <OutputNode template={template} />
        </div>
      </div>
    </div>
  );
}
