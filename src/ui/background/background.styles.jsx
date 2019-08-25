import styled from 'styled-components';

export const BackgroundSurface = styled.div`
  min-height: 100vh;
  min-width: 100vw;
  position: absolute;
  top: 0;
  left: 0;
  z-index: -100;
  background-color: ${props => props.theme.background.layer1};
  transition: background-color .2s ease-out;
`;
BackgroundSurface.displayName = 'BackgroundSurface';