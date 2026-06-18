import Image from "next/image";
import type { NodeType, WorkflowTemplate } from "@/lib/workflow-templates";

/* Line icons, one per input node type — sized to match node-card.tsx. */
const ICONS: Record<NodeType, React.ReactNode> = {
  product: (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
      <rect x="3" y="3" width="18" height="18" rx="2.5" stroke="currentColor" strokeWidth="1.6" />
      <circle cx="8.5" cy="8.5" r="1.6" stroke="currentColor" strokeWidth="1.4" />
      <path d="M21 15l-5-5L5 21" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  script: (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
      <path d="M6 3h8l4 4v14H6z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
      <path d="M9 11h6M9 15h4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  ),
  persona: (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
      <circle cx="12" cy="8" r="4" stroke="currentColor" strokeWidth="1.6" />
      <path d="M4 21a8 8 0 0 1 16 0" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  ),
  voice: (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
      <rect x="9" y="3" width="6" height="11" rx="3" stroke="currentColor" strokeWidth="1.6" />
      <path d="M6 11a6 6 0 0 0 12 0M12 17v4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  ),
};

const TITLES: Record<NodeType, string> = {
  product: "Product Images",
  script: "Script",
  persona: "Persona",
  voice: "Voiceover",
};

/* Deterministic-looking waveform bar heights (no Math.random in render). */
const BARS = [5, 9, 14, 8, 17, 11, 6, 13, 19, 10, 7, 15, 9, 5, 12, 8, 16, 6];

function NodeBody({ type, t }: { type: NodeType; t: WorkflowTemplate }) {
  switch (type) {
    case "product":
      return (
        <div className="grid grid-cols-2 gap-1.5">
          {t.products.slice(0, 4).map((src, i) => (
            <div
              key={i}
              className="relative aspect-square overflow-hidden rounded-md border border-white/5 bg-surface-300"
            >
              <Image src={src} alt="" fill sizes="80px" className="object-cover" />
            </div>
          ))}
        </div>
      );
    case "script":
      return (
        <div className="space-y-1.5">
          <span className="inline-flex items-center rounded-md bg-pink-200/15 px-1.5 py-0.5 text-[10px] font-medium text-pink-200">
            Hook · {t.hook}
          </span>
          {t.script.map((line, i) => (
            <p key={i} className="text-[11px] leading-snug text-ink-200">
              {line}
            </p>
          ))}
        </div>
      );
    case "persona":
      return (
        <div className="flex items-center gap-2">
          {t.personas.slice(0, 4).map((bg, i) => (
            <div
              key={i}
              className={`h-9 w-9 rounded-full bg-cover ${
                i === 0 ? "ring-2 ring-pink-200 ring-offset-2 ring-offset-surface-200" : "opacity-70"
              }`}
              style={{ background: bg }}
            />
          ))}
        </div>
      );
    case "voice":
      return (
        <div>
          <div className="flex h-8 items-center gap-[3px]">
            {BARS.map((h, i) => (
              <span
                key={i}
                className="w-[3px] rounded-full bg-pink-200/60"
                style={{ height: `${h}px` }}
              />
            ))}
          </div>
          <div className="mt-2 flex items-center justify-between text-[10px] text-muted">
            <span className="truncate">{t.voice.name}</span>
            <span className="font-mono text-ink-200">{t.voice.duration}</span>
          </div>
        </div>
      );
  }
}

export function FlowNode({
  index,
  type,
  template,
}: {
  index: number;
  type: NodeType;
  template: WorkflowTemplate;
}) {
  return (
    <div className="group w-full rounded-lg border border-white/10 bg-surface-200/80 p-3 backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-pink-200/40 hover:shadow-[0_8px_30px_-8px_rgba(243,166,198,0.35)]">
      {/* header: [n] badge + icon chip + title */}
      <div className="mb-2.5 flex items-center gap-2">
        <span className="font-mono text-[11px] text-pink-200">[{index}]</span>
        <span className="flex h-6 w-6 items-center justify-center rounded-md bg-white/[0.06] text-pink-200 transition-colors duration-300 group-hover:bg-pink-200/15">
          {ICONS[type]}
        </span>
        <span className="text-[12px] font-semibold text-ink">{TITLES[type]}</span>
      </div>
      <NodeBody type={type} t={template} />
    </div>
  );
}
