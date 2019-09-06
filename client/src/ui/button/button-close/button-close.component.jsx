import React from 'react';
import {
  ButtonCloseContainer,
} from './button-close.styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const ButtonClose = (props) => {
  const { onClick } = props;

  return (
    <>
      <ButtonCloseContainer onClick={onClick} >
        <FontAwesomeIcon icon="times" />
      </ButtonCloseContainer>
    </>
  );
}

export default ButtonClose;