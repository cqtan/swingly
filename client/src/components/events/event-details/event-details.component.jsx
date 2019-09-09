import React from 'react';
import {
  EventDetailsContainer,
  EventImageContainer,
  EventImage,
  EventTitle,
  DetailsContainer,
  ButtonsContainer,
  VerticalDivider,
  EventButton,
} from './event-details.styles';
import Modal from '../../../ui/modal/modal.component';
import CloseButton from '../../../ui/button/button-close/button-close.component';
import Details from './details/details.component';
import Backdrop from '../../../ui/backdrop/backdrop.component';

export const EventDetails = (props) => {
  const { isOpen, onClose, event } = props;

  return (
    <>
      <Backdrop isOpen={isOpen} onClick={onClose}/>
      <Modal
        isOpen={isOpen}
        transName="event-details">
        { event &&
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
              <EventButton transparent>Guests</EventButton>
              <VerticalDivider />
              <EventButton transparent>Interested</EventButton>
              <VerticalDivider />
              <EventButton transparent>Going</EventButton>
            </ButtonsContainer>
          </EventDetailsContainer>
        }
      </Modal>
    </>
  );
}


export default EventDetails;
