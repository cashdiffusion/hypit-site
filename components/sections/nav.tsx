"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";

const MENU = [
  { label: "WORKFLOWS", href: "/workflows" },
  { label: "CASE STUDIES", href: "/community" },
  { label: "PRICING", href: "/pricing" },
];

export function Nav() {
  // Transparent over the hero; translucent blur once the page scrolls under it.
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled
          ? "border-b border-white/5 bg-canvas/70 backdrop-blur-xl"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6 lg:px-10">
        {/* Left cluster: logo mark, then the menu ~32px (gap-8) to its right */}
        <div className="flex items-center gap-8">
          <Link href="/" aria-label="Hypit home" className="flex items-center gap-2.5">
            <Image
              src="/logo.png"
              alt="Hypit"
              width={184}
              height={101}
              priority
              className="h-5 w-auto"
            />
            <span className="text-lg font-bold tracking-[0.18em] text-ink">
              HYPIT
            </span>
          </Link>

          <div className="hidden items-center gap-9 md:flex">
            {MENU.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="text-[13px] font-medium tracking-[0.1em] text-muted transition-colors hover:text-ink"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>

        {/* Right actions */}
        <div className="flex items-center gap-3">
          <Link
            href="#"
            className="group inline-flex items-center gap-1.5 rounded-full bg-white px-4 py-2 text-[13px] font-medium tracking-[0.1em] text-canvas transition-colors hover:bg-white/90"
          >
            BOOK A DEMO
            <span className="transition-transform duration-300 group-hover:translate-x-0.5">
              →
            </span>
          </Link>
        </div>
      </nav>
    </header>
  );
}
