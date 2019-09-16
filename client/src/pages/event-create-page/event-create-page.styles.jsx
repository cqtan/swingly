import styled from 'styled-components';

export const EventCreatePageContainer = styled.div`
  margin-top: ${props => props.theme.layout.header.height};
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  padding: ${props => props.theme.spacing(2)};
`;
EventCreatePageContainer.displayName = 'EventCreatePageContainer';