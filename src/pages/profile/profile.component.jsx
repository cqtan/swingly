import React from 'react';
import {
  ProfileContainer,
  ProfileImageContainer,
  ProfileImage,
  ProfileDetails,
  ProfileLabel,
  ProfileButton
} from './profile.styles';
import { connect } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Profile = (props) => {
  const { user } = props;
  console.log('User: ', user);
  

  return (
    <>
      <ProfileContainer>
        <ProfileImageContainer>
          <ProfileImage src='http://lorempixel.com/400/200/cats/Meowser' />
        </ProfileImageContainer>
        <ProfileDetails>
          <ProfileLabel>
            Details
            <ProfileButton flat>
              <FontAwesomeIcon icon='edit' />
            </ProfileButton>
          </ProfileLabel>
        </ProfileDetails>
      </ProfileContainer>
    </>
  );
}


const mapStateToProps = (state) => ({
  user: state.user.currentUser
});

export default connect(mapStateToProps)(Profile);
