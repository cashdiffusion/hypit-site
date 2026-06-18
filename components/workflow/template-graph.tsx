import type { NodeType, WorkflowTemplate } from "@/lib/workflow-templates";
import { FlowNode } from "@/components/workflow/flow-node";
import { OutputNode } from "@/components/workflow/output-node";

const INPUTS: NodeType[] = ["product", "script", "persona", "voice"];

/* Connector start points (left edge) fan evenly into the output (right, 50%). */
const START_Y = [15, 38, 62, 85];

export function TemplateGraph({ template }: { template: WorkflowTemplate }) {
  return (
    <div className="flex flex-col items-center gap-6 lg:flex-row lg:items-center lg:justify-center lg:gap-0">
      {/* input nodes */}
      <div className="flex w-full max-w-[280px] flex-col gap-3 lg:w-[230px]">
        {INPUTS.map((type, i) => (
          <FlowNode key={type} index={i} type={type} template={template} />
        ))}
      </div>

      {/* desktop connectors — fanning bezier curves */}
      <div className="relative hidden h-[420px] w-[110px] shrink-0 lg:block">
        <svg
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
          className="absolute inset-0 h-full w-full"
        >
          {START_Y.map((y, i) => (
            <path
              key={i}
              d={`M0 ${y} C 45 ${y}, 55 50, 100 50`}
              fill="none"
              stroke="#f3a6c6"
              strokeOpacity="0.32"
              strokeWidth="0.5"
              strokeDasharray="1.6 1.6"
              vectorEffect="non-scaling-stroke"
              style={{ animation: "flow-dash 2s linear infinite" }}
            />
          ))}
        </svg>
        {/* glowing junction dots at each start + the convergence point */}
        {START_Y.map((y, i) => (
          <span
            key={i}
            className="absolute h-1.5 w-1.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-pink-200 shadow-[0_0_8px_2px] shadow-pink-200/60"
            style={{ left: "0%", top: `${y}%` }}
          />
        ))}
        <span className="absolute right-0 top-1/2 h-2 w-2 -translate-y-1/2 translate-x-1/2 rounded-full bg-pink-100 shadow-[0_0_12px_3px] shadow-pink-200/70" />
      </div>

      {/* mobile connector — downward arrow */}
      <div className="flex rotate-90 items-center justify-center lg:hidden">
        <svg width="40" height="14" viewBox="0 0 46 14" fill="none">
          <path d="M0 7 H40" stroke="#f3a6c6" strokeOpacity="0.4" strokeWidth="1.2" strokeDasharray="2 3" />
          <path d="M38 2 L44 7 L38 12" stroke="#f3a6c6" strokeOpacity="0.7" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>

      {/* output node + ambient glow */}
      <div className="relative shrink-0">
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
