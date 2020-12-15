import { createGlobalStyle } from 'styled-components';
import { COLORS } from './constants';

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  html {
    font-size: 14px;
    font-family: Roboto, sans-serif;
  }

  body {
    margin: 0;
    padding: 0;
    padding-top: 2rem;
    width: 100%;
    height: 100%;
    min-height: 100vh;
    color: ${COLORS.grayDarken};
    background-color: ${COLORS.backgroundColor};
  }

  #app {
    height: 100%;
    width: 100%;
    overflow: hidden;
  }

  .truncate {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .truncate-2 {
    overflow: hidden;
    text-overflow: ellipsis;

    display: -webkit-box !important;
   -webkit-line-clamp: 2; /* number of lines to show */
   -webkit-box-orient: vertical;
  }
`;

export default GlobalStyle;
