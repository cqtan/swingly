import React from 'react';
import {
  ProfileStackContainer, 
  FirstUser,
} from './profile-stack.styles';
import { connect } from 'react-redux';
import ProfileImage from '../../../ui/profile-image/profile-image.component';
import { createStructuredSelector } from 'reselect';
import { selectUsers } from '../../../redux/user/user.selectors';


// TODO: Add onClick to display Modal with list of hosts
const ProfileStack = (props) => {
  const { hosts, users } = props;

  const onClickHandler = () => {}
  let profileImages = [];
  let firstUserName = '';

  if (hosts instanceof Array && Object.entries(users).length) {
    profileImages = [];
    firstUserName = Object.entries(users).length ? users[hosts[0]].username : 'Bob +2';
    firstUserName = hosts.length > 1 ? `${firstUserName} + ${hosts.length}` : `${firstUserName}`;

    hosts.forEach((host, idx) => {
      const user = users[host];
      console.log('Hosts: ', user.username);
      
      profileImages.push(
        <ProfileImage key={idx} xs src='http://lorempixel.com/400/200/cats' />
      )
    });
  }

  return (
    <ProfileStackContainer onClick={onClickHandler}>
      <FirstUser>{firstUserName}</FirstUser>
      {profileImages}
    </ProfileStackContainer>
  );
}

const mapStateToProps = createStructuredSelector({
  users: selectUsers,
});

export default connect(mapStateToProps)(ProfileStack);
