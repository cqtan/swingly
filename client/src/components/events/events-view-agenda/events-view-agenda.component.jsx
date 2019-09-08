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
import { getMonthString } from './events-view-agenda.utils';

const EventsViewAgenda = (props) => {
  const { events, isEventsLoaded } = props;
  let months = {};
  let eventComponents = [];

  const addMonthRow = event => {
    const startMonth = getMonthString(event.start);

    if (!months.hasOwnProperty(startMonth)) {
      console.log(`Month: ${startMonth} added!`);
      months[startMonth] = startMonth;
      eventComponents.push(
        <MonthRow>{startMonth}</MonthRow>
      )
    }
  }

  const addDayRow = event => {
    
  }

  if (isEventsLoaded) {
    Object.values(events).slice(0, 3).forEach(event => {
      addMonthRow(event);
      addDayRow(event);
    });
  } 

  return (
    <EventsViewAgendaContainer>
      <MonthRow>August</MonthRow>
      <DayRow>
        <DayDate>
          <DayDateItem>Fri</DayDateItem>
          <DayDateItem>10</DayDateItem>
        </DayDate>
        <DayEvents>
          <DayEventItem>Swingtanzen macht froh!</DayEventItem>
          <DayEventItem>20:00 - 23:30</DayEventItem>
        </DayEvents>
        <DayEventIcon>yo</DayEventIcon>
      </DayRow>
    </EventsViewAgendaContainer>
  );
}

const mapStateToProps = createStructuredSelector({
  events: selectAllEvents,
  isEventsLoaded: selectEventsLoaded,
});

export default connect(mapStateToProps)(EventsViewAgenda);

