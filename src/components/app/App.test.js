import React from 'react';
import { App } from './App';
import { shallow } from 'enzyme';

describe('App component', () => {
  console.log('env: ', process.env.NODE_ENV);
  
  let wrapper;
  const mockThemeMode = { darkMode: true };
  const mockProps = {
    themeMode: mockThemeMode,
    snackbar: {
      type: '',
      text: '',
      isOpen: false
    }
  };

  wrapper = shallow(<App {...mockProps}/>);

  it('should render', () => {
    console.log('env: ', process.env.NODE_ENV);

    expect(wrapper).toMatchSnapshot();
  });
});


