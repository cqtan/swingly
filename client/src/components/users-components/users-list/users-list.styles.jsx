import styled from 'styled-components';
import { MonthRow, DayRow } from '../../events/events-view-agenda/events-view-agenda.styles';

export const UsersListContainer = styled.div`
  display: flex;
  width: 100%;
  flex-wrap: wrap;
  justify-content: center;
`;
UsersListContainer.displayName = 'UsersListContainer';

export const UsersHeader = styled(MonthRow)`
  ${props => props.theme.typo.body};
`;
UsersHeader.displayName = 'UsersHeader';

export const HeaderUsername = styled.div`
  margin: 0 auto;
`;
HeaderUsername.displayName = 'HeaderUsername';

export const HeaderItem = styled.div`
  flex: 0 1 17%;
  ${props => props.theme.typo.subtitle};
  line-height: 1.5rem;
  text-align: center;
`;
HeaderItem.displayName = 'HeaderItem';

export const UsersRow = styled(DayRow)`

`;
UsersRow.displayName = 'UsersRow';

export const RowUsername = styled.div`
  margin: 0 auto;
`;
RowUsername.displayName = 'RowUsername';