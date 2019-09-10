import React from 'react';
import { App } from './App';
import { shallow, mount } from 'enzyme';
import Root from '../../Root';

xdescribe('App component', () => {
  let wrapper;
  let mockSetCurrentUser = () => undefined;
  let mockSetUsers = () => undefined;
  let mockfetchEvents = () => undefined;

  const mountComponent = () => {
    const mockProps = {
      snackbar: {},
      setCurrentUser: mockSetCurrentUser,
      fetchEvents: mockfetchEvents,
      setUsers: mockSetUsers
    };

    wrapper = mount(
      <Root>
        <App {...mockProps} />
      </Root>
    )
  };

  afterEach(() => {
    mockSetCurrentUser = () => undefined;
    mockfetchEvents = () => undefined;
    mockSetUsers = () => undefined;
  });

  it('should render', () => {
    const mockProps = {
      snackbar: {},
      setCurrentUser: mockSetCurrentUser,
      fetchEvents: mockfetchEvents
    };

    wrapper = shallow(<App {...mockProps} /> );

    expect(wrapper.debug()).toMatchSnapshot();
  });

  it('should call setCurrentUser on mount only', () => {
    mockSetCurrentUser = jest.fn();
    
    mountComponent();

    expect(mockSetCurrentUser).toHaveBeenCalledTimes(1);
  });

  it('should call fetchEvents on mount only', () => {
    mockfetchEvents = jest.fn();
    
    mountComponent();
    
    expect(mockfetchEvents).toHaveBeenCalledTimes(1);
  });

  it('should call setUsers on mount only', () => {
    mockSetUsers = jest.fn();
    
    mountComponent();
    
    expect(mockSetUsers).toHaveBeenCalledTimes(1);
  });
});


