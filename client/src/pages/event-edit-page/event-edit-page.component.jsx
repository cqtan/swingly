import React from 'react';
import {
  EventEditPageContainer,
} from './event-edit-page.styles';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { withRouter } from 'react-router-dom';
import { createStructuredSelector } from 'reselect';
import { selectEditEvent } from '../../redux/event-edit/event-edit.selectors';

// TODO: Store for navigation: needs eventId, last events view, scroll position.
const EventEditPage = (props) => {
  const { eventEdit, history } = props;
  const { event, lastRoute } = eventEdit;

  const onClose = () => {
    history.push(lastRoute);
  }

  if (!event) {
    history.push('/');
  }

  return (
    <>
      { event && 
        <EventEditPageContainer>
          
        </EventEditPageContainer> 
      }
    </>
  );
}

const mapStateToProps = createStructuredSelector({
  eventEdit: selectEditEvent
});

export default compose(
  withRouter,
  connect(mapStateToProps),
)(EventEditPage)
