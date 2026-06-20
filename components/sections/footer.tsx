import Link from "next/link";
import Image from "next/image";

const COLUMNS = [
  {
    title: "Product",
    links: ["Community", "Tutorials", "Video Inspirations"],
  },
  {
    title: "Legal",
    links: ["Terms", "Privacy policy", "Company", "Support"],
  },
];

const SOCIALS: { label: string; href: string; icon: React.ReactNode }[] = [
  {
    label: "Discord",
    href: "/community",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M19.3 5.4A17 17 0 0 0 15 4l-.3.5a13 13 0 0 1 3.7 1.8 12 12 0 0 0-10.8 0A13 13 0 0 1 11.3 4.5L11 4a17 17 0 0 0-4.3 1.4C3.9 9.5 3.1 13.5 3.5 17.5a17 17 0 0 0 5.2 2.6l.6-1.6-1.5-.7.4-.3a12 12 0 0 0 10.6 0l.4.3-1.5.7.6 1.6a17 17 0 0 0 5.2-2.6c.5-4.7-.8-8.7-3.2-12.1ZM9.5 15c-.8 0-1.5-.8-1.5-1.7s.7-1.7 1.5-1.7 1.5.8 1.5 1.7-.7 1.7-1.5 1.7Zm5 0c-.8 0-1.5-.8-1.5-1.7s.7-1.7 1.5-1.7 1.5.8 1.5 1.7-.7 1.7-1.5 1.7Z" />
      </svg>
    ),
  },
  {
    label: "TikTok",
    href: "https://www.tiktok.com/@hypitai",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
        <path d="M16 3c.3 2.3 1.8 4 4 4.3V10c-1.5 0-2.9-.5-4-1.3v6.6a5.8 5.8 0 1 1-5.8-5.8c.3 0 .6 0 .9.1v2.9a3 3 0 1 0 2 2.8V3H16Z" />
      </svg>
    ),
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/hypit_ai?igsh=MWF2YjM0bml3NWJ2Nw==",
    icon: (
      <svg width="17" height="17" viewBox="0 0 24 24" fill="none">
        <rect x="3" y="3" width="18" height="18" rx="5" stroke="currentColor" strokeWidth="1.7" />
        <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.7" />
        <circle cx="17.5" cy="6.5" r="1.1" fill="currentColor" />
      </svg>
    ),
  },
];

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-canvas px-6 pb-32 pt-24 lg:pb-44 lg:pt-28">
      {/* bottom pink glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 bottom-0 h-96"
        style={{
          background:
            "radial-gradient(60% 130% at 50% 100%, rgba(243,166,198,0.28) 0%, rgba(216,110,156,0.08) 40%, transparent 72%)",
        }}
      />

      <div className="relative z-10 mx-auto flex max-w-7xl flex-col gap-12 lg:flex-row lg:justify-between">
        {/* brand */}
        <div>
          <Link href="/" aria-label="Hypit home" className="flex items-center gap-2.5">
            <Image src="/logo.png" alt="Hypit" width={184} height={101} className="h-5 w-auto" />
            <span className="text-lg font-bold tracking-[0.18em] text-ink">HYPIT</span>
          </Link>

          <div className="mt-5 flex items-center gap-3">
            {SOCIALS.map((s) => {
              const external = s.href.startsWith("http");
              return (
                <Link
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  {...(external
                    ? { target: "_blank", rel: "noopener noreferrer" }
                    : {})}
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] text-ink-200 transition-colors hover:border-white/25 hover:text-ink"
                >
                  {s.icon}
                </Link>
              );
            })}
          </div>

          <p className="mt-6 text-[12px] text-faint">
            © 2026 HYPIT. All right reserved.
          </p>
        </div>

        {/* link columns */}
        <div className="flex gap-16 sm:gap-24">
          {COLUMNS.map((col) => (
            <div key={col.title}>
              <h3 className="text-[13px] font-semibold text-ink">{col.title}</h3>
              <ul className="mt-4 space-y-3">
                {col.links.map((l) => {
                  // Community is live (Discord redirect); the rest are not
                  // built yet — hovering them surfaces a "Coming soon" tag.
                  if (l === "Community") {
                    return (
                      <li key={l}>
                        <Link
                          href="/community"
                          className="text-body-s text-muted transition-colors hover:text-ink"
                        >
                          {l}
                        </Link>
                      </li>
                    );
                  }
                  return (
                    <li key={l}>
                      <span className="group relative inline-flex cursor-default text-body-s text-muted transition-colors hover:text-ink">
                        {l}
                        <span className="pointer-events-none absolute -top-7 left-0 z-20 whitespace-nowrap rounded-md border border-white/10 bg-surface-300 px-2 py-1 text-[11px] font-medium text-ink-200 opacity-0 shadow-lg transition-opacity duration-200 group-hover:opacity-100">
                          Coming soon
                        </span>
                      </span>
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
}
