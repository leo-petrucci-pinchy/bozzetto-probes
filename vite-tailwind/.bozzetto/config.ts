import { tailwind } from 'https://dev.petruc.ci/static/helpers/v0/bozzetto-helpers.mjs';

/** Bozzetto config: Tailwind v4 entry plus the design entry point. */
export default {
  entry: '/.bozzetto/design/bozzetto-hello/page.tsx',
  css: tailwind({ entry: 'src/index.css' }),
};
