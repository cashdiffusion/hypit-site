/**
 * Client Cases content. Imagery is CSS-gradient placeholder (moody / lit
 * subject) until real campaign stills are supplied. Noonwake copy is
 * illustrative — swap for real client data.
 */

export type Token = { text: string; pink?: boolean };

export type CaseCard = {
  id: string;
  headline: Token[];
  tag: string;
  value: string;
  delta: string;
  /** gradient placeholder for the (eventual) campaign still */
  bg: string;
  /** Optional real video (under /public). When set, it replaces the gradient
      placeholder and the headline overlay is hidden. */
  video?: string;
};

export type Client = {
  id: string;
  name: string;
  descriptor: string;
  initial: string;
  /** Optional logo image (under /public). Falls back to `initial` when absent. */
  logo?: string;
  cards: CaseCard[];
};

/** warm / athletic placeholder */
const warm = (a: string) =>
  `radial-gradient(85% 55% at 50% 28%, ${a} 0%, transparent 56%), linear-gradient(180deg, #241c20 0%, #0c0a0c 100%)`;
/** cool / calm placeholder */
const cool = (a: string) =>
  `radial-gradient(85% 55% at 50% 28%, ${a} 0%, transparent 56%), linear-gradient(180deg, #181d2e 0%, #08090f 100%)`;

export const CLIENTS: Client[] = [
  {
    id: "starot",
    name: "Starot",
    descriptor: "AI-Tech & Emotional Guidance",
    initial: "S",
    logo: "/Starot.webp",
    cards: [
      {
        id: "w1",
        headline: [{ text: "Calm in " }, { text: "one breath.", pink: true }],
        tag: "Performance Hook",
        value: "21.4K",
        delta: "+64%",
        bg: cool("#4a5575"),
        video: "/starot1.mp4",
      },
      {
        id: "w2",
        headline: [
          { text: "I stopped doomscrolling for " },
          { text: "a week.", pink: true },
        ],
        tag: "UGC Story",
        value: "76.8K",
        delta: "+58%",
        bg: cool("#445070"),
        video: "/starot2.mp4",
      },
      {
        id: "w3",
        headline: [{ text: "Your mind, " }, { text: "guided.", pink: true }],
        tag: "App Walkthrough",
        value: "58.2K",
        delta: "+49%",
        bg: cool("#4e4a72"),
        video: "/starot3.mp4",
      },
      {
        id: "w4",
        headline: [
          { text: "Sleep deeper. Wake " },
          { text: "clearer.", pink: true },
        ],
        tag: "Benefit Hook",
        value: "47.5K",
        delta: "+41%",
        bg: cool("#3f5566"),
        video: "/starot4.mp4",
      },
      {
        id: "w5",
        headline: [{ text: "Less noise. " }, { text: "More you.", pink: true }],
        tag: "Lifestyle Hook",
        value: "33.9K",
        delta: "+35%",
        bg: cool("#48506e"),
        video: "/starot5.mp4",
      },
    ],
  },
  {
    id: "nuromova",
    name: "Nuromova",
    descriptor: "AI Sports Headband",
    initial: "N",
    logo: "/nuromova_logo_white_circle.png",
    cards: [
      {
        id: "n1",
        headline: [],
        tag: "Performance Hook",
        value: "12.6K",
        delta: "+88%",
        bg: warm("#6a5560"),
        video: "/nuromova.mp4",
      },
    ],
  },
];
