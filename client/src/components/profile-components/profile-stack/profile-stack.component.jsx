import React, { useState, useEffect } from 'react';
import {
  ProfileStackContainer, 
  FirstUser,
} from './profile-stack.styles';
import { connect } from 'react-redux';
import ProfileImage from '../../../ui/profile-image/profile-image.component';
import { createStructuredSelector } from 'reselect';
import { selectUsers, selectUsersInList } from '../../../redux/user/user.selectors';
import UsersModal from '../../users-components/users-modal/users-modal.component';

const ProfileStack = (props) => {
  const { hosts, users, getUsersInList } = props;
  const [isHostListOpen, setHostListOpen] = useState(false);

  useEffect(() => {
    if (document.getElementsByClassName("event-details-enter-done").length) {
      if (isHostListOpen) {
        document.getElementsByClassName("event-details-enter-done")[0].style.overflow = "hidden";
      } else {
        document.getElementsByClassName("event-details-enter-done")[0].style.overflow = "";
      }
    }
  }, [isHostListOpen]);

  const onClickHandler = () => {
     setHostListOpen(true);
  }

  let profileImages = [];
  let firstUserName = '';

  if (hosts instanceof Array && Object.entries(users).length) {
    profileImages = [];
    firstUserName = Object.entries(users).length ? users[hosts[0]].username : 'Bob +2';
    firstUserName = hosts.length > 1 ? `${firstUserName} + ${hosts.length}` : `${firstUserName}`;

    hosts.forEach((host, idx) => {      
      profileImages.push(
        <ProfileImage key={idx} xs src='http://lorempixel.com/400/200/cats' />
      )
    });
  }

  return (
    <>
      <ProfileStackContainer onClick={onClickHandler}>
        <FirstUser>{firstUserName}</FirstUser>
        {profileImages}
      </ProfileStackContainer>
      <UsersModal
        isOpen={isHostListOpen}
        title="Hosts"
        onClose={() => setHostListOpen(false)}
        users={getUsersInList(hosts)}
        isFilter={false}
        showEventsCount={false}
      />
    </>
  );
}

const mapStateToProps = createStructuredSelector({
  users: selectUsers,
  getUsersInList: selectUsersInList
});

export default connect(mapStateToProps)(ProfileStack);
