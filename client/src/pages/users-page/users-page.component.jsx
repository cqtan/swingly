import React from 'react';
import {
  UsersPageContainer,
} from './users-page.styles';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import UsersList from '../../components/users-components/users-list/users-list.component';
import { selectUnfollowedUsersList } from '../../redux/user/user.selectors';

const UsersPage = (props) => {
  const { users } = props;

  return (
    <UsersPageContainer>
      <UsersList users={users} showEventsCount={true} />
    </UsersPageContainer>
  );
}

const mapStateToProps = createStructuredSelector({
  users: selectUnfollowedUsersList
});

const mapDispatchToProps = {
  
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersPage);
