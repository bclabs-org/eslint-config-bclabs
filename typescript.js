module.exports = {
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  extends: [
    './recommends/base',
    './rules/typescript',
    './rules/es6',
    './rules/best-practices',
    './rules/imports',
    './rules/react',
    './rules/react-hooks',
  ].map((e) => require.resolve(e)),
  env: {
    node: true,
    browser: true,
  },
  parserOptions: {
    ecmaVersion: 2019,
    project: 'tsconfig.json',
    sourceType: 'module',
  },
  rules: {},
};
