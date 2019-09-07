import styled from 'styled-components';

export const ProfileImageContainer = styled.div`
  display: flex;
  width: 100%;
  height: 20rem;
  justify-content: center;
  align-items: center;
  background-color: ${props => props.theme.background.layer2};
  border-bottom: 2px solid ${props => props.theme.palette.text.secondary};
`;
ProfileImageContainer.displayName = 'ProfileImageContainer';
