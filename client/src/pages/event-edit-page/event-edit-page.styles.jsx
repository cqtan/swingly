import styled from 'styled-components';

export const EventEditPageContainer = styled.div`
  margin: 0 auto;
  margin-top: ${props => props.theme.layout.header.height};
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  padding: ${props => props.theme.spacing(2)};

  @media ${props => props.theme.media.device.tablet} {
    max-width: ${props => props.theme.media.size.tablet};
  }
`;
EventEditPageContainer.displayName = 'EventEditPageContainer';