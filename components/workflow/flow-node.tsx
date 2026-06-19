import Image from "next/image";
import type { NodeType, WorkflowTemplate } from "@/lib/workflow-templates";
import { VoiceWave } from "@/components/workflow/voice-wave";

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

function NodeBody({ type, t }: { type: NodeType; t: WorkflowTemplate }) {
  switch (type) {
    case "product": {
      // Always show four slots; fill the gaps with a placeholder tile.
      const slots = Array.from({ length: 4 }, (_, i) => t.products[i]);
      return (
        <div className="grid grid-cols-2 gap-2">
          {slots.map((src, i) => (
            <div
              key={i}
              className="relative aspect-square overflow-hidden rounded-md border border-white/5 bg-surface-300"
            >
              {src ? (
                <Image src={src} alt="" fill sizes="130px" className="object-cover" />
              ) : (
                <div
                  className="flex h-full w-full items-center justify-center text-faint"
                  style={{
                    backgroundImage:
                      "repeating-linear-gradient(45deg, rgba(255,255,255,0.04) 0 6px, transparent 6px 12px)",
                  }}
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                    <path d="M12 5v14M5 12h14" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
                  </svg>
                </div>
              )}
              <span className="absolute left-1 top-1 flex h-4 w-4 items-center justify-center rounded bg-black/55 font-mono text-[9px] font-medium text-white/90 backdrop-blur-sm">
                {i + 1}
              </span>
            </div>
          ))}
        </div>
      );
    }
    case "script":
      return (
        <div className="space-y-2">
          <span className="inline-flex items-center rounded-md bg-pink-200/15 px-2 py-0.5 text-[11px] font-medium text-pink-200">
            Hook · {t.hook}
          </span>
          {t.script.map((line, i) => (
            <p key={i} className="text-[12.5px] leading-snug text-ink-200">
              {line}
            </p>
          ))}
        </div>
      );
    case "persona":
      return (
        <div className="flex items-center gap-2.5">
          {t.personas.slice(0, 4).map((bg, i) => (
            <div
              key={i}
              className={`h-12 w-12 rounded-full bg-cover bg-center ${
                i === (t.personaSelected ?? 0)
                  ? "ring-2 ring-pink-200 ring-offset-2 ring-offset-surface-200"
                  : "opacity-70"
              }`}
              style={{ background: bg }}
            />
          ))}
        </div>
      );
    case "voice":
      return (
        <VoiceWave
          name={t.voice.name}
          duration={t.voice.duration}
          audio={t.voice.audio}
        />
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
