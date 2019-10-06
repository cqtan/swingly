import React, { useState } from "react";
import { FabContainer, FabSubContainer, FabMain, FabSub } from "./fab.styles";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import Backdrop from "../../ui/backdrop/backdrop.component";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { CSSTransition } from "react-transition-group";
import { selectGuestFilter } from "../../redux/events/events.selectors";
import { setGuestFilter } from "../../redux/events/events.actions";
import {
  selectCurrentUser,
  selectHasActiveFollowedUser,
  selectFollowedUsersList
} from "../../redux/user/user.selectors";
import { openSnackbar } from "../../redux/snackbar/snackbar.actions";
import UsersModal from "../users-components/users-modal/users-modal.component";
import FabHelper from "./fab-helper/fab-helper.component";

const Fab = props => {
  const {
    isOpen,
    setFabOpen,
    guestFilter,
    setGuestFilter,
    currentUser,
    openSnackbar,
    users,
    hasActiveFollowedUser
  } = props;

  const [isUserModalOpen, setUserModalOpen] = useState(false);
  const [isHelperOpen, setHelperOpen] = useState(false);

  const subtitleText = "Display events depending if the users you have followed are either enabled or disabled here";

  const handleGuestFilterClick = filter => {
    setGuestFilter(filter);
    closeFab();
  };

  const handleCalendarDayClick = () => {
    const isTodayEvents = document.getElementsByClassName("isToday");
    if (isTodayEvents.length) {
      isTodayEvents[0].scrollIntoView({ behavior: "smooth", block: "center" });
    } else {
      openSnackbar("info", "No events today with given filter");
    }

    closeFab();
  };

  const handleHostFilter = () => {
    setUserModalOpen(true);
    closeFab();
  };

  const closeFab = () => {
    setFabOpen(false);
    setHelperOpen(false);
  }

  const fabSubData = {
    interested: {
      icon: <FontAwesomeIcon icon="star" />,
      func: () => handleGuestFilterClick("interested"),
      isSelected: guestFilter.includes("interested") ? true : false,
      isRendered: currentUser ? true : false
    },
    going: {
      icon: <FontAwesomeIcon icon="check" />,
      func: () => handleGuestFilterClick("going"),
      isSelected: guestFilter.includes("going") ? true : false,
      isRendered: currentUser ? true : false
    },
    userFilter: {
      icon: <FontAwesomeIcon icon="users" />,
      func: handleHostFilter,
      isSelected: hasActiveFollowedUser,
      isRendered: currentUser ? true : false
    },
    today: {
      icon: <FontAwesomeIcon icon="calendar-day" />,
      func: handleCalendarDayClick,
      isSelected: false,
      isRendered: true
    },
    helper: {
      icon: <FontAwesomeIcon icon="question" />,
      func: () => setHelperOpen(!isHelperOpen),
      isSelected: isHelperOpen,
      isRendered: true
    }
  };

  const FabSubs = Object.entries(fabSubData).reduce((prev, [key, val]) => {
    if (val.isRendered) {
      prev.push(
        <FabSub key={key} onClick={val.func} isSelected={val.isSelected}>
          {val.icon}
        </FabSub>
      );
    }
    return prev;
  }, []);

  return (
    <>
    {currentUser && 
      <>
        <Backdrop isOpen={isOpen} onClick={closeFab} zIndex={300} />
        <FabContainer isOpen={isOpen}>
          <CSSTransition
            in={isOpen}
            classNames="fab-subs"
            timeout={300}
            unmountOnExit
          >
            <>
              <FabSubContainer isOpen={isOpen} itemsLength={FabSubs.length}>
                {FabSubs}
              </FabSubContainer>
              { isHelperOpen && <FabHelper /> }
            </>
          </CSSTransition>
          <FabMain onClick={() => setFabOpen(!isOpen)}>
            {isOpen ? (
              <FontAwesomeIcon icon="times" size="2x" />
            ) : (
              <FontAwesomeIcon icon="ellipsis-v" size="2x" />
            )}
          </FabMain>
        </FabContainer>
        <UsersModal
          isOpen={isUserModalOpen}
          pageName="eventsPage"
          title="Host Filter"
          subtitle={subtitleText}
          onClose={() => setUserModalOpen(false)}
          users={users}
          isFilter={true}
          showEventsCount={true}
        />
      </>
    }
    </>
  );
};

const mapStateToProps = createStructuredSelector({
  guestFilter: selectGuestFilter,
  currentUser: selectCurrentUser,
  hasActiveFollowedUser: selectHasActiveFollowedUser,
  users: selectFollowedUsersList
});

const mapDispatchToProps = {
  setGuestFilter,
  openSnackbar
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Fab);
