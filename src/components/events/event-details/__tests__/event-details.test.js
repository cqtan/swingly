import React from 'react';
import { EventDetails } from '../event-details.component';
import { shallow, mount } from 'enzyme';
import Root from '../../../../Root';
import renderer from 'react-test-renderer';

describe('Event Details Component', () => {
  // let wrapper;

  it('should render correctly', () => {
    const tree = renderer.create(<EventDetails />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});