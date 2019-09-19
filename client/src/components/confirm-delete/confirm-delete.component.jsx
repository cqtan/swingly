import React from 'react';
import {
  ConfirmDeleteContainer,
  DeleteContent,
  DeleteText,
  ButtonContainer
} from './confirm-delete.styles';
import { connect } from 'react-redux';
import FormButton from '../../ui/form-elements/form-button/form-button.component';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Backdrop from '../../ui/backdrop/backdrop.component';
import { deleteUser } from '../../redux/user/user.actions';

const ConfirmDelete = (props) => {
  const { title, isOpen, onClose, deleteUser } = props;

  // TODO: re-auth here
  const handleDelete = () => {

  }

  return (
    <>
      <Backdrop isOpen={isOpen} onClick={onClose} />
      <ConfirmDeleteContainer 
        title={title}
        isOpen={isOpen}
        transName='confirm-delete'
      >
        <DeleteContent>
          <DeleteText>
            Please enter your password to confirm deletion of your account
          </DeleteText>
          <ButtonContainer>
            <FormButton onClick={onClose}>
              Cancel
            </FormButton>
            <FormButton deleteStyle onClick={deleteUser}>
              <FontAwesomeIcon icon="user-slash" />
              Delete
            </FormButton>
          </ButtonContainer>
        </DeleteContent>
      </ConfirmDeleteContainer>
    </>
  );
}

const mapDispatchToProps = {
  deleteUser
}

export default connect(null, mapDispatchToProps)(ConfirmDelete);
