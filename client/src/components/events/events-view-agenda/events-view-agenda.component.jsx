import React from 'react';
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

const EventsViewAgenda = (props) => {
  const { events, isEventsLoaded } = props;
  let timeTracker = {};
  let eventComponents = [];

  const addMonthRow = event => {
    const startMonth = getMonthString(event.start);

    if (!timeTracker.hasOwnProperty(startMonth)) {
      timeTracker[startMonth] = {};
      eventComponents.push(
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

    eventComponents.push(
      <DayRow key={event.id} isToday={isToday}>
        <DayDate isDayDisplayed={isDayDisplayed}>
          <DayDateItem>{dayString}</DayDateItem>
          <DayDateItem>{dayNumber}</DayDateItem>
        </DayDate>
        <DayEvents>
          <DayEventItem>{event.title}</DayEventItem>
          <DayEventItem>{timeFormatted}</DayEventItem>
        </DayEvents>
        <DayEventIcon>x</DayEventIcon>
      </DayRow>
    );
  }

  if (isEventsLoaded) {
    Object.values(events).slice(0, 3).forEach(event => {
      addMonthRow(event);
      addDayRow(event);
      console.log('---- time tracker:', timeTracker);
    });
  } 

  return (
    <EventsViewAgendaContainer>
      {eventComponents}
    </EventsViewAgendaContainer>
  );
}

const mapStateToProps = createStructuredSelector({
  events: selectAllEvents,
  isEventsLoaded: selectEventsLoaded,
});

export default connect(mapStateToProps)(EventsViewAgenda);

