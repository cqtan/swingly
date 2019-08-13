import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  body {
    padding: 20px 60px;
    font-family: 'Lato', 'Roboto', 'Arial', sans-serif;

    @media screen and (max-width: 800px) {
      padding: 10px;
    }
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New",
    monospace;
  }

  button {
    font-size: 30px;
  }

  a {
    text-decoration: none;
  }

  * {
    box-sizing: border-box;
  }
`;