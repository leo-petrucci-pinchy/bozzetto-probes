import styles from './Card.module.css';

export interface HelloCardProps {
  title: string;
  blurb: string;
  tags: string[];
  ctaLabel: string;
}

export function HelloCard({ title, blurb, tags, ctaLabel }: HelloCardProps) {
  return (
    <article
      data-design-id="hello-card"
      style={{ borderColor: 'var(--probe-accent)' }}
    >
      <header data-design-id="hello-card.header">
        <h2 data-design-id="hello-card.title" className={styles.title}>
          {title}
        </h2>
        <span data-design-id="hello-card.icon" aria-hidden="true">
          ✳
        </span>
      </header>
      <p data-design-id="hello-card.blurb" className={styles.body}>
        {blurb}
      </p>
      <ul data-design-id="hello-card.tags">
        {tags.map((tag) => (
          <li key={tag}>{tag}</li>
        ))}
      </ul>
      <div data-design-id="hello-card.actions">
        <button data-design-id="hello-card.cta" type="button">
          {ctaLabel}
        </button>
        <button data-design-id="hello-card.cta-secondary" type="button">
          Learn more
        </button>
      </div>
      <p className="probe-note">Renders through the global stylesheet</p>
    </article>
  );
}
