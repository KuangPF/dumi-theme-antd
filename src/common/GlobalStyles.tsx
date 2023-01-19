import React from 'react';
import { Common, HeadingAnchor, Highlight, Markdown, Reset, Responsive } from './styles';

const GlobalStyles = () => (
  <React.Fragment>
    <Reset />
    <Common />
    <Markdown />
    <Highlight />
    <Responsive />
    <HeadingAnchor />
  </React.Fragment>
);

export default GlobalStyles;
