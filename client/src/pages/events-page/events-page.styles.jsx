import styled from 'styled-components';

export const EventsPageContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: 0 auto;
  margin-top: ${props => props.theme.layout.header.height};
  padding-bottom: 10rem;

  @media ${props => props.theme.media.device.tablet} {
    max-width: ${props => props.theme.media.size.tablet};
  }
`;
EventsPageContainer.displayName = 'EventsPageContainer';