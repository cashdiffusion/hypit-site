import {
  CADENCE,
  ADJUSTMENT,
  ADJUSTMENT_NOTE,
  INDUSTRY,
  BASE_COST,
  BONUS,
} from "@/lib/proposal";
import { BookDemoCta } from "@/components/contact/book-demo-cta";

/** Small uppercase mono eyebrow used above each major block. */
function Eyebrow({ children }: { children: React.ReactNode }) {
  return <div className="text-mono-label text-pink-300">{children}</div>;
}

export function PricingPlans() {
  return (
    <section className="relative bg-canvas px-6 pb-24 pt-32 lg:pt-36">
      <div className="mx-auto max-w-4xl">
        {/* ---- Header ------------------------------------------------------ */}
        <div className="text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-3 py-1">
            <span className="text-pink-300">✦</span>
            <span className="text-mono-label text-ink-200">
              Partnership Proposal
            </span>
          </div>
          <h1 className="mt-6 text-h1 text-ink sm:text-display-l">
            Pricing &amp; Collaboration Plan
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-body-m text-muted">
            A matrix-account program built around steady output, weekly
            iteration, and a low base fee plus a CPM revenue share.
          </p>
        </div>

        {/* ---- Content Production Cadence --------------------------------- */}
        <div className="mt-16">
          <Eyebrow>01 — Cadence</Eyebrow>
          <h2 className="mt-2 text-h2 text-ink">Content Production Cadence</h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {CADENCE.map((c) => (
              <div
                key={c.label}
                className="rounded-lg border border-white/10 bg-surface-200 p-6"
              >
                <div className="text-title-s text-ink">{c.label}</div>
                <p className="mt-2 text-body-s leading-relaxed text-ink-200">
                  {c.value}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* ---- Dynamic Adjustment Mechanism ------------------------------- */}
        <div className="mt-16">
          <Eyebrow>02 — Iteration</Eyebrow>
          <h2 className="mt-2 text-h2 text-ink">
            Dynamic Adjustment Mechanism
          </h2>
          <div className="mt-6 overflow-x-auto rounded-lg border border-white/10">
            <table className="w-full min-w-[680px] border-collapse text-left">
              <thead>
                <tr className="bg-surface-200">
                  <th className="px-5 py-4 text-mono-label text-ink-200">
                    Review Cadence
                  </th>
                  <th className="px-5 py-4 text-mono-label text-ink-200">
                    Evaluation Metrics
                  </th>
                  <th className="px-5 py-4 text-mono-label text-ink-200">
                    Adjustment Actions
                  </th>
                </tr>
              </thead>
              <tbody>
                {ADJUSTMENT.map((r) => (
                  <tr key={r.cadence} className="border-t border-white/[0.08]">
                    <td className="whitespace-nowrap px-5 py-5 align-top text-body-s font-medium text-pink-200">
                      {r.cadence}
                    </td>
                    <td className="px-5 py-5 align-top text-body-s leading-relaxed text-ink-200">
                      {r.metrics}
                    </td>
                    <td className="px-5 py-5 align-top text-body-s leading-relaxed text-ink-200">
                      {r.actions}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-4 text-body-s leading-relaxed text-muted">
            {ADJUSTMENT_NOTE}
          </p>
        </div>

        {/* ---- Pricing ----------------------------------------------------- */}
        <div className="mt-16">
          <Eyebrow>03 — Pricing</Eyebrow>
          <h2 className="mt-2 text-h2 text-ink">Pricing</h2>

          {/* Industry context */}
          <div className="mt-6 space-y-4">
            {INDUSTRY.map((p, i) => (
              <p key={i} className="text-body-m leading-relaxed text-ink-200">
                {p}
              </p>
            ))}
          </div>

          {/* Base fee table */}
          <h3 className="mt-10 text-h3 text-ink">Base Fee</h3>
          <div className="mt-4 overflow-x-auto rounded-lg border border-white/10">
            <table className="w-full min-w-[560px] border-collapse text-left">
              <thead>
                <tr className="bg-surface-200">
                  <th className="px-5 py-4 text-mono-label text-ink-200">
                    Item
                  </th>
                  <th className="px-5 py-4 text-mono-label text-ink-200">
                    Calculation
                  </th>
                  <th className="px-5 py-4 text-right text-mono-label text-ink-200">
                    Amount
                  </th>
                </tr>
              </thead>
              <tbody>
                {BASE_COST.map((r) => (
                  <tr
                    key={r.item}
                    className={`border-t border-white/[0.08] ${
                      r.highlight ? "bg-pink-300/[0.06]" : ""
                    }`}
                  >
                    <td className="px-5 py-4 align-top text-body-s font-medium text-ink">
                      {r.item}
                    </td>
                    <td className="px-5 py-4 align-top text-body-s text-ink-200">
                      {r.calc}
                    </td>
                    <td
                      className={`px-5 py-4 text-right align-top ${
                        r.highlight
                          ? "text-title font-semibold text-pink-200"
                          : "text-body-s text-ink"
                      }`}
                    >
                      {r.amount}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Performance bonus */}
          <div className="mt-6 rounded-lg border border-pink-300/30 bg-pink-300/[0.05] p-6">
            <Eyebrow>Performance Bonus · CPM Share</Eyebrow>
            <p className="mt-3 text-body-m leading-relaxed text-ink-200">
              {BONUS}
            </p>
          </div>
        </div>

        {/* ---- CTA --------------------------------------------------------- */}
        <div className="mt-16 flex flex-col items-center gap-4 rounded-lg border border-white/10 bg-white/[0.02] p-10 text-center">
          <h3 className="text-h3 text-ink">Ready to start the first cycle?</h3>
          <p className="max-w-md text-body-s text-muted">
            We&apos;ll set up the 20-account matrix, lock the five themes, and
            ship the first 600 videos together.
          </p>
          <BookDemoCta />
        </div>
      </div>
    </section>
  );
}
