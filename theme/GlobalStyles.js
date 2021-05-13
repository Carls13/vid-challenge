import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
 @font-face {
    font-family: "Ttnorms";
    src: url("/TT-Norms-Fonts/TTNorms-Light.otf");
    font-style: normal;
    font-weight: 300;
    font-display: swap;
  }

  @font-face {
    font-family: "Ttnorms";
    src: url("/TT-Norms-Fonts/TTNorms-Medium.otf");
    font-style: normal;
    font-weight: 400;
    font-display: swap;
  }

  @font-face {
    font-family: "Ttnorms";
    src: url("/TT-Norms-Fonts/TTNorms-Bold.otf");
    font-style: normal;
    font-weight: 600;
    font-display: swap;
  }

  html {
    box-sizing: border-box;
    overflow-x: hidden;
    scroll-behavior: smooth;
  }

  body {
    margin: 0;
    font-family: Ttnorms, 'sans-serif';
  }

  *, *:before, *:after {
    box-sizing: inherit;
  }

  span {
    font-family: Ttnorms, 'sans-serif';
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: Ttnorms, 'sans-serif';
    font-weight: 600;
    margin: 0;
    padding: 0;
  }

  button, input {
    font-family: Ttnorms, 'sans-serif';
    font-weight: 300;
  }

  button {
    cursor: pointer;

    :hover {
      filter: brightness(0.9);
    }

    :focus {
      outline: none;
    }
  }

  a {
    cursor: pointer;
    color: unset;
    text-decoration: none;
  }

  input, textarea { 
    outline: none;
    }
`;