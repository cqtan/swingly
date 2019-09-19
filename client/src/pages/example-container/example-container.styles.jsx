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
  margin-top: 3rem;
  ${props => props.theme.mixins.absCentered};
  height: 30rem;
  width: 30rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  background-color: ${props => props.theme.type === 'dark' ? props.theme.palette.grey[2] : props.theme.palette.grey[8]};
  ${props => fadeInOut(props.transName,'left')};
`;
ExampleBgLogoContainer.displayName = 'ExampleBgLogoContainer';

export const ExampleBgLogo = styled.div`
  font-size: 24rem;
  font-family: 'Oleo Script', 'Open Sans', sans-serif;
  color: ${props => props.theme.type === 'dark' ? props.theme.palette.grey[3] : props.theme.palette.grey[9]};
`;
ExampleBgLogo.displayName = 'ExampleBgLogo';

export const ExampleContent = styled.div`
  ${props => props.theme.mixins.absCentered};
  background-color: ${props => props.theme.palette.grey[4]};
  width: 40rem;
  height: 40rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;
ExampleContent.displayName = 'ExampleContent';