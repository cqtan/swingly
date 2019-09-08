import React from 'react';
import {
  EventsPageContainer,
} from './events-page.styles';
import EventsViewAgenda from '../../components/events/events-view-agenda/events-view-agenda.component';

const EventsPage = (props) => {
  return (
    <EventsPageContainer>
      <EventsViewAgenda />
    </EventsPageContainer>
  );
}

export default EventsPage;