import React from 'react';
import {
  EventDetailsContainer,
  EventImageContainer,
  EventImage,
  EventTitle,
  Details,
  Row,
  Label,
  EventData
} from './event-details.styles'
import Modal from '../../../ui/modal/modal.component';
import CloseButton from '../../../ui/button/button-close/button-close.component';

export const EventDetails = (props) => {
  const { isOpen, onClose } = props;

  return (
    <Modal
      isOpen={isOpen}
      direction="left"
      transName="events-details">
      <EventDetailsContainer>
        <CloseButton onClick={onClose} />
        <EventImageContainer>
          <EventImage src='http://lorempixel.com/400/200/cats'  />
        </EventImageContainer>
        <EventTitle>
          Swingtanzen macht froh!
        </EventTitle>
        <Details>
          <Row>
            <Label>Location</Label>
            <EventData>Sunny-side-of-the-street 42.</EventData>
          </Row>
          <Row>
            <Label>Location</Label>
            <EventData>Sunny-side-of-the-street 42.</EventData>
          </Row>
          <Row>
            <Label>Location</Label>
            <EventData>Sunny-side-of-the-street 42.</EventData>
          </Row>

        </Details>
      </EventDetailsContainer>
    </Modal>
  );
}

export default EventDetails;