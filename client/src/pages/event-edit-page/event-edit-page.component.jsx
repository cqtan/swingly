import React, { useEffect } from "react";
import { EventEditPageContainer } from "./event-edit-page.styles";
import { connect } from "react-redux";
import { compose } from "redux";
import { withRouter } from "react-router-dom";
import queryString from 'query-string';
import { createStructuredSelector } from "reselect";
import EventEdit from "../../components/events/event-edit/event-edit.component";
import { resetBodyStyles, setScrollPosForPage, saveScrollPosForPage } from "../../redux/body-scroll/body-scroll.actions";
import { selectEventById } from "../../redux/events/events.selectors";
import { selectCurrentUser } from "../../redux/user/user.selectors";

const EventEditPage = props => {
  const {
    getEventById,
    currentUser,
    history,
    saveScrollPosForPage,
    setScrollPosForPage,
    resetBodyStyles
  } = props;

  const params = queryString.parse(history.location.search);
  const event = getEventById(params.id);
  const pageName = "eventEditPage";

  useEffect(() => {
    resetBodyStyles();
    setScrollPosForPage(pageName);
    
    return () => {
      saveScrollPosForPage(pageName);
      resetBodyStyles();
    };
  },[resetBodyStyles, setScrollPosForPage, saveScrollPosForPage]);

  const onClose = () => {
    history.push("/events-agenda");
  };

  if (!event || !event.hosts.includes(currentUser) ) {
    onClose();
  }

  return (
    <EventEditPageContainer>
      {event && <EventEdit event={event} onClose={onClose} />}
    </EventEditPageContainer>
  );
};

const mapStateToProps = createStructuredSelector({
  getEventById: selectEventById,
  currentUser: selectCurrentUser
});

const mapDispatchToProps = {
  resetBodyStyles,
  setScrollPosForPage,
  saveScrollPosForPage
};

export default compose(
  withRouter,
  connect(
    mapStateToProps,
    mapDispatchToProps
  )
)(EventEditPage);
