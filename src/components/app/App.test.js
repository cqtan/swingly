import React from 'react';
import { App } from './App';
import { shallow, mount } from 'enzyme';
import Root from '../../Root';

describe('App component', () => {
  let wrapper;
  let mockSetCurrentUser;
  let mockfetchEvents;

  beforeEach(() => {
    mockSetCurrentUser = jest.fn();
    mockfetchEvents = jest.fn();

    const mockProps = {
      snackbar: {},
      setCurrentUser: mockSetCurrentUser,
      fetchEvents: mockfetchEvents
    };

    wrapper = mount(
      <Root>
        <App {...mockProps} />
      </Root>
    )
  });

  it('should render', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should call setCurrentUser on mount only', () => {
    expect(mockSetCurrentUser).toHaveBeenCalledTimes(1);
  });
});


