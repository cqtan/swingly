import React, { useState } from "react";
import {
  ProfileEditContainer,
  ButtonContainer,
  ProfileEditButton
} from "./profile-edit.styles";
import { connect } from "react-redux";
import { Formik } from "formik";
import * as Yup from "yup";
import ProfileEditFrom from "./profile-edit-form/profile-edit-form.component";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Backdrop from "../../ui/backdrop/backdrop.component";
import { editUser } from "../../redux/user/user.actions";
import Modal from "../../ui/modal/modal.component";
import ConfirmDelete from "../confirm-delete/confirm-delete.component";

const ProfileEdit = props => {
  const { isOpen, onClose, user, editUser } = props;

  const [isDeleteOpen, setDeleteOpen] = useState(false);

  const onSubmit = values => {
    editUser(values, user);
    onClose();
  };

  const initialValues = {
    username: user ? user.username : "",
    description: user.description ? user.description : ""
  };

  const validationSchema = Yup.object().shape({
    username: Yup.string()
      .required("Please enter a username")
      .min(2, "Username must contain at least 2 characters"),
    description: Yup.string()
      .notRequired()
      .max(1024, "Please keep description short!")
  });

  return (
    <>
      <Backdrop isOpen={isOpen} onClick={onClose} />
      <Modal
        isOpen={isOpen}
        transName="profile-edit"
        title="Edit Profile"
      >
        <ProfileEditContainer>
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={onSubmit}
            render={formikBag => <ProfileEditFrom {...formikBag} />}
          />
          <ButtonContainer>
            <ProfileEditButton onClick={onClose}>
              <FontAwesomeIcon icon="chevron-left" />
              Back
            </ProfileEditButton>
            <ProfileEditButton onClick={() => setDeleteOpen(true)} deleteStyle>
              <FontAwesomeIcon icon="user-slash" />
              Delete
            </ProfileEditButton>
          </ButtonContainer>
        </ProfileEditContainer>
        <ConfirmDelete
          isOpen={isDeleteOpen}
          onClose={() => setDeleteOpen(false)}
        />
      </Modal>
    </>
  );
};

const mapDispatchToProps = {
  editUser: editUser
};

export default connect(
  null,
  mapDispatchToProps
)(ProfileEdit);
