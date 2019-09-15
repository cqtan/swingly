import styled from 'styled-components';

export const EventEditPageContainer = styled.div`
  margin-top: ${props => props.theme.layout.header.height};
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  padding: ${props => props.theme.spacing(2)};
`;
EventEditPageContainer.displayName = 'EventEditPageContainer';