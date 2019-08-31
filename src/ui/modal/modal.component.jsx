import React from 'react';
import {
  ModalContainer, 
  ModalTitle,
} from './modal.styles';
import { CSSTransition } from 'react-transition-group';

const Modal = (props) => {
  const { isOpen, transName, direction = '', title, children } = props;

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