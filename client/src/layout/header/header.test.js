import React from 'react';
import { shallow } from 'enzyme';
import { Header } from './header.component.jsx';

describe('Header', () => {
  let wrapper = null;
  let currentUser = null;
  let history = {
    location: {
      pathname: [],
      search: ""
    }
  }
  
  beforeEach(() => {
    const mockProps = {
      currentUser,
      history
    }

    wrapper = shallow(<Header {...mockProps} />);
  });

  afterEach(() => {
    currentUser = null;
  });

  it('should render the Header', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should render the HeaderProfile component if currentUser is defined.', () => {
    currentUser = { username: 'testName' };

    expect(wrapper).toMatchSnapshot();
  });
});