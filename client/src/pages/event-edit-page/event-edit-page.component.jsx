import React from 'react';
import {
  EventEditPageContainer,
} from './event-edit-page.styles';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { withRouter } from 'react-router-dom';
import { createStructuredSelector } from 'reselect';
import { selectEditEvent } from '../../redux/event-edit/event-edit.selectors';
import EventEdit from '../../components/events/event-edit/event-edit.component';
import { resetBodyScroll } from '../../redux/body-scroll/body-scroll.actions';

const EventEditPage = (props) => {
  const { eventEdit, history, resetBodyScroll } = props;
  const { event, lastRoute } = eventEdit;

  const onClose = () => {
    history.push(lastRoute);
  }

  if (event) {
    resetBodyScroll();
  } else {
    history.push('/');
  }

  return (
    <EventEditPageContainer>
      { event &&
        <EventEdit event={event} onClose={onClose} />
      }
    </EventEditPageContainer> 
  );
}

const mapStateToProps = createStructuredSelector({
  eventEdit: selectEditEvent
});

const mapDispatchToProps = {
  resetBodyScroll
}

export default compose(
  withRouter,
  connect(mapStateToProps, mapDispatchToProps),
)(EventEditPage)
