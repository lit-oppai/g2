import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  server: {
    port: 3000,
    open: true
  },
  resolve: {
    // alias: {
    //   '@antv/g2': resolve(__dirname, './g2-source/src'),
    //   '@antv/g2/src/shape/gauge/round': resolve(__dirname, 'patches/gauge-round.ts')
    // }
  },
  optimizeDeps: {
    include: ['@antv/g2/src']
  },
  build: {
    commonjsOptions: {
      include: [/@antv\/g2\/src/]
    }
  }
}); 