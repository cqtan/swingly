import React from 'react';
import {
  BackdropContainer,
} from './backdrop.styles'

const Backdrop = (props) => {
  const { onClick, isOpen } = props;

  return (
    <>
      <BackdropContainer onClick={onClick} isOpen={isOpen} />
    </>
  );
}

export default Backdrop;