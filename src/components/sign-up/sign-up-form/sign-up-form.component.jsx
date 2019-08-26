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
    setFieldTouched(inputLabel, false, false);
  }

  const onBlur = (inputLabel, event) => {
    setFieldTouched(inputLabel, true, true);
  }

  return (
    <SignUpFormContainer>
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
          name='email'
          label='Email'
          onChange={(e) => onChange('email', e)}
          onBlur={(e) => onBlur('email', e)}
          value={values.email}
          helperText={touched.email ? errors.email : ''}
          error={touched.email && Boolean(errors.email)}
        />
        <TextField
          name='password'
          label='Password'
          onChange={(e) => onChange('password', e)}
          onBlur={(e) => onBlur('password', e)}
          value={values.password}
          helperText={touched.password ? errors.password : ''}
          error={touched.password && Boolean(errors.password)}
        />
        <TextField
          name='confirmPassword'
          label='Confirm Password'
          onChange={(e) => onChange('confirmPassword', e)}
          onBlur={(e) => onBlur('confirmPassword', e)}
          value={values.confirmPassword}
          helperText={touched.confirmPassword ? errors.confirmPassword : ''}
          error={touched.confirmPassword && Boolean(errors.confirmPassword)}
        />
        <Button
          type='submit'
          disabled={!isValid}>
          Submit
        </Button>
        <Button 
          type='button'
          onClick={handleReset}>          
          Reset
        </Button>
      </Form>
    </SignUpFormContainer>
  );
}

export default SignUpForm;