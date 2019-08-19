import React, { useState } from 'react';
import {
  HeaderContainer,
  HeaderButtons,
  Logo,
} from './header.styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Sidebar from './sidebar/sidebar.component';

const Header = (props) => {
  const [sideOpen, setSideOpen] = useState(false);  

  return (
    <>
      <HeaderContainer>
        <HeaderButtons onClick={() => setSideOpen(true)} flat>
          <FontAwesomeIcon icon='bars' />
        </HeaderButtons>
        <Logo flat to='/'>Swingly</Logo>
        <HeaderButtons flat>
         <FontAwesomeIcon icon='user-circle' size='2x' />
        </HeaderButtons>
      </HeaderContainer>
      <Sidebar sideOpen={sideOpen} setSideOpen={setSideOpen} />
    </>
  );
}

export default Header;