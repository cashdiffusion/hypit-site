/**
 * Workflow Templates — data for the /workflows gallery.
 *
 * Each template is visualised as the node graph from public/workflow.png:
 * four input nodes (product images, script, persona, voiceover) flow into a
 * single "Video Complete" output node.
 *
 * Deep Night is the fully-authored template; Tier Reveal reuses existing
 * /public engine assets as a placeholder until real content is supplied.
 */

export type NodeType = "product" | "script" | "persona" | "voice";

/** A cosmic gradient string used for persona placeholder circles (no headshot
    assets exist yet — swap `personas` for image paths when they do). */
const cosmic = (glow: string, top: string, bottom: string) =>
  `radial-gradient(120% 90% at 50% 18%, ${glow} 0%, transparent 55%), ` +
  `linear-gradient(160deg, ${top} 0%, ${bottom} 100%)`;

export type WorkflowTemplate = {
  id: string;
  name: string;
  tagline?: string;
  /** `true` for templates still using placeholder assets. */
  placeholder?: boolean;
  /** [0] Product images — paths under /public (already URL-encoded). */
  products: string[];
  /** [1] Script — a few short lines, plus the hook label. */
  script: string[];
  hook: string;
  /** [2] Persona — gradient recipes for the avatar circles; first is selected. */
  personas: string[];
  /** [3] Voiceover — voice name + clip duration. */
  voice: { name: string; duration: string };
  /** Output — the finished short-form video. */
  output: { video: string; poster?: string };
};

export const TEMPLATES: WorkflowTemplate[] = [
  {
    id: "deep-night",
    name: "Deep Night",
    products: ["/luna.png", "/Starot.webp"],
    script: [
      "Hook: \"It only works after midnight…\"",
      "Reveal the product in one slow pan",
      "Close on the glow + soft CTA",
    ],
    hook: "Curiosity",
    personas: [
      cosmic("#f3a6c6", "#301a2e", "#0b0709"),
      cosmic("#c77dff", "#221536", "#08060e"),
      cosmic("#9b6dff", "#1f1733", "#08070d"),
      cosmic("#ff9ecb", "#2e1828", "#0a0608"),
    ],
    voice: { name: "Luna — calm, intimate", duration: "0:12" },
    output: { video: "/starot1.mp4", poster: "/Starot.webp" },
  },
  {
    id: "tier-reveal",
    name: "Tier Reveal",
    placeholder: true,
    products: ["/engine%20pic%201.webp", "/engine%20pic%202.webp"],
    script: [
      "Hook: \"Which tier is actually worth it?\"",
      "Compare the tiers side by side, fast",
      "Land on the best-value pick + CTA",
    ],
    hook: "Value",
    personas: [
      cosmic("#ffb877", "#2e2016", "#0b0805"),
      cosmic("#ff9ecb", "#2e1828", "#0a0608"),
      cosmic("#f3a6c6", "#301a2e", "#0b0709"),
      cosmic("#d6a8ff", "#281a3a", "#09070f"),
    ],
    voice: { name: "Mia — warm, upbeat", duration: "0:15" },
    output: { video: "/engine2.mp4", poster: "/engine%20pic%201.webp" },
  },
];
