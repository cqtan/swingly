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
import { CSSTransition } from 'react-transition-group';

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

  if (duration && isOpen) {
    setTimeout(() => {
      closeSnackbar();
    }, duration);
  }

  return (
    <>
      <p></p>
      <CSSTransition
        in={isOpen}
        classNames='snackbar'
        timeout={300}
        unmountOnExit>
        <SnackbarContainer type={type} transName='snackbar'>
          <SnackIcon>
            <FontAwesomeIcon icon={getIconType(type)} />
          </SnackIcon>
          <SnackText>{text}</SnackText>
          <SnackButton transparent flat>
            <FontAwesomeIcon icon='times' onClick={closeSnackbar}/>
          </SnackButton>
        </SnackbarContainer>
      </CSSTransition>
    </>
  );
}

const mapDispatchToProps = dispatch => ({
  closeSnackbar: () => dispatch(closeSnackbar())
});

export default connect(null, mapDispatchToProps)(Snackbar);