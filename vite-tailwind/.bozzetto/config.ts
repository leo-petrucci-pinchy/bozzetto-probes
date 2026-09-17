import { tailwind } from 'bozzetto/helpers';

/** Bozzetto config: Tailwind v4 entry plus the design entry point. */
export default {
  entry: '/.bozzetto/design/bozzetto-hello/page.tsx',
  css: tailwind({ entry: 'src/index.css' }),
};
