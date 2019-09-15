import React from 'react';
import {
  TextFieldContainer,
  TextFieldLabel,
  TextFieldInput,
  TextAreaInput,
  HelperText
} from './text-field.styles';

const TextField = (props) => {
  const { label, helperText, textarea, ...otherProps } = props;
  return (
    <TextFieldContainer>
      { textarea ?
        <TextAreaInput {...otherProps} /> :
        <TextFieldInput {...otherProps} />
      }
      <TextFieldLabel>{label}</TextFieldLabel>
      <HelperText>{helperText}</HelperText>
    </TextFieldContainer>
  );
}

export default TextField;