import React, { useState } from 'react';
import {
  HeaderContainer,
  HeaderButtons,
  Logo,
} from './header.styles';
import Button from '../../ui/button/button.component';
import Sidebar from './sidebar/sidebar.component';

const Header = (props) => {
  const [sideOpen, setSideOpen] = useState(false);  

  return (
    <>
      <HeaderContainer>
        <HeaderButtons onClick={() => setSideOpen(true)} flat>Nav</HeaderButtons>
        <Logo>Logo</Logo>
        <HeaderButtons secondary>Login</HeaderButtons>
      </HeaderContainer>
      <Sidebar sideOpen={sideOpen} setSideOpen={setSideOpen} />
    </>
  );
}

export default Header;