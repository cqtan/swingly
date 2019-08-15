import React from 'react';
import { connect } from 'react-redux';
import {
  ButtonContainer,
  Button
} from './example-container.styles';
import { toggleTheme } from '../../redux/theme-mode/theme-mode.actions';

const ExampleContainer = (props) => {
  const { toggleTheme } = props;

  return (
    <>
      <ButtonContainer>
        <Button onClick={toggleTheme}>Touch Me!</Button>
      </ButtonContainer>
    </>
  );
}

const mapDispatchToProps = dispatch => ({
  toggleTheme: () => dispatch(toggleTheme())
})

export default connect(null, mapDispatchToProps)(ExampleContainer);