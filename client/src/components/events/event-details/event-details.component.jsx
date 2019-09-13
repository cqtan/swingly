import React from 'react';
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
import { selectCurrentUser } from '../../../redux/user/user.selectors';

export const EventDetails = (props) => {
  const { isOpen, onClose, event, currentUser } = props;

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
              { currentUser &&
                <ButtonsContainer>
                  <EventButtons eventId={event.id} />
                </ButtonsContainer>
              }
              { event.description && 
                <EventDescription description={event.description} />
              }
            </EventDetailsContainer>
          </>
        }
      </Modal>
    </>
  );
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
});

export default connect(mapStateToProps)(EventDetails);
