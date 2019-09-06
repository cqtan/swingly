import React from 'react';
import {
  BackdropContainer,
} from './backdrop.styles'
import { CSSTransition } from 'react-transition-group';

const Backdrop = (props) => {
  const { onClick, isOpen } = props;

  return (
    <>
      <CSSTransition
        in={isOpen}
        classNames='backdrop'
        timeout={300}
        unmountOnExit>
        <BackdropContainer onClick={onClick} transName='backdrop' />
      </CSSTransition>
    </>
  );
}

export default Backdrop;