import React from "react";
import {
  EventButtonsContainer,
  ButtonItem,
  EventButton,
  ButtonLabel
} from "./event-buttons.styles";
import { connect } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { createStructuredSelector } from "reselect";
import { selectCurrentUser } from "../../../../redux/user/user.selectors";
import {
  setEventGuest,
  deleteEventGuest
} from "../../../../redux/events/events.actions";
import { selectAllEvents } from "../../../../redux/events/events.selectors";
import { openEditEvent } from "../../../../redux/event-edit/event-edit.actions";
import { compose } from "redux";
import { withRouter } from "react-router-dom";

const EventButtons = props => {
  const {
    eventId,
    events,
    currentUser,
    setEventGuest,
    deleteEventGuest,
    openEditEvent,
    history
  } = props;
  const event = events[eventId];

  const handleClick = async guestType => {
    if (currentUser) {
      if (event.guests.hasOwnProperty(currentUser.id)) {
        const prevGuestType = event.guests[currentUser.id];
        if (prevGuestType === guestType) {
          await deleteEventGuest(currentUser.id, event);
        } else {
          await setEventGuest(currentUser.id, event, guestType);
        }
      } else {
        await setEventGuest(currentUser.id, event, guestType);
      }
    } else {
      console.log("User not signed in! ");
    }
  };

  let isGuest = "";
  if (currentUser) {
    if (event.guests.hasOwnProperty(currentUser.id)) {
      const guestType = event.guests[currentUser.id];
      if (guestType === "interested") {
        isGuest = "interested";
      } else {
        isGuest = "going";
      }
    }
  }

  return (
    <>
      <EventButtonsContainer>
        <ButtonItem>
          <EventButton transparent>
            <FontAwesomeIcon icon="list-ul" />
          </EventButton>
          <ButtonLabel>Guests</ButtonLabel>
        </ButtonItem>
        { !event.hosts.includes(currentUser.id) ? (
          <ButtonItem>
            <EventButton
              transparent
              isGuest={false}
              onClick={() => openEditEvent(event, history)}
            >
              <FontAwesomeIcon icon="edit" />
            </EventButton>
            <ButtonLabel>Edit</ButtonLabel>
          </ButtonItem>
        ) : (
          <>
            <ButtonItem>
              <EventButton
                transparent
                isGuest={isGuest === "interested" ? true : false}
                onClick={() => handleClick("interested")}
              >
                <FontAwesomeIcon icon="star" />
              </EventButton>
              <ButtonLabel>Interested</ButtonLabel>
            </ButtonItem>
            <ButtonItem>
              <EventButton
                transparent
                isGuest={isGuest === "going" ? true : false}
                onClick={() => handleClick("going")}
              >
                <FontAwesomeIcon icon="check" />
              </EventButton>
              <ButtonLabel>Going</ButtonLabel>
            </ButtonItem>
          </>
        )}
      </EventButtonsContainer>
    </>
  );
};

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  events: selectAllEvents
});

const mapDispatchToProps = {
  setEventGuest,
  deleteEventGuest,
  openEditEvent
};

export default compose(
  withRouter,
  connect(
    mapStateToProps,
    mapDispatchToProps
  )
)(EventButtons);
