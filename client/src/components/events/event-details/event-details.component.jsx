import React from 'react';
import {
  EventDetailsContainer,
  EventImageContainer,
  EventImage,
  EventTitle,
  DetailsContainer,
  ButtonsContainer,
  Description,
} from './event-details.styles';
import Modal from '../../../ui/modal/modal.component';
import CloseButton from '../../../ui/button/button-close/button-close.component';
import Details from './details/details.component';
import Backdrop from '../../../ui/backdrop/backdrop.component';
import EventButtons from './event-buttons/event-buttons.component';

export const EventDetails = (props) => {
  const { isOpen, onClose, event } = props;

  return (
    <>
      <Backdrop isOpen={isOpen} onClick={onClose}/>
      <Modal
        isOpen={isOpen}
        transName="event-details">
        { event &&
          <>
            <EventDetailsContainer>
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
              <ButtonsContainer>
                <EventButtons />
              </ButtonsContainer>
              {event.description && <Description>{event.description}</Description>}
            </EventDetailsContainer>
          </>
        }
      </Modal>
    </>
  );
}


export default EventDetails;
