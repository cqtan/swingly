import React from 'react';
import {
  EventEditPageContainer,
} from './event-edit-page.styles';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

// TODO: Store for navigation: needs eventId, last events view, scroll position.
const EventEditPage = (props) => {
  return (
    <EventEditPageContainer>

    </EventEditPageContainer>
  );
}


const mapStateToProps = createStructuredSelector({
  
});

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(EventEditPage);

