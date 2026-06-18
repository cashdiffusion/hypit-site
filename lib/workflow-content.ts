/**
 * Content + visual tokens for the "Workflow Engine" section.
 * Imagery is CSS-gradient placeholder (cosmic / pink-purple) until real
 * thumbnails are supplied — swap the `bg` strings for <Image> later.
 */

/** Cosmic gradient recipe: a top glow over a dark vertical fade. */
const cosmic = (glow: string, top: string, bottom: string) =>
  `radial-gradient(110% 78% at 50% 16%, ${glow} 0%, transparent 46%), ` +
  `linear-gradient(180deg, ${top} 0%, ${bottom} 100%)`;

/* ---- 01 / ORIGINAL ---- source PNG slots. Fill each `src` (path under
   /public) when the real assets are ready; empty slots render a placeholder. */
export type SourceSlot = { id: string; src?: string };

export const ORIGINAL_SOURCES: SourceSlot[] = [
  { id: "src-1", src: "/engine%20pic%201.webp" },
  { id: "src-2", src: "/engine%20pic%202.webp" },
  { id: "src-3", src: "/luna.png" },
];

/* ---- 02 / WORKFLOW ---- engine nodes, positioned in a 0–100 square ---- */
export type EngineNode = {
  key: "hook" | "scene" | "script" | "pacing" | "voice";
  title: string;
  sub: string;
  cx: number; // % horizontal within the square graph
  cy: number; // % vertical
};

export const ENGINE_NODES: EngineNode[] = [
  { key: "hook", title: "Opening Hook", sub: "Grabs attention", cx: 50, cy: 13 },
  { key: "scene", title: "Scene Flow", sub: "Visual structure", cx: 15, cy: 45 },
  { key: "script", title: "Script Logic", sub: "Story blueprint", cx: 85, cy: 45 },
  { key: "pacing", title: "Pacing", sub: "Rhythm & timing", cx: 29, cy: 85 },
  { key: "voice", title: "Voiceover", sub: "Tone & delivery", cx: 71, cy: 85 },
];

/* ---- 03 / OUTPUTS ---- six scalable variants (2 × 3 grid). Each plays an
   engine video on hover/click; `bg` is the fallback until the file exists. */
export type Variant = { label: string; bg: string; video?: string };

export const OUTPUT_VARIANTS: Variant[] = [
  { label: "Variant 1", bg: cosmic("#c77dff", "#2a1640", "#0a0610"), video: "/engine1.mp4" },
  { label: "Variant 2", bg: cosmic("#f3a6c6", "#301a2e", "#0b0709"), video: "/engine2.mp4" },
  { label: "Variant 3", bg: cosmic("#9b6dff", "#221536", "#08060e"), video: "/engine3.mp4" },
  { label: "Variant 4", bg: cosmic("#ff9ecb", "#2e1828", "#0a0608"), video: "/engine4.mp4" },
  { label: "Variant 5", bg: cosmic("#b388ff", "#1f1733", "#08070d"), video: "/engine5.mp4" },
  { label: "Variant 6", bg: cosmic("#d6a8ff", "#281a3a", "#09070f"), video: "/engine%206.mp4" },
];
