import React from 'react';
import {
  SpinnerContainer,
} from './spinner.styles'
import PacmanLoader from 'react-spinners/PacmanLoader';

const Spinner = (props) => {
  const { loading, size } = props;

  return (
    <SpinnerContainer>
      <PacmanLoader 
        sizeUnit={"px"}
        size={size}
        color={'#FFC107'}
        loading={loading}
      />
    </SpinnerContainer>
  );
}

export default Spinner;