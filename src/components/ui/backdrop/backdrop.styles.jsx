import styled from 'styled-components';

export const BackdropContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 300;
  background-color: rgba(0, 0, 0, 0.3);
`;
BackdropContainer.displayName = BackdropContainer;