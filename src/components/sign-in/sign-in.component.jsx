import React from 'react';
import {
  SignInContainer,
  SignInTitle,
  SignInButtonContainer,
  SignInButtons,
} from './sign-in.styles'
import TextField from '../../ui/form-elements/text-field/text-field.component';

const SignIn = (props) => {
  const { emailValue, passwordValue } = props;

  return (
    <>
      <SignInContainer>
        <SignInTitle>Sign In</SignInTitle>
        <TextField label='Email Address' type='text' value={passwordValue} />
        <TextField label='Password' type='password' value={emailValue} />
        <SignInButtonContainer>
          <SignInButtons stretch>Email</SignInButtons>
          <SignInButtons stretch isGoogleSignin>Google</SignInButtons>
        </SignInButtonContainer>
      </SignInContainer>
    </>
  );
}

export default SignIn;