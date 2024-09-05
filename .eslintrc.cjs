module.exports = {
  root: true,
  env: {
    node: true,
    browser: true,
    es2021: true,
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  plugins: [
    'react',
    'react-hooks',
    '@typescript-eslint',
    'react-refresh',
    'import',
  ],
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
    'eslint-config-prettier',
  ],
  rules: {
    'react/no-unescaped-entities': 'off', // Ignore the no unescaped characters rule
  },
  ignorePatterns: ['dist', 'node_modules', '.eslintrc.cjs', 'eslint.config.js'],
  globals: {
    Edit: 'writable',
    console: 'writable',
    _: 'writable',
    $: 'writable',
  },
};
