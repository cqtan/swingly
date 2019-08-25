import React from 'react';
import {
  UserDrawerContainer,
  DrawerButton,
} from './user-drawer.styles'
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { signOut } from '../../redux/user/user.actions';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Backdrop from '../../ui/backdrop/backdrop.component';

const UserDrawer = (props) => {
  const { isOpen, setOpen, signOut } = props;

  return (
    <>
      <Backdrop onClick={() => setOpen(false)} isOpen={isOpen}/>
      <UserDrawerContainer isOpen={isOpen}>
        <DrawerButton flat>
          <FontAwesomeIcon icon='user-circle' />
          <Link to='/profile'>Profile</Link>
        </DrawerButton>
        <hr />
        <DrawerButton flat onClick={() => signOut()}>
          <FontAwesomeIcon icon='sign-out-alt' />
          Signout
        </DrawerButton>
      </UserDrawerContainer>
    </>
  );
}

const mapDispatchToProps = {
  signOut
}

export default connect(null, mapDispatchToProps)(UserDrawer);