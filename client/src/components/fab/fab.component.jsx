import React from "react";
import { FabContainer, FabSubContainer, FabMain, FabSub } from "./fab.styles";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import Backdrop from "../../ui/backdrop/backdrop.component";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { CSSTransition } from "react-transition-group";
import { selectFilterType } from "../../redux/events/events.selectors";
import { setFilterType } from "../../redux/events/events.actions";
import { selectCurrentUser } from "../../redux/user/user.selectors";

const Fab = props => {
  const { isOpen, setFabOpen, filterType, setFilterType, currentUser } = props;

  const handleFilterClick = type => {
    setFilterType(type);
    setFabOpen(false);
  }

  const handleCalendarDayClick = () => {
    console.log("Calendar Day clicked: ");
    setFabOpen(false);
  };

  const fabSubData = {
    interested: {
      icon: <FontAwesomeIcon icon="star" />,
      func: () => handleFilterClick('interested'),
      isSelected: filterType === 'interested' ? true : false,
      isRendered: currentUser ? true : false,
    },
    going: {
      icon: <FontAwesomeIcon icon="check" />,
      func: () => handleFilterClick('going'),
      isSelected: filterType === 'going' ? true : false,
      isRendered: currentUser ? true : false,
    },
    today: {
      icon: <FontAwesomeIcon icon="calendar-day" />,
      func: handleCalendarDayClick,
      isSelected: false,
      isRendered: true,
    }
  }

  const FabSubs = Object.entries(fabSubData).reduce((prev, [key, val]) => {
    if (val.isRendered) {
      prev.push(
        <FabSub
          key={key}
          onClick={val.func}
          isSelected={val.isSelected}
        >
          {val.icon}
        </FabSub>
      );
    }
    return prev;
  }, []);

  return (
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
    </>
  );
};

const mapStateToProps = createStructuredSelector({
  filterType: selectFilterType,
  currentUser: selectCurrentUser
});

const mapDispatchToProps = {
  setFilterType
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Fab);
