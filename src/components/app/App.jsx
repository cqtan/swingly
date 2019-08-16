import React from 'react';
import { connect } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import { Route, Switch } from 'react-router-dom';

import { GlobalStyle } from '../../global.styles';
import darkTheme from '../../themes/dark';
import lightTheme from '../../themes/light';
import theme from '../../themes/theme';
import ExampleContainer from '../example-container/example-container.component';
import Background from '../ui/background/background.component';
import Header from '../layout/header/header.component';

export const App = (props) => {
  const { themeMode } = props;
  return (
    <ThemeProvider theme={themeMode.darkMode ? theme(darkTheme) : theme(lightTheme)}>
      <>
        <GlobalStyle />
        <Background />
        <Header />
        <Switch>
          <Route path="/" exact component={ExampleContainer} />
        </Switch>
        {/* <ExampleContainer /> */}
      </>
    </ThemeProvider>
  );
}

const mapStateToProps = (state) => ({
  themeMode: state.themeMode
});

export default connect(mapStateToProps)(App);