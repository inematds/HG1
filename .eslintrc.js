module.exports = {
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['react', '@typescript-eslint'],
  rules: {
    'react/react-in-jsx-scope': 'off', // Not needed in React 18+
    '@typescript-eslint/no-explicit-any': 'error', // Enforce no 'any' type
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    'react/prop-types': 'off', // We use TypeScript for prop validation
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
  env: {
    browser: true,
    node: true,
    es2021: true,
    jest: true,
  },
  ignorePatterns: [
    'build',
    '.docusaurus',
    'node_modules',
    '*.config.js',
    '*.config.ts',
  ],
};
