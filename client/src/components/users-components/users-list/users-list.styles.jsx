import styled from 'styled-components';
import { MonthRow, DayEvents } from '../../events/events-view-agenda/events-view-agenda.styles';

export const UsersListContainer = styled.div`
  display: flex;
  width: 100%;
  flex-wrap: wrap;
  justify-content: center;
`;
UsersListContainer.displayName = 'UsersListContainer';

export const UsersHeader = styled(MonthRow)`
  ${props => props.theme.typo.body};
  padding-right: 0.8rem;
  padding-left: 0;
`;
UsersHeader.displayName = 'UsersHeader';

export const HeaderUsername = styled.div`
  margin-right: auto;
`;
HeaderUsername.displayName = 'HeaderUsername';

export const HeaderItem = styled.div`
  flex: 0 1 24%;
  ${props => props.theme.typo.subtitle};
  line-height: 1.5rem;
  text-align: center;
`;
HeaderItem.displayName = 'HeaderItem';

export const UsersRow = styled(DayEvents)`
  padding: 0;
  padding-right: 0.8rem;
  align-items: center;
  margin: 0.5rem 0;
  border-radius: 0;
  background-color: transparent;
  box-shadow: none;
  ${props => props.theme.typo.body};

`;
UsersRow.displayName = 'UsersRow';

export const RowUsername = styled(HeaderUsername)`

`;
RowUsername.displayName = 'RowUsername';

export const RowItem = styled(HeaderItem)`
  ${props => props.theme.typo.body};

`;
RowItem.displayName = 'RowItem';