import React, { useState, useEffect } from "react";
import {
  EventsViewAgendaContainer,
  MonthRow,
  DayRow,
  DayDate,
  DayDateItem,
  DayEvents,
  DayEventItem,
  DayEventIcon
} from "./events-view-agenda.styles";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import {
  selectEventsLoaded,
  selectSortedEvents,
  selectFilterType
} from "../../../redux/events/events.selectors";
import {
  getMonthString,
  getDayString,
  getDayNumber,
  getTime,
  checkIsToday
} from "../../../redux/events/events.utils";
import EventDetails from "../event-details/event-details.component";
import { selectCurrentUser } from "../../../redux/user/user.selectors";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { cleanUpEventEdit } from "../../../redux/event-edit/event-edit.actions";
import { selectEditEventScrollPos } from "../../../redux/event-edit/event-edit.selectors";

const EventsViewAgenda = props => {
  const {
    events,
    isEventsLoaded,
    currentUser,
    cleanUpEventEdit,
    scrollPos,
    filterType
  } = props;
  let timeTracker = {};
  let eventComponents = [];

  const [isDetailsOpen, setDetailsOpen] = useState({
    isOpen: false,
    event: null
  });

  useEffect(() => {
    if (scrollPos !== null) {
      const scrollY = scrollPos;
      cleanUpEventEdit();
      window.scrollTo(0, scrollY);
      console.log("<<<<<<<Event Edit Cleaned! ScrollY: ", scrollY);
    }
  }, [scrollPos, cleanUpEventEdit]);

  const handleEventOpen = event => {
    setDetailsOpen({
      isOpen: true,
      event
    });
  };

  const handleEventClose = () => {
    setDetailsOpen({
      isOpen: false,
      event: null
    });
  };

  const addMonthRow = event => {
    const startMonth = getMonthString(event.start);

    if (!timeTracker.hasOwnProperty(startMonth)) {
      timeTracker[startMonth] = {};
      eventComponents.push(<MonthRow key={startMonth}>{startMonth}</MonthRow>);
    }
  };

  const addEventIcon = event => {
    let eventIcon = null;
    if (currentUser && event.guests.hasOwnProperty(currentUser.id)) {
      if (event.guests[currentUser.id] === "interested") {
        eventIcon = <FontAwesomeIcon icon="star" />;
      } else {
        eventIcon = <FontAwesomeIcon icon="check" />;
      }
    }

    return eventIcon;
  };

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

    eventComponents.push(
      <DayRow key={event.id} isDayDisplayed={isDayDisplayed}>
        <DayDate isDayDisplayed={isDayDisplayed}>
          <DayDateItem>{dayString}</DayDateItem>
          <DayDateItem>{dayNumber}</DayDateItem>
        </DayDate>
        <DayEvents
          flat
          isToday={isToday}
          onClick={() => handleEventOpen(event)}
        >
          <DayEventItem>{event.title}</DayEventItem>
          <DayEventItem>{timeFormatted}</DayEventItem>
        </DayEvents>
        <DayEventIcon>{eventIcon}</DayEventIcon>
      </DayRow>
    );
  };

  const filterEventsByGuests = events => {  
    if (filterType !== 'none') {
      return events.filter(event => {
        if (event.guests.hasOwnProperty(currentUser.id)) {
          return event.guests[currentUser.id] === filterType ? true : false;
        } else {
          return false;
        }
      });
    } else {
      return events;
    }
  };

  if (isEventsLoaded && eventComponents.length === 0) {
    const filteredEvents = filterEventsByGuests(events);

    filteredEvents.forEach(event => {
      addMonthRow(event);
      addDayRow(event);
    });
  }

  return (
    <>
      <EventsViewAgendaContainer>{eventComponents}</EventsViewAgendaContainer>
      <EventDetails
        isOpen={isDetailsOpen.isOpen}
        event={isDetailsOpen.event}
        onClose={handleEventClose}
      />
    </>
  );
};

const mapStateToProps = createStructuredSelector({
  events: selectSortedEvents,
  isEventsLoaded: selectEventsLoaded,
  currentUser: selectCurrentUser,
  scrollPos: selectEditEventScrollPos,
  filterType: selectFilterType
});

const mapDispatchToProps = {
  cleanUpEventEdit
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EventsViewAgenda);
