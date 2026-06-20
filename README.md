# Hypit — AI Creative Workflow Agent

Marketing site for **Hypit**, a B2B AI product that turns a brand's winning
creative into a repeatable workflow — producing and testing short-form video ad
variants at scale.

🔗 **Live:** https://hypit.ai

## Tech stack

- **[Next.js 15](https://nextjs.org/)** (App Router) — statically exported (`output: "export"` → `./out`)
- **React 19** + **TypeScript**
- **[Tailwind CSS v4](https://tailwindcss.com/)** — design tokens in `app/globals.css` (`@theme`)
- **[Framer Motion](https://www.framer.com/motion/)** — animation
- Fonts via `next/font/google`: **Manrope** (content) + **JetBrains Mono** (labels/metadata)

## Getting started

Requires **Node.js 18+** and npm.

```bash
npm install
npm run dev      # http://localhost:3000
```

### Scripts

| Script          | Description                                  |
| --------------- | -------------------------------------------- |
| `npm run dev`   | Start the dev server                         |
| `npm run build` | Static export to `./out`                     |
| `npm run start` | Serve a production build                      |
| `npm run lint`  | Lint with ESLint                             |

## Project structure

```
app/                 # App Router pages
  page.tsx           # / — hero, client cases, workflow engine, CTA
  pricing/           # /pricing — plans, billing toggle, FAQ
  community/         # /community — Discord redirect page
  case-study/        # /case-study — long-form client write-up
  workflows/         # /workflows — interactive workflow canvas
  globals.css        # Tailwind v4 theme tokens
components/          # UI, grouped by section (hero, cases, workflow, pricing, …)
lib/                 # Content & data (client-cases, workflow-content, pricing, links)
public/              # Images, video, audio assets
```

Site copy and data live in `lib/` — edit `lib/client-cases.ts`, `lib/pricing.ts`,
`lib/workflow-content.ts`, and `lib/links.ts` rather than hard-coding in components.

## Media assets

Large source videos are compressed for the web before being committed to
`public/`. The uncompressed originals are kept locally under `video-originals/`
(git-ignored). Card thumbnails use lightweight `*.preview.mp4` clips; the
full-resolution version loads only when a viewer expands a card.

## Deployment

Hosted on **Netlify**, deployed from GitHub (`yw2675/hypit-site`) — pushing to
`main` triggers a build automatically.

- **Build command:** `npm run build`
- **Publish directory:** `out`
