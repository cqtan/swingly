import styled from 'styled-components';
import Button from '../../../ui/button/button.component';
import { Link } from 'react-router-dom';

export const SidebarContainer = styled.div`
  position: absolute;
  display: flex;
  top: 0;
  left: 0;
  min-width: 30rem;
  height: 100vh;
  background-color: ${props => props.theme.palette.grey[2]};
  text-align: center;
  justify-content: flex-start;
  flex-direction: column;
  z-index: 400;
`;
SidebarContainer.displayName = SidebarContainer;

export const SidebarButton = styled(Button)`
  box-shadow: none;
  width: 100%;
  margin: 0;
  border-radius: 0;
`;
SidebarButton.displayName = SidebarButton;

export const SidebarLink = styled(Link)`
    width: 100%;
    margin: 0;
    border-radius: 0;
    padding: 1.5rem;
    background-color: #fff;
    border: 1px solid grey;

`;
SidebarLink.displayName = SidebarLink;