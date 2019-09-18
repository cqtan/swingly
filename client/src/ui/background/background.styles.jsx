import styled from 'styled-components';

const setBgImage = props => {
  const { theme } = props;
  
  if (theme.type === 'light') {
    return `url("/bg-icons-repeat-white.png")`;
  } else if (theme.type === 'dark') {
    return `url("/bg-icons-repeat-black.png")`;
  }
}

export const BackgroundSurface = styled.div`
  min-height: 100vh;
  min-width: 100vw;
  position: fixed;
  top: 0;
  left: 0;
  z-index: -100;
  background-color: ${props => props.theme.background.layer1};
  transition: background-color .2s ease-out;
  background-image: ${setBgImage};
  background-repeat: repeat;
`;
BackgroundSurface.displayName = 'BackgroundSurface';