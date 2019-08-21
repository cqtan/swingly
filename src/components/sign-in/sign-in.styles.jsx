import styled from 'styled-components';
import Button from '../../ui/button/button.component';
import { animateFadeIn } from '../../themes/animations';

export const SignInContainer = styled.div`
  ${props => props.theme.mixins.absCentered};
  ${props => props.theme.mixins.defaultBorderRadius};
  z-index: 500;
  min-width: 30rem;
  min-height: 30rem;
  background-color: ${props => props.theme.background.layer2};
  box-shadow: ${props => props.theme.shadows[4]};
  padding: ${props => props.theme.spacing(2)};
  transition: all .2s ease-out .1s;
  ${animateFadeIn}
`;
SignInContainer.displayName = 'SignInContainer';

export const SignInTitle = styled.div`
  ${props => props.theme.typo.h4};
  text-align: center;
  color: ${props => props.theme.palette.primary.main};
`;
SignInTitle.displayName = 'SignInTitle';

export const SignInButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;

  > button:first-of-type {
    margin-right: 1rem;
  }
`;
SignInButtonContainer.displayName = 'SignInButtonContainer';

export const SignInButtons = styled(Button)`
  margin: 2rem 0 1rem 0;
  ${props => props.theme.typo.button};
  background-color: ${props => props.isGoogleSignin ? props.theme.palette.secondary.main : props.theme.palette.primary.main}; 
`;
SignInButtons.displayName = 'SignInButtons';

