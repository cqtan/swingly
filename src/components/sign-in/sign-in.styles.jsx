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
`;
SignInButtonContainer.displayName = 'SignInButtonContainer';

export const SignInButton = styled(Button)`
  min-width: 12rem;
  margin: 1rem 0;
  padding: ${props => props.theme.spacing(1)} ${props => props.theme.spacing(2)};
  ${props => props.theme.typo.button};

  & > svg {
    font-size: 2rem;
    margin-right: 1rem;
  }
`;
SignInButton.displayName = 'SignInButton';

export const DividerText = styled.div`
  width: 100%;
  text-align: center;
  color: ${props => props.theme.palette.text.secondary};
  ${props => props.theme.typo.subtitle};
`;
DividerText.displayName = 'DividerText';
