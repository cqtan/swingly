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

  let profilesImages = [
    <ProfileImage key='1' xs src='http://lorempixel.com/400/200/cats' />,
    <ProfileImage key='2' xs src='http://lorempixel.com/400/200/cats' />,
    <ProfileImage key='3' xs src='http://lorempixel.com/400/200/cats' />
  ];

  let firstUserName = Object.entries(users).length ? `${users[hosts].username} +2` : 'Bob +2';

  if (hosts instanceof Array && Object.entries(users).length) {
    profilesImages = [];
    firstUserName = Object.entries(users).length ? users[hosts[0]].username : 'Bob +2';
    firstUserName =  hosts.length > 1 ? `${firstUserName} + ${hosts.length}` : `${firstUserName}`;

    for (let host of hosts) {
      const user = users[host];
      console.log('Hosts: ', user.username);
      
      profilesImages.push(
        <ProfileImage xs src='http://lorempixel.com/400/200/cats' />
      )
    }
  }

  return (
    <ProfileStackContainer onClick={onClickHandler}>
      <FirstUser>{firstUserName}</FirstUser>
      {profilesImages}
    </ProfileStackContainer>
  );
}

const mapStateToProps = createStructuredSelector({
  users: selectUsers,
});

export default connect(mapStateToProps)(ProfileStack);
