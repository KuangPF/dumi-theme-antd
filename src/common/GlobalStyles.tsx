import React from 'react';
import { Common, Highlight, Markdown, Reset, Responsive } from './styles';

const GlobalStyles = () => (
  <React.Fragment>
    <Reset />
    <Common />
    <Markdown />
    <Highlight />
    <Responsive />
  </React.Fragment>
);

export default GlobalStyles;
