import styled from 'styled-components';
import FormButton from '../../ui/form-elements/form-button/form-button.component';

export const SignUpContainer = styled.div`
  min-width: 26rem;
`;
SignUpContainer.displayName = 'SignUpContainer';

export const SignUpButton = styled(FormButton)`

`;
SignUpButton.displayName = 'SignUpButton';

export const ButtonConatainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;
ButtonConatainer.displayName = 'ButtonConatainer';
