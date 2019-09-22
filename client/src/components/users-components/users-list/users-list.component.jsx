import React from 'react';
import {
  UsersListContainer, 
  UsersHeader, 
  HeaderUsername,
  HeaderItem,
  UsersRow,
  RowUsername,
  RowItem
} from './users-list.styles';
import { withRouter } from 'react-router-dom';
import ProfileImage from '../../../ui/profile-image/profile-image.component';

const UsersList = (props) => {
  const { users, history } = props;

  const UsersRows = Object.values(users).map((user, idx) => {
    return (
      <UsersRow key={idx} onClick={() => history.push(`/profile?user_id=${user.id}`)} >
        <RowItem>
          <ProfileImage key={idx} sm />
        </RowItem>
        <RowUsername>{user.username}</RowUsername>
        <RowItem>42</RowItem>
      </UsersRow>
    );
  });
  
  return (
    <UsersListContainer>
      <UsersHeader>
        <HeaderItem />
        <HeaderUsername>Users</HeaderUsername>
        <HeaderItem>Upcoming<br />Events</HeaderItem>
      </UsersHeader>
      {UsersRows}
      {UsersRows}
      {UsersRows}
      {UsersRows}
      {UsersRows}
      {UsersRows}
      {UsersRows}
      {UsersRows}
      {UsersRows}
    </UsersListContainer>
  );
}

export default withRouter(UsersList);