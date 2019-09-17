import React, { useEffect } from 'react';
import {
  EventCreatePageContainer,
} from './event-create-page.styles';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import EventCreate from '../../components/events/event-create/event-create.component';
import { selectCurrentUser } from '../../redux/user/user.selectors';
import { Redirect } from 'react-router-dom';

const EventCreatePage = (props) => {
  const { currentUser } = props;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
     { currentUser ? (
      <EventCreatePageContainer>
        <EventCreate userId={currentUser.id} />
      </EventCreatePageContainer>
     ) : (
       <Redirect to='/' />
     ) }
    </>
  );
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
});

export default connect(mapStateToProps)(EventCreatePage);