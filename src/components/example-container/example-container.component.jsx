import React from 'react';
import { connect } from 'react-redux';
import {
  ExampleButtonContainer
} from './example-container.styles';
import { toggleTheme } from '../../redux/theme-mode/theme-mode.actions';
import Button from '../ui/button/button.component';

const ExampleContainer = (props) => {
  const { toggleTheme, hi } = props;

  return (
    <>
      <ExampleButtonContainer>
        { hi && <h2>Hello!</h2> }
        <Button primary onClick={toggleTheme}>Touch Me!</Button>
      </ExampleButtonContainer>
    </>
  );
}

const mapDispatchToProps = dispatch => ({
  toggleTheme: () => dispatch(toggleTheme())
})

export default connect(null, mapDispatchToProps)(ExampleContainer);