import React from "react";
import { ModalContainer, ModalTitle } from "./modal.styles";
import { connect } from "react-redux";
import { CSSTransition } from "react-transition-group";
import { selectScrollTop } from "../../redux/body-scroll/body-scroll.selectors";
import {
  saveScrollTop,
  setScrollTop
} from "../../redux/body-scroll/body-scroll.actions";
import { createStructuredSelector } from "reselect";

const Modal = props => {
  const {
    isOpen,
    transName,
    direction = "",
    scrollTop,
    saveScrollTop,
    setScrollTop,
    title,
    children
  } = props;

  if (isOpen) {
    const scrollY = window.scrollY;
    if (scrollY > 0) {
      saveScrollTop(scrollY);
    }
  } else {
    if (scrollTop > 0) {
      setScrollTop(scrollTop);
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

const mapStateToProps = createStructuredSelector({
  scrollTop: selectScrollTop
});

const mapDispatchToProps = {
  saveScrollTop,
  setScrollTop
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Modal);
