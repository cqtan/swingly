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
import EventsPage from '../../pages/events-page/events-page.component';

export const App = props => {
  const {
    setCurrentUser,
    setUsers,
    fetchEvents,
    snackbar
  } = props;

  useEffect(() => {
    setCurrentUser();
    setUsers();
    fetchEvents();
  }, [setCurrentUser, setUsers, fetchEvents]);
  
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
        <Route path="/" component={EventsPage} />
      </Switch>
    </>
  );
};

const mapStateToProps = createStructuredSelector({
  snackbar: selectSnackbarState
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
