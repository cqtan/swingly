import React from 'react';
import {
  UserDrawerContainer,
} from './user-drawer.styles'
import Backdrop from '../../ui/backdrop/backdrop.component';

const UserDrawer = (props) => {
  const { isOpen, setOpen } = props;

  return (
    <>
      <Backdrop onClick={() => setOpen(false)} isOpen={isOpen}/>
      <UserDrawerContainer isOpen>
        hi
      </UserDrawerContainer>
    </>
  );
}

export default UserDrawer;