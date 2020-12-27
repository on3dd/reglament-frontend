import { createGlobalStyle } from 'styled-components';

type GlobalStyleProps = {
  fontSize: number;
  lineHeight: number;
};

const GlobalStyle = createGlobalStyle<GlobalStyleProps>`
  * {
    box-sizing: border-box;
  }

  html {
    font-family: Roboto, sans-serif;
    font-size: ${(props) => `${props.fontSize}px`};
    line-height: ${(props) => `${props.lineHeight}rem`};
  }

  body {
    margin: 0;
    padding: 0;
    width: 100%;
    height: 100%;
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
