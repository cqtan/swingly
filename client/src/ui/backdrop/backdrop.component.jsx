import React from 'react';
import {
  BackdropContainer,
} from './backdrop.styles'
import { CSSTransition } from 'react-transition-group';

const Backdrop = (props) => {
  const { onClick, isOpen, zIndex = 400 } = props;
  const componentName = "backdrop";

  return (
    <>
      <CSSTransition
        in={isOpen}
        classNames={componentName}
        timeout={300}
        unmountOnExit>
        <BackdropContainer 
          zIndex={zIndex} 
          onClick={onClick} 
          transName={componentName} 
          data-testid={componentName} />
      </CSSTransition>
    </>
  );
}

export default Backdrop;