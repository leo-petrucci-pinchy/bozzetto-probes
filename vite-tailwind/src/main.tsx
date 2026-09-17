import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { HelloCard } from '../.bozzetto/design/bozzetto-hello/HelloCard';
import { helloMock } from '../.bozzetto/design/bozzetto-hello/mock';

/** Standalone dev entry (the sandbox uses .bozzetto/design/bozzetto-hello/page.tsx). */
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <main style={{ padding: 32 }}>
      <HelloCard {...helloMock} />
    </main>
  </StrictMode>,
);
