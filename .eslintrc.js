module.exports = {
  extends: require.resolve('@umijs/lint/dist/config/eslint'),
  rules: {
    '@typescript-eslint/no-non-null-asserted-optional-chain': 'off',
  },
};
