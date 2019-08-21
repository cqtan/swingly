import React from 'react';
import {
  UserDrawerContainer,
  DrawerButton,
} from './user-drawer.styles'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Backdrop from '../../ui/backdrop/backdrop.component';

const UserDrawer = (props) => {
  const { isOpen, setOpen } = props;

  return (
    <>
      <Backdrop onClick={() => setOpen(false)} isOpen={isOpen}/>
      <UserDrawerContainer isOpen={isOpen}>
        <DrawerButton flat>
          <FontAwesomeIcon icon='user-circle' />
          Profile
        </DrawerButton>
        <hr />
        <DrawerButton flat>
          <FontAwesomeIcon icon='sign-out-alt' />
          Signout
        </DrawerButton>
      </UserDrawerContainer>
    </>
  );
}

export default UserDrawer;