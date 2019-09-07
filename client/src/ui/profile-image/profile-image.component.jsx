import React from 'react';
import {
  ProfileImageContainer,
} from './profile-image.styles'

const ProfileImage = (props) => {

  return (
    <ProfileImageContainer  
      alt='profile image'
      {...props}
    />
  );
}

export default ProfileImage;