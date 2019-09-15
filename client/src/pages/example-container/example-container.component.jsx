import React, { useState } from 'react';
import {
  ExampleBgLogoContainer,
  ExampleButton,
  ExampleBgLogo,
  ExampleContent
} from './example-container.styles';
import { CSSTransition } from 'react-transition-group';
import DateTimeField from '../../ui/form-elements/date-time-field/date-time-field.component';
import TextField from '../../ui/form-elements/text-field/text-field.component';

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
            <TextField 
              name='username'
              label='Username'
              onChange={(e) => console.log('heeeey')}
              value={'Blob'}
            />
            <br></br>
            <br></br>
            <DateTimeField 
              name='start'
              label='Start Date'
              value={new Date()}
              onChange={() => console.log('eeeey')}
              disablePast
            />
          </ExampleContent>
        </>
      </CSSTransition>
      <ExampleButton primary onClick={() => setOpen(!isOpen)}>Toggle</ExampleButton>
    </>
  );
}


export default ExampleContainer;