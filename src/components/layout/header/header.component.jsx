import React, { useState } from 'react';
import {
  HeaderContainer, 
  Logo,
} from './header.styles';
import Button from '../../ui/button/button.component';
import Sidebar from './sidebar/sidebar.component';

const Header = (props) => {
  const [sideOpen, setSideOpen] = useState(false);  

  return (
    <>
      <HeaderContainer>
        <Button primary onClick={() => setSideOpen(true)}>Nav</Button>
        <Logo>Logo</Logo>
        <Button secondary>Login</Button>
      </HeaderContainer>
      <Sidebar sideOpen={sideOpen} setSideOpen={setSideOpen} />
    </>
  );
}

export default Header;