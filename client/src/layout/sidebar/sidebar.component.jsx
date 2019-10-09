import React from "react";
import {
  SidebarContainer,
  SidebarHeader,
  SidebarButton
} from "./sidebar.styles";
import { connect } from "react-redux";
import { compose } from "redux";
import { Link, withRouter } from "react-router-dom";
import Backdrop from "../../ui/backdrop/backdrop.component";
import { toggleTheme } from "../../redux/theme-mode/theme-mode.actions";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { createStructuredSelector } from "reselect";
import { selectIsDarkMode } from "../../redux/theme-mode/theme-mode.selectors";
import { selectCurrentUser } from "../../redux/user/user.selectors";
import { openSnackbar } from "../../redux/snackbar/snackbar.actions";

export const Sidebar = props => {
  const {
    isOpen,
    setOpen,
    toggleTheme,
    isDarkMode,
    currentUser,
    openSnackbar,
    history
  } = props;

  const homeRoute = "/";
  const createEventRoute = "/event-create";
  const usersRoute = "/users";
  const aboutRoute = "/about";
  const errorRoute = "/error";

  const toggleThemeIcon = isDarkMode ? (
    <FontAwesomeIcon icon="sun" />
  ) : (
    <FontAwesomeIcon icon="moon" />
  );

  const toggleThemeText = isDarkMode ? "Light Mode" : "Dark Mode";

  const handleToggleTheme = () => {
    toggleTheme();
    setOpen(false);
  };

  const handleLinkClick = () => {
    if (!currentUser) {
      openSnackbar("info", "Please sign in to use this feature");
    }
    setOpen(false);
  };

  return (
    <>
      <Backdrop onClick={() => setOpen(false)} isOpen={isOpen} data-testid="backdrop" />
      <SidebarContainer isOpen={isOpen} data-testid="sidebar-container">
        <SidebarHeader>Navigation</SidebarHeader>
        <SidebarButton
          isactive={(history.location.pathname === homeRoute).toString()}
          onClick={() => setOpen(false)}
          as={Link}
          to={homeRoute}
        >
          <FontAwesomeIcon icon="calendar-week" />
          All Events
        </SidebarButton>
        <SidebarButton
          isactive={(history.location.pathname === createEventRoute).toString()}
          onClick={handleLinkClick}
          as={Link}
          to={currentUser ? createEventRoute : history.location.pathname}
          data-testid="create-event"
        >
          <FontAwesomeIcon icon="calendar-plus" />
          Create Event
        </SidebarButton>
        <SidebarButton
          isactive={(history.location.pathname === usersRoute).toString()}
          onClick={handleLinkClick}
          as={Link}
          to={currentUser ? usersRoute : history.location.pathname}
        >
          <FontAwesomeIcon icon="users" />
          Users
        </SidebarButton>
        <SidebarButton
          isactive={(history.location.pathname === aboutRoute).toString()}
          onClick={() => setOpen(false)}
          as={Link}
          to={aboutRoute}
        >
          <FontAwesomeIcon icon="info-circle" />
          About
        </SidebarButton>
        <SidebarButton onClick={() => setOpen(false)} as={Link} to={errorRoute}>
          <FontAwesomeIcon icon="exclamation-triangle" />
          Error Page
        </SidebarButton>
        <SidebarButton onClick={handleToggleTheme} transparent flat>
          {toggleThemeIcon}
          {toggleThemeText}
        </SidebarButton>
      </SidebarContainer>
    </>
  );
};

const mapStateToProps = createStructuredSelector({
  isDarkMode: selectIsDarkMode,
  currentUser: selectCurrentUser
});

const mapDispatchToProps = {
  toggleTheme,
  openSnackbar
};

export default compose(
  withRouter,
  connect(
    mapStateToProps,
    mapDispatchToProps
  )
)(Sidebar);