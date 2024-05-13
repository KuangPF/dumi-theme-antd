import { defineConfig } from 'father';

export default defineConfig({
  plugins: ['father-plugin-dumi-theme', './src/plugin/index.ts'],
  extraBabelPresets: ['@emotion/babel-preset-css-prop']
});
