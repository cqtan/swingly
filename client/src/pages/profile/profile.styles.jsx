import styled from 'styled-components';

export const ProfileContainer = styled.div`
  margin-top: ${props => props.theme.layout.header.height};
  display: flex;
  flex-wrap: wrap;
  color: ${props => props.theme.palette.text.primary};
`;
ProfileContainer.displayName = 'ProfileContainer';
