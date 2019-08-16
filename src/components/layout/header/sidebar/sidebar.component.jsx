import React from 'react';
import {
  SidebarContainer,
  SidebarButton
} from './sidebar.styles';
import Link from '../../../ui/link/link.component';

const Sidebar = (props) => {
  return (
    <>
      <SidebarContainer>
        <h2>Navigation</h2>
        <Link primary='true' to='/'>Home</Link>
        <Link secondary='true' to='/hi'>Hi</Link>
        <Link to=''>Nope</Link>
        <SidebarButton>Link 3</SidebarButton>

      </SidebarContainer>
    </>
  );
}

export default Sidebar;