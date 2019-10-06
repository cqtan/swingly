import React from 'react';
import {
  ProfileEditFormContainer,
  ButtonContainer
} from './profile-edit-form.styles';
import { Form } from 'formik';
import TextField from '../../../ui/form-elements/text-field/text-field.component';
import FormButton from '../../../ui/form-elements/form-button/form-button.component';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const ProfileEditForm = (props) => {
  const {
    values,
    errors,
    touched,
    isValid,
    handleReset,
    handleChange,
    setFieldTouched,
    onClose,
    confirmDelete
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
    <>
      <ProfileEditFormContainer>
        <Form>
          <TextField 
            name='username'
            label='Username'
            onChange={(e) => onChange('username', e)}
            onBlur={(e) => onBlur('username', e)}
            value={values.username}
            helperText={touched.username ? errors.username : ''}
            error={touched.username && Boolean(errors.username)}
          />
          <TextField
            textarea 
            name='description'
            label='Description'
            onChange={(e) => onChange('description', e)}
            onBlur={(e) => onBlur('description', e)}
            value={values.description}
            helperText={touched.description ? errors.description : ''}
            error={touched.description && Boolean(errors.description)}
          />
          <ButtonContainer>
            <FormButton 
              type='button'
              onClick={handleReset}>          
              Reset
            </FormButton>
            <FormButton 
              type='submit'
              disabled={!isValid}>
              Save
            </FormButton>
          </ButtonContainer>
          <ButtonContainer>
            <FormButton 
              onClick={onClose}
              type="button">
              <FontAwesomeIcon icon="chevron-left" />
              Back
            </FormButton>
            <FormButton 
              onClick={confirmDelete}
              type="button" 
              deleteStyle>
              <FontAwesomeIcon icon="user-slash" />
              Delete
            </FormButton>
          </ButtonContainer>
        </Form>
      </ProfileEditFormContainer>
    </>
  );
}

export default ProfileEditForm;