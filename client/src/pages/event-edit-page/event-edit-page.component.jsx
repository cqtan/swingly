import React from "react";
import { EventEditPageContainer } from "./event-edit-page.styles";
import { connect } from "react-redux";
import { compose } from "redux";
import { withRouter } from "react-router-dom";
import { createStructuredSelector } from "reselect";
import { selectEditEvent } from "../../redux/event-edit/event-edit.selectors";
import EventEdit from "../../components/events/event-edit/event-edit.component";
import { resetBodyScroll } from "../../redux/body-scroll/body-scroll.actions";
import { selectScrollTop } from "../../redux/body-scroll/body-scroll.selectors";
import { setScrollPosForEventEdit } from "../../redux/event-edit/event-edit.actions";

const EventEditPage = props => {
  const {
    eventEdit,
    history,
    scrollTop,
    setScrollPosForEventEdit,
    resetBodyScroll
  } = props;
  const { event, lastRoute } = eventEdit;

  const onClose = () => {
    history.push(lastRoute);
  };

  if (event && scrollTop > 0) {
    setScrollPosForEventEdit(scrollTop);
    resetBodyScroll();
  } else if (!event) {
    history.push("/");
  }

  return (
    <EventEditPageContainer>
      {event && <EventEdit event={event} onClose={onClose} />}
    </EventEditPageContainer>
  );
};

const mapStateToProps = createStructuredSelector({
  eventEdit: selectEditEvent,
  scrollTop: selectScrollTop
});

const mapDispatchToProps = {
  resetBodyScroll,
  setScrollPosForEventEdit
};

export default compose(
  withRouter,
  connect(
    mapStateToProps,
    mapDispatchToProps
  )
)(EventEditPage);
