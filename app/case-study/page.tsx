import type { Metadata } from "next";
import Link from "next/link";
import { Nav } from "@/components/sections/nav";
import { Footer } from "@/components/sections/footer";
import { CaseGallery } from "@/components/case-study/case-gallery";

export const metadata: Metadata = {
  title: "Hypit × Noonwake.ai — Case Study",
  description:
    "How Hypit turned Noonwake.ai's winning creative into a repeatable marketing video production workflow — scaling output while lifting performance.",
};

/* — Placeholder copy. Swap for the real case-study content. — */

const AT_A_GLANCE = [
  { k: "Client", v: "Noonwake.ai" },
  { k: "Industry", v: "AI-Tech & Emotional Guidance" },
  { k: "Engagement", v: "Marketing Video Production" },
  { k: "Deliverables", v: "Short-form ad variants at scale" },
];

const SOLUTION_STEPS = [
  {
    n: "01",
    title: "Deconstruct",
    body: "We broke Noonwake.ai's best-performing organic video down to its structural DNA — hook, scene flow, script logic, pacing and voiceover.",
  },
  {
    n: "02",
    title: "Structure",
    body: "Those elements became a reusable workflow engine — a blueprint the team could recombine instead of starting every video from a blank page.",
  },
  {
    n: "03",
    title: "Scale",
    body: "From one proven structure we generated dozens of on-brand variants for high-volume testing across channels.",
  },
];

const GALLERY = [
  { src: "/starot1.mp4", label: "Performance Hook" },
  { src: "/starot2.mp4", label: "UGC Story" },
  { src: "/starot3.mp4", label: "App Walkthrough" },
  { src: "/starot4.mp4", label: "Benefit Hook" },
  { src: "/starot5.mp4", label: "Lifestyle Hook" },
];

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="text-mono-label">
      <span className="text-pink-200">✦</span>
      <span className="text-muted"> {children}</span>
    </div>
  );
}

