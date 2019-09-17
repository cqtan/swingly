import React, { useState } from 'react';
import {
  EventsPageContainer,
} from './events-page.styles';
import EventsViewAgenda from '../../components/events/events-view-agenda/events-view-agenda.component';
import Fab from '../../components/fab/fab.component';

const EventsPage = (props) => {
  const [isFabOpen, setFabOpen] = useState(false);

  return (
    <>
      <EventsPageContainer>
        <EventsViewAgenda />
      </EventsPageContainer>
      <Fab isOpen={isFabOpen} setFabOpen={setFabOpen} />
    </>
  );
}

export default EventsPage;