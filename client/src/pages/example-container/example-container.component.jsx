import React, { useState } from 'react';
import {
  ExampleBgLogoContainer,
  ExampleButton,
  ExampleBgLogo
} from './example-container.styles';
import { CSSTransition } from 'react-transition-group';
import EventDetails from '../../components/events/event-details/event-details.component';
import { setUsers } from '../../redux/user/user.actions';
// import { createMockEventsInDb } from '../../redux/events/events.utils';
// import { scrapeEvents } from '../../redux/events/events.utils';

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
      <ExampleButton primary onClick={() => setUsers()}>Sample</ExampleButton>
      {/* <ExampleButton primary onClick={() => scrapeEvents(12)}>Sample</ExampleButton> */}
      {/* <ExampleButton primary onClick={() => setOpen(!isOpen)}>Toggle</ExampleButton> */}
      {/* <ExampleButton primary onClick={() => createMockEventsInDb(1, 'jYfFcg7Yo3S5pWCviMtijlOidPv1')}>Toggle</ExampleButton> */}
    </>
  );
}


export default ExampleContainer;