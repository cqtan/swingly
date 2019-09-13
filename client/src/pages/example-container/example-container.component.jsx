import React, { useState } from 'react';
import {
  ExampleBgLogoContainer,
  ExampleButton,
  ExampleBgLogo
} from './example-container.styles';
import { CSSTransition } from 'react-transition-group';
import EventDetails from '../../components/events/event-details/event-details.component';

const ExampleContainer = (props) => {
  const [isOpen, setOpen] = useState(true);

  return (
    <>
      <CSSTransition 
        in={true}
        classNames='example'
        timeout={300}
        unmountOnExit>
        <ExampleBgLogoContainer transName='example'>
          <ExampleBgLogo>
            S
          </ExampleBgLogo>
        </ExampleBgLogoContainer>
      </CSSTransition>
      <EventDetails isOpen={isOpen} onClose={() => setOpen(false)} />
      <ExampleButton primary onClick={() => setOpen(!isOpen)}>Toggle</ExampleButton>
    </>
  );
}


export default ExampleContainer;