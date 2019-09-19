import styled from 'styled-components';
import Modal from '../../ui/modal/modal.component';

export const ConfirmDeleteContainer = styled(Modal)`
  
`;
ConfirmDeleteContainer.displayName = 'ConfirmDeleteContainer';

export const DeleteContent = styled.div`
  z-index: 800;
  min-width: 26rem;
`;
DeleteContent.displayName = 'DeleteContent';

export const DeleteText = styled.div`
  text-align: center;
  margin-bottom: 2rem; 
  ${props => props.theme.typo.h5};
  color: ${props => props.theme.palette.text.primary};
`;
DeleteText.displayName = 'DeleteText';

export const ButtonContainer = styled.div`
  margin-top: 2rem;
  display: flex;
  justify-content: space-between;
`;
ButtonContainer.displayName = 'ButtonContainer';