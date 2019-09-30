import React from 'react';
import {
  EventEditFormContainer,
  ButtonContainer
} from './event-edit-form.styles';
import { Form } from 'formik';
import TextField from '../../../../ui/form-elements/text-field/text-field.component';
import FormButton from '../../../../ui/form-elements/form-button/form-button.component';
import DateTimeField from '../../../../ui/form-elements/date-time-field/date-time-field.component';

const EventEditForm = (props) => {
  const {
    values,
    errors,
    touched,
    isValid,
    handleReset,
    handleChange,
    setFieldValue,
    setFieldTouched,
    onClose,
    onDelete
  } = props;

  const onChange = (inputLabel, event) => {
    event.persist();
    handleChange(event);
    setFieldTouched(inputLabel, false, false);
  }

  const handleDateChange = (name, event) => {
    if (event) {
      const selectedDate = event.toDate();
      if (name === 'start') {
        setFieldValue(name, selectedDate, true);
        if (selectedDate > values.end) {
          setFieldValue('end', selectedDate, true);
        }
      } else { 
        if (selectedDate > values.start)
          setFieldValue(name, selectedDate, true);
      }
      setFieldTouched(name, true, false);
    }
  }

  const onBlur = (inputLabel, event) => {
    setFieldTouched(inputLabel, true, true);
  }

  return (
    <EventEditFormContainer>
      <Form>
        <TextField
          textarea
          minHeight={5}
          name='title'
          label='Title'
          onChange={(e) => onChange('title', e)}
          onBlur={(e) => onBlur('title', e)}
          value={values.title}
          helperText={touched.title ? errors.title : ''}
          error={touched.title && Boolean(errors.title)}
        />
        <DateTimeField 
          name='start'
          label='Start Date'
          onChange={(e) => handleDateChange('start', e)}
          onBlur={(e) => onBlur('start', e)}
          value={values.start}
          helperText={touched.start ? errors.start : ''}
          error={touched.start && Boolean(errors.start)}          
        />
        <DateTimeField 
          name='end'
          label='End Date'
          onChange={(e) => handleDateChange('end', e)}
          onBlur={(e) => onBlur('end', e)}
          value={values.end}
          helperText={touched.end ? errors.end : ''}
          error={touched.end && Boolean(errors.end)}          
        />
        <TextField
          textarea
          minHeight={5}
          name='location'
          label='Location'
          onChange={(e) => onChange('location', e)}
          onBlur={(e) => onBlur('location', e)}
          value={values.location}
          helperText={touched.location ? errors.location : ''}
          error={touched.location && Boolean(errors.location)}
        />
        <TextField 
          name='mapLink'
          label='Google Maps Link'
          onChange={(e) => onChange('mapLink', e)}
          onBlur={(e) => onBlur('mapLink', e)}
          value={values.mapLink}
          helperText={touched.mapLink ? errors.mapLink : ''}
          error={touched.mapLink && Boolean(errors.mapLink)}
        />
        <TextField
          textarea
          minHeight={15}
          growOnFocus          
          name='description'
          label='Description'
          onChange={(e) => onChange('description', e)}
          onBlur={(e) => onBlur('description', e)}
          value={values.description}
          helperText={touched.description ? errors.description : ''}
          error={touched.description && Boolean(errors.description)}
        />
        {/* <TextField 
          name='currency'
          label='Currency'
          onChange={(e) => onChange('currency', e)}
          onBlur={(e) => onBlur('currency', e)}
          value={values.currency}
          helperText={touched.currency ? errors.currency : ''}
          error={touched.currency && Boolean(errors.currency)}
        /> */}
        <ButtonContainer>
          <FormButton 
            type='button'
            onClick={handleReset}
            deleteStyle>          
            Reset
          </FormButton>
          <FormButton 
            type='submit'
            disabled={!isValid}>
            Save
          </FormButton>
          <FormButton 
            type='button'
            deleteStyle
            onClick={onDelete}>          
            Delete
          </FormButton>
          <FormButton 
            type='button'
            onClick={onClose}>          
            Back
          </FormButton>
        </ButtonContainer>
      </Form>
    </EventEditFormContainer>
  );
}

export default EventEditForm;