import React from 'react';
import { Common, Highlight, Markdown, Reset } from './styles';

const GlobalStyles = () => (
  <React.Fragment>
    <Reset />
    <Common />
    <Markdown />
    <Highlight />
  </React.Fragment>
);

export default GlobalStyles;
