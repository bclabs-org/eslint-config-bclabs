module.exports = {
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  extends: [
    './recommends/base',
    './rules/base',
    './rules/typescript',
  ].map((e) => require.resolve(e)),
  env: {
    node: true,
    browser: true,
  },
  parserOptions: {
    ecmaVersion: 2019,
    sourceType: 'module',
  },
  rules: {},
};
