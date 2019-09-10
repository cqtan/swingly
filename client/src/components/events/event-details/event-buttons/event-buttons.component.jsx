import React from 'react';
import {
  EventButtonsContainer,
  ButtonItem,
  EventButton,
  ButtonLabel,
} from './event-buttons.styles'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const EventButtons = (props) => {
  return (
    <EventButtonsContainer>
      <ButtonItem>
        <EventButton transparent >
          <FontAwesomeIcon icon='list-ul' />
        </EventButton>
        <ButtonLabel>Guests</ButtonLabel>
      </ButtonItem>
      <ButtonItem>
        <EventButton transparent >
          <FontAwesomeIcon icon='star' />
        </EventButton>
        <ButtonLabel>Interested</ButtonLabel>
      </ButtonItem>
      <ButtonItem>
        <EventButton transparent >
          <FontAwesomeIcon icon='check' />
        </EventButton>
        <ButtonLabel>Going</ButtonLabel>
      </ButtonItem>
    </EventButtonsContainer>
  );
}

export default EventButtons;