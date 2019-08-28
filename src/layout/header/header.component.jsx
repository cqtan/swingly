import React, { useState } from 'react';
import {
  HeaderContainer,
  HeaderButtons,
  HeaderProfile,
  Logo,
} from './header.styles';
import { connect } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Sidebar from '../sidebar/sidebar.component';
import UserDrawer from '../user-drawer/user-drawer.component';
import SignIn from '../../components/sign-in/sign-in.component';
import SignUp from '../../components/sign-up/sign-up.component';
import Backdrop from '../../ui/backdrop/backdrop.component';

const Header = (props) => {
  const [sideOpen, setSideOpen] = useState(false);
  const [signInOpen, setSignInOpen] = useState(false);
  const [signUpOpen, setSignUpOpen] = useState(false);  
  const [drawerOpen, setDrawerOpen] = useState(false);

  const handlePopupToggle = () => {
    if (signInOpen || signUpOpen) {
      setSignInOpen(false);
      setSignUpOpen(false);
    } else {
      setSignInOpen(true);
    }
  }

  const { user } = props;

  return (
    <>
      <HeaderContainer>
        <HeaderButtons onClick={() => setSideOpen(!sideOpen)} flat>
          <FontAwesomeIcon icon='bars' />
        </HeaderButtons>
        <Logo to='/'>Swingly</Logo>
        <HeaderButtons flat onClick={() => user.currentUser ? setDrawerOpen(!drawerOpen) : handlePopupToggle()}>
          { user.currentUser ? 
            <HeaderProfile src='http://lorempixel.com/400/200/cats' /> :
            <FontAwesomeIcon icon='user-circle' size='2x' />
          }
        </HeaderButtons>
      </HeaderContainer>
      <Sidebar isOpen={sideOpen} setOpen={setSideOpen} />
      <Backdrop onClick={() => handlePopupToggle()} isOpen={signInOpen || signUpOpen}/>
      { user.currentUser ? 
        <UserDrawer isOpen={drawerOpen} setOpen={setDrawerOpen} /> :
        <>
          <SignIn isOpen={signInOpen} setOpen={setSignInOpen} openSignUp={setSignUpOpen} />
          <SignUp isOpen={signUpOpen} setOpen={setSignUpOpen} openSignIn={setSignInOpen} />
        </>
      }
    </>
  );
}

const mapStateToProps = state => ({
  user: state.user
});

export default connect(mapStateToProps)(Header);