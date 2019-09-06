import React from 'react';
import {
  DropDownContainer,
  DropDownContent
} from './drop-down.styles'
// import { CSSTransition } from 'react-transition-group';


const DropDown = (props) => {
  const { isOpen, contentHeight, children } = props;

  return (
    <DropDownContainer isOpen={isOpen} contentHeight={contentHeight}>
      <DropDownContent isOpen={isOpen} contentHeight={contentHeight}>
        {children}
      </DropDownContent>
    </DropDownContainer>
  );
}

export default DropDown;