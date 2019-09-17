import React from 'react';
import { shallow, mount } from 'enzyme';
import ConnectedSidebar, { Sidebar } from './sidebar.component';
import Root from '../../Root';
import { MemoryRouter } from 'react-router-dom';

describe('Sidebar component', () => {
  let wrapper = null;
  let mockProps = null;
  let mockSetOpen = null;
  let mockToggleTheme = null;
  let mockIsDarkMode = null;
  let mockCurrentUser = null;
  let mockOpenSnackbar = null;
  let mockHistory = null;
  
  beforeEach(() => {
    mockSetOpen = jest.fn();
    mockToggleTheme = jest.fn();
    mockHistory = {
      location: {
        pathname: '/'
      }
    }

    mockProps = {
      isOpen: true,
      setOpen: mockSetOpen,
      toggleTheme: mockToggleTheme,
      history: mockHistory
    };

    const initialState = {
      themeMode: { darkMode: false }
    }
    
    wrapper = mount(
      <Root initialState={initialState}>
        <MemoryRouter initialEntries={['/']}>
          <ConnectedSidebar {...mockProps} />
        </MemoryRouter>
      </Root>
    );
  });

  afterEach(() => {
    wrapper.unmount();
  });

  it('should render the Sidebar component', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should call the setOpen function on Backdrop click event', () => {
    wrapper.find('Backdrop').simulate('click');
    expect(mockSetOpen).toHaveBeenCalled();
  });

  it('should call the setOpen function on all SideButton (exept last one) click events.', () => {
    const sidebarButtons = wrapper.find('SidebarButton');

    sidebarButtons.forEach(btn => {
      btn.simulate('click');
    })

    expect(mockSetOpen).toHaveBeenCalledTimes(sidebarButtons.length - 1);     
  });

  it('should call the toggleTheme function on last SideButton click event.', () => {
    wrapper = shallow(<Sidebar {...mockProps} />);
    wrapper.find('SidebarButton').last().simulate('click');
    expect(mockToggleTheme).toHaveBeenCalled();
  });

  it('should change text of theme button from "Light Mode" to "Dark Mode".', () => {
    const lastButton = wrapper.find('SidebarButton').last();
    expect(lastButton.text()).toContain('Dark Mode');
  
    lastButton.simulate('click');
    expect(lastButton.text()).toContain('Light Mode');    
  });
  

});