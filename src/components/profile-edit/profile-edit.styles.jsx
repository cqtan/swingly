import styled from 'styled-components';
import FormButton from '../../ui/form-elements/form-button/form-button.component';

export const ProfileEditContainer = styled.div`
  min-width: 26rem;
`;
ProfileEditContainer.displayName = 'ProfileEditContainer';

export const ButtonContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;
ButtonContainer.displayName = 'ButtonContainer';

export const ProfileEditButton = styled(FormButton)`

`;
ProfileEditButton.displayName = 'ProfileEditButton';
