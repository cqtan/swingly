import React from 'react';
import {
  DropDownContainer,
} from './drop-down.styles'
import { CSSTransition } from 'react-transition-group';


const DropDown = (props) => {
  const { isOpen, transName, children } = props;

  return (
    <CSSTransition
      in={isOpen}
      classNames={transName}
      timeout={300}
      unmountOnExit>
      <DropDownContainer transName={transName}>
        {children}
      </DropDownContainer>
    </CSSTransition>
  );
}

export default DropDown;