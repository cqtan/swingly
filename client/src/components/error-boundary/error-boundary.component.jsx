import React, { Component } from 'react';

import {
  ErrorImageOverlay,
  ErrorImageContainer,
  ErrorImageText,
  ButtonContainer
} from './error-boundary.styles';
import FormButton from '../../ui/form-elements/form-button/form-button.component';
import { withRouter } from "react-router-dom";


class ErrorBoundary extends Component {
  constructor() {
    super();

    this.state = {
      hasErrored: false
    };
  }

  static getDerivedStateFromError(error) {

    return { hasErrored: true };
  }

  componentDidCatch(error, info) {
    console.log('Error-boundary: ', error);
    console.log('Info: ', info);
  }

  render() {
    if (this.state.hasErrored) {
      return (
        <ErrorImageOverlay>
          <ErrorImageContainer imageUrl='https://i.imgur.com/lKJiT77.png' />
          <ErrorImageText>Sorry this page is broken</ErrorImageText>
          <ButtonContainer>
            <FormButton
              onClick={() => this.props.history.push("/")}>
              Go Home
            </FormButton>
          </ButtonContainer>
        </ErrorImageOverlay>
      );
    }

    return this.props.children;
  }
}

export default withRouter(ErrorBoundary);