import styled from 'styled-components';

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
`;
EventImageContainer.displayName = 'EventImageContainer';

export const EventImage = styled.img`
  object-fit: cover;
  width: 100%;
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