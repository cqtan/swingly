import React, { useState } from 'react';
import {
  ExampleBgLogoContainer,
  ExampleButton,
  ExampleBgLogo
} from './example-container.styles';
import { CSSTransition } from 'react-transition-group';

const ExampleContainer = (props) => {
  const [isOpen, setOpen] = useState(true);

  return (
    <>
      <CSSTransition 
        in={isOpen}
        classNames='example'
        timeout={300}
        unmountOnExit>
        <ExampleBgLogoContainer transName='example'>
          <ExampleBgLogo>
            S
          </ExampleBgLogo>
        </ExampleBgLogoContainer>
      </CSSTransition>
      <ExampleButton primary onClick={() => setOpen(!isOpen)}>Toggle</ExampleButton>
    </>
  );
}


export default ExampleContainer;