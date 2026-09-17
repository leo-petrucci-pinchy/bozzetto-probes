import type { HelloCardProps } from './HelloCard';

/** Mock props shaped like the card's real data source. */
export const helloMock: HelloCardProps = {
  title: 'Design with the system, not against it',
  blurb: 'A probe card styled by Tailwind v4 utilities plus a global stylesheet.',
  tags: ['Tailwind v4', 'Vite probe', 'custom property'],
  ctaLabel: 'Get started',
};
