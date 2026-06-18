/** Pricing page content: feature matrix, plans, and FAQ. */

/** Master feature list. Plans show a prefix of this list (rows) and mark the
    first `included` as available. Max shows all 12; others show the first 10. */
export const FEATURES = [
  "Recreate viral ads",
  "Viral Ad Breakdown",
  "Unlimited Inspiration Access",
  "AI Generative features",
  "Edit and refine videos",
  "Commercial usage",
  "X concurrent tasks with Priority",
  "Unlimited Video Exports",
  "XGB Storage",
  "Top-up Credits",
  "Early access to beta features",
  "Priority customer support",
];

export type Plan = {
  id: string;
  name: string;
  monthly: number;
  yearly: number; // per-month when billed yearly (~20% off)
  wasMonthly?: number; // struck-through "regular" price on the monthly promo
  afterNote?: string; // small line under price (monthly promo)
  bonus?: string; // limited-time credit bonus line
  credits: string;
  cta: string;
  ctaDisabled?: boolean;
  popular?: boolean;
  rows: number; // how many feature rows to display
  included: number; // first N rows are checked
};

export const PLANS: Plan[] = [
  {
    id: "basic",
    name: "Basic",
    monthly: 29,
    yearly: 23,
    credits: "1000 credits/month · 15 viral ads",
    cta: "You're on starter plan",
    ctaDisabled: true,
    rows: 10,
    included: 2,
  },
  {
    id: "pro",
    name: "Pro",
    monthly: 69,
    yearly: 55,
    wasMonthly: 79,
    afterNote: "For 1st mo. $79/mo after",
    bonus: "Limited-time +150% bonus · +10% bonus credits on top-ups",
    credits: "3000 credits/month · 44 viral ads",
    cta: "Upgrade to Pro",
    popular: true,
    rows: 10,
    included: 8,
  },
  {
    id: "ultra",
    name: "Ultra",
    monthly: 179,
    yearly: 143,
    wasMonthly: 199,
    afterNote: "For 1st mo. $199/mo after",
    bonus: "Limited-time +350% bonus · +20% bonus credits on top-ups",
    credits: "7000 credits/month · 116 viral ads",
    cta: "Upgrade to Ultra",
    rows: 10,
    included: 9,
  },
  {
    id: "max",
    name: "Max",
    monthly: 369,
    yearly: 295,
    wasMonthly: 399,
    afterNote: "For 1st mo. $399/mo after",
    bonus: "Limited-time +1000% bonus · +30% bonus credits on top-ups",
    credits: "18000 credits/month · 262 viral ads",
    cta: "Upgrade to Max",
    rows: 12,
    included: 12,
  },
];

export const FAQ: { q: string; a: string }[] = [
  {
    q: "What are credits?",
    a: "Credits are used to generate videos, recreate ads, and use AI generation features in Hypit. Different actions consume different amounts of credits depending on video length, complexity, and generation settings.",
  },
  {
    q: "How many credits does one video use?",
    a: "Most short-form videos cost between 20 and 80 credits depending on length, resolution, and the generation features you enable. The editor shows the exact cost before you run a task.",
  },
  {
    q: "Does Hypit offer free credits?",
    a: "New accounts receive a starter allocation of credits so you can try the core workflow before upgrading. Promotional bonuses are also applied automatically on eligible plans.",
  },
  {
    q: "Do unused credits roll over to the next month?",
    a: "Monthly plan credits reset each billing cycle. Credits purchased as top-ups never expire as long as your subscription stays active.",
  },
  {
    q: "Can I buy extra credits?",
    a: "Yes. You can buy top-up credit packs at any time, and higher tiers receive bonus credits on every top-up purchase.",
  },
  {
    q: "Can I use generated videos for commercial purposes?",
    a: "Commercial usage is included on Pro and above, giving you full rights to use generated videos in paid ads and brand campaigns.",
  },
  {
    q: "What are concurrent tasks?",
    a: "Concurrent tasks are how many videos can render at the same time. Higher tiers unlock more parallel slots with priority processing.",
  },
  {
    q: "What happens if I cancel my subscription?",
    a: "You keep access until the end of your current billing period. After that your plan reverts to the free tier and top-up credits remain available.",
  },
  {
    q: "Do you offer refunds?",
    a: "Reach out within 7 days of a charge and we'll review eligible refunds case by case. Contact support and we'll help sort it out.",
  },
];
