import styled from 'styled-components';

export const EventsViewAgendaContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  align-content: flex-start;
  background-color: darkblue;
  height: 20rem;
  width: 40rem;
  ${props => props.theme.typo.body};
`;
EventsViewAgendaContainer.displayName = 'EventsViewAgendaContainer';

export const MonthRow = styled.div`
  display: flex;
  justify-content: center;
  flex: 1 1 100%;
  color: ${props => props.theme.palette.text.primary};
  background-color: darkgreen;
  ${props => props.theme.typo.h5};
`;
MonthRow.displayName = 'MonthRow';

export const DayRow = styled.div`
  display: flex;
  flex: 1 1 100%;
  text-align: center;
  background-color: darkgreen;
  border: 1px solid black;
`;
DayRow.displayName = 'DayRow';

export const DayDate = styled.div`
  display: flex;
  flex: 1 1 15%;
  align-content: center;
  flex-wrap: wrap;
  background-color: darkmagenta;
  padding: 5px;
  border-bottom: 3px solid darkcyan;
`;
DayDate.displayName = 'DayDate';

export const DayDateItem = styled.div`
  flex: 1 1 100%;
`;
DayDateItem.displayName = 'DayDateItem';

export const DayEvents = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex: 1 1 80%;
  align-content: center;
  background-color: darkgoldenrod;
  margin: ${props => props.theme.spacing(1)} 0;
`;
DayEvents.displayName = 'DayEvents';

export const DayEventItem = styled.div`
  flex: 1 1 100%;
`;
DayEventItem.displayName = 'DayEventItem';

export const DayEventIcon = styled.div`
  display: flex;
  flex: 1 1 15%;
  background-color: darkkhaki;
  align-items: center;
  justify-content: center;

`;
DayEventIcon.displayName = 'DayEventIcon';

