import styled from 'styled-components';
import Button from '../button.component';

export const ButtonCloseContainer = styled(Button)`
  position: sticky;
  top: 0;
  left: 90%;
  width: 4.5rem;
  height: 4.5rem;
  border-radius: 50%;
  padding: 0;
  margin: 0;
  background-color: ${props => props.theme.type === 'dark' ? props.theme.palette.grey[2] : props.theme.palette.grey[8]};
  opacity: 0.6;
  color: ${props => props.theme.palette.text.primary};

  :hover {
    background-color: ${props => props.theme.type === 'dark' ? props.theme.palette.grey[3] : props.theme.palette.grey[7]};
    opacity: 1;
  }
`;
ButtonCloseContainer.displayName = 'ButtonCloseContainer';