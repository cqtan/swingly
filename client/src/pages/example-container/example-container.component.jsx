import React, { useState } from 'react';
import {
  ExampleBgLogoContainer,
  ExampleButton,
  ExampleBgLogo,
  ExampleContent
} from './example-container.styles';
import { CSSTransition } from 'react-transition-group';
import DateTimeInput from '../../ui/form-elements/date-time-input/date-time-input.component';

const ExampleContainer = (props) => {
  const [isOpen, setOpen] = useState(true);

  return (
    <>
      <CSSTransition 
        in={true}
        classNames='example'
        timeout={300}
        unmountOnExit>
        <>
          <ExampleBgLogoContainer transName='example'>
            <ExampleBgLogo>
              S
            </ExampleBgLogo>
          </ExampleBgLogoContainer>
          <ExampleContent>
            <DateTimeInput />
          </ExampleContent>
        </>
      </CSSTransition>
      <ExampleButton primary onClick={() => setOpen(!isOpen)}>Toggle</ExampleButton>
    </>
  );
}


export default ExampleContainer;