export default function CaseStudyPage() {
  return (
    <main className="relative min-h-screen bg-canvas">
      <Nav />

      <article className="mx-auto max-w-5xl px-6 pb-24 pt-32 lg:pt-40">
        {/* Back link */}
        <Link
          href="/"
          className="inline-flex items-center gap-1.5 text-[13px] font-medium tracking-[0.08em] text-muted transition-colors hover:text-ink"
        >
          <span>←</span> BACK TO HOME
        </Link>

        {/* Header */}
        <header className="mt-8">
          <div className="text-mono-label text-pink-200">CASE STUDY</div>
          <h1 className="mt-4 text-balance text-h1 text-ink sm:text-display-l">
            Hypit <span className="text-pink-300">×</span> Noonwake.ai
          </h1>
          <p className="mt-4 text-body-m text-muted">
            Marketing Video Production Solution
          </p>
          <p className="mt-6 max-w-2xl text-body-m text-ink-200">
            Noonwake.ai had a handful of videos that worked — but no way to
            repeat the magic at volume. Hypit turned their winning creative into
            a structured workflow engine, scaling output without losing the
            signal that made it convert.
          </p>
        </header>

        {/* 1. Pain Points */}
        <section className="mt-16">
          <h2 className="text-h2 text-ink">
            <span className="text-pink-300">1.</span> Pain Points
          </h2>
          <p className="mt-5 max-w-3xl text-body-m text-ink-200">
            AI Tarot is a typical{" "}
            <strong className="font-semibold text-ink">
              “new category + highly emotion-driven”
            </strong>{" "}
            market. Both paid social ads and batch content production for account
            matrices face several key challenges:
          </p>

          <div className="mt-8 grid gap-4 lg:grid-cols-2">
            {/* Paid Social Ads */}
            <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-6">
              <h3 className="text-title text-ink">Paid Social Ads</h3>
              <ul className="mt-4 space-y-3.5">
                <li className="flex gap-2.5 text-body-s text-muted">
                  <span className="mt-[7px] h-1 w-1 shrink-0 rounded-full bg-pink-300" />
                  <span>
                    TikTok creatives typically have a short lifecycle of only{" "}
                    <strong className="font-semibold text-ink">7–10 days</strong>,
                    meaning creative fatigue happens very quickly.
                  </span>
                </li>
                <li className="flex gap-2.5 text-body-s text-muted">
                  <span className="mt-[7px] h-1 w-1 shrink-0 rounded-full bg-pink-300" />
                  <span>
                    The tarot / divination category faces special ad review
                    restrictions on platforms like{" "}
                    <strong className="font-semibold text-ink">Meta</strong> and{" "}
                    <strong className="font-semibold text-ink">TikTok</strong>,
                    requiring a large number of creative variations to test what
                    can pass review.
                  </span>
                </li>
                <li className="flex gap-2.5 text-body-s text-muted">
                  <span className="mt-[7px] h-1 w-1 shrink-0 rounded-full bg-pink-300" />
                  <span>
                    There is no systematic way to track{" "}
                    <strong className="font-semibold text-ink">
                      which overseas creatives in the same category are currently
                      scaling
                    </strong>
                    .
                  </span>
                </li>
              </ul>
            </div>

            {/* Account Matrix Content */}
            <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-6">
              <h3 className="text-title text-ink">Account Matrix Content</h3>
              <ul className="mt-4 space-y-3.5">
                <li className="flex gap-2.5 text-body-s text-muted">
                  <span className="mt-[7px] h-1 w-1 shrink-0 rounded-full bg-pink-300" />
                  <span>
                    Brands need to continuously produce content at scale for{" "}
                    <strong className="font-semibold text-ink">
                      TikTok, Instagram Reels, and YouTube Shorts
                    </strong>
                    .
                  </span>
                </li>
                <li className="flex gap-2.5 text-body-s text-muted">
                  <span className="mt-[7px] h-1 w-1 shrink-0 rounded-full bg-pink-300" />
                  <span>
                    Content needs to feel{" "}
                    <strong className="font-semibold text-ink">
                      native to the platform
                    </strong>{" "}
                    while still including clear conversion hooks.
                  </span>
                </li>
                <li className="flex gap-2.5 text-body-s text-muted">
                  <span className="mt-[7px] h-1 w-1 shrink-0 rounded-full bg-pink-300" />
                  <span>
                    Multi-account operations require differentiated content,
                    rather than simply reposting the same materials across
                    accounts.
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* At a glance */}
        <section className="mt-16">
          <SectionLabel>AT A GLANCE</SectionLabel>
          <dl className="mt-5 grid grid-cols-1 gap-x-8 gap-y-5 sm:grid-cols-2">
            {AT_A_GLANCE.map((row) => (
              <div
                key={row.k}
                className="flex items-baseline justify-between border-b border-white/5 pb-4"
              >
                <dt className="font-mono text-[11px] uppercase tracking-[0.1em] text-faint">
                  {row.k}
                </dt>
                <dd className="text-body-s text-ink">{row.v}</dd>
              </div>
            ))}
          </dl>
        </section>

        {/* Solution */}
        <section className="mt-16">
          <SectionLabel>THE SOLUTION</SectionLabel>
          <h2 className="mt-4 text-h3 text-ink">
            Deconstruct. Structure. <span className="text-pink-300">Scale.</span>
          </h2>
          <div className="mt-8 grid gap-4 lg:grid-cols-3">
            {SOLUTION_STEPS.map((s) => (
              <div
                key={s.n}
                className="rounded-2xl border border-white/10 bg-white/[0.02] p-6"
              >
                <div className="text-mono-label text-pink-200">{s.n}</div>
                <h3 className="mt-3 text-title text-ink">{s.title}</h3>
                <p className="mt-2 text-body-s text-muted">{s.body}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Gallery */}
        <section className="mt-16">
          <SectionLabel>SELECTED VARIANTS</SectionLabel>
          <p className="mt-4 max-w-2xl text-body-s text-muted">
            A sample of the scalable variants produced from a single structure.
            Hover or tap to play.
          </p>
          <div className="mt-7">
            <CaseGallery clips={GALLERY} />
          </div>
        </section>

        {/* CTA */}
        <section className="mt-20 rounded-3xl border border-white/10 bg-white/[0.02] px-6 py-12 text-center">
          <h2 className="text-balance text-h2 text-ink">
            Want results like this for your brand?
          </h2>
          <p className="mx-auto mt-4 max-w-md text-body-s text-muted">
            Turn your winning videos into a repeatable AI ad workflow.
          </p>
          <Link
            href="/#features"
            className="group mt-8 inline-flex items-center gap-1.5 rounded-full bg-pink-200 px-6 py-3 text-body-s font-medium tracking-[0.06em] text-canvas transition-colors duration-300 hover:bg-pink-300"
          >
            SEE HOW IT WORKS
            <span className="transition-transform duration-300 group-hover:translate-x-0.5">
              →
            </span>
          </Link>
        </section>
      </article>

      <Footer />
    </main>
  );
}
