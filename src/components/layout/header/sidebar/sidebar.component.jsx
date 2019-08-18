import React from 'react';
import {
  SidebarContainer,
  SidebarHeader,
  SidebarButton
} from './sidebar.styles';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Backdrop from '../../../ui/backdrop/backdrop.component';
import { toggleTheme } from '../../../../redux/theme-mode/theme-mode.actions';

const Sidebar = (props) => {
  const { sideOpen, setSideOpen, toggleTheme, themeMode } = props;
  const toggleThemeText = themeMode.darkMode ? 'Light Mode' : 'Dark Mode';

  return (
    <>
      <Backdrop onClick={() => setSideOpen(false)} isOpen={sideOpen}/>
      <SidebarContainer sideOpen={sideOpen}>
        <SidebarHeader>Navigation</SidebarHeader>
        <SidebarButton onClick={() => setSideOpen(false)} as={Link} strech to='/'>Home</SidebarButton>
        <SidebarButton onClick={() => setSideOpen(false)} as={Link} strech to='/hi'>Hi</SidebarButton>
        <SidebarButton onClick={() => setSideOpen(false)} as={Link} strech to=''>Nope</SidebarButton>
        <SidebarButton onClick={() => setSideOpen(false)} as={Link} strech to="/">Home 2</SidebarButton>
        <SidebarButton onClick={() => toggleTheme()} flat>{toggleThemeText}</SidebarButton>
      </SidebarContainer>
    </>
  );
}

const mapStateToProps = state => ({
  themeMode: state.themeMode
});

const mapDispatchToProps = dispatch => ({
  toggleTheme: () => dispatch(toggleTheme())
});

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);