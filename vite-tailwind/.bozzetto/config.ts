import { tailwind } from 'https://dev.petruc.ci/static/helpers/v0/bozzetto-helpers.mjs';

/** Bozzetto config: Tailwind v4 entry plus the design entry point. */
export default {
  entry: '/.bozzetto/design/bozzetto-hello/page.tsx',
  css: tailwind({ entry: 'src/index.css', fonts: [{ src: 'public/fonts/SpaceGrotesk-Regular.woff2', family: 'Space Grotesk', weight: '400', style: 'normal', display: 'swap' }, { src: 'public/fonts/SpaceGrotesk-Regular.woff2', family: 'Space Grotesk', weight: '700', style: 'normal', display: 'swap' }] }),
};
