import React from 'react';
import {
  ProfileEventsContainer,
} from './profile-events.styles';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import EventsViewAgenda from '../../events/events-view-agenda/events-view-agenda.component';
import { selectEventsByUserId } from '../../../redux/events/events.selectors';

const ProfileEvents = (props) => {
  const { selectEventsByUserId, userId } = props;

  const filteredEvents = selectEventsByUserId(userId);

  return (
    <ProfileEventsContainer>
      <EventsViewAgenda events={filteredEvents} />
    </ProfileEventsContainer>
  );
}

const mapStateToProps = createStructuredSelector({
  selectEventsByUserId
});

export default connect(mapStateToProps)(ProfileEvents);
