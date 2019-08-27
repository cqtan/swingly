import React from 'react';
import {
  SidebarContainer,
  SidebarHeader,
  SidebarButton
} from './sidebar.styles';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Backdrop from '../../ui/backdrop/backdrop.component';
import { toggleTheme } from '../../redux/theme-mode/theme-mode.actions';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Sidebar = (props) => {
  const { isOpen, setOpen, toggleTheme, themeMode } = props;
  const toggleThemeIcon = themeMode.darkMode ? <FontAwesomeIcon icon='sun' /> : <FontAwesomeIcon icon='moon' />;
  const toggleThemeText = themeMode.darkMode ? 'Light Mode' : 'Dark Mode';

  return (
    <>
      <Backdrop onClick={() => setOpen(false)} isOpen={isOpen}/>
      <SidebarContainer isOpen={isOpen}>
        <SidebarHeader>Navigation</SidebarHeader>
        <SidebarButton onClick={() => setOpen(false)} as={Link} to='/'>
          <FontAwesomeIcon icon='home' />
          Home
        </SidebarButton>
        <SidebarButton onClick={() => setOpen(false)} as={Link} to='/hi'>
          <FontAwesomeIcon icon='hat-wizard' />
          Hi
        </SidebarButton>
        <SidebarButton onClick={() => setOpen(false)} as={Link} to='/'>
          <FontAwesomeIcon icon='hat-wizard' />
          Nope
        </SidebarButton>
        <SidebarButton onClick={() => toggleTheme()} flat>
          {toggleThemeIcon}{toggleThemeText}
        </SidebarButton>
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