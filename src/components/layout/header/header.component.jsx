import React from 'react';
import {
  HeaderContainer, 
  Logo,
} from './header.styles';
import Button from '../../ui/button/button.component';
import Sidebar from './sidebar/sidebar.component';

const Header = (props) => {
  return (
    <>
      <HeaderContainer>
        <Button primary>Nav</Button>
        <Logo>Logo</Logo>
        <Button secondary>Login</Button>
      </HeaderContainer>
      <Sidebar />
    </>
  );
}

export default Header;