import styled from 'styled-components';

export const BackdropContainer = styled.button`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: ${props => props.isOpen ? 400 : -400};
  background-color: rgba(0, 0, 0, 0.3);
  opacity: ${props => props.isOpen ? 1 : 0} ;
  transition: opacity .4s ease-out;
`;
BackdropContainer.displayName = BackdropContainer;