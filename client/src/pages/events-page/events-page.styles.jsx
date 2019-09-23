import styled from 'styled-components';

export const EventsPageContainer = styled.div`
  display: flex;
  width: 100vw;
  justify-content: center;
  margin-top: ${props => props.theme.layout.header.height};
  padding-bottom: 10rem;
`;
EventsPageContainer.displayName = 'EventsPageContainer';