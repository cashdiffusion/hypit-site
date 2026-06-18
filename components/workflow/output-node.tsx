import type { WorkflowTemplate } from "@/lib/workflow-templates";

/* Vertical engagement rail mirrored from the workflow.png output frame. */
function SideIcon({ children, label }: { children: React.ReactNode; label: string }) {
  return (
    <div className="flex flex-col items-center gap-0.5 text-ink/90">
      <span className="flex h-7 w-7 items-center justify-center rounded-full bg-black/35 backdrop-blur-sm">
        {children}
      </span>
      <span className="text-[9px] font-medium text-ink/80">{label}</span>
    </div>
  );
}

export function OutputNode({ template }: { template: WorkflowTemplate }) {
  return (
    <div className="w-[230px] rounded-lg border border-pink-200/30 bg-surface-200/80 p-3 shadow-[0_20px_60px_-30px_rgba(243,166,198,0.6)] backdrop-blur-sm">
      {/* header: [✓] Video Complete */}
      <div className="mb-2.5 flex items-center gap-2">
        <span className="flex h-6 w-6 items-center justify-center rounded-md bg-pink-200/15 text-pink-200">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
            <path d="M4 12.5L9.5 18L20 6.5" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </span>
        <div className="leading-tight">
          <div className="text-[12px] font-semibold text-ink">Video Complete</div>
          <div className="text-[10px] text-muted">Native short-form, one click</div>
        </div>
      </div>

      {/* portrait video preview */}
      <div className="relative aspect-[9/16] overflow-hidden rounded-md border border-white/10 bg-surface-300">
        <video
          src={template.output.video}
          poster={template.output.poster}
          muted
          loop
          playsInline
          autoPlay
          preload="metadata"
          className="h-full w-full object-cover"
        />

        {/* center play button */}
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
          <span className="flex h-11 w-11 items-center justify-center rounded-full bg-black/35 backdrop-blur-sm ring-1 ring-white/20">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className="ml-0.5 text-ink">
              <path d="M7 4.5v15l13-7.5z" />
            </svg>
          </span>
        </div>

        {/* engagement rail */}
        <div className="absolute bottom-3 right-2 flex flex-col items-center gap-3">
          <SideIcon label="24K">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
              <path d="M12 20s-7-4.4-7-9.5A3.5 3.5 0 0 1 12 7a3.5 3.5 0 0 1 7 3.5C19 15.6 12 20 12 20z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
            </svg>
          </SideIcon>
          <SideIcon label="1.2K">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
              <path d="M21 11.5a8 8 0 0 1-11.6 7.1L4 20l1.4-5.1A8 8 0 1 1 21 11.5z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
            </svg>
          </SideIcon>
        </div>
      </div>
    </div>
  );
}
