import styled from 'styled-components';
import Button from '../../../../ui/button/button.component';

export const EventButtonsContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;
EventButtonsContainer.displayName = 'EventButtonsContainer';

export const ButtonItem = styled.div`
  flex: 1 1 33%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  font-size: ${props => props.theme.typo.subtitle};
  color: ${props => props.theme.palette.text.primary};

`;
ButtonItem.displayName = 'ButtonItem';

export const EventButton  = styled(Button)`
  flex: 0 1 4.5rem;
  height: 4.5rem;
  border-radius: 50%;
  ${props => props.theme.typo.body};
  margin: 0 auto;
  color: ${props => props.theme.palette.text.primary};
  box-shadow: none;
  background-color: ${props => props.theme.type === 'dark' ? props.theme.palette.grey[3] : props.theme.palette.grey[8]};

  @media (hover: hover) {
    :hover {
      box-shadow: none;
      background-color: ${props => props.theme.type === 'dark' ? props.theme.palette.grey[4] : props.theme.palette.grey[7]};
    }
  }

  :active {
    box-shadow: none;
    color: ${props => props.theme.palette.text.primary};
  }
`;
EventButton.displayName = 'EventButton';

export const ButtonLabel = styled.p`
  flex: 1 1 100%;
  text-align: center;
`;
ButtonLabel.displayName = 'ButtonLabel';