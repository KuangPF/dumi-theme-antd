import { defineConfig } from 'father';

export default defineConfig({
  plugins: ['father-plugin-dumi-theme'],
  extraBabelPresets: ['@emotion/babel-preset-css-prop'],
});
