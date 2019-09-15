import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
    font-size: 62.5%;
  }

  body {
    font-family: 'Lato', 'Roboto', 'Arial', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;

    .MuiPickersToolbar-toolbar {
      background-color: ${props => props.theme.palette.primary.main};
    }
  }

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New",
    monospace;
  }

  button {
    border: none;
    cursor: pointer;
  }

  a {
    text-decoration: none;
    color: ${props => props.theme.palette.text.primary};
  }

  * {
    margin: 0;
    padding: 0;

    overflow-wrap: break-word;
    word-wrap: break-word;
    word-break: break-word;
    hyphens: auto;
  }

  *,
  *::before,
  *::after {
      box-sizing: inherit;
  }

  *:focus {
    outline: 0;
  }

  input:-webkit-autofill,
  input:-webkit-autofill:hover,
  input:-webkit-autofill:focus,
  input:-webkit-autofill:active {
    transition: background-color 5000s ease-in-out 5000s,
                color 5000s ease-in-out 5000s;
  }

  
`;