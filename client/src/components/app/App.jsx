import React, { useEffect, lazy, Suspense } from "react";
import { connect } from "react-redux";
import { Route, Switch } from "react-router-dom";
import { GlobalStyle } from "../../global.styles";
import Background from "../../ui/background/background.component";
import Header from "../../layout/header/header.component";
import Snackbar from "../../ui/snackbar/snackbar.component";
import { setCurrentUser, setUsers } from "../../redux/user/user.actions";
import { fetchEvents } from "../../redux/events/events.actions";
import { createStructuredSelector } from "reselect";
import { selectSnackbarState } from "../../redux/snackbar/snackbar.selectors";
import { selectUserIsLoading, selectIsUsersFinishedLoading } from "../../redux/user/user.selectors";
import { selectEventsIsLoading, selectIsEventsFinishedLoading } from "../../redux/events/events.selectors";
import Spinner from "../../ui/spinner/spinner.component";
import ErrorBoundary from "../error-boundary/error-boundary.component";
const AboutPage = lazy(() => import("../../pages/about-page/about-page.component"));
// const ExampleContainer = lazy(() => import("../../pages/example-container/example-container.component"));
const Profile = lazy(() => import("../../pages/profile/profile.component"));
const EventsPage = lazy(() => import("../../pages/events-page/events-page.component"));
const EventEditPage = lazy(() => import("../../pages/event-edit-page/event-edit-page.component"));
const EventCreatePage = lazy(() => import("../../pages/event-create-page/event-create-page.component"));
const UsersPage = lazy(() => import("../../pages/users-page/users-page.component"));
const ErrorPage = lazy(() => import("../../pages/error-page/error-page.component"));

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
      <ErrorBoundary>
        <>
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
              <Suspense fallback={<Spinner isloading={true} />}>
                <Route path="/about" exact component={AboutPage} />
                <Route path="/profile" component={Profile} />
                <Route path="/event-create" exact component={EventCreatePage} />
                <Route path="/event-edit" component={EventEditPage} />
                <Route path="/events-agenda" exact component={EventsPage} />
                <Route path="/users" exact component={UsersPage} />
                <Route path="/error" exact component={ErrorPage} />              
                <Route path="/" exact component={EventsPage} />
              </Suspense>
            </Switch>
          )}
        </>
      </ErrorBoundary>
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
