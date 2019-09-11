import React from 'react';
import {
  EventDescriptionContainer,
} from './event-description.styles';
import Linkify from 'linkifyjs/react';

const EventDescription = (props) => {
  const { description } = props;

  // let formated = description.replace(/\r?\n/g, "<br />");

  return (
    <EventDescriptionContainer>
      <Linkify tag='p'>{description}</Linkify>
    </EventDescriptionContainer>
  );
}

export default EventDescription;