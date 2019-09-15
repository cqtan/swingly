import React from 'react';
import {
  DateTimePickerContainer
} from './date-time-input.styles';
import { DateTimePicker } from '@material-ui/pickers';

const DateTimeInput = (props) => {
  return (
    <DateTimePickerContainer>       
      <DateTimePicker 
        {...props}
        ampm={false}
      />
    </DateTimePickerContainer>
  );
}

export default DateTimeInput;