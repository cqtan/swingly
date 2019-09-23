import React from 'react';
import {
  UsersFilterContainer,
} from './users-filter.styles';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import Modal from '../../../ui/modal/modal.component';
import UsersList from '../users-list/users-list.component';
import Backdrop from '../../../ui/backdrop/backdrop.component';
import { selectFollowedUsersList } from '../../../redux/user/user.selectors';

const UsersFilter = (props) => {
  const { isOpen, onClose, pageName, users } = props;

  return (
    <>
      <Backdrop isOpen={isOpen} onClick={onClose}/>
      <Modal
        title="Host Filter"
        isOpen={isOpen}
        pageName={pageName}
        transName="users-filter">
        <UsersFilterContainer>
          <UsersList users={users} isFilter={true}/>
        </UsersFilterContainer>
      </Modal> 
    </>
  );
}

const mapStateToProps = createStructuredSelector({
  users: selectFollowedUsersList
});

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(UsersFilter);
