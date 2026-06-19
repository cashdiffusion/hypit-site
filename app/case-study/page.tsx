import type { Metadata } from "next";
import { Nav } from "@/components/sections/nav";
import { ContactCtaButton } from "@/components/contact/contact-cta-button";
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

const WHY_NOT = [
  {
    n: "01",
    title: "It can generate — but not decide what to generate",
    body: "Tools like Seedance solve the last mile, turning a prompt into video. But the decisions that actually make an ad work happen further upstream: which creative structure to use, how to design the first-3-second hook, what narrative pacing to run. Those still have to be defined by people — the model offers no creative strategy, so teams are essentially still guessing which direction to take.",
  },
  {
    n: "02",
    title: "No feedback loop from what's actually scaling",
    body: "A generic video agent has no idea which creative structures are currently scaling in your category on TikTok or Meta. Whether the creative your team ships performs is only validated after you spend — which means heavy trial-and-error cost. There is no “see what's working in the market first, then decide what to make” step.",
  },
  {
    n: "03",
    title: "Prompt engineering is itself heavy manual labor",
    body: "Getting a usable result out of a model like Seedance 2.0 means precisely describing scene, camera movement, action, emotion, and sound. A single 15-second ad prompt can take a dozen-plus iterations to dial in. The process leans on the operator's personal experience — hard to standardize, hard to scale by handing it to new hires.",
  },
  {
    n: "04",
    title: "A single clip is not a finished ad",
    body: "These models generate 5–15-second clips. A complete feed ad needs a Hook → Product → CTA structure, plus subtitles, music, and beat timing. Between a generated clip and a ready-to-run final cut there is still a lot of scripting, storyboard breakdown, and editing — all done by hand.",
  },
  {
    n: "05",
    title: "It lacks a platform-native feel",
    body: "Generation models are great at cinematic looks. But the creative that scales best in feed ads and account matrices is the opposite of polished — screen recordings, UGC voiceovers, handheld POV, low-production content. Purely AI-generated footage is instantly recognizable as AI, which on native-content-first platforms lowers trust and completion rate.",
  },
];

const HYPIT_STEPS = [
  {
    n: "01",
    title: "Match",
    body: "From a large library of proven, high-performing marketing videos, Hypit matches the creative directions best suited to your product.",
  },
  {
    n: "02",
    title: "Reference",
    body: "It surfaces real, currently-scaling cases as reference — so you decide based on the market, not a hunch.",
  },
  {
    n: "03",
    title: "Produce",
    body: "Following the chosen creative direction, Hypit produces finished, ready-to-run videos — fast.",
  },
];

const COMPETITORS = [
  {
    product: "Starot",
    type: "AI Tarot app",
    fn: "AI-driven tarot readings and spread divination",
    rivals: "Co–Star, Nebula, Quin, Starla, Moonly",
  },
  {
    product: "Lucky Calendar Device",
    type: "Smart hardware",
    fn: "Daily fortune push, casting, and calendar features",
    rivals:
      "Divination / fortune desktop hardware — a newer category with few direct rivals; benchmarked against AI desktop devices like StackChan and LOOI",
  },
];

const AD_FORMATS = [
  {
    n: "1",
    type: "Voiceover recording + surprise reaction",
    hook: "“This app just told me things nobody knows” — voiceover with suspense",
    platform: "TikTok / IG Reels",
  },
  {
    n: "2",
    type: "Mass-divination interactive",
    hook: "“That's your message from the universe” — interaction + a personalized feel",
    platform: "TikTok",
  },
  {
    n: "3",
    type: "Mini-skit",
    hook: "Social-attribute framing, “this product says you'll…” — personal story + emotion",
    platform: "TikTok",
  },
  {
    n: "4",
    type: "“POV” scenario",
    hook: "“Now that I have X, I finally…” — resonance + curiosity",
    platform: "TikTok",
  },
  {
    n: "5",
    type: "Ranking / comparison",
    hook: "Pitted against similar products, real-person voiceover + picture-in-picture — interaction + comparison",
    platform: "TikTok / IG Reels / Meta",
  },
];

