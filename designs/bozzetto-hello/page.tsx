import { createRoot } from 'react-dom/client';
import { HelloCard } from './HelloCard';
import { helloMock } from './mock';

export function mount(container: HTMLElement) {
  const root = createRoot(container);
  root.render(<HelloCard {...helloMock} />);
  return root;
}
