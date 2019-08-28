import React from 'react';
import {
  ProfileEditContainer,
  ButtonContainer,
  ProfileEditButton
} from './profile-edit.styles';
import { connect } from 'react-redux';
import { Formik } from 'formik';
import * as Yup from 'yup';
import ProfileEditFrom from './profile-edit-form/profile-edit-form.component';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Backdrop from '../../ui/backdrop/backdrop.component';
import { editUser } from '../../redux/user/user.actions';

const ProfileEdit = (props) => {
  const { isOpen, onClose, user, editUser } = props; 
  const { currentUser } = user;

  const onSubmit = values => {
    console.log('edit vals: ', values); 
    console.log('current user: ', currentUser); 
    editUser(values, currentUser);
  }

  const initialValues = {
    username: currentUser ? currentUser.username : '',
    description: currentUser.description ? currentUser.description : ''
  }

  const validationSchema = Yup.object().shape({
    username: Yup.string()
      .required("Please enter a username")
      .min(2, "Username must contain at least 2 characters"),
    description: Yup.string()
      .notRequired()
      .max(1024, 'Please keep description short!')
  });

  return (
    <>
      <Backdrop isOpen={isOpen} onClick={onClose}/>
      <ProfileEditContainer
        isOpen={isOpen}
        transName='profile-edit'
        direction='left'
        title='Edit Profile'
      >
        <Formik 
          initialValues={initialValues}
          validationSchema={validationSchema}
          render={formikBag => <ProfileEditFrom {...formikBag} onSubmit={onSubmit} />}
        />
        <ButtonContainer>
          <ProfileEditButton onClick={onClose}>
            <FontAwesomeIcon icon="chevron-left" />
            Back
          </ProfileEditButton>
        </ButtonContainer>
        
      </ProfileEditContainer>
    </>
  );
}

const mapStateToProps = (state) => ({
  user: state.user
});

const mapDispatchToProps = {
  editUser: editUser
}

export default connect(mapStateToProps, mapDispatchToProps)(ProfileEdit);
