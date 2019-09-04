import styled from 'styled-components';
import Button from '../button.component';

export const ButtonCloseContainer = styled(Button)`
  position: absolute;
  top: 1rem;
  right: 1rem;
  width: 3.5rem;
  height: 3.5rem;
  border-radius: 50%;
  padding: 0;
  margin: 0;

  background-color: ${props => props.theme.palette.grey[7]};
  opacity: 0.6;

  &:hover {
    background-color: ${props => props.theme.palette.primary.main};
    opacity: 1;
  }
`;
ButtonCloseContainer.displayName = 'ButtonCloseContainer';