import React from 'react';
import ConnectedEventDetails, { EventDetails } from '../event-details.component';
import { shallow, mount } from 'enzyme';
import Root from '../../../../Root';
import renderer from 'react-test-renderer';

describe('Event Details Component', () => {
  let wrapper = null;
  let mockProps = null;
  let mockOnClose = null;
  let mockEvents = null;
  
  beforeEach(() => {
    mockOnClose = jest.fn();
    mockEvents = {};

    mockProps = {
      isOpen: true,
      onClose: mockOnClose,
      events: mockEvents
    };

    const initialState = {
      themeMode: { darkMode: false }
    }
    
    wrapper = mount(
      <Root initialState={initialState}>
        <ConnectedEventDetails {...mockProps} />
      </Root>
    );
  });

  it('should render correctly', () => {
    mockProps = {
      isOpen: true,
      onClose: mockOnClose,
      events: mockEvents
    };

    const tree = renderer.create(<EventDetails {...mockProps} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});