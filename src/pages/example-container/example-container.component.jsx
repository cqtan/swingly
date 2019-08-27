import React from 'react';
import { connect } from 'react-redux';
import {
  ExampleButtonContainer
} from './example-container.styles';
import { toggleTheme } from '../../redux/theme-mode/theme-mode.actions';
import Button from '../../ui/button/button.component';
import Snackbar from '../../ui/snackbar/snackbar.component';

const ExampleContainer = (props) => {
  const { toggleTheme, hi } = props;

  return (
    <>
      <ExampleButtonContainer>
        { hi && <h2>Hello!</h2> }
        <Button primary onClick={toggleTheme}>Touch Me!</Button>
      </ExampleButtonContainer>
      <Snackbar 
        type='success' 
        text='This is quite a long text for a snackbar, especially since this is nonsense!' />
    </>
  );
}

const mapDispatchToProps = dispatch => ({
  toggleTheme: () => dispatch(toggleTheme())
})

export default connect(null, mapDispatchToProps)(ExampleContainer);