import React from "react";
import { ProfileContainer, ProfileButton } from "./profile.styles";
import { connect } from "react-redux";
import { compose } from 'redux';
import ProfileImageSection from "../../components/profile-components/profile-image/profile-image-section.component";
import ProfileDetails from "../../components/profile-components/profile-details/profile-details.component";
import { createStructuredSelector } from "reselect";
import { selectCurrentUser } from "../../redux/user/user.selectors";
import { Redirect } from "react-router-dom";
import ProfileEvents from "../../components/profile-components/profile-events/profile-events.component";
import { withRouter } from 'react-router-dom';
import queryString from 'query-string';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Profile = props => {
  const { history, currentUser } = props;

  const params = queryString.parse(history.location.search);
  const userId = params.user_id;

  return (
    <>
      {currentUser ? (
        <ProfileContainer>
          <ProfileImageSection userId={userId} />
          <ProfileDetails userId={userId} />
          <ProfileEvents userId={userId} />
          <ProfileButton onClick={() => history.push("/event-create")}>
            <FontAwesomeIcon icon='calendar-plus' />
            Create Event
          </ProfileButton>
        </ProfileContainer>
      ) : (
        <Redirect to="/" />
      )}
    </>
  );
};

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
});


export default compose(
  withRouter,
  connect(mapStateToProps)
)(Profile);
