import React, { useState, useEffect } from "react";
import { EventsPageContainer, ShowOlderButton } from "./events-page.styles";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import EventsViewAgenda from "../../components/events/events-view-agenda/events-view-agenda.component";
import { selectUpcomingFilteredEventsByHost, selectFilteredEventsByHost } from "../../redux/events/events.selectors";
import {
  saveScrollPosForPage,
  setScrollPosForPage,
  resetBodyStyles
} from "../../redux/body-scroll/body-scroll.actions";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const EventsPage = props => {
  const {
    upcomingEvents,
    allEvents,
    resetBodyStyles,
    setScrollPosForPage,
    saveScrollPosForPage
  } = props;
  const pageName = "eventsPage";
  const [showAll, setShowAll] = useState(false);
  const events = showAll ? allEvents : upcomingEvents;

  useEffect(() => {
    resetBodyStyles();
    setScrollPosForPage(pageName);

    return () => {
      saveScrollPosForPage(pageName);
      resetBodyStyles();
    };
  }, [resetBodyStyles, setScrollPosForPage, saveScrollPosForPage]);

  return (
    <>
      <EventsPageContainer>
        {!showAll && 
          <ShowOlderButton outlined onClick={() => setShowAll(true)}>
            <FontAwesomeIcon icon="history" />
            Show Past Events
          </ShowOlderButton>
        }
        <EventsViewAgenda events={events} pageName={pageName} />
      </EventsPageContainer>
    </>
  );
};

const mapStateToProps = createStructuredSelector({
  upcomingEvents: selectUpcomingFilteredEventsByHost,
  allEvents: selectFilteredEventsByHost
});

const mapDispatchToProps = {
  resetBodyStyles,
  setScrollPosForPage,
  saveScrollPosForPage
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EventsPage);
