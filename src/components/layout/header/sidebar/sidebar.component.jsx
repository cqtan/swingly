import React from 'react';
import {
  SidebarContainer,
  SidebarHeader,
  SidebarButton
} from './sidebar.styles';
import { Link } from 'react-router-dom';
import Backdrop from '../../../ui/backdrop/backdrop.component';

const Sidebar = (props) => {
  const { sideOpen, setSideOpen } = props;

  return (
    <>
      <Backdrop onClick={() => setSideOpen(false)} isOpen={sideOpen}/>
      <SidebarContainer sideOpen={sideOpen}>
        <SidebarHeader>Navigation</SidebarHeader>
        <SidebarButton onClick={() => setSideOpen(false)} as={Link} strech to='/'>Home</SidebarButton>
        <SidebarButton onClick={() => setSideOpen(false)} as={Link} strech to='/hi'>Hi</SidebarButton>
        <SidebarButton onClick={() => setSideOpen(false)} as={Link} strech to=''>Nope</SidebarButton>
        <SidebarButton onClick={() => setSideOpen(false)} as={Link} strech to="/">Home 2</SidebarButton>
      </SidebarContainer>
    </>
  );
}

export default Sidebar;