import React from 'react';
import {
  UserDrawerContainer,
  DrawerButton,
} from './user-drawer.styles'
import { connect } from 'react-redux';
import { compose } from 'redux';
import { signOut } from '../../redux/user/user.actions';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Backdrop from '../../ui/backdrop/backdrop.component';
import { withRouter } from 'react-router-dom';
import { createStructuredSelector } from 'reselect';
import { selectCurrentUser } from '../../redux/user/user.selectors';

const UserDrawer = (props) => {
  const { isOpen, setOpen, signOut, history, currentUser } = props;

  const handleLink = linkPath => {
    setOpen(false);
    history.push(linkPath);
  }

  const handleSignOut = () => {
    setOpen(false);
    signOut();
    history.push('/');
  }

  return (
    <>
      <Backdrop onClick={() => setOpen(false)} isOpen={isOpen}/>
      <UserDrawerContainer isOpen={isOpen}>
        <DrawerButton transparent flat onClick={() => handleLink(`/profile?user_id=${currentUser}`)}>
          <FontAwesomeIcon icon='user-circle' />
          Profile
        </DrawerButton>
        <hr />
        <DrawerButton transparent flat onClick={handleSignOut}>
          <FontAwesomeIcon icon='sign-out-alt' />
          Signout
        </DrawerButton>
      </UserDrawerContainer>
    </>
  );
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
});

const mapDispatchToProps = {
  signOut
}

export default compose(
  withRouter,
  connect(mapStateToProps, mapDispatchToProps)
)(UserDrawer);