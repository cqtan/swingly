import styled from 'styled-components';

export const EventsPageContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  margin-top: ${props => props.theme.layout.header.height};
`;
EventsPageContainer.displayName = 'EventsPageContainer';