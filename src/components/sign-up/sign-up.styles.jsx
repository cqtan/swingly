import styled, { css } from 'styled-components';
import { 
  SignInContainer, 
  SignInButtonContainer,
  SignInTitle,
  SignInButton
} from '../sign-in/sign-in.styles';
import { fadeInOut } from '../../themes/animations';

const animate = css`
  ${props => fadeInOut(props.transName, 'left')};
`;

export const SignUpTitle = styled(SignInTitle)`

`;
SignUpTitle.displayName = 'SignUpTitle';

export const SignUpContainer = styled(SignInContainer)`
  ${animate};
`;
SignUpContainer.displayName = 'SignUpContainer';

export const SignUpButton = styled(SignInButton)`

`;
SignUpButton.displayName = 'SignUpButton';

export const SignUpButtonConatiner = styled(SignInButtonContainer)`

`;
SignUpButtonConatiner.displayName = 'SignUpButtonConatiner';
