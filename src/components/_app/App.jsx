import React from 'react';
import { connect } from 'react-redux';
import ExampleContainer from '../example-container/example-container.component';
import Background from '../_ui/_background/background.component';
import { ThemeProvider } from 'styled-components';
import darkTheme from '../../themes/dark';
import lightTheme from '../../themes/light';
import theme from '../../themes/theme';
import { GlobalStyle } from '../../global.styles';
import Header from '../layout/header/header.component';

export const App = (props) => {
  const { themeMode } = props;
  return (
    <ThemeProvider theme={themeMode.darkMode ? theme(darkTheme) : theme(lightTheme)}>
      <>
        <GlobalStyle />
        <Background />
        <Header />
        <ExampleContainer />
      </>
    </ThemeProvider>
  );
}

const mapStateToProps = (state) => ({
  themeMode: state.themeMode
});

export default connect(mapStateToProps)(App);