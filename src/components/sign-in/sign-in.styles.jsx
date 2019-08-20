import styled from 'styled-components';

export const SignInContainer = styled.div`
  ${props => props.theme.mixins.absCentered};
  ${props => props.theme.mixins.defaultBorderRadius};
  min-width: 30rem;
  min-height: 30rem;
  background-color: ${props => props.theme.background.layer2};
`;
SignInContainer.displayName = 'SignInContainer';