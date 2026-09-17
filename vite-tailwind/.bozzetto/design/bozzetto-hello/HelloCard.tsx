/** Props for the HelloCard demo component. */
export interface HelloCardProps {
  /** Card heading. */
  title: string;
  /** One-line supporting copy. */
  blurb: string;
  /** Short labels shown under the copy. */
  tags: string[];
  /** Label for the primary action button. */
  ctaLabel: string;
}

/**
 * Render a styled card with a heading, copy, tags, and two action buttons.
 * Tailwind v4 utilities mirror of the next-modules CSS Modules version:
 * same props, same data-design-ids, same accent variable.
 * @param props Card copy and label strings.
 * @returns The card root element.
 */
export function HelloCard({ title, blurb, tags, ctaLabel }: HelloCardProps) {
  return (
    <article
      data-design-id="hello-card"
      className="flex w-full max-w-sm flex-col gap-4 rounded-xl border p-6 shadow-sm"
      style={{ borderColor: 'var(--probe-accent)' }}
    >
      <header data-design-id="hello-card.header" className="flex items-center gap-2">
        <h2
          data-design-id="hello-card.title"
          className="text-lg font-semibold tracking-tight text-[var(--probe-accent)]"
        >
          {title}
        </h2>
        <span data-design-id="hello-card.icon" aria-hidden="true">
          ✳
        </span>
      </header>
      <p data-design-id="hello-card.blurb" className="text-sm leading-6">
        {blurb}
      </p>
      <ul data-design-id="hello-card.tags" className="flex flex-wrap gap-2">
        {tags.map((tag) => (
          <li
            key={tag}
            className="rounded-full px-2 py-1 text-xs"
            style={{ backgroundColor: 'var(--probe-accent)', color: 'white' }}
          >
            {tag}
          </li>
        ))}
      </ul>
      <div data-design-id="hello-card.actions" className="mt-1 flex items-center gap-2">
        <button
          data-design-id="hello-card.cta"
          type="button"
          className="rounded-md px-4 py-2 text-sm font-medium text-white"
          style={{ backgroundColor: 'var(--probe-accent)' }}
        >
          {ctaLabel}
        </button>
        <button
          data-design-id="hello-card.cta-secondary"
          type="button"
          className="rounded-md border px-4 py-2 text-sm font-medium"
          style={{ borderColor: 'var(--probe-accent)' }}
        >
          Learn more
        </button>
      </div>
      <p className="probe-note">Renders through the global stylesheet</p>
    </article>
  );
}
