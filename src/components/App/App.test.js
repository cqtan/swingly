import React from './node_modules/react';
import { App } from './App';
import { shallow } from './node_modules/enzyme';

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


