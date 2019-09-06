import styled from 'styled-components';
import Button from '../../ui/button/button.component';
import { fadeInOut } from '../../themes/animations';

export const ExampleButton = styled(Button)`
  position: fixed;
  bottom: 2rem;
  right: 2rem;
`;
ExampleButton.displayName = 'ExampleButton';

export const ExampleBgLogoContainer = styled.div`
  ${props => props.theme.mixins.absCentered};
  height: 35rem;
  width: 35rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  background-color: ${props => props.theme.type === 'dark' ? props.theme.palette.grey[2] : props.theme.palette.grey[8]};
  ${props => fadeInOut(props.transName,'left')};

`;
ExampleBgLogoContainer.displayName = 'ExampleBgLogoContainer';

export const ExampleBgLogo = styled.div`
  font-size: 30rem;
  font-family: 'Oleo Script', 'Open Sans', sans-serif;
  color: ${props => props.theme.type === 'dark' ? props.theme.palette.grey[3] : props.theme.palette.grey[9]};
`;
ExampleBgLogo.displayName = 'ExampleBgLogo';