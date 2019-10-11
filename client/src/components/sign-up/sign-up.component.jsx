import React from "react";
import {
  SignUpContainer,
  ButtonConatainer,
  SignUpButton,
} from "./sign-up.styles";
import { connect } from "react-redux";
import * as Yup from "yup";
import { Formik } from "formik";
import SignUpForm from "./sign-up-form/sign-up-form.component";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { signUp } from "../../redux/user/user.actions";
import Modal from "../../ui/modal/modal.component";

export const SignUp = props => {
  const { isOpen, setOpen, openSignIn, signUp } = props;

  const handleOpenSignIn = () => {
    setOpen(false);
    openSignIn(true);
  };

  const onSubmit = (values) => {
    handleOpenSignIn();
    signUp(values);    
  };

  const initialValues = {
    username: "",
    email: "",
    password: "",
    confirmPassword: ""
  };

  const validationSchema = Yup.object().shape({
    username: Yup.string()
      .required("Please enter a username")
      .min(2, "Username must contain at least 2 characters"),
    email: Yup.string()
      .required("Email is required")
      .email("Please enter a valid email address"),
    password: Yup.string()
      .required("A password is required")
      .min(8, "Password must contain at least 8 characters"),
    confirmPassword: Yup.string()
      .required()
      .oneOf([Yup.ref("password")], "Passwords must match")
  });

  return (
    <Modal 
      isOpen={isOpen}
      transName="sign-up" 
      title="Register">
      <SignUpContainer data-testid="sign-up">
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={onSubmit}
          render={formikBag => <SignUpForm {...formikBag} onSubmit={onSubmit} />}
        />
        <ButtonConatainer>
          <SignUpButton onClick={handleOpenSignIn}>
            <FontAwesomeIcon icon="chevron-left" />
            Back
          </SignUpButton>
        </ButtonConatainer>
      </SignUpContainer>
    </Modal>
  );
};

const mapDispatchToProps = {
  signUp
};

export default connect(
  null,
  mapDispatchToProps
)(SignUp);
