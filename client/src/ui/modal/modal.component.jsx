import React from 'react';
import {
  ModalContainer, 
  ModalTitle
} from './modal.styles';
import { CSSTransition } from 'react-transition-group';

const Modal = (props) => {
  const { isOpen, transName, direction = '', title, children } = props;
  
  // Fix for preventing body scroll while modal is open (now for mobile too: position fixed)
  let bodyEl = document.body;
  if (isOpen) {
    // bodyEl.style.overflow = 'hidden';
    bodyEl.style.top = `-${window.scrollY}px`;
    bodyEl.style.position = 'fixed';
    if (bodyEl.clientHeight > window.screen.availHeight) {
      bodyEl.style.overflowY = 'scroll';
    }
  } else {
    // bodyEl.style.overflow = 'auto';
    const top = document.body.style.top;
    bodyEl.style.position = '';
    bodyEl.style.top = '';
    window.scrollTo(0, parseInt(top || '0') * -1);
    if (bodyEl.clientHeight > window.screen.availHeight) {
      bodyEl.style.overflowY = '';
    }
  }

  return (
    <>
      <CSSTransition
        in={isOpen}
        classNames={transName}
        timeout={300}
        unmountOnExit>
        <ModalContainer 
          transName={transName} 
          direction={direction}>
          <ModalTitle>{title}</ModalTitle>
          {children}
        </ModalContainer>
      </CSSTransition>
    </>
  );
}

export default Modal;