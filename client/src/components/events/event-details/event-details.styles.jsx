import styled from 'styled-components';
import Button from '../../../ui/button/button.component';

export const EventDetailsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 80vw;
`;
EventDetailsContainer.displayName = 'EventDetailsContainer';

export const EventImageContainer = styled.div`
  display: flex;
  height: 10rem;
  width: 120%;
  margin: -2rem -2rem 0 -2rem;
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
  margin: 1rem 0 1rem 0;
  width: 100%;
`;
DetailsContainer.displayName = 'DetailsContainer';

export const ButtonsContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;
ButtonsContainer.displayName = 'ButtonsContainer';

export const EventButton  = styled(Button)`
  flex: 1 1 100%;
  ${props => props.theme.typo.body};
  margin: 0;
  color: ${props => props.theme.palette.text.primary};
  box-shadow: none;

  :hover {
    box-shadow: none;
    color: ${props => props.theme.palette.primary.main};
  }
`;
EventButton.displayName = 'EventButton';

export const VerticalDivider = styled.div`
  margin: auto 1.5rem auto 1.5rem;
  height: 70%;
  border-right: 1px solid ${props => props.theme.palette.grey[5]};
`;
VerticalDivider.displayName = 'VerticalDivider';

