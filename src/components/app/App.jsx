import React, { useEffect } from "react";
import { connect } from "react-redux";
import { ThemeProvider } from "styled-components";
import { Route, Switch } from "react-router-dom";

import { GlobalStyle } from "../../global.styles";
import darkTheme from "../../themes/dark";
import lightTheme from "../../themes/light";
import theme from "../../themes/theme";
import ExampleContainer from "../../pages/example-container/example-container.component";
import Profile from "../../pages/profile/profile.component";
import Background from "../../ui/background/background.component";
import Header from "../../layout/header/header.component";
import Snackbar from "../../ui/snackbar/snackbar.component";
import { setCurrentUser } from "../../redux/user/user.actions";
import { fetchEvents } from "../../redux/events/events.actions";
import { createStructuredSelector } from "reselect";
import { selectIsDarkMode } from "../../redux/theme-mode/theme-mode.selectors";
import { selectSnackbarState } from "../../redux/snackbar/snackbar.selectors";
import { selectAllEvents } from "../../redux/events/events.selectors";

export const App = props => {
  const {
    isDarkMode,
    setCurrentUser,
    events,
    fetchEvents,
    snackbar
  } = props;

  useEffect(() => {
    setCurrentUser();
    fetchEvents();
  }, [setCurrentUser, fetchEvents]);

  if (Object.keys(events).length) {
    console.log('events: ', events);
  }
  
  return (
    <ThemeProvider theme={isDarkMode ? theme(darkTheme) : theme(lightTheme)}>
      <>
        <GlobalStyle />
        <Background />
        <Header />
        <Snackbar
          duration={3500}
          type={snackbar.type}
          text={snackbar.text}
          isOpen={snackbar.isOpen}
        />
        <Switch>
          <Route path="/hi" exact render={() => <ExampleContainer hi />} />
          <Route path="/profile" exact component={Profile} />
          <Route path="/" component={ExampleContainer} />
        </Switch>
      </>
    </ThemeProvider>
  );
};

const mapStateToProps = createStructuredSelector({
  isDarkMode: selectIsDarkMode,
  snackbar: selectSnackbarState,
  events: selectAllEvents
});

const mapDispatchToProps = {
  setCurrentUser,
  fetchEvents
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
