import React from 'react';
import {
  SignInContainer,
  SignInTitle,
  SignInButtonContainer,
  SignInButtons,
} from './sign-in.styles'
import TextField from '../../ui/form-elements/text-field/text-field.component';
import { signInWithGoogle } from '../../firebase/firebase.utils';
import Backdrop from '../../ui/backdrop/backdrop.component';


const SignIn = (props) => {
  const { isOpen, setOpen, emailValue, passwordValue } = props;

  return (
    <>
      <Backdrop onClick={() => setOpen(false)} isOpen={isOpen}/>
      <SignInContainer isOpen={isOpen}>
        <SignInTitle>Sign In</SignInTitle>
        <TextField label='Email Address' type='text' value={passwordValue} />
        <TextField label='Password' type='password' value={emailValue} />
        <SignInButtonContainer>
          <SignInButtons stretch>Email</SignInButtons>
          <SignInButtons stretch isGoogleSignin
            onClick={() => signInWithGoogle()}>
            Google
          </SignInButtons>
        </SignInButtonContainer>
      </SignInContainer>
    </>
  );
}

export default SignIn;