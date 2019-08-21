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

  const { currentUser } = props;

  return (
    <>
      <HeaderContainer>
        <HeaderButtons onClick={() => setSideOpen(true)} flat>
          <FontAwesomeIcon icon='bars' />
        </HeaderButtons>
        <Logo to='/'>Swingly</Logo>
        <HeaderButtons flat onClick={() => currentUser.user ? setDrawerOpen(true) : setSignInOpen(true)}>
         <FontAwesomeIcon icon='user-circle' size='2x' />
        </HeaderButtons>
      </HeaderContainer>
      <Sidebar isOpen={sideOpen} setOpen={setSideOpen} />
      { currentUser.user && <UserDrawer isOpen={drawerOpen} setOpen={setDrawerOpen} /> }
      { signInOpen && <SignIn isOpen={signInOpen} setOpen={setSignInOpen}/>}
      {/* <SignIn isOpen={signInOpen} setOpen={setSignInOpen}/> */}
    </>
  );
}

const mapStateToProps = state => ({
  currentUser: state.user
});

export default connect(mapStateToProps)(Header);