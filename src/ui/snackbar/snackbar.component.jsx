import React from 'react';
import {
  SnackbarContainer, 
  SnackButton, 
  SnackText, 
  SnackIcon
} from './snackbar.styles'
import { connect } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { closeSnackbar } from '../../redux/snackbar/snackbar.actions';

const Snackbar = (props) => {
  const { type, text, isOpen, duration, closeSnackbar } = props;

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

  if (duration) {
    setTimeout(() => {
      closeSnackbar();
    }, duration);
  }

  return (
    <>
      <SnackbarContainer type={type} isOpen={isOpen}>
        <SnackIcon>
          <FontAwesomeIcon icon={getIconType(type)} />
        </SnackIcon>
        <SnackText>{text}</SnackText>
        <SnackButton transparent flat>
          <FontAwesomeIcon icon='times' onClick={closeSnackbar}/>
        </SnackButton>
      </SnackbarContainer>
    </>
  );
}

const mapDispatchToProps = dispatch => ({
  closeSnackbar: () => dispatch(closeSnackbar())
});

export default connect(null, mapDispatchToProps)(Snackbar);