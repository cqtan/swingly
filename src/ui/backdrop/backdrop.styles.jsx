import styled from 'styled-components';
import { fadeInOut } from '../../themes/animations';

export const BackdropContainer = styled.button`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 400;
  background-color: rgba(0, 0, 0, 0.3);
  transition: all .4s ease-out;
  ${props => fadeInOut(props.transName)};
`;
BackdropContainer.displayName = BackdropContainer;