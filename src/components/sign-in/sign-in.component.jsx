import React from 'react';
import {
  SignInContainer,
  SignInTitle,
  SignInButtonContainer,
  SignInButton,
  DividerText,
} from './sign-in.styles';
import { connect } from 'react-redux';
import TextField from '../../ui/form-elements/text-field/text-field.component';
import { signInWithProvider } from '../../redux/user/user.actions';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faGithub,
  faGooglePlus
} from '@fortawesome/free-brands-svg-icons';

const SignIn = (props) => {
  const { isOpen, setOpen, openSignUp ,emailValue, passwordValue, signInWithProvider } = props;

  const handleOpenSignUp = () => {
    setOpen(false);
    openSignUp(true);
  }

  return (
    <>
      <SignInContainer isOpen={isOpen}>
        <SignInTitle>Login</SignInTitle>
        <TextField label='Email Address' type='text' value={passwordValue} />
        <TextField label='Password' type='password' value={emailValue} />
        <SignInButtonContainer>
          <SignInButton>
            Login
          </SignInButton>
          <SignInButton onClick={handleOpenSignUp}>
            Register
          </SignInButton>
          <DividerText>or sign in with</DividerText>
          <SignInButton stretch isSigninProvider
            onClick={() => signInWithProvider('github')}>
            <FontAwesomeIcon icon={faGithub} />
            Github
          </SignInButton>
          <SignInButton stretch isSigninProvider
            onClick={() => signInWithProvider('google')}>
            <FontAwesomeIcon icon={faGooglePlus} />
            Google
          </SignInButton>
        </SignInButtonContainer>
      </SignInContainer>
    </>
  );
}

const mapDispatchToProps = {
  signInWithProvider
}

export default connect(null, mapDispatchToProps)(SignIn);