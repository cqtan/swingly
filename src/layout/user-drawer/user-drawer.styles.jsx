import styled from 'styled-components';

export const UserDrawerContainer = styled.div`
  position: absolute;
  top: ${props => props.isOpen ? `6rem` : `-6rem`};
  right: 0;
  display: flex;
  width: 12rem;
  height: 15rem;
  background-color: ${props => props.theme.background.layer2};
  transition: all .2s ease-out .1s;
`;
UserDrawerContainer.displayName = 'UserDrawerContainer';