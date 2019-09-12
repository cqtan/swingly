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
import { selectEventsLoaded, selectSortedEvents } from '../../../redux/events/events.selectors';
import { getMonthString, getDayString, getDayNumber, getTime, checkIsToday } from './events-view-agenda.utils';
import EventDetails from '../event-details/event-details.component';
import { selectCurrentUser } from '../../../redux/user/user.selectors';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const EventsViewAgenda = (props) => {
  const { events, isEventsLoaded, currentUser } = props;
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

  const addEventIcon = (event) => {
    let eventIcon = null;
  //   if (currentUser) {
  //     if (event.guests.hasOwnProperty(currentUser.id)) {
  //       eventIcon = <FontAwesomeIcon icon='star' />;
  //     } else if (event.guests.hasOwnProperty(currentUser.id)) {
  //       eventIcon = <FontAwesomeIcon icon='check' />;
  //     }
  //   }

    return eventIcon;
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
    const eventIcon = addEventIcon(event);

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
        <DayEventIcon>{eventIcon}</DayEventIcon>
      </DayRow>
    );
  }

  if (isEventsLoaded && eventComponents.length === 0) {
    events.forEach(event => {
      addMonthRow(event);
      addDayRow(event);
      setEventComponents(initialComponents);
    });
    // console.log('---- time tracker:', timeTracker);
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
  events: selectSortedEvents,
  isEventsLoaded: selectEventsLoaded,
  currentUser: selectCurrentUser
});

export default connect(mapStateToProps)(EventsViewAgenda);
