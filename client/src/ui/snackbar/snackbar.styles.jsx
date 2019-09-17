import styled from 'styled-components';
import Button from '../button/button.component';
import { fadeInOut } from '../../themes/animations';

const selectColor = (props) => {
  const { type, theme } = props;

  switch(type) {
    case 'error':
      return theme.palette.error;
    case 'warning':
      return theme.palette.warning;
    case 'info':
      return theme.palette.info;
    case 'success':
      return theme.palette.success;
    default:
      return theme.palette.info;
  }
}

export const SnackbarContainer = styled.div`
  position: fixed;
  left: 50%;
  transform: translateX(-50%);
  width: 90%;
  height: 6rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${selectColor};
  bottom: 5rem;
  ${props => props.theme.mixins.defaultBorderRadius};
  z-index: 700;
  transition: opacity 0.2s ease-in 0.5s;
  ${props => fadeInOut(props.transName)};
`;
SnackbarContainer.displayName = 'SnackbarContainer';

export const SnackText = styled.div`
  ${props => props.theme.typo.body};
  max-width: 70%;
`;
SnackText.displayName = 'SnackText';

export const SnackButton = styled(Button)`
  border-radius: 50%;
  font-size: 2rem;
  width: 4rem;
  height: 4rem;
  padding: 0;
`;
SnackButton.displayName = 'SnackButton';

export const SnackIcon = styled.div`
  border-radius: 50%;
  margin: 2rem;
  font-size: 2rem;
`;
SnackIcon.displayName = 'SnackIcon';