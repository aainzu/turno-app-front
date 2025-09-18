/// <reference types="vitest" />
import { defineConfig } from 'vite';
import { qwikVite } from '@builder.io/qwik/optimizer';
import { qwikCity } from '@builder.io/qwik-city/vite';
import tsconfigPaths from 'vite-tsconfig-paths';

export default defineConfig(() => {
  return {
    plugins: [qwikCity(), qwikVite(), tsconfigPaths()],
    test: {
      globals: true,
      environment: 'jsdom',
      setupFiles: ['./src/test-setup.ts'],
      // Memory optimization settings
      pool: 'forks',
      poolOptions: {
        forks: {
          singleFork: true, // Use single process to reduce memory usage
          isolate: false,   // Don't isolate modules between tests
        },
      },
      // Disable coverage collection by default to save memory
      coverage: {
        enabled: false,
      },
      // Force exit after tests to prevent hanging
      forceRerunTriggers: ['**/vitest.config.*', '**/vite.config.*'],
      // Optimize file watching
      watchExclude: ['**/node_modules/**', '**/dist/**'],
    },
  };
});
