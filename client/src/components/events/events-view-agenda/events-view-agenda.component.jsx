import React, { useState } from 'react';
import {
  EventsViewAgendaContainer,
  MonthRow,
  DayRow,
  DayDate,
  DayDateItem,
  DayEvents,
  DayEventItem,
  DayEventIcon
} from './events-view-agenda.styles';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectAllEvents, selectEventsLoaded } from '../../../redux/events/events.selectors';
import { getMonthString, getDayString, getDayNumber, getTime, checkIsToday } from './events-view-agenda.utils';
import EventDetails from '../event-details/event-details.component';

const EventsViewAgenda = (props) => {
  const { events, isEventsLoaded } = props;
  let timeTracker = {};
  let initialComponents = [];

  const [isDetailsOpen, setDetailsOpen] = useState(false);
  const [currentEvent, setCurrentEvent] = useState(null);
  const [eventComponents, setEventComponents] = useState([]);

  const handleEventOpen = event => {
    setCurrentEvent(event);
    setDetailsOpen(true);
  }

  const handleEventClose = () => {
    setDetailsOpen(false);
  }

  const addMonthRow = event => {
    const startMonth = getMonthString(event.start);

    if (!timeTracker.hasOwnProperty(startMonth)) {
      timeTracker[startMonth] = {};
      initialComponents.push(
        <MonthRow key={startMonth}>{startMonth}</MonthRow>
      )      
    }
  }

  const addDayRow = event => {
    const startMonth = getMonthString(event.start);
    let dayNumber = getDayNumber(event.start);
    let dayString = null;
    let isDayDisplayed = false;
    let isToday = checkIsToday(event.start);

    if (!timeTracker[startMonth].hasOwnProperty(dayNumber)) {
      timeTracker[startMonth][dayNumber] = [event.title];
      dayString = getDayString(event.start);
    } else {
      timeTracker[startMonth][dayNumber].push(event.title);
      dayNumber = null;
      isDayDisplayed = true;
    }

    const startTime = getTime(event.start);
    const endTime = getTime(event.end);
    const timeFormatted = `${startTime} - ${endTime}`;

    initialComponents.push(
      <DayRow key={event.id} isDayDisplayed={isDayDisplayed}>
        <DayDate isDayDisplayed={isDayDisplayed}>
          <DayDateItem>{dayString}</DayDateItem>
          <DayDateItem>{dayNumber}</DayDateItem>
        </DayDate>
        <DayEvents flat isToday={isToday} onClick={() => handleEventOpen(event)}>
          <DayEventItem>{event.title}</DayEventItem>
          <DayEventItem>{timeFormatted}</DayEventItem>
        </DayEvents>
        <DayEventIcon>x</DayEventIcon>
      </DayRow>
    );
  }

  if (isEventsLoaded && eventComponents.length === 0) {
    Object.values(events).forEach(event => {
      addMonthRow(event);
      addDayRow(event);
      setEventComponents(initialComponents);
      // console.log('---- time tracker:', timeTracker);
    });
  }

  return (
    <>
      <EventsViewAgendaContainer>
        {eventComponents}
      </EventsViewAgendaContainer>
      <EventDetails 
        isOpen={isDetailsOpen} 
        event={currentEvent}
        onClose={handleEventClose} 
      />
    </>
  );
}

const mapStateToProps = createStructuredSelector({
  events: selectAllEvents,
  isEventsLoaded: selectEventsLoaded,
});

export default connect(mapStateToProps)(EventsViewAgenda);
