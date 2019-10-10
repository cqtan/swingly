import React from 'react';
import {
  SpinnerContainer,
} from './spinner.styles'
import PropagateLoader from 'react-spinners/PropagateLoader';

const Spinner = (props) => {
  const { loading, size } = props;

  return (
    <SpinnerContainer data-testid="spinner">
      <PropagateLoader 
        sizeUnit={"px"}
        size={size}
        color={'#FFC107'}
        loading={loading}
      />
    </SpinnerContainer>
  );
}

export default Spinner;