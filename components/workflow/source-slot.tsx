/**
 * A PNG slot for stage 01 ("Original Source"). Renders the image when `src`
 * is set; otherwise a dashed placeholder marking where a PNG goes.
 */
export function SourceSlot({
  src,
  className = "",
}: {
  src?: string;
  className?: string;
}) {
  return (
    <div
      className={`relative aspect-[16/10] overflow-hidden rounded-[8px] bg-white/[0.02] ring-1 ring-inset ring-white/[0.05] ${
        src ? "border border-white/10" : "border border-dashed border-white/15"
      } ${className}`}
    >
      {src ? (
        <img
          src={src}
          alt=""
          className="absolute inset-0 h-full w-full object-cover"
        />
      ) : (
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-1.5 text-muted">
          <svg
            width="22"
            height="22"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.4"
            className="opacity-50"
          >
            <rect x="3" y="3" width="18" height="18" rx="2" />
            <circle cx="8.5" cy="8.5" r="1.5" />
            <path d="M21 15l-5-5L5 21" />
          </svg>
          <span className="font-mono text-[9px] uppercase tracking-[0.12em] text-faint">
            PNG
          </span>
        </div>
      )}
    </div>
  );
}
