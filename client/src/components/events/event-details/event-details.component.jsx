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
import { connect } from 'react-redux';
import Modal from '../../../ui/modal/modal.component';
import CloseButton from '../../../ui/button/button-close/button-close.component';
import { createStructuredSelector } from 'reselect';
import { selectAllEvents } from '../../../redux/events/events.selectors';
import Details from './details/details.component';
import Backdrop from '../../../ui/backdrop/backdrop.component';
import Spinner from '../../../ui/spinner/spinner.component';
import { selectUsers } from '../../../redux/user/user.selectors';

export const EventDetails = (props) => {
  const { isOpen, onClose, events, users } = props;

  let event = null;
  if (Object.keys(events).length && Object.keys(users).length) {
    event = events[Object.keys(events)[0]];
    console.log('<<<<<event: ', event.host);
  }



  return (
    <>
      <Backdrop isOpen={isOpen} onClick={onClose}/>

      { (isOpen && event && users) ?
        <Modal
          isOpen={isOpen}
          direction="left"
          transName="event-details">
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
        </Modal>
        :
        <Spinner loading={true} />
      }

    </>
  );
}

const mapStateToProps = createStructuredSelector({
  events: selectAllEvents,
  users: selectUsers
});

export default connect(mapStateToProps)(EventDetails);
