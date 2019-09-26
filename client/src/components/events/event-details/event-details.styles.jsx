import styled from 'styled-components';
import { ButtonCloseContainer } from '../../../ui/button/button-close/button-close.styles';

export const EventDetailsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
`;
EventDetailsContainer.displayName = 'EventDetailsContainer';

export const EventImageContainer = styled.div`
  display: flex;
  height: 13rem;
  width: 120%;
  margin: -8.5rem -2rem 0 -2rem;
  background-color: #fff;
  border-radius: 5px;
`;
EventImageContainer.displayName = 'EventImageContainer';

export const EventImage = styled.img`
  object-fit: cover;
  width: 100%;
  border-radius: 5px 5px 0 0;
`;
EventImage.displayName = 'EventImage';

export const EventTitle = styled.div`
  margin: 2rem 0 1rem 0;
  width: 100%;
  text-align: center;
  ${props => props.theme.typo.h5};
  color: ${props => props.theme.palette.text.primary};
`;
EventTitle.displayName = 'EventTitle';

export const DetailsContainer = styled.div`
  width: 100%;
  margin: 1rem 0 1rem 0;
`;
DetailsContainer.displayName = 'DetailsContainer';

export const ButtonsContainer = styled.div`
  width: 100%;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  margin: 1rem 0 1rem 0;
`;
ButtonsContainer.displayName = 'ButtonsContainer';

export const CloseButton = styled(ButtonCloseContainer)`
  margin-top: -2rem;
`;
CloseButton.displayName = 'CloseButton';


