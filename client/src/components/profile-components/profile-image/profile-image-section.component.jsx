import React from 'react';
import {
  ProfileImageContainer
} from './profile-image-section.styles'
import ProfileImage from '../../../ui/profile-image/profile-image.component';

const ProfileImageSection = (props) => {
  return (
    <>
      <ProfileImageContainer>
        <ProfileImage themeColor lg src='http://lorempixel.com/400/200/cats' />
      </ProfileImageContainer>
    </>
  );
}

export default ProfileImageSection;