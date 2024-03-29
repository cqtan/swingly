import React from 'react';
import {
  SignUpFormContainer,
  ButtonConatainer,
  SignUpButton
} from './sign-up-form.styles'
import { Form } from 'formik';
import TextField from '../../../ui/form-elements/text-field/text-field.component';

const SignUpForm = (props) => {
  const {
    values,
    errors,
    touched,
    isValid,
    handleReset,
    handleChange,
    setFieldTouched,
    onSubmit
  } = props;
  
  const onChange = (inputLabel, event) => {
    event.persist();
    handleChange(event);
    setFieldTouched(inputLabel, false, false);
  }

  const onBlur = (inputLabel, event) => {
    setFieldTouched(inputLabel, true, true);
  }

  const handleSubmit = () => {
    handleReset();
    onSubmit(values);
  }

  return (
    <SignUpFormContainer>
      <Form data-testid="sign-up-form">
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
          type='password'
          onChange={(e) => onChange('password', e)}
          onBlur={(e) => onBlur('password', e)}
          value={values.password}
          helperText={touched.password ? errors.password : ''}
          error={touched.password && Boolean(errors.password)}
        />
        <TextField
          name='confirmPassword'
          label='Confirm Password'
          type='password'
          onChange={(e) => onChange('confirmPassword', e)}
          onBlur={(e) => onBlur('confirmPassword', e)}
          value={values.confirmPassword}
          helperText={touched.confirmPassword ? errors.confirmPassword : ''}
          error={touched.confirmPassword && Boolean(errors.confirmPassword)}
        />
        <ButtonConatainer>
          <SignUpButton
            type='button'
            onClick={handleSubmit}
            disabled={!isValid}
            data-testid="submit-button">
            Submit
          </SignUpButton>
          <SignUpButton 
            type='button'
            onClick={handleReset}>          
            Reset
          </SignUpButton>
        </ButtonConatainer>
      </Form>
    </SignUpFormContainer>
  );
}

export default SignUpForm;