import React from 'react';
import {
  FormButtonContainer,
} from './form-button.styles'

const FormButton = (props) => {
  const { children,  } = props;

  return (
    <>
      <FormButtonContainer {...props}>
        {children}
      </FormButtonContainer>
    </>
  );
}

export default FormButton;