import styled from 'styled-components';

export const UsersPageContainer = styled.div`
  margin: 0 auto;
  margin-top: ${props => props.theme.layout.header.height};
  display: flex;
  flex-wrap: wrap;
  color: ${props => props.theme.palette.text.primary};

  @media ${props => props.theme.media.device.tablet} {
    max-width: ${props => props.theme.media.size.tablet};
  }
`;
UsersPageContainer.displayName = 'UsersPageContainer';