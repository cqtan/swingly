import styled from 'styled-components';

export const ErrorImageOverlay = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const ErrorImageContainer = styled.div`
  display: inline-block;
  background-image: ${({ imageUrl }) => `url(${imageUrl})`};
  background-size: cover;
  background-position: center;
  width: 40vh;
  height: 40vh;
`;

export const ErrorImageText = styled.div`
  ${props => props.theme.typo.h2};
  color: ${props => props.theme.palette.text.primary};
  padding: ${props => props.theme.spacing(4)};
`;

export const ButtonContainer = styled.div`

`;
ButtonContainer.displayName = 'ButtonContainer';