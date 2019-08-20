import React from 'react';
import {
  TextFieldContainer,
  TextFieldLabel,
  TextFieldInput
} from './text-field.styles'

const TextField = (props) => {
  const { label, ...otherProps } = props;
  return (
    <TextFieldContainer>
      <TextFieldInput {...otherProps} />
      <TextFieldLabel>{label}</TextFieldLabel>
    </TextFieldContainer>
  );
}

export default TextField;