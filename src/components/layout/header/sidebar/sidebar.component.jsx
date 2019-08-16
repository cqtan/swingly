import React from 'react';
import {
  SidebarContainer,
  SidebarButton
} from './sidebar.styles';
import Link from '../../../ui/link/link.component';
import Backdrop from '../../../ui/backdrop/backdrop.component';

const Sidebar = (props) => {
  return (
    <>
      <Backdrop />
      <SidebarContainer>
        <h2>Navigation</h2>
        <Link to='/'>Home</Link>
        <Link to='/hi'>Hi</Link>
        <Link to=''>Nope</Link>
        <SidebarButton>Link 3</SidebarButton>

      </SidebarContainer>
    </>
  );
}

export default Sidebar;