import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import { Route, Switch } from 'react-router-dom';

import { GlobalStyle } from '../../global.styles';
import darkTheme from '../../themes/dark';
import lightTheme from '../../themes/light';
import theme from '../../themes/theme';
import ExampleContainer from '../../pages/example-container/example-container.component';
import Profile from '../../pages/profile/profile.component';
import Background from '../../ui/background/background.component';
import Header from '../../layout/header/header.component';
import { setCurrentUser } from '../../redux/user/user.actions';

export const App = (props) => {
  const { themeMode, setCurrentUser } = props;

  useEffect(() => {
    setCurrentUser();    
  }, [setCurrentUser]);

  return (
    <ThemeProvider theme={themeMode.darkMode ? theme(darkTheme) : theme(lightTheme)}>
      <>
        <GlobalStyle />
        <Background />
        <Header />
        <Switch>
          <Route path="/hi" exact render={() => <ExampleContainer hi/>} />
          <Route path="/profile" exact component={Profile} />
          <Route path="/" component={ExampleContainer} />
        </Switch>
      </>
    </ThemeProvider>
  );
}

const mapStateToProps = (state) => ({
  themeMode: state.themeMode
});

const mapDispatchToProps = {
  setCurrentUser
}

export default connect(mapStateToProps, mapDispatchToProps)(App);