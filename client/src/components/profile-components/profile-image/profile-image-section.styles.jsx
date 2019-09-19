import styled from 'styled-components';

export const ProfileImageContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  border-bottom: 2px solid ${props => props.theme.palette.text.secondary};
  padding: ${props => props.theme.spacing(4)};
`;
ProfileImageContainer.displayName = 'ProfileImageContainer';
