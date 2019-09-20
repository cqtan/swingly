import React, { useState, useEffect } from "react";
import { EventsPageContainer } from "./events-page.styles";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import EventsViewAgenda from "../../components/events/events-view-agenda/events-view-agenda.component";
import Fab from "../../components/fab/fab.component";
import { selectEventsByUserId } from "../../redux/events/events.selectors";
import {
  saveScrollPosForPage,
  setScrollPosForPage,
  resetBodyStyles
} from "../../redux/body-scroll/body-scroll.actions";

const EventsPage = props => {
  const {
    selectEventsByUserId,
    resetBodyStyles,
    setScrollPosForPage,
    saveScrollPosForPage
  } = props;
  const [isFabOpen, setFabOpen] = useState(false);
  const filteredEvents = selectEventsByUserId(null);
  const pageName = "eventsPage";

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
        <EventsViewAgenda events={filteredEvents} pageName={pageName} />
      </EventsPageContainer>
      <Fab isOpen={isFabOpen} setFabOpen={setFabOpen} />
    </>
  );
};

const mapStateToProps = createStructuredSelector({
  selectEventsByUserId,
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
