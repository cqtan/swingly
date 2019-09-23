import styled from 'styled-components';
import { UsersListContainer, HeaderUsername } from '../users-list/users-list.styles';

export const UsersFilterContainer = styled(UsersListContainer)`
  width: 80vw;
  flex-wrap: wrap;
`;
UsersFilterContainer.displayName = 'UsersFilterContainer';

export const FilterHeaderUsername = styled(HeaderUsername)`
  margin: 0 auto;
`;
FilterHeaderUsername.displayName = 'FilterHeaderUsername';