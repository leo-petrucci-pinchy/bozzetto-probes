import { HelloCard } from '../designs/bozzetto-hello/HelloCard';
import { helloMock } from '../designs/bozzetto-hello/mock';

/** Homepage renders the probe card directly for visual comparison. */
export default function Home() {
  return (
    <main style={{ padding: 32 }}>
      <HelloCard {...helloMock} />
    </main>
  );
}
