import React from 'react';
import {
  ProfileEditContainer,
} from './profile-edit.styles';
import { CSSTransition } from 'react-transition-group';

const ProfileEdit = (props) => {
  return (
    <>
      <CSSTransition
        in={true}
        className='profile-edit'
        timeout={300}
        unmountOnExit>
        <ProfileEditContainer>
          hi
        </ProfileEditContainer>
      </CSSTransition>
    </>
  );
}

export default ProfileEdit;