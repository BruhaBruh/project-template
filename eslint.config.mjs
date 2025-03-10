import eslint from '@bruhabruh/eslint-config';
import globals from 'globals';

export default eslint.build(
  {
    name: '@bruhabruh/theme/global-ignore',
    ignores: [
      'node_modules',
      'dist',
      'build',
      '.git',
      '.husky',
      '.vinxi',
      '.output',
    ],
  },
  ...eslint.configs.base.recommended,
  ...eslint.configs.react.recommended,
  {
    ...eslint.configs.importOrder.recommended,
    languageOptions: {
      ...eslint.configs.importOrder.recommended.languageOptions,
      globals: {
        ...Object.assign({}, globals.browser, {
          AudioWorkletGlobalScope:
            globals.browser['AudioWorkletGlobalScope '] || 'readonly',
        }),
      },
    },
  },
  eslint.configs.json.recommended,
  eslint.configs.prettier.recommended,
  eslint.configs.tailwind.recommended,
  {
    name: '@bruhabruh/type-imports',
    files: ['**/*.{ts,tsx}'],
    rules: {
      '@typescript-eslint/consistent-type-imports': 'error',
    },
  },
  {
    name: '@bruhabruh/type-safe',
    rules: {
      'new-cap': [
        'error',
        { capIsNewExceptions: ['Some', 'None', 'Ok', 'Err'] },
      ],
    },
  },
);
