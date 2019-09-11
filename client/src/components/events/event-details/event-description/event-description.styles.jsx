import styled from 'styled-components';

export const EventDescriptionContainer = styled.div`
  font-size: ${props => props.theme.typo.subtitle};
  color: ${props => props.theme.palette.text.primary};
  margin: 1rem 0 1rem 0;
  white-space: pre-wrap;

  a {
    color: ${props => props.theme.type === 'dark' ? props.theme.palette.primary.main : props.theme.palette.primary.dark};
  }
`;
EventDescriptionContainer.displayName = 'EventDescriptionContainer';