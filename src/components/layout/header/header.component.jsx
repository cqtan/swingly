import React from 'react';
import {
  HeaderContainer, 
  Logo,
} from './header.styles';
import Button from '../../ui/button/button.component';

const Header = (props) => {
  return (
    <>
      <HeaderContainer>
        <Button>Button</Button>
        <Logo>Logo</Logo>
        <Button>Button</Button>
      </HeaderContainer>
    </>
  );
}

export default Header;