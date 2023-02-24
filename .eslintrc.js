module.exports = {
  extends: ['@utopia/eslint-config-react', '@utopia/eslint-config-react/hooks'],
  rules: {
    'react/react-in-jsx-scope': 0,
    'react/jsx-fragments': 0,
    'react/no-unknown-property': ['error', { ignore: ['css'] }],
    'react/no-danger': 0,
    'object-curly-newline': 0,
    'jsx-a11y/click-events-have-key-events': 0,
    'jsx-a11y/no-static-element-interactions': 0,
    'implicit-arrow-linebreak': 0,
    'react/no-array-index-key': 0,
    'global-require': 0,
    indent: 0
  },
  globals: {
    window: true
  },
  env: {
    browser: true,
    node: true,
    jasmine: true,
    jest: true,
    es6: true
  }
};
