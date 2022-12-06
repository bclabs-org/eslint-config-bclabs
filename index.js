module.exports = {
  extends: [
    './recommends/base',
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
    sourceType: 'module'
  },
  rules: {}
}
