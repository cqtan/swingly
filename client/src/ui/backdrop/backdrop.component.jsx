import React from 'react';
import {
  BackdropContainer,
} from './backdrop.styles'
import { CSSTransition } from 'react-transition-group';

const Backdrop = (props) => {
  const { onClick, isOpen, zIndex = 400 } = props;

  return (
    <>
      <CSSTransition
        in={isOpen}
        classNames='backdrop'
        timeout={300}
        unmountOnExit>
        <BackdropContainer zIndex={zIndex} onClick={onClick} transName='backdrop' />
      </CSSTransition>
    </>
  );
}

export default Backdrop;