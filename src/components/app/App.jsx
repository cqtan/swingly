import React from 'react';
import { connect } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import { Route, Switch } from 'react-router-dom';

import { GlobalStyle } from '../../global.styles';
import darkTheme from '../../themes/dark';
import lightTheme from '../../themes/light';
import theme from '../../themes/theme';
import ExampleContainer from '../example-container/example-container.component';
import Background from '../../ui/background/background.component';
import Header from '../../layout/header/header.component';
import SignIn from '../sign-in/sign-in.component';

export const App = (props) => {
  const { themeMode } = props;
  return (
    <ThemeProvider theme={themeMode.darkMode ? theme(darkTheme) : theme(lightTheme)}>
      <>
        <GlobalStyle />
        <Background />
        <Header />
        <Switch>
          <Route path="/hi" exact render={() => <ExampleContainer hi/>} />
          <Route path="/" component={SignIn} />
        </Switch>
      </>
    </ThemeProvider>
  );
}

const mapStateToProps = (state) => ({
  themeMode: state.themeMode
});

export default connect(mapStateToProps)(App);