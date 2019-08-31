import React from 'react';
import { shallow, mount } from 'enzyme';
// import Sidebar from './sidebar.component';
import { Sidebar } from './sidebar.component';
import Root from '../../Root';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import rootReducer from '../../redux/root-reducer';



describe('Sidebar component', () => {
  let wrapper;
  let isDarkMode = false;
  const mockSetOpen = jest.fn();
  const mockToggleTheme = jest.fn();

  beforeEach(() => {
    const mockProps = {
      isDarkMode,
      isOpen: true,
      setOpen: mockSetOpen,
      toggleTheme: mockToggleTheme
    };

    const initialState = {
      themeMode: { darkMode: false }
    }
    
    const store = createStore(rootReducer, initialState);

    // TODO: Move Theme Provider to Root instead of App

    // wrapper = mount(
    //   <Provider store={store}>
    //     <Sidebar {...mockProps} />
    //   </Provider>
    // );

    wrapper = shallow(<Sidebar {...mockProps} />)
  });

  afterEach(() => {
    isDarkMode = false;
  });

  it('should render the Sidebar component', () => {
    expect(wrapper).toMatchSnapshot();
  });

  // it('should call the setOpen function on SideButton click event.', () => {
  //   wrapper.find('SidebarButton').at(0).simulate('click');
  //   expect(mockSetOpen).toHaveBeenCalled();     
  // });

  // it('should call the toggleTheme function on last SideButton click event.', () => {
  //   wrapper.find('SidebarButton').last().simulate('click');
  //   expect(mockToggleTheme).toHaveBeenCalled();
  // });

  // it('should change text of theme button from "Light Mode" to "Dark Mode".', () => {
  //   const lastButton = wrapper.find('SidebarButton').last();
  //   expect(lastButton.text()).toContain('Light Mode');

  //   lastButton.simulate('click');    
  //   expect(lastButton.text()).toContain('Dark Mode');
  // });






});