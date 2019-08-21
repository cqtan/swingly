import styled from 'styled-components';

export const BackdropContainer = styled.button`
  /* display: ${props => props.isOpen ? `block` : `none` }; */
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: ${props => props.isOpen ? 300 : -300};
  background-color: rgba(0, 0, 0, 0.3);
  opacity: ${props => props.isOpen ? 1 : 0} ;
  transition: opacity .4s ease-out;
`;
BackdropContainer.displayName = BackdropContainer;