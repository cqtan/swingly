import React, { useState } from 'react';
import {
  SignInContainer,
  SignInTitle,
  SignInButtonContainer,
  SignInButton,
  DividerText,
} from './sign-in.styles';
import { connect } from 'react-redux';
import TextField from '../../ui/form-elements/text-field/text-field.component';
import { 
  signInWithProvider,
  signInWithEmail
} from '../../redux/user/user.actions';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faGithub,
  faGooglePlus
} from '@fortawesome/free-brands-svg-icons';

const SignIn = (props) => {
  const { isOpen, setOpen, openSignUp, signInWithProvider, signInWithEmail } = props;

  const [formFields, setFormFields] = useState({
    email: '',
    password: ''
  });

  const handleOpenSignUp = () => {
    setOpen(false);
    openSignUp(true);
  }

  const onChange = (inputLabel, event) => {
    event.persist();
    setFormFields({
      ...formFields,
      [inputLabel]: event.target.value
    });
  }

  const onLogin = () => {
    signInWithEmail(formFields);

    setFormFields({
      email: '',
      password: ''
    });

    setOpen(false);
  }

  return (
    <>
      <SignInContainer isOpen={isOpen}>
        <SignInTitle>Login</SignInTitle>
        <TextField 
          label='Email Address'
          type='text'
          value={formFields.email}
          onChange={(e) => onChange('email', e)}
        />
        <TextField 
          label='Password'
          type='password'
          value={formFields.password} 
          onChange={(e) => onChange('password', e)}
        />
        <SignInButtonContainer>
          <SignInButton onClick={onLogin}>
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
  signInWithProvider,
  signInWithEmail
}

export default connect(null, mapDispatchToProps)(SignIn);