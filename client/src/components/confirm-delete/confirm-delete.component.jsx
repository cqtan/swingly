import React, { useState } from 'react';
import {
  ConfirmDeleteContainer,
  DeleteContent,
  DeleteText,
  ButtonContainer
} from './confirm-delete.styles';
import FormButton from '../../ui/form-elements/form-button/form-button.component';
import Backdrop from '../../ui/backdrop/backdrop.component';
import TextField from '../../ui/form-elements/text-field/text-field.component';

const ConfirmDelete = (props) => {
  const { title, isOpen, onClose, onDelete, isPassword } = props;
  const [formField, setFormField] = useState("");

  const handleDelete = () => {
    onDelete(formField);
    setFormField("");
  } 

  const onChange = (event) => {
    event.persist();
    setFormField(event.target.value);
  };

  let confirmDeleteText = "Please confirm deletion"
  if (isPassword) {
    confirmDeleteText = "Please enter your password to confirm deletion of your account";
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
            {confirmDeleteText}
          </DeleteText>
          { isPassword && 
            <TextField
              label="Password"
              type="password"
              value={formField}
              onChange={e => onChange(e)}
            />
          }
          <ButtonContainer>
            <FormButton onClick={onClose}>
              Cancel
            </FormButton>
            <FormButton deleteStyle onClick={handleDelete}>
              Delete
            </FormButton>
          </ButtonContainer>
        </DeleteContent>
      </ConfirmDeleteContainer>
    </>
  );
}

export default ConfirmDelete;
