import React from 'react';
import {
  SignInContainer,
  SignInTitle,
  SignInButtonContainer,
  SignInButtons,
} from './sign-in.styles';
import { connect } from 'react-redux';
import TextField from '../../ui/form-elements/text-field/text-field.component';
// import { signInWithGithub, signInWithGoogle } from '../../firebase/firebase.utils';
import Backdrop from '../../ui/backdrop/backdrop.component';
import { signInWithProvider } from '../../redux/user/user.actions';


const SignIn = (props) => {
  const { isOpen, setOpen, openSignUp ,emailValue, passwordValue, signInWithProvider } = props;

  const handleOpenSignUp = () => {
    setOpen(false);
    openSignUp(true);
  }

  return (
    <>
      <Backdrop onClick={() => setOpen(false)} isOpen={isOpen}/>
      <SignInContainer isOpen={isOpen}>
        <SignInTitle>Sign In</SignInTitle>
        <TextField label='Email Address' type='text' value={passwordValue} />
        <TextField label='Password' type='password' value={emailValue} />
        <SignInButtonContainer>
          <SignInButtons stretch>Email</SignInButtons>
          <SignInButtons stretch isSigninProvider
            onClick={() => signInWithProvider('github')}>
            Github
          </SignInButtons>
          <SignInButtons stretch isSigninProvider
            onClick={() => signInWithProvider('google')}>
            Google
          </SignInButtons>
          <SignInButtons onClick={handleOpenSignUp}>
            Register
          </SignInButtons>
        </SignInButtonContainer>
      </SignInContainer>
    </>
  );
}

const mapDispatchToProps = {
  signInWithProvider
}

export default connect(null, mapDispatchToProps)(SignIn);