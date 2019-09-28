import React from 'react';
import {
  ProfileImageContainer
} from './profile-image-section.styles'
import ProfileImage from '../../../ui/profile-image/profile-image.component';

const ProfileImageSection = (props) => {
  return (
    <>
      <ProfileImageContainer>
        <ProfileImage themeColor lg />
      </ProfileImageContainer>
    </>
  );
}

export default ProfileImageSection;