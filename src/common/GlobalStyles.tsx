import React from 'react';
import { Common, HeadingAnchor, Highlight, Markdown, Reset, Responsive, SearchBar } from './styles';

const GlobalStyles = () => (
  <React.Fragment>
    <Reset />
    <Common />
    <Markdown />
    <Highlight />
    <Responsive />
    <HeadingAnchor />
    <SearchBar />
  </React.Fragment>
);

export default GlobalStyles;
