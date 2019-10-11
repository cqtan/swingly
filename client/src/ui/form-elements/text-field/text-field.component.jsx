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
        <TextAreaInput {...props} id={props.name}/> :
        <TextFieldInput {...props} id={props.name}/>
      }
      <TextFieldLabel htmlFor={props.name}>{label}</TextFieldLabel>
      <HelperText>{helperText}</HelperText>
    </TextFieldContainer>
  );
}

export default TextField;