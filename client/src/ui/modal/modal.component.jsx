import React from "react";
import { ModalContainer, ModalTitle } from "./modal.styles";
import { connect } from "react-redux";
import { CSSTransition } from "react-transition-group";
import {
  resetBodyStyles,
  setScrollPosForPage,
  saveScrollPosForPage,
  setBodyStyles
} from "../../redux/body-scroll/body-scroll.actions";

const Modal = props => {
  const {
    isOpen,
    transName,
    direction = "",
    pageName,
    resetBodyStyles,
    setBodyStyles,
    setScrollPosForPage,
    saveScrollPosForPage,
    title,
    children,
  } = props;

  if (pageName) {
    if (isOpen) {
      if (document.body.style.position !== 'fixed') {
        saveScrollPosForPage(pageName);
        setBodyStyles();
        console.log('modal opened', isOpen);
      }
    } else {
      if (document.body.style.position === 'fixed') {
        resetBodyStyles();
        setScrollPosForPage(pageName);
        console.log('modal close', isOpen);
      }
    }
  }

  return (
    <CSSTransition
      in={isOpen}
      classNames={transName}
      timeout={300}
      unmountOnExit
    >
      <ModalContainer transName={transName} direction={direction}>
        <ModalTitle>{title}</ModalTitle>
        {children}
      </ModalContainer>
    </CSSTransition>
  );
};

const mapDispatchToProps = {
  resetBodyStyles,
  setBodyStyles,
  setScrollPosForPage,
  saveScrollPosForPage
};

export default connect(
  null,
  mapDispatchToProps
)(Modal);
