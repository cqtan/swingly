import React from 'react';
import {
  DateTimeFieldContainer,
  Label,
  HelperText
} from './date-time-field.styles';
import { DateTimePicker } from '@material-ui/pickers';

const DateTimeField = (props) => {
  const { label, helperText, ...otherProps } = props;

  return (
    <DateTimeFieldContainer>       
      <DateTimePicker 
        {...otherProps}
        format='ddd Do MMMM YYYY, HH:mm'
        ampm={false}
      />
      <Label>{label}</Label>
      <HelperText>{helperText}</HelperText>
    </DateTimeFieldContainer>
  );
}

export default DateTimeField;