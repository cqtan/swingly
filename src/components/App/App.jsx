import React from 'react';
import { connect } from 'react-redux';
import ExampleContainer from '../ExampleContainer/example-container.component';
import Background from '../UI/Background/background.component';
import { ThemeProvider } from 'styled-components';
import darkTheme from '../../themes/dark';
import lightTheme from '../../themes/light';
import { GlobalStyle } from '../../global.styles';

export const App = (props) => {
  const { themeMode } = props;
  return (
    <ThemeProvider theme={themeMode.darkMode ? darkTheme : lightTheme}>
      <>
        <GlobalStyle />
        <Background />
        <ExampleContainer />
      </>
    </ThemeProvider>
  );
}

const mapStateToProps = (state) => ({
  themeMode: state.themeMode
});

export default connect(mapStateToProps)(App);