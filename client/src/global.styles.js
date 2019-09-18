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

    .MuiDialog-paper {
      -webkit-overflow-scrolling: auto;
    }

    .MuiPickersToolbar-toolbar,
    .MuiPickerDTTabs-tabs {
      background-color: ${props => props.theme.type === 'dark' ? props.theme.background.layer1 : props.theme.palette.primary.main};
      color: ${props => props.theme.type === 'dark' && props.theme.palette.text.primary};
    }

    .MuiTabs-indicator {
      background-color: ${props => props.theme.type === 'dark' ? props.theme.palette.primary.main : props.theme.palette.grey[1]};
    }

    .MuiPickersClockPointer-pointer,
    .MuiPickersClock-pin,
    .MuiPickersClockPointer-noPoint {
      background-color: ${props => props.theme.palette.primary.main};
    }

    .MuiPickersClockPointer-thumb {
      border: 14px solid ${props => props.theme.palette.primary.main};
    }

    .MuiPickersDay-daySelected {
      background-color: ${props => props.theme.palette.primary.main};
      color: ${props => props.theme.palette.grey[1]};
    }

    .MuiTypography-body1 {
      font-size: 1.5rem;
      font-family: 'Lato', 'Roboto', 'Arial', sans-serif;
    }

    .MuiTypography-body2,
    .MuiTypography-caption {
      font-size: 1rem;
      font-family: 'Lato', 'Roboto', 'Arial', sans-serif;
    }

    .MuiButton-textPrimary {
      color: ${props => props.theme.palette.grey[1]};
      font-size: 1.5rem;
    }

    .MuiSvgIcon-root {
      width: 2rem;
      height: 2rem;
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