import React, { useState } from 'react';
import {
  HeaderContainer,
  HeaderButtons,
  Logo,
} from './header.styles';
import { connect } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Sidebar from '../sidebar/sidebar.component';
import UserDrawer from '../user-drawer/user-drawer.component';
import SignIn from '../../components/sign-in/sign-in.component';

const Header = (props) => {
  const [sideOpen, setSideOpen] = useState(false);
  const [signInOpen, setSignInOpen] = useState(false);  
  const [drawerOpen, setDrawerOpen] = useState(false);

  const { user } = props;

  return (
    <>
      <HeaderContainer>
        <HeaderButtons onClick={() => setSideOpen(!sideOpen)} flat>
          <FontAwesomeIcon icon='bars' />
        </HeaderButtons>
        <Logo to='/'>Swingly</Logo>
        <HeaderButtons flat onClick={() => user.currentUser ? setDrawerOpen(!drawerOpen) : setSignInOpen(!signInOpen)}>
         <FontAwesomeIcon icon='user-circle' size='2x' />
        </HeaderButtons>
      </HeaderContainer>
      <Sidebar isOpen={sideOpen} setOpen={setSideOpen} />
      { user.currentUser ? 
        <UserDrawer isOpen={drawerOpen} setOpen={setDrawerOpen} /> :
        <SignIn isOpen={signInOpen} setOpen={setSignInOpen} />
      }
      {/* { signInOpen && <SignIn isOpen={signInOpen} setOpen={setSignInOpen}/>} */}
      {/* <SignIn isOpen={signInOpen} setOpen={setSignInOpen}/> */}
    </>
  );
}

const mapStateToProps = state => ({
  user: state.user
});

export default connect(mapStateToProps)(Header);