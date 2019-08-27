import React from 'react';
import {
  SnackbarContainer, 
  SnackButton, 
  SnackText, 
  SnackIcon
} from './snackbar.styles'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Snackbar = (props) => {
  const { type, text } = props;

  const getIconType = (type) => {
    switch(type) {
      case 'error':
        return 'exclamation-circle';
      case 'warning':
        return 'exclamation-triangle';
      case 'info':
        return 'info-circle';
      case 'success':
        return 'check-circle';
      default:
        return 'info-circle';
    }
  }

  return (
    <>
      <SnackbarContainer type={type}>
        <SnackIcon>
          <FontAwesomeIcon icon={getIconType(type)} />
        </SnackIcon>
        <SnackText>{text}</SnackText>
        <SnackButton transparent flat>
          <FontAwesomeIcon icon='times' />
        </SnackButton>
      </SnackbarContainer>
    </>
  );
}

export default Snackbar;