import Image from "next/image";

/* Static starfield — deterministic positions so SSR and client match. */
const STARS = [
  { top: "30%", left: "26%", size: 2, o: 0.5 },
  { top: "22%", left: "42%", size: 3, o: 0.8 },
  { top: "44%", left: "30%", size: 2, o: 0.4 },
  { top: "58%", left: "20%", size: 2, o: 0.45 },
  { top: "70%", left: "28%", size: 2, o: 0.35 },
  { top: "38%", left: "62%", size: 4, o: 0.9 },
  { top: "30%", left: "82%", size: 4, o: 0.85 },
  { top: "52%", left: "74%", size: 2, o: 0.4 },
  { top: "66%", left: "70%", size: 2, o: 0.3 },
  { top: "24%", left: "70%", size: 2, o: 0.5 },
  { top: "48%", left: "48%", size: 2, o: 0.4 },
  { top: "62%", left: "55%", size: 2, o: 0.5 },
  { top: "18%", left: "55%", size: 2, o: 0.4 },
  { top: "72%", left: "84%", size: 2, o: 0.35 },
];

export function FinalCta() {
  return (
    <section className="relative overflow-hidden bg-canvas px-6 pb-16 pt-28 lg:pt-36">
      {/* starfield */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        {STARS.map((s, i) => (
          <span
            key={i}
            className="absolute rounded-full bg-white"
            style={{
              top: s.top,
              left: s.left,
              width: s.size,
              height: s.size,
              opacity: s.o,
              boxShadow: s.size >= 4 ? "0 0 6px 1px rgba(255,255,255,0.6)" : undefined,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 flex flex-col items-center text-center">
        {/* small brand lockup */}
        <div className="mb-7 flex items-center justify-center gap-2 opacity-80">
          <Image src="/logo.png" alt="" width={184} height={101} className="h-4 w-auto" />
          <span className="text-sm font-bold tracking-[0.2em] text-ink">HYPIT</span>
        </div>

        <h2 className="text-balance text-h1 text-ink sm:text-display-l">
          Find What Works. Scale What Wins.
        </h2>

        <a
          href="#"
          className="group mt-9 inline-flex items-center gap-1.5 rounded-full bg-white px-6 py-3 text-body-s font-medium tracking-[0.04em] text-canvas transition-colors duration-300 hover:bg-white/90"
        >
          Contact Us
          <svg width="13" height="13" viewBox="0 0 16 16" fill="none" className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
            <path d="M4 12L12 4M12 4H6M12 4V10" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </a>
      </div>
    </section>
  );
}
