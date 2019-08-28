import React from 'react';
import {
  ProfileDetailsContainer,
  ProfileTitle,
  ProfileRow,
  ProfileLabel,
  ProfileData,
  ProfileButton,
  ProfileDescription
} from './profile-details.styles'
import { connect } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const ProfileDetails = (props) => {
  const { user } = props;
  const { currentUser } = user;

  return (
    <>
      <ProfileDetailsContainer>
        <ProfileTitle>
          Details
          <ProfileButton transparent flat><FontAwesomeIcon icon='edit' /></ProfileButton>
        </ProfileTitle>
        <ProfileRow>
          <ProfileLabel>Username</ProfileLabel>
          <ProfileData>{currentUser.displayName}</ProfileData>
        </ProfileRow>
        <ProfileRow>
          <ProfileLabel>Email</ProfileLabel>
          <ProfileData>{currentUser.email}</ProfileData>
        </ProfileRow>
        <ProfileRow>
          <ProfileLabel>Description</ProfileLabel>
        </ProfileRow>
        <ProfileRow>
          { currentUser.description ? 
            <ProfileDescription>{currentUser.description}</ProfileDescription> :
            <ProfileDescription defaultText>Describe yourself!</ProfileDescription>
          }
        </ProfileRow>
      </ProfileDetailsContainer>
    </>
  );
}

const mapStateToProps = (state) => ({
  user: state.user
});

export default connect(mapStateToProps)(ProfileDetails);
