import { defineConfig } from 'vite';
import viteReact from '@vitejs/plugin-react';
import viteTsConfigPaths from 'vite-tsconfig-paths';

import { TanStackRouterVite } from '@tanstack/router-plugin/vite';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    // eslint-disable-next-line new-cap
    TanStackRouterVite({ autoCodeSplitting: true }),
    viteReact(),
    viteTsConfigPaths({
      projects: ['./tsconfig.json'],
    }),
  ],
  test: {
    globals: true,
    environment: 'jsdom',
  },
});
