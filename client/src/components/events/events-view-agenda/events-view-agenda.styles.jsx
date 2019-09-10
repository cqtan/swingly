import styled from 'styled-components';
import Button from '../../../ui/button/button.component';

const getBgColor = props => {
  if (props.theme.type === 'dark') {
    return props.theme.palette.grey[2]
  } else {
    return props.theme.palette.grey[8]
  }
}

export const EventsViewAgendaContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  align-content: flex-start;
  width: 100%;
  ${props => props.theme.typo.subtitle};
  padding-bottom: 10rem; 
`;
EventsViewAgendaContainer.displayName = 'EventsViewAgendaContainer';

export const MonthRow = styled.div`
  position: sticky;
  top: 6rem;
  background: ${props => props.theme.background.layer1};
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 0 1 75%;
  height: 5rem;
  color: ${props => props.theme.palette.text.primary};
  ${props => props.theme.typo.h5};
  margin: ${props => props.theme.spacing(1)} auto;
  padding: 1.5rem 0; 
`;
MonthRow.displayName = 'MonthRow';

export const DayRow = styled.div`
  display: flex;
  flex: 1 1 100%;
  text-align: center;
  color: ${props => props.theme.palette.text.primary};
  border: ${props => props.isToday ? `2px solid ${props.theme.palette.primary.main}` : `none`};
  margin: 0.2rem 0;
  margin-top: ${props => !props.isDayDisplayed ? `2rem` : `0.2rem`};
`;
DayRow.displayName = 'DayRow';

export const DayDate = styled.div`
  display: flex;
  flex: 1 1 15%;
  align-content: flex-start;
  align-items: flex-start;
  flex-wrap: wrap;
  padding: 0.5rem 1rem;
  line-height: 1.3;

  & > div:last-of-type {
    border-bottom: ${props => props.isDayDisplayed ? `none` : `3px solid ${props.theme.palette.primary.main}`};
    padding-bottom: 4px;
  }
`;
DayDate.displayName = 'DayDate';

export const DayDateItem = styled.div`
  flex: 1 1 100%;
`;
DayDateItem.displayName = 'DayDateItem';

export const DayEvents = styled(Button)`
  display: flex;
  flex-wrap: wrap;
  flex: 1 1 80%;
  align-content: center;
  padding: 0.5rem 0.8rem;
  background-color: ${getBgColor};
  ${props => props.theme.mixins.defaultBorderRadius}; 
  border: ${props => props.isToday ? `1px solid ${props.theme.palette.primary.main}` : `none`};
  margin: 0;
  color: ${props => props.theme.palette.text.primary};
  ${props => props.theme.typo.subtitle};
  font-family: 'Lato', 'Roboto', 'Arial', sans-serif;

  & > div:first-of-type {
    line-height: 1.3;
  }
`;
DayEvents.displayName = 'DayEvents';

export const DayEventItem = styled.div`
  flex: 1 1 100%;
`;
DayEventItem.displayName = 'DayEventItem';

export const DayEventIcon = styled.div`
  display: flex;
  flex: 1 1 15%;
  align-items: center;
  justify-content: center;
`;
DayEventIcon.displayName = 'DayEventIcon';

