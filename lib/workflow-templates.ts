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
  /** [2] Persona — CSS `background` values for the avatar circles (an
      `url(...) center/cover` image or a gradient recipe). */
  personas: string[];
  /** Index of the highlighted persona (defaults to 0). */
  personaSelected?: number;
  /** [3] Voiceover — voice name + clip duration + optional playable clip. */
  voice: { name: string; duration: string; audio?: string };
  /** Output — the finished short-form video. */
  output: { video: string; poster?: string };
};

export const TEMPLATES: WorkflowTemplate[] = [
  {
    id: "deep-night",
    name: "Deep Night",
    products: [
      "/Starot.webp",
      "/engine%20pic%201.webp",
      "/engine%20pic%202.webp",
      "/engine%20pic%203.png",
    ],
    script: [
      "Hook: \"It only works after midnight…\"",
      "Reveal the product in one slow pan",
      "Close on the glow + soft CTA",
    ],
    hook: "Curiosity",
    personas: [
      "url('/luna.png') center/cover",
      "url('/nova.png') center/cover",
      "url('/serina.png') center/cover",
      "url('/karina.png') center/cover",
    ],
    voice: { name: "Luna — calm, intimate", duration: "0:12", audio: "/lunna.mp3" },
    output: { video: "/example%20video%201.mp4" },
  },
  {
    id: "tier-reveal",
    name: "Tier Reveal",
    placeholder: true,
    products: [
      "/Starot.webp",
      "/engine%20pic%201.webp",
      "/engine%20pic%202.webp",
      "/engine%20pic%203.png",
    ],
    script: [
      "Hook: \"Which tier is actually worth it?\"",
      "Compare the tiers side by side, fast",
      "Land on the best-value pick + CTA",
    ],
    hook: "Value",
    personas: [
      "url('/luna.png') center/cover",
      "url('/nova.png') center/cover",
      "url('/serina.png') center/cover",
      "url('/karina.png') center/cover",
    ],
    personaSelected: 2,
    voice: { name: "Mia — warm, upbeat", duration: "0:15", audio: "/voice%202.mp3" },
    output: { video: "/video%20example%202.mp4" },
  },
];
