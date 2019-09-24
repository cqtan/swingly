import React, { useState, useEffect } from 'react';
import {
  EventDetailsContainer,
  EventImageContainer,
  EventImage,
  EventTitle,
  DetailsContainer,
  ButtonsContainer
} from './event-details.styles';
import { connect } from 'react-redux';
import Modal from '../../../ui/modal/modal.component';
import CloseButton from '../../../ui/button/button-close/button-close.component';
import Details from './details/details.component';
import Backdrop from '../../../ui/backdrop/backdrop.component';
import EventButtons from './event-buttons/event-buttons.component';
import EventDescription from './event-description/event-description.component';
import { createStructuredSelector } from 'reselect';
import { selectCurrentUser, selectUsersInList } from '../../../redux/user/user.selectors';
import UsersModal from '../../users-components/users-modal/users-modal.component';

export const EventDetails = (props) => {
  const { isOpen, onClose, event, currentUser, pageName, getUsersInList } = props;
  const [isGuestListOpen, setGuestListOpen] = useState(false);
  const guestList = event && Object.keys(event.guests);

  useEffect(() => {
    if (document.getElementsByClassName("event-details-enter-done").length) {
      if (isGuestListOpen) {
        document.getElementsByClassName("event-details-enter-done")[0].style.overflow = "hidden";
      } else {
        document.getElementsByClassName("event-details-enter-done")[0].style.overflow = "";
      }
    }
  }, [isGuestListOpen]);

  return (
    <>
      <Backdrop isOpen={isOpen} onClick={onClose}/>
      <Modal
        className="event-details-modal"
        isOpen={isOpen}
        pageName={pageName}
        transName="event-details">
        { event &&
          <>
            <EventDetailsContainer >
              <CloseButton onClick={onClose} />
              <EventImageContainer>
                <EventImage src='http://lorempixel.com/400/200/cats' />
              </EventImageContainer>
              <EventTitle>
                {event.title}
              </EventTitle>
              <DetailsContainer>
                <Details event={event} />
              </DetailsContainer>
              { currentUser &&
                <ButtonsContainer>
                  <EventButtons 
                    eventId={event.id} 
                    onClose={onClose}
                    openGuestList={() => setGuestListOpen(true)} />
                </ButtonsContainer>
              }
              { event.description && 
                <EventDescription description={event.description} />
              }
            </EventDetailsContainer>
            <UsersModal
              isOpen={isGuestListOpen}
              pageName="eventsPage"
              title="Guests"
              onClose={() => setGuestListOpen(false)}
              users={getUsersInList(guestList)}
              isFilter={true}
              showEventsCount={false}
            />
          </>
        }
      </Modal>
    </>
  );
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  getUsersInList: selectUsersInList
});

export default connect(mapStateToProps)(EventDetails);
