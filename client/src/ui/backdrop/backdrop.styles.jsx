import styled from 'styled-components';
import { fadeInOut } from '../../themes/animations';

export const BackdropContainer = styled.button`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: ${props => props.zIndex};
  background-color: rgba(0, 0, 0, 0.3);
  transition: all .4s ease-out;
  ${props => fadeInOut(props.transName)};

  &:active,
  &:focus,
  &:active:focus {
    background-color: rgba(0, 0, 0, 0.3);
    outline: none;
    box-shadow: none;
    border-style: outset;
  }
`;
BackdropContainer.displayName = BackdropContainer;