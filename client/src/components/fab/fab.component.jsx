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
  selectHasActiveFollowedUser
} from "../../redux/user/user.selectors";
import { openSnackbar } from "../../redux/snackbar/snackbar.actions";
import UsersFilter from "../users-components/users-filter/users-filter.component";

const Fab = props => {
  const {
    isOpen,
    setFabOpen,
    guestFilter,
    setGuestFilter,
    currentUser,
    openSnackbar,
    hasActiveFollowedUser
  } = props;

  const [isUserFilterOpen, setUserFilterOpen] = useState(false);

  const handleGuestFilterClick = filter => {
    setGuestFilter(filter);
    setFabOpen(false);
  };

  const handleCalendarDayClick = () => {
    const isTodayEvents = document.getElementsByClassName("isToday");
    if (isTodayEvents.length) {
      isTodayEvents[0].scrollIntoView({ behavior: "smooth", block: "center" });
    } else {
      openSnackbar("info", "No events today with given filter");
    }

    setFabOpen(false);
  };

  const handleHostFilter = () => {
    setUserFilterOpen(true);
    setFabOpen(false);
  };

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
        <Backdrop isOpen={isOpen} onClick={() => setFabOpen(false)} />
        <FabContainer isOpen={isOpen}>
          <CSSTransition
            in={isOpen}
            classNames="fab-subs"
            timeout={300}
            unmountOnExit
          >
            <FabSubContainer isOpen={isOpen} itemsLength={FabSubs.length}>
              {FabSubs}
            </FabSubContainer>
          </CSSTransition>
          <FabMain onClick={() => setFabOpen(!isOpen)}>
            {isOpen ? (
              <FontAwesomeIcon icon="times" size="2x" />
            ) : (
              <FontAwesomeIcon icon="ellipsis-v" size="2x" />
            )}
          </FabMain>
        </FabContainer>
        <UsersFilter 
          isOpen={isUserFilterOpen}
          pageName="eventsPage"
          onClose={() => setUserFilterOpen(false)}
        />
      </>
    }
    </>
  );
};

const mapStateToProps = createStructuredSelector({
  guestFilter: selectGuestFilter,
  currentUser: selectCurrentUser,
  hasActiveFollowedUser: selectHasActiveFollowedUser
});

const mapDispatchToProps = {
  setGuestFilter,
  openSnackbar
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Fab);
