import eslint from '@bruhabruh/eslint-config';

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
  eslint.configs.json.recommended,
  eslint.configs.prettier.recommended,
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
