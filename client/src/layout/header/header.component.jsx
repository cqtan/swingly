import React, { useState } from 'react';
import {
  HeaderContainer,
  HeaderButtons,
  Logo,
  ButtonText,
} from './header.styles';
import { connect } from 'react-redux';
import { compose } from "redux";
import { withRouter } from "react-router-dom";
import queryString from 'query-string';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Sidebar from '../sidebar/sidebar.component';
import UserDrawer from '../user-drawer/user-drawer.component';
import SignIn from '../../components/sign-in/sign-in.component';
import SignUp from '../../components/sign-up/sign-up.component';
import Backdrop from '../../ui/backdrop/backdrop.component';
import { selectCurrentUser } from '../../redux/user/user.selectors';
import { createStructuredSelector } from 'reselect';
import ProfileImage from '../../ui/profile-image/profile-image.component';

export const Header = (props) => {
  const { currentUser, history } = props;
  const params = queryString.parse(history.location.search);

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

  let leftButtonLink = () => setSideOpen(!sideOpen);
  let leftButtonIcon = "bars";
  let leftButtonText = null;

  if (history.location.pathname.includes("/profile")) {
    if (params.user_id !== currentUser) {
      leftButtonIcon = "chevron-left";
      leftButtonLink = () => history.goBack();
      leftButtonText = "Back";
    }
  } else if (history.location.pathname.includes("/event-edit")) {
    leftButtonLink = () => history.push(`/events-agenda`);
    leftButtonIcon = "chevron-left";
    leftButtonText = "Events";
  }

  const LeftHeaderButton = (
    <HeaderButtons onClick={leftButtonLink}>
      <FontAwesomeIcon icon={leftButtonIcon} />
      {leftButtonText && <ButtonText>{leftButtonText}</ButtonText>}
    </HeaderButtons>
  );

  return (
    <>
      <HeaderContainer>
        {LeftHeaderButton}
        <Logo to='/'>Swingly</Logo>
        <HeaderButtons onClick={() => currentUser ? setDrawerOpen(!drawerOpen) : handlePopupToggle()}>
          { currentUser ? 
            <ProfileImage sm /> :
            <FontAwesomeIcon icon='user-circle' size='2x' />
          }
        </HeaderButtons>
      </HeaderContainer>
      <Sidebar isOpen={sideOpen} setOpen={setSideOpen} />
      <Backdrop onClick={() => handlePopupToggle()} isOpen={signInOpen || signUpOpen}/>
      { currentUser ? 
        <UserDrawer isOpen={drawerOpen} setOpen={setDrawerOpen} /> :
        <>
          <SignIn isOpen={signInOpen} setOpen={setSignInOpen} openSignUp={setSignUpOpen} />
          <SignUp isOpen={signUpOpen} setOpen={setSignUpOpen} openSignIn={setSignInOpen} />
        </>
      }
    </>
  );
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
})

export default compose(
  withRouter,
  connect(mapStateToProps)
)(Header);