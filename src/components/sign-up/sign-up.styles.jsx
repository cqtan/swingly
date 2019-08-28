import styled from 'styled-components';
import Modal from '../../ui/modal/modal.component';
import FormButton from '../../ui/form-elements/form-button/form-button.component';

export const SignUpContainer = styled(Modal)`
`;
SignUpContainer.displayName = 'SignUpContainer';

export const SignUpButton = styled(FormButton)`

`;
SignUpButton.displayName = 'SignUpButton';

export const SignUpButtonConatiner = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;
SignUpButtonConatiner.displayName = 'SignUpButtonConatiner';
