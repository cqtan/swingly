import React from 'react';
import {
  UsersListContainer, 
  UsersHeader, 
  HeaderUsername,
  HeaderItem,
  UsersRow,
  RowUsername
} from './users-list.styles';

const UsersList = (props) => {
  const { users } = props;

  const UsersRows = Object.values(users).map((user, idx) => {
    return (
      <UsersRow key={idx}>
        <RowUsername>{user.username}</RowUsername>
      </UsersRow>
    );
  });
  
  return (
    <UsersListContainer>
      <UsersHeader>
        <HeaderUsername>Username</HeaderUsername>
        <HeaderItem>New<br />Events</HeaderItem>
        <HeaderItem>Following</HeaderItem>
      </UsersHeader>
      {UsersRows}
    </UsersListContainer>
  );
}

export default UsersList;