import React from 'react';
import {
  EventDetailsContainer,
  EventImageContainer,
  EventImage,
  EventTitle,
  DetailsContainer,
} from './event-details.styles';
import { connect } from 'react-redux';
import Modal from '../../../ui/modal/modal.component';
import CloseButton from '../../../ui/button/button-close/button-close.component';
import { createStructuredSelector } from 'reselect';
import { selectAllEvents } from '../../../redux/events/events.selectors';
import Details from './details/details.component';
import Backdrop from '../../../ui/backdrop/backdrop.component';
import Spinner from '../../../ui/spinner/spinner.component';

export const EventDetails = (props) => {
  const { isOpen, onClose, events } = props;

  let event = null;
  if (Object.keys(events).length) {
    event = events[Object.keys(events)[0]];
  }

  return (
    <>
      <Backdrop isOpen={isOpen} onClick={onClose}/>

      { (isOpen && event) ?
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
              Swingtanzen macht froh!
            </EventTitle>
            <DetailsContainer>
              <Details event={event} />
            </DetailsContainer>
          </EventDetailsContainer>
        </Modal>
        :
        <Spinner loading={true} />
      }

    </>
  );
}

const mapStateToProps = createStructuredSelector({
  events: selectAllEvents
});

export default connect(mapStateToProps)(EventDetails);
