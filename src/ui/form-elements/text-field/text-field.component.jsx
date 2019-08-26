import React from 'react';
import {
  TextFieldContainer,
  TextFieldLabel,
  TextFieldInput,
  HelperText
} from './text-field.styles'

const TextField = (props) => {
  const { label, helperText, ...otherProps } = props;
  return (
    <TextFieldContainer>
      <TextFieldInput {...otherProps} />
      <TextFieldLabel>{label}</TextFieldLabel>
      <HelperText>{helperText}</HelperText>
    </TextFieldContainer>
  );
}

export default TextField;