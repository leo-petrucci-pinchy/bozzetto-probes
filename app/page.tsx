import { HelloCard } from '../.bozzetto/design/bozzetto-hello/HelloCard';
import { helloMock } from '../.bozzetto/design/bozzetto-hello/mock';

/** Homepage renders the probe card directly for visual comparison. */
export default function Home() {
  return (
    <main style={{ padding: 32 }}>
      <HelloCard {...helloMock} />
    </main>
  );
}
