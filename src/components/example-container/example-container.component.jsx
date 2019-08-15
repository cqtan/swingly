import React from 'react';
import { connect } from 'react-redux';
import {
  ExampleButtonContainer,
  ExampleButton
} from './example-container.styles';
import { toggleTheme } from '../../redux/theme-mode/theme-mode.actions';

const ExampleContainer = (props) => {
  const { toggleTheme } = props;

  return (
    <>
      <ExampleButtonContainer>
        <ExampleButton onClick={toggleTheme}>Touch Me!</ExampleButton>
      </ExampleButtonContainer>
    </>
  );
}

const mapDispatchToProps = dispatch => ({
  toggleTheme: () => dispatch(toggleTheme())
})

export default connect(null, mapDispatchToProps)(ExampleContainer);