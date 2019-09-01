import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectIsDarkMode } from '../redux/theme-mode/theme-mode.selectors';
import { ThemeProvider } from "styled-components";
import darkTheme from './dark';
import lightTheme from './light';
import theme from './theme';

export const ThemeManager = (props) => {
  const { children, isDarkMode } = props;

  return (
    <ThemeProvider theme={isDarkMode ? theme(darkTheme) : theme(lightTheme)}>
      {children}
    </ThemeProvider>
  );
}

const mapStateToProps = createStructuredSelector({
  isDarkMode: selectIsDarkMode,
});

export default connect(mapStateToProps)(ThemeManager);

