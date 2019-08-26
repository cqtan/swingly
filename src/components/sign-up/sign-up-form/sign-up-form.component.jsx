import React from 'react';
import {
  SignUpFormContainer,
} from './sign-up-form.styles'
import { Form } from 'formik';
import TextField from '../../../ui/form-elements/text-field/text-field.component';
import Button from '../../../ui/button/button.component';

const SignUpForm = (props) => {
  console.log('formikBag: ', props);
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
    setFieldTouched(inputLabel, true, false);
  }

  return (
    <SignUpFormContainer>
      <Form>
        <TextField
          name='username'
          label='Username'
          onChange={(e) => onChange('username', e)}
          value={values.username}
          helperText={touched.username ? errors.username : ''}
          error={touched.username && Boolean(errors.username)}
        />
        <Button
          type='submit'
          disabled={!isValid}>
          Submit
        </Button>
        <Button onClick={handleReset}>          
          Reset
        </Button>
      </Form>
    </SignUpFormContainer>
  );
}

export default SignUpForm;