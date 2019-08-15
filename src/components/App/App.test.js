import React from 'react';
import { App } from './App';
import { shallow } from 'enzyme';

describe('App component', () => {
  let wrapper;
  const mockThemeMode = { darkMode: true };
  const mockProps = {
    themeMode: mockThemeMode
  };

  wrapper = shallow(<App {...mockProps}/>);

  it('should render', () => {
    expect(wrapper).toMatchSnapshot();
  });
});


