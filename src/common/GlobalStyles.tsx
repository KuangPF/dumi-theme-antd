import React from 'react';
import {
  Common,
  DumiDefaultStyleOverride,
  HeadingAnchor,
  Highlight,
  Markdown,
  Reset,
  Responsive,
  SearchBar
} from './styles';

const GlobalStyles = () => (
  <React.Fragment>
    <Reset />
    <Common />
    <Markdown />
    <Highlight />
    <Responsive />
    <HeadingAnchor />
    <SearchBar />
    <DumiDefaultStyleOverride />
  </React.Fragment>
);

export default GlobalStyles;
