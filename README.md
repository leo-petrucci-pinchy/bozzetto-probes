# Bozzetto probes

One self-contained probe per frontend stack. The Bozzetto renderer never
installs or runs these — it reads files into its sandbox. Pick a subfolder
in the loader (root-pick with a chooser comes later).

- `next-modules/` — Next 15 + React 19 + CSS Modules + plain global CSS, no
  Tailwind. Declares `staticCss`. Standalone: `npm install && npm run dev`.
- `vite-tailwind/` — Vite 6 + React 19 + Tailwind v4. Declares `tailwind()`.
  Standalone: `npm install && npm run dev`.

Each probe renders the same HelloCard (same props, same `data-design-id`s)
from its `.bozzetto/design/bozzetto-hello/` entry, so sandbox output can be
compared stack-vs-stack. Each folder stands alone — never install at root.
