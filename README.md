# bozzetto-probe-next

Bozzetto M1.1 probe repo #2: a minimal probe of the Next 15 + React 19 stack.

Stack: Next 15.1.6, React 19.2.8, TypeScript — CSS Modules plus plain global CSS, no Tailwind.

Entry: `designs/bozzetto-hello/page.tsx` exports `mount(container)` for client-side rendering.

No Tailwind by design: styling relies on CSS Modules and the global `--probe-accent` custom property.
