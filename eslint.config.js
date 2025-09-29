import importPlugin from 'eslint-plugin-import';
import prettierPlugin from 'eslint-plugin-prettier';
import tseslint from '@typescript-eslint/eslint-plugin';
import tsparser from '@typescript-eslint/parser';
import unusedImports from 'eslint-plugin-unused-imports';

export default [
  {
    files: ['src/**/*.ts'],
    languageOptions: {
      parser: tsparser,
      parserOptions: {
        project: './tsconfig.json',
        tsconfigRootDir: import.meta.dirname,
        sourceType: 'module',
      },
    },
    plugins: {
      '@typescript-eslint': tseslint,
      'import': importPlugin,
      'unused-imports': unusedImports,
      'prettier': prettierPlugin,
    },
    rules: {
      // --- Arrow functions ---
      'arrow-body-style': ['error', 'as-needed'],

      // --- Imports ---
      'unused-imports/no-unused-imports': 'error',
      'import/order': [
        'error',
        {
          'groups': ['builtin', 'external', 'internal'],
          'newlines-between': 'always',
        },
      ],

      // --- Misc ---
      'no-console': 'warn',

      // --- TypeScript rules (similaire à recommended) ---
      '@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
      '@typescript-eslint/explicit-function-return-type': 'off',
    },
  },
];
