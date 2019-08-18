import styled from 'styled-components';
import Button from '../../../ui/button/button.component';

export const SidebarContainer = styled.div`
  position: absolute;
  display: flex;
  top: 0;
  left: ${props => props.sideOpen ? 0 : `-30rem`};
  min-width: 22rem;
  height: 100vh;
  background-color: ${props => props.theme.background.layer1};
  text-align: center;
  justify-content: flex-start;
  flex-direction: column;
  z-index: 400;
  transition: left .2s ease-out .1s;

  button:last-of-type {
    margin-top: auto;
    border-top: 1px solid ${props => props.theme.palette.text.secondary};
  }
`;
SidebarContainer.displayName = 'SidebarContainer';

export const SidebarHeader = styled.div`
  height: 7rem;
  color: ${props => props.theme.palette.text.secondary};
  ${props => props.theme.typo.h3};
  padding: 1.5rem;
  border-bottom: 1px solid ${props => props.theme.palette.text.secondary};
`;
SidebarHeader.displayName = 'SidebarHeader';

export const SidebarButton = styled(Button)`
  margin: 0;
  padding: 1.5rem;
  ${props => props.theme.typo.body};
  border-radius: 0;
  color: ${props => props.theme.palette.text.primary};
  @media(hover: hover) {
    :hover {
      background-color: ${props => props.theme.background.highlight};
      box-shadow: none
    }
  }
  transition: all .2s ease-out;
  text-transform: none;
`;
SidebarButton.displayName = 'SidebarButton';