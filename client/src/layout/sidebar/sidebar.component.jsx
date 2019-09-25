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

  const toggleThemeIcon = isDarkMode ? (
    <FontAwesomeIcon icon="sun" />
  ) : (
    <FontAwesomeIcon icon="moon" />
  );

  const toggleThemeText = isDarkMode ? "Light Mode" : "Dark Mode";

  const handleToggleTheme = () => {
    toggleTheme();
    setOpen(false);
  }

  const handleLinkClick = () => {
    if (!currentUser) {
      openSnackbar('info', 'Please sign in to use this feature');
    }
    setOpen(false);
  }

  return (
    <>
      <Backdrop onClick={() => setOpen(false)} isOpen={isOpen} />
      <SidebarContainer isOpen={isOpen}>
        <SidebarHeader>Navigation</SidebarHeader>
        <SidebarButton
          onClick={() => setOpen(false)}
          as={Link}
          to="/"
        >
          <FontAwesomeIcon icon="calendar-week" />
          Agenda View
        </SidebarButton>
        <SidebarButton
          onClick={() => handleLinkClick()}
          as={Link}
          to={currentUser ? '/event-create' : history.location.pathname}
        >
          <FontAwesomeIcon icon="calendar-plus" />
          Create Event
        </SidebarButton>
        <SidebarButton onClick={() => setOpen(false)} as={Link} to="/users">
          <FontAwesomeIcon icon="users" />
          Users
        </SidebarButton>
        <SidebarButton onClick={() => setOpen(false)} as={Link} to="/about">
          <FontAwesomeIcon icon="info-circle" />
          About
        </SidebarButton>
        <SidebarButton onClick={() => setOpen(false)} as={Link} to="/error">
          <FontAwesomeIcon icon="exclamation-circle" />
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
