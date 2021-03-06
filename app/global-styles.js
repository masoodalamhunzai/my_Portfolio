import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  html,
  body {
    height: 100%;
    width: 100%;
  }

  body {
    font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
  }

  body.fontLoaded {
    font-family: 'Open Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  }

  #app {
    background-color: #fafafa;
    min-height: 100%;
    min-width: 100%;
  }

  p,
  label {
    font-family: Georgia, Times, 'Times New Roman', serif;
    line-height: 1.5em;
  }
  .text-center{
    text-align:center;
  }
  h3 {
      font-size: 2rem;
      font-weight: bold;
      text-transform: uppercase;
    }
  @media (max-width: 576px) {
    h3 {
      font-size: 1.1rem !important;
    }
  }
`;

export default GlobalStyle;
