# Probe: Vite + Tailwind v4

Vite 6 + React 19.2 + Tailwind v4 mirror of the HelloCard. Same props and
`data-design-id`s as `next-modules/`; styling is utilities plus
`src/index.css` (`--probe-accent` var, `.probe-note`, `.dark` override).

`.bozzetto/config.ts` declares `tailwind({ entry: "src/index.css" })`.

Standalone: `npm install && npm run dev`. Sandbox entry:
`.bozzetto/design/bozzetto-hello/page.tsx` (`mount`).
