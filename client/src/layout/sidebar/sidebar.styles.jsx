import styled from 'styled-components';
import Button from '../../ui/button/button.component';

export const SidebarContainer = styled.nav`
  position: fixed;
  display: flex;
  top: 0;
  left: ${props => props.isOpen ? 0 : `-30rem`};
  min-width: 18rem;
  height: 100%;
  box-shadow: ${props => props.theme.shadows[4]};
  background-color: ${props => props.theme.background.layer2};
  text-align: center;
  flex-direction: column;
  z-index: 400;
  opacity: ${props => props.isOpen ? 1 : 0};
  transition: all .2s ease-in-out .1s;

  button:last-of-type {
    width: auto;
    margin-top: auto;
    border-top: 1px solid ${props => props.theme.palette.text.secondary};
  }

  svg {
    min-width: 4rem;
  }
`;
SidebarContainer.displayName = 'SidebarContainer';

export const SidebarHeader = styled.div`
  height: 6rem;
  color: ${props => props.theme.palette.text.secondary};
  ${props => props.theme.typo.h4};
  padding: 1.5rem;
  border-bottom: 1px solid ${props => props.theme.palette.text.secondary};
`;
SidebarHeader.displayName = 'SidebarHeader';

export const SidebarButton = styled(Button)`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin: 0;
  padding: 1.5rem;
  ${props => props.theme.typo.button};
  border-radius: 0;
  color: ${props => props.isactive === "true" ? props.theme.palette.grey[1] : props.theme.palette.text.primary};
  transition: all .2s ease-out;
  text-transform: none;
  background-color: ${props => props.isactive === "true" ? props.theme.palette.primary.main : props.theme.background.layer2};

  @media(hover: hover) {
    :hover {
      filter: ${props => !props.disabled && `brightness(120%)`};
      box-shadow: none
    }
  }
`;
SidebarButton.displayName = 'SidebarButton';