const WORKFLOW = [
  {
    label: "CLIENT INPUT",
    steps: [
      "① Provide product info — name, selling points, assets / links, target audience",
      "② Upload assets — product images / video, brand logo… or even just a single link",
    ],
  },
  {
    label: "HYPIT PROCESSING",
    steps: [
      "③ Smart-match the creative directions that fit the product",
      "④ Pull the best-performing references from the scaling library",
      "⑤ Generate finished videos along the chosen direction",
    ],
  },
  {
    label: "CLIENT OUTPUT",
    steps: [
      "⑥ Receive recommended directions + real scaling-case references",
      "⑦ Pick and confirm a direction",
      "⑧ Get the finished cut — refine & extend in plain language, then ship",
    ],
  },
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
        {/* Header */}
        <header>
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

        {/* Gallery */}
        <section className="mt-12">
          <SectionLabel>SELECTED VARIANTS</SectionLabel>
          <p className="mt-4 max-w-2xl text-body-s text-muted">
            A sample of the scalable variants produced from a single structure.
            Hover or tap to play.
          </p>
          <div className="mt-7">
            <CaseGallery clips={GALLERY} />
          </div>
        </section>

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

          <div className="mt-8 grid gap-x-10 gap-y-8 lg:grid-cols-2">
            {/* Paid Social Ads */}
            <div className="border-t border-white/10 pt-5">
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
            <div className="border-t border-white/10 pt-5">
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

        {/* 2. Competitor Benchmarking */}
        <section className="mt-16">
          <h2 className="text-h2 text-ink">
            <span className="text-pink-300">2.</span> Competitor Benchmarking
          </h2>
          <p className="mt-5 max-w-3xl text-body-m text-ink-200">
            Before producing anything, we mapped the category — who Starot
            competes with across apps and hardware, and what the benchmark
            players look like.
          </p>

          {/* Competitor landscape */}
          <div className="mt-8">
            <SectionLabel>COMPETITOR LANDSCAPE</SectionLabel>
            <div className="mt-4 overflow-x-auto rounded-2xl border border-white/10 bg-white/[0.02]">
              <table className="w-full min-w-[680px] text-left">
                <thead>
                  <tr className="font-mono text-[11px] uppercase tracking-[0.1em] text-faint">
                    <th className="border-b border-white/10 px-5 py-3.5 font-medium">
                      Product
                    </th>
                    <th className="border-b border-white/10 px-5 py-3.5 font-medium">
                      Type
                    </th>
                    <th className="border-b border-white/10 px-5 py-3.5 font-medium">
                      Core Function
                    </th>
                    <th className="border-b border-white/10 px-5 py-3.5 font-medium">
                      Benchmark Competitors
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {COMPETITORS.map((c) => (
                    <tr key={c.product} className="align-top">
                      <td className="border-b border-white/5 px-5 py-4 text-body-s font-semibold text-ink">
                        {c.product}
                      </td>
                      <td className="border-b border-white/5 px-5 py-4 text-body-s text-muted">
                        {c.type}
                      </td>
                      <td className="border-b border-white/5 px-5 py-4 text-body-s text-muted">
                        {c.fn}
                      </td>
                      <td className="border-b border-white/5 px-5 py-4 text-body-s text-muted">
                        {c.rivals}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

        </section>

        {/* 3. Why not a generic video agent */}
        <section className="mt-16">
          <h2 className="text-h2 text-ink">
            <span className="text-pink-300">3.</span> Why Not a Generic Video
            Agent?
          </h2>
          <p className="mt-5 max-w-3xl text-body-m text-ink-200">
            Pure generation models — Seedance 2.0 and similar video agents — can
            render a clip, but they don't solve what actually makes an ad
            convert. Five reasons they fall short for performance creative:
          </p>

          <div className="mt-8 divide-y divide-white/10 border-t border-white/10">
            {WHY_NOT.map((r) => (
              <div key={r.n} className="flex gap-5 py-6">
                <div className="shrink-0 text-mono-label text-pink-200">
                  {r.n}
                </div>
                <div>
                  <h3 className="text-title text-ink">{r.title}</h3>
                  <p className="mt-2 text-body-s text-muted">{r.body}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 4. What is Hypit */}
        <section className="mt-16">
          <h2 className="text-h2 text-ink">
            <span className="text-pink-300">4.</span> What Is Hypit?
          </h2>
          <p className="mt-5 max-w-3xl text-body-m text-ink-200">
            In one line: it turns{" "}
            <strong className="font-semibold text-ink">scaling winners</strong>{" "}
            into{" "}
            <strong className="font-semibold text-ink">
              reusable creative templates
            </strong>
            , then helps you produce fast. You supply product information and a
            few basic assets — Hypit handles the rest:
          </p>

          <div className="mt-8 grid gap-x-8 gap-y-8 lg:grid-cols-3">
            {HYPIT_STEPS.map((s) => (
              <div key={s.n} className="border-t border-white/10 pt-5">
                <div className="text-mono-label text-pink-200">{s.n}</div>
                <h3 className="mt-3 text-title text-ink">{s.title}</h3>
                <p className="mt-2 text-body-s text-muted">{s.body}</p>
              </div>
            ))}
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
          <div className="mt-8 grid gap-x-8 gap-y-8 lg:grid-cols-3">
            {SOLUTION_STEPS.map((s) => (
              <div key={s.n} className="border-t border-white/10 pt-5">
                <div className="text-mono-label text-pink-200">{s.n}</div>
                <h3 className="mt-3 text-title text-ink">{s.title}</h3>
                <p className="mt-2 text-body-s text-muted">{s.body}</p>
              </div>
            ))}
          </div>
        </section>

        {/* What's scaling — category ad formats */}
        <section className="mt-16">
          <SectionLabel>WHAT&rsquo;S SCALING — CATEGORY AD FORMATS</SectionLabel>
          <p className="mt-4 max-w-2xl text-body-s text-muted">
            The creative structures currently scaling for comparable products on
            TikTok, Reels, and Meta — the patterns we build from.
          </p>
          <div className="mt-6 overflow-x-auto rounded-2xl border border-white/10 bg-white/[0.02]">
            <table className="w-full min-w-[720px] text-left">
              <thead>
                <tr className="font-mono text-[11px] uppercase tracking-[0.1em] text-faint">
                  <th className="border-b border-white/10 px-5 py-3.5 font-medium">
                    #
                  </th>
                  <th className="border-b border-white/10 px-5 py-3.5 font-medium">
                    Creative Type
                  </th>
                  <th className="border-b border-white/10 px-5 py-3.5 font-medium">
                    Hook / Core Line
                  </th>
                  <th className="border-b border-white/10 px-5 py-3.5 font-medium">
                    Platform
                  </th>
                </tr>
              </thead>
              <tbody>
                {AD_FORMATS.map((a) => (
                  <tr key={a.n} className="align-top">
                    <td className="border-b border-white/5 px-5 py-4 text-body-s text-pink-200">
                      {a.n}
                    </td>
                    <td className="border-b border-white/5 px-5 py-4 text-body-s font-semibold text-ink">
                      {a.type}
                    </td>
                    <td className="border-b border-white/5 px-5 py-4 text-body-s text-muted">
                      {a.hook}
                    </td>
                    <td className="whitespace-nowrap border-b border-white/5 px-5 py-4 text-body-s text-muted">
                      {a.platform}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* The Hypit workflow — end to end */}
        <section className="mt-16">
          <SectionLabel>THE HYPIT WORKFLOW</SectionLabel>
          <h2 className="mt-4 text-h3 text-ink">
            Input. Process. <span className="text-pink-300">Output.</span>
          </h2>
          <p className="mt-4 max-w-2xl text-body-s text-muted">
            What you hand over, what Hypit does with it, and what comes back —
            end to end.
          </p>
          <div className="mt-8 grid gap-x-8 gap-y-8 lg:grid-cols-3">
            {WORKFLOW.map((col) => (
              <div key={col.label} className="border-t border-white/10 pt-5">
                <div className="text-mono-label text-pink-200">{col.label}</div>
                <ul className="mt-4 space-y-3">
                  {col.steps.map((s, i) => (
                    <li key={i} className="text-body-s leading-relaxed text-muted">
                      {s}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
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
          <ContactCtaButton
            label="SEE HOW IT WORKS"
            eyebrow="See how it works"
            className="group mt-8 inline-flex items-center gap-1.5 rounded-full bg-pink-200 px-6 py-3 text-body-s font-medium tracking-[0.06em] text-canvas transition-colors duration-300 hover:bg-pink-300"
          />
        </section>
      </article>

      <Footer />
    </main>
  );
}
