import type { EngineNode } from "@/lib/workflow-content";

/* Compact line icons, one per engine node. */
const ICONS: Record<EngineNode["key"], React.ReactNode> = {
  hook: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
      <path
        d="M13 3v9a4 4 0 1 1-4-4"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
      <circle cx="13" cy="3.5" r="1.4" fill="currentColor" />
    </svg>
  ),
  scene: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
      <rect x="3" y="3" width="7" height="7" rx="1.5" stroke="currentColor" strokeWidth="1.6" />
      <rect x="14" y="3" width="7" height="7" rx="1.5" stroke="currentColor" strokeWidth="1.6" />
      <rect x="3" y="14" width="7" height="7" rx="1.5" stroke="currentColor" strokeWidth="1.6" />
      <rect x="14" y="14" width="7" height="7" rx="1.5" stroke="currentColor" strokeWidth="1.6" />
    </svg>
  ),
  script: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
      <path
        d="M6 3h8l4 4v14H6z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
      <path d="M9 11h6M9 15h6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  ),
  pacing: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
      <path
        d="M4 12v0M8 8v8M12 5v14M16 9v6M20 12v0"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  ),
  voice: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
      <rect x="9" y="3" width="6" height="11" rx="3" stroke="currentColor" strokeWidth="1.6" />
      <path
        d="M6 11a6 6 0 0 0 12 0M12 17v4"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
    </svg>
  ),
};

export function NodeCard({ node }: { node: EngineNode }) {
  return (
    <div className="group w-[128px] cursor-default rounded-2xl border border-white/10 bg-surface-200/80 px-3 py-2.5 backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-pink-200/40 hover:bg-surface-300 hover:shadow-[0_8px_30px_-8px_rgba(243,166,198,0.35)]">
      <span className="mb-1.5 flex h-7 w-7 items-center justify-center rounded-lg bg-white/[0.06] text-pink-200 transition-colors duration-300 group-hover:bg-pink-200/15">
        {ICONS[node.key]}
      </span>
      <div className="text-[12px] font-semibold leading-tight text-ink">
        {node.title}
      </div>
      <div className="text-[10px] leading-tight text-muted">{node.sub}</div>
    </div>
  );
}
