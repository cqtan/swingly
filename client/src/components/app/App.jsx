import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Route, Switch } from "react-router-dom";
import { GlobalStyle } from "../../global.styles";
import ExampleContainer from "../../pages/example-container/example-container.component";
import Profile from "../../pages/profile/profile.component";
import Background from "../../ui/background/background.component";
import Header from "../../layout/header/header.component";
import Snackbar from "../../ui/snackbar/snackbar.component";
import { setCurrentUser, setUsers } from "../../redux/user/user.actions";
import { fetchEvents } from "../../redux/events/events.actions";
import { createStructuredSelector } from "reselect";
import { selectSnackbarState } from "../../redux/snackbar/snackbar.selectors";
import { selectAllEvents } from "../../redux/events/events.selectors";

export const App = props => {
  const {
    setCurrentUser,
    setUsers,
    events,
    fetchEvents,
    snackbar
  } = props;

  useEffect(() => {
    setCurrentUser();
    setUsers();
    fetchEvents();
  }, [setCurrentUser, setUsers, fetchEvents]);

  if (events !== undefined && Object.keys(events).length) {
    console.log('events: ', events);
  }
  
  return (
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
  );
};

const mapStateToProps = createStructuredSelector({
  snackbar: selectSnackbarState,
  events: selectAllEvents
});

const mapDispatchToProps = {
  setCurrentUser,
  setUsers,
  fetchEvents
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
