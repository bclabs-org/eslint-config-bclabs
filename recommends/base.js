module.exports = {
  extends: [
    './eslint-config-airbnb-base/best-practices',
    './eslint-config-airbnb-base/errors',
    './eslint-config-airbnb-base/es6',
    './eslint-config-airbnb-base/imports',
    './eslint-config-airbnb-base/node',
    './eslint-config-airbnb-base/style',
    './eslint-config-airbnb-base/variables',
  ].map((e) => require.resolve(e)),
};