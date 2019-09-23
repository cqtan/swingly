import React from 'react';
import {
  ExampleBgLogoContainer,
  // ExampleButton,
  ExampleBgLogo,
  // ExampleContent
} from './example-container.styles';
import { CSSTransition } from 'react-transition-group';
// import UsersFilter from '../../components/users-components/users-filter/users-filter.component';

const ExampleContainer = (props) => {
  // const [isOpen, setOpen] = useState(true);

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
        </>
      </CSSTransition>
      {/* <ExampleButton primary onClick={() => setOpen(!isOpen)}>Toggle</ExampleButton> */}
    </>
  );
}


export default ExampleContainer;