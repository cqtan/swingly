import React from 'react';
import { ThemeProvider } from 'styled-components';
import { connect } from 'react-redux';
import darkTheme from './themes/dark';
import lightTheme from './themes/light';
import ExampleContainer from './components/ExampleContainer/example-container.component';

export const App = (props) => {
  const { themeMode } = props;

  return (
    <>
      <ThemeProvider theme={themeMode.darkMode ? darkTheme : lightTheme}>
        <ExampleContainer />
      </ThemeProvider>
    </>
  );
}

const mapStateToProps = (state) => ({
  themeMode: state.themeMode
});

export default connect(mapStateToProps)(App);