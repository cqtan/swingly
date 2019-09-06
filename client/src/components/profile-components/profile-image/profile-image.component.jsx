import React from 'react';
import {
  ProfileImageContainer,
  Image
} from './profile-image.styles'

const ProfileImage = (props) => {
  return (
    <>
      <ProfileImageContainer>
        <Image src='http://lorempixel.com/400/200/cats' />
      </ProfileImageContainer>
    </>
  );
}

export default ProfileImage;