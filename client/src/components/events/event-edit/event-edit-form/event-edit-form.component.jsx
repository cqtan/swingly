import React from 'react';
import {
  EventEditFormContainer,
  ButtonContainer
} from './event-edit-form.styles';
import { Form } from 'formik';
import TextField from '../../../../ui/form-elements/text-field/text-field.component';
import FormButton from '../../../../ui/form-elements/form-button/form-button.component';


const EventEditForm = (props) => {
  const {
    values,
    errors,
    touched,
    isValid,
    handleReset,
    handleChange,
    setFieldTouched
  } = props;

  const onChange = (inputLabel, event) => {
    event.persist();
    handleChange(event);
    setFieldTouched(inputLabel, false, false);
  }

  const onBlur = (inputLabel, event) => {
    setFieldTouched(inputLabel, true, true);
  }

  return (
    <EventEditFormContainer>
      <Form>
        <TextField 
          name='title'
          label='Title'
          onChange={(e) => onChange('title', e)}
          onBlur={(e) => onBlur('title', e)}
          value={values.title}
          helperText={touched.title ? errors.title : ''}
          error={touched.title && Boolean(errors.title)}
        />
        <TextField 
          name='isCancelled'
          label='isCancelled'
          onChange={(e) => onChange('isCancelled', e)}
          onBlur={(e) => onBlur('isCancelled', e)}
          value={values.isCancelled}
          helperText={touched.isCancelled ? errors.isCancelled : ''}
          error={touched.isCancelled && Boolean(errors.isCancelled)}
        />
        <TextField 
          name='start'
          label='start'
          onChange={(e) => onChange('start', e)}
          onBlur={(e) => onBlur('start', e)}
          value={values.start}
          helperText={touched.start ? errors.start : ''}
          error={touched.start && Boolean(errors.start)}
        />
        <TextField 
          name='end'
          label='end'
          onChange={(e) => onChange('end', e)}
          onBlur={(e) => onBlur('end', e)}
          value={values.end}
          helperText={touched.end ? errors.end : ''}
          error={touched.end && Boolean(errors.end)}
        />
        <TextField 
          name='location'
          label='location'
          onChange={(e) => onChange('location', e)}
          onBlur={(e) => onBlur('location', e)}
          value={values.location}
          helperText={touched.location ? errors.location : ''}
          error={touched.location && Boolean(errors.location)}
        />
        <TextField 
          name='mapLink'
          label='mapLink'
          onChange={(e) => onChange('mapLink', e)}
          onBlur={(e) => onBlur('mapLink', e)}
          value={values.mapLink}
          helperText={touched.mapLink ? errors.mapLink : ''}
          error={touched.mapLink && Boolean(errors.mapLink)}
        />
        <TextField 
          name='description'
          label='description'
          onChange={(e) => onChange('description', e)}
          onBlur={(e) => onBlur('description', e)}
          value={values.description}
          helperText={touched.description ? errors.description : ''}
          error={touched.description && Boolean(errors.description)}
        />
        <TextField 
          name='currency'
          label='currency'
          onChange={(e) => onChange('currency', e)}
          onBlur={(e) => onBlur('currency', e)}
          value={values.currency}
          helperText={touched.currency ? errors.currency : ''}
          error={touched.currency && Boolean(errors.currency)}
        />
        <ButtonContainer>
          <FormButton 
            type='submit'
            disabled={!isValid}>
            Save
          </FormButton>
          <FormButton 
            type='button'
            onClick={handleReset}>          
            Reset
          </FormButton>
        </ButtonContainer>
      </Form>
    </EventEditFormContainer>
  );
}

export default EventEditForm;