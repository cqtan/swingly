import React from "react";
import { ModalContainer, ModalTitle, ModalSubtitle} from "./modal.styles";
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
    subtitle = "",
    children,
  } = props;

  if (pageName) {
    if (isOpen) {
      if (document.body.style.position !== 'fixed') {
        saveScrollPosForPage(pageName);
        setBodyStyles();
      }
    } else {
      if (document.body.style.position === 'fixed') {
        resetBodyStyles();
        setScrollPosForPage(pageName);
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
        {subtitle.length ? <ModalSubtitle>{subtitle}</ModalSubtitle> : <></>}
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
