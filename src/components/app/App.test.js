import React from 'react';
import { App } from './App';
import { shallow } from 'enzyme';

describe('App component', () => {
  let wrapper;
  const mockThemeMode = { darkMode: true };
  const mockProps = {
    themeMode: mockThemeMode,
    snackbar: {
      type: '',
      text: '',
      isOpen: false
    },
    setCurrentUser: () => null
  };

  wrapper = shallow(<App {...mockProps}/>);

  it('should render', () => {
    expect(wrapper).toMatchSnapshot();
  });
});


