import React from 'react';
import {
  SignUpContainer,
  SignUpButtonConatiner
} from './sign-up.styles'
import * as Yup from 'yup';
import { Formik } from 'formik';
import SignUpForm from './sign-up-form/sign-up-form.component';
import Button from '../../ui/button/button.component';
import Backdrop from '../../ui/backdrop/backdrop.component';

const SignUp = (props) => {

  const { isOpen, setOpen, openSignIn } = props;

  const onSubmit = (values, formikBag) => {
    console.log('submit: ', values);
  }

  const handleOpenSignIn = () => {
    setOpen(false);
    openSignIn(true);
  }

  const initialValues = {
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
    description: ''
  }

  const validationSchema = Yup.object().shape({
    username: Yup.string().required('Please enter a username')
      .min(2, 'Username must contain at least 2 characters'),
    email: Yup.string().required('Email is required')
      .email('Please enter a valid email address'),
    password: Yup.string().required('A password is required')
      .min(8, 'Password must contain at least 8 characters'),
    confirmPassword: Yup.string().required()
      .oneOf([Yup.ref('password')], 'Passwords must match'),
    description: Yup.string().notRequired()
      .max(256, 'Max length reached'),
  });

  return (
    <>
      <Backdrop onClick={() => setOpen(false)} isOpen={isOpen}/>
      <SignUpContainer isOpen={isOpen}>
        <Formik
         initialValues={initialValues}
         validationSchema={validationSchema}
         render={(formikBag) => <SignUpForm {...formikBag} />}
         onSubmit={onSubmit}
        />
        <SignUpButtonConatiner>
          <Button onClick={handleOpenSignIn}>Back</Button>
        </SignUpButtonConatiner>
      </SignUpContainer>
    </>
  );
}

export default SignUp;