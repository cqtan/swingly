import styled from 'styled-components';
import Button from '../../ui/button/button.component';

export const UserDrawerContainer = styled.div`
  position: absolute;
  box-shadow: ${props => props.theme.shadows[4]};
  ${props => props.theme.mixins.defaultBorderRadius};
  right: 0;
  display: flex;
  width: 12rem;
  background-color: ${props => props.theme.background.layer2};
  top: ${props => props.isOpen ? `6rem` : `-12rem`};
  z-index: ${props => props.isOpen ? 500 : -500 }; 
  opacity: ${props => props.isOpen ? 1 : 0};
  transition: all .2s ease-out .1s;
  display: flex;
  flex-direction: column;

  svg {
    margin: 0 1rem;
  }

`;
UserDrawerContainer.displayName = 'UserDrawerContainer';

export const DrawerButton = styled(Button)`
  text-transform: none;
  justify-content: flex-start;
  margin: ${props => props.theme.spacing(1)} 0;
  color: ${props => props.theme.palette.text.secondary};
`;
DrawerButton.displayName = 'DrawerButtons';