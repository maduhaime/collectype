import { defineConfig } from 'vitest/config';
import { fileURLToPath, URL } from 'node:url';

export default defineConfig({
  resolve: {
    alias: {
      collectype: fileURLToPath(new URL('./src/index.ts', import.meta.url)),
    },
  },
  test: {
    environment: 'node',
    include: ['src/**/*.spec.ts', 'src/**/*.test.ts', 'sample/**/*.spec.ts', 'tests/**/*.spec.ts'],
    exclude: ['dist/**'],
    coverage: {
      exclude: [
        '**/index.ts', // Index files
        '**/*.config.ts', // Configuration files
        '**/*.d.ts', // Type definitions
        'dist/**', // Distribution files
        'sample/**', // Sample files
        'src/enums/**', // Enumerations
        'src/interfaces/**', // Interfaces
        'src/types/**', // Types
      ],
    },
  },
});
