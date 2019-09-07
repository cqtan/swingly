import React, { useState } from 'react';
import {
  ExampleBgLogoContainer,
  ExampleButton,
  ExampleBgLogo
} from './example-container.styles';
import { CSSTransition } from 'react-transition-group';
import EventDetails from '../../components/events/event-details/event-details.component';
// import { createMockEventsInDb } from '../../redux/events/events.utils';

import axios from 'axios';

const ExampleContainer = (props) => {
  const [isOpen, setOpen] = useState(true);

  const testCall = async () => {
    try {
      const res = await axios.post('/api/data/sample');
      console.log('-----> RES: ', res);
      
    } catch (e) {
      console.log('ERRORRRR: ', e);
    }
  }

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
      <ExampleButton primary onClick={() => testCall()}>Sample</ExampleButton>
      {/* <ExampleButton primary onClick={() => setOpen(!isOpen)}>Toggle</ExampleButton> */}
      {/* <ExampleButton primary onClick={() => createMockEventsInDb(1, 'jYfFcg7Yo3S5pWCviMtijlOidPv1')}>Toggle</ExampleButton> */}
    </>
  );
}


export default ExampleContainer;