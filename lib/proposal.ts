/** Pricing & collaboration proposal content — matrix-account program.
    Replaces the former consumer credit tiers (still in lib/pricing.ts, unused). */

/** Content production cadence — the four pillars of the first cycle. */
export const CADENCE: { label: string; value: string }[] = [
  {
    label: "Account Matrix",
    value: "20 accounts × 5 themes × 4 accounts per theme.",
  },
  {
    label: "Update Frequency",
    value:
      "Month 1: one video per account per day. No volume ramp in the first month — we stabilize the single-account rhythm first.",
  },
  {
    label: "Monthly Output",
    value:
      "600 videos (20 accounts × 30 days), aligned with the $9,000 base fee.",
  },
  {
    label: "Synchronized A/B Testing",
    value:
      "The 4 accounts in each theme publish in sync for horizontal A/B tests: one script structure × different hooks, thumbnails, pacing, and voiceover versions.",
  },
];

/** Dynamic adjustment mechanism — review cadence × metrics × actions. */
export const ADJUSTMENT: { cadence: string; metrics: string; actions: string }[] = [
  {
    cadence: "Weekly",
    metrics:
      "Views, completion rate, like / comment / share rate, per-video hit rate, and skepticism raised in the comments.",
    actions:
      "Within-theme hook / thumbnail / pacing tweaks. Each viral video's script structure is distilled into a reusable template that week, then copied to the other accounts in the same theme the next week.",
  },
  {
    cadence: "Bi-weekly",
    metrics:
      "Theme-level engagement quality, comment keywords, and whether users ask about price, purchase, wearing, or accuracy.",
    actions:
      "Turn high-question content into FAQ-style videos. Give high-interest themes more product exposure and stronger CTAs.",
  },
  {
    cadence: "Monthly",
    metrics:
      "Theme-level CPM, share of top videos, account follower-growth rate, and link click-through propensity.",
    actions:
      "Retire persistently weak themes and move their account quota to winning themes. Run cross-theme migration tests of viral script structures to validate transferability.",
  },
];

export const ADJUSTMENT_NOTE =
  "The 5 themes above are an initial grouping — first-round traffic probes only. From month 2 we reallocate account quotas based on real data: strong themes expand to 6–8 accounts, weak themes shrink or get replaced with new directions, so all 20 accounts always run on the most productive content directions. If Nuromova has specific directions to validate, they can be added to the next replacement pool at any time.";

/** Industry context paragraphs above the base-fee table. */
export const INDUSTRY: string[] = [
  "Across the industry, AI video assets typically cost $35–$50 per clip. But the core of the matrix-account model isn't just asset production — it's the combined value of assets and viral operation. The real value comes from compounding traffic and accumulating content assets through long-term, steady output and continuous optimization.",
  "Since this is our first collaboration, we want to build a longer-term partnership. We therefore use a lower base production fee plus a CPM revenue share. This keeps the upfront barrier low for both sides, and lets us refine — through shared creation and testing — viral content with real, sustained growth power, so the work genuinely drives product growth.",
];

/** Base fee breakdown. The highlighted row is the monthly total. */
export const BASE_COST: {
  item: string;
  calc: string;
  amount: string;
  highlight?: boolean;
}[] = [
  {
    item: "Monthly video count",
    calc: "20 accounts × 30 days × 1 / day",
    amount: "600",
  },
  {
    item: "Per-video production fee",
    calc: "Unified per the original pricing doc",
    amount: "$15 / video",
  },
  {
    item: "Monthly base fee",
    calc: "600 × $15",
    amount: "$9,000",
    highlight: true,
  },
];

export const BONUS =
  "Dynamic CPM with a cap. Below 10K views there is no extra charge. Tiered billing starts once organic video views pass 10K and is capped above 1M views, with CPM between $1 and $3. (For reference, overseas thousand-follower creators in AI hardware/software see CPM around $10–30.)";
