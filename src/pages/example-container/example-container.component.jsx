import React, { useState } from 'react';
import { connect } from 'react-redux';
import {
  ExampleButtonContainer,
  ExampleButton
} from './example-container.styles';
import { toggleTheme } from '../../redux/theme-mode/theme-mode.actions';
import Button from '../../ui/button/button.component';
import { CSSTransition } from 'react-transition-group';

const ExampleContainer = (props) => {
  const { toggleTheme, hi } = props;
  const [isOpen, setOpen] = useState(false);

  return (
    <>
      <CSSTransition 
        in={isOpen}
        classNames='example'
        timeout={300}
        unmountOnExit>
          
          <ExampleButtonContainer>
            { hi && <h2>Hello!</h2> }
            <Button primary onClick={toggleTheme}>Touch Me!</Button>
          </ExampleButtonContainer>
          
      </CSSTransition>
      <ExampleButton primary onClick={() => setOpen(!isOpen)}>Toggle</ExampleButton>
    </>
  );
}

const mapDispatchToProps = dispatch => ({
  toggleTheme: () => dispatch(toggleTheme())
})

export default connect(null, mapDispatchToProps)(ExampleContainer);