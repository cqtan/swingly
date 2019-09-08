import styled from 'styled-components';

export const ProfileStackContainer = styled.button`
  background-color: transparent;
  display: flex;
  align-items: center;

  & > img:not(:first-of-type) {
    margin-left: -0.5rem;
  }
`;
ProfileStackContainer.displayName = 'ProfileStackContainer';

export const FirstUser = styled.div`
  color: ${props => props.theme.palette.text.primary};
  font-family: 'Lato', 'Roboto', 'Arial', sans-serif;
  ${props => props.theme.typo.subtitle};
  margin-right: 1rem;
  transition: color .1s ease-in;

  :hover {
    color: ${props => props.theme.palette.primary.main};
  }
`;
FirstUser.displayName = 'FirstUser';