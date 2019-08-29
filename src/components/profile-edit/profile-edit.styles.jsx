import styled from 'styled-components';
import Modal from '../../ui/modal/modal.component';
import FormButton from '../../ui/form-elements/form-button/form-button.component';

export const ProfileEditContainer = styled(Modal)`

`;
ProfileEditContainer.displayName = 'ProfileEditContainer';

export const ButtonContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;
ButtonContainer.displayName = 'ButtonContainer';

export const ProfileEditButton = styled(FormButton)`
  background-color: ${props => props.delete && props.theme.palette.error };
`;
ProfileEditButton.displayName = 'ProfileEditButton';
