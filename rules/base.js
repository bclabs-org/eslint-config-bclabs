module.exports = {
  extends: [
    './best-practices',
    './es6',
    './imports',
    './react',
    './react-hooks',
    './prettier',
    './style'
  ].map((e) => require.resolve(e)),
};
