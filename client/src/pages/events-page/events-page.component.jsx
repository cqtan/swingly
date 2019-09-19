import React, { useState } from 'react';
import {
  EventsPageContainer,
} from './events-page.styles';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import EventsViewAgenda from '../../components/events/events-view-agenda/events-view-agenda.component';
import Fab from '../../components/fab/fab.component';
import { selectEventsByUserId } from '../../redux/events/events.selectors';

const EventsPage = (props) => {
  const { selectEventsByUserId } = props;
  const [isFabOpen, setFabOpen] = useState(false);

  const filteredEvents = selectEventsByUserId(null);

  return (
    <>
      <EventsPageContainer>
        <EventsViewAgenda events={filteredEvents} />
      </EventsPageContainer>
      <Fab isOpen={isFabOpen} setFabOpen={setFabOpen} />
    </>
  );
}

const mapStateToProps = createStructuredSelector({
  selectEventsByUserId
});

export default connect(mapStateToProps)(EventsPage);
