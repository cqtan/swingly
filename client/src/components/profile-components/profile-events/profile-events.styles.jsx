import styled from 'styled-components';

export const ProfileEventsContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  border-bottom: 2px solid ${props => props.theme.palette.text.secondary};
`;
ProfileEventsContainer.displayName = 'ProfileEventsContainer';