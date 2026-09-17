import { createRoot } from 'react-dom/client';
import { HelloCard } from './HelloCard';
import { helloMock } from './mock';

/**
 * Mount the demo card into a container and return its React root.
 * Sandbox entry point (see .bozzetto/config.ts).
 * @param container Element that receives the card.
 * @returns The created React root.
 */
export function mount(container: HTMLElement) {
  const root = createRoot(container);
  root.render(<HelloCard {...helloMock} />);
  return root;
}
