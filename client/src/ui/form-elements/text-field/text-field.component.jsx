import React from 'react';
import {
  TextFieldContainer,
  TextFieldLabel,
  TextFieldInput,
  TextAreaInput,
  HelperText
} from './text-field.styles';

const TextField = (props) => {
  const { label, helperText, textarea } = props;
  return (
    <TextFieldContainer>
      { textarea ?
        <TextAreaInput {...props} /> :
        <TextFieldInput {...props} />
      }
      <TextFieldLabel>{label}</TextFieldLabel>
      <HelperText>{helperText}</HelperText>
    </TextFieldContainer>
  );
}

export default TextField;