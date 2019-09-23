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
import EventsPage from "../../pages/events-page/events-page.component";
import EventEditPage from "../../pages/event-edit-page/event-edit-page.component";
import EventCreatePage from "../../pages/event-create-page/event-create-page.component";
import UsersPage from "../../pages/users-page/users-page.component";
import { selectUserIsLoading, selectIsUsersFinishedLoading } from "../../redux/user/user.selectors";
import { selectEventsIsLoading, selectIsEventsFinishedLoading } from "../../redux/events/events.selectors";
import Spinner from "../../ui/spinner/spinner.component";

export const App = props => {
  const {
    setCurrentUser,
    setUsers,
    fetchEvents,
    snackbar,
    isLoadingUsers,
    isLoadingEvents,
    isUsersFinishedLoading,
    isEventsFinishedLoading
  } = props;

  const isLoading = isLoadingUsers || isLoadingEvents;
  const isLoaded = isUsersFinishedLoading || isEventsFinishedLoading;

  useEffect(() => {
    (async () => {
      await setCurrentUser();
      await fetchEvents();
      await setUsers();
    })();
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
      {isLoading || !isLoaded ? (
        <Spinner isLoading={true} />
      ) : (
        <Switch>
          <Route path="/about" exact render={() => <ExampleContainer hi />} />
          <Route path="/profile" component={Profile} />
          <Route path="/event-create" exact component={EventCreatePage} />
          <Route path="/event-edit" component={EventEditPage} />
          <Route path="/events-agenda" exact component={EventsPage} />
          <Route path="/users" exact component={UsersPage} />
          <Route path="/" component={EventsPage} />
        </Switch>
      )}
    </>
  );
};

const mapStateToProps = createStructuredSelector({
  snackbar: selectSnackbarState,
  isLoadingUsers: selectUserIsLoading,
  isLoadingEvents: selectEventsIsLoading,
  isUsersFinishedLoading: selectIsUsersFinishedLoading,
  isEventsFinishedLoading: selectIsEventsFinishedLoading,
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
