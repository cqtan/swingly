import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'Lato', 'Roboto', 'Arial', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New",
    monospace;
  }

  button {
    font-size: 30px;
    border: none;
  }

  a {
    text-decoration: none;
  }

  * {
    margin: 0;
    padding: 0;
  }

  *,
  *::before,
  *::after {
      box-sizing: inherit;
  }
`;