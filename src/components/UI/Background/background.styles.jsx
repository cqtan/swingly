import styled from 'styled-components';

export const BackgroundSurface = styled.div`
  min-height: 100vh;
  min-width: 100vw;
  position: absolute;
  top: 0;
  left: 0;
  background-color: ${props => props.theme.background.back};
  transition: all .2s ease-out;
`;
BackgroundSurface.displayName = 'BackgroundSurface';