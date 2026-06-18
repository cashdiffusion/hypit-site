/**
 * CapabilitiesMarquee — two opposite-scrolling rows of capability pills.
 * Pure CSS animation (see marquee-left / marquee-right in globals.css).
 * The pill set is rendered twice per row; shifting the track by 50% loops
 * seamlessly. Sits between the hero and the workflow section.
 */

type Cap = { key: string; label: string; icon: React.ReactNode };

const CAPS: Cap[] = [
  {
    key: "decode",
    label: "Decode Winning Videos",
    icon: (
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none">
        <rect x="3" y="5" width="18" height="14" rx="2.5" stroke="currentColor" strokeWidth="1.6" />
        <path d="M10 9.5l5 2.5-5 2.5z" fill="currentColor" />
      </svg>
    ),
  },
  {
    key: "extract",
    label: "Extract Creative Logic",
    icon: (
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none">
        <path d="M4 20L14 10" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
        <path d="M16 4l1.2 2.8L20 8l-2.8 1.2L16 12l-1.2-2.8L12 8l2.8-1.2z" fill="currentColor" />
      </svg>
    ),
  },
  {
    key: "build",
    label: "Build Reusable Workflows",
    icon: (
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none">
        <path d="M12 3l9 5-9 5-9-5z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
        <path d="M3 13l9 5 9-5" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    key: "test",
    label: "Test Hooks & Covers",
    icon: (
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none">
        <path
          d="M9 3h6M10 3v5l-4.5 9.5A2 2 0 0 0 7.3 21h9.4a2 2 0 0 0 1.8-3.5L14 8V3"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    key: "learn",
    label: "Learn From Performance",
    icon: (
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none">
        <path d="M3 17l6-6 4 4 8-8" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M21 7v5M21 7h-5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    key: "generate",
    label: "Generate Smarter Variants",
    icon: (
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none">
        <path d="M12 3l1.6 4.4L18 9l-4.4 1.6L12 15l-1.6-4.4L6 9l4.4-1.6z" fill="currentColor" />
        <path d="M18 14l.8 2.2L21 17l-2.2.8L18 20l-.8-2.2L15 17l2.2-.8z" fill="currentColor" opacity="0.7" />
      </svg>
    ),
  },
  {
    key: "scale",
    label: "Scale What Works",
    icon: (
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none">
        <path d="M10 4H4v6M14 20h6v-6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M4 4l7 7M20 20l-7-7" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      </svg>
    ),
  },
];

function Pill({ cap }: { cap: Cap }) {
  return (
    <span className="mr-3 inline-flex shrink-0 items-center gap-2 whitespace-nowrap rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-[13px] font-medium text-ink-200 transition-colors duration-300 hover:border-pink-200/30 hover:bg-white/[0.05]">
      <span className="text-pink-200">{cap.icon}</span>
      {cap.label}
    </span>
  );
}

function Row({
  caps,
  direction,
  duration,
}: {
  caps: Cap[];
  direction: "left" | "right";
  duration: number;
}) {
  // Render the set several times so even one half of the track is wider than
  // any viewport — the row is fully "filled" from the very first frame, and a
  // 50% shift lands on an identical copy for a seamless loop.
  const COPIES = 4;
  return (
    <div
      className="overflow-hidden"
      style={{
        maskImage:
          "linear-gradient(to right, transparent, black 5%, black 95%, transparent)",
        WebkitMaskImage:
          "linear-gradient(to right, transparent, black 5%, black 95%, transparent)",
      }}
    >
      <div
        className="flex w-max"
        style={{
          animation: `marquee-${direction} ${duration}s linear infinite`,
        }}
      >
        {Array.from({ length: COPIES }).map((_, ci) => (
          <span key={ci} aria-hidden={ci > 0} className="contents">
            {caps.map((c) => (
              <Pill key={`${ci}-${c.key}`} cap={c} />
            ))}
          </span>
        ))}
      </div>
    </div>
  );
}

export function CapabilitiesMarquee() {
  return (
    <div
      aria-label="Hypit core capabilities"
      className="relative w-full overflow-hidden"
    >
      <Row caps={CAPS} direction="right" duration={48} />
    </div>
  );
}
