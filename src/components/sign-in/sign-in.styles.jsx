import styled from 'styled-components';
import Button from '../../ui/button/button.component';

export const SignInContainer = styled.div`
  ${props => props.theme.mixins.absCentered};
  ${props => props.theme.mixins.defaultBorderRadius};
  min-width: 30rem;
  min-height: 30rem;
  background-color: ${props => props.theme.background.layer2};
  box-shadow: ${props => props.theme.shadows[4]};
  padding: ${props => props.theme.spacing(2)};
  z-index: ${props => props.isOpen ? 500 : -500 }; 
  opacity: ${props => props.isOpen ? 1 : 0};
  transition: all .2s ease-out .1s;
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
  flex-wrap: wrap;
  justify-content: space-between;

  button:first-of-type {
    margin-left: 0;
  }

  button:last-of-type {
    margin-right: 0;
  }
`;
SignInButtonContainer.displayName = 'SignInButtonContainer';

export const SignInButtons = styled(Button)`
  padding: ${props => props.theme.spacing(1)} ${props => props.theme.spacing(2)};
  ${props => props.theme.typo.button};
  background-color: ${props => props.isSigninProvider ? props.theme.palette.secondary.main : props.theme.palette.primary.main}; 
`;
SignInButtons.displayName = 'SignInButtons';

