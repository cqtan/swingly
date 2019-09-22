import React from 'react';
import {
  UsersPageContainer,
} from './users-page.styles';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import UsersList from '../../components/users-components/users-list/users-list.component';
import { selectUsers } from '../../redux/user/user.selectors';

const UsersPage = (props) => {
  const { users } = props;

  return (
    <UsersPageContainer>
      <UsersList users={users} />
    </UsersPageContainer>
  );
}

const mapStateToProps = createStructuredSelector({
  users: selectUsers
});

const mapDispatchToProps = {
  
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersPage);
