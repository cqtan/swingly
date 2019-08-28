import styled from 'styled-components';
import Modal from '../../ui/modal/modal.component';
import FormButton from '../../ui/form-elements/form-button/form-button.component';

export const SignInContainer = styled(Modal)`

`;
SignInContainer.displayName = 'SignInContainer';

export const SignInButtonContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;
SignInButtonContainer.displayName = 'SignInButtonContainer';

export const SignInButton = styled(FormButton)`

`;
SignInButton.displayName = 'SignInButton';

export const DividerText = styled.div`
  width: 100%;
  text-align: center;
  color: ${props => props.theme.palette.text.secondary};
  ${props => props.theme.typo.subtitle};
`;
DividerText.displayName = 'DividerText';
