import React from 'react';
import {
  ProfileContainer,
} from './profile.styles';
import { connect } from 'react-redux';
import Spinner from '../../ui/spinner/spinner.component';
import ProfileImage from '../../components/profile-components/profile-image/profile-image.component';
import ProfileDetails from '../../components/profile-components/profile-details/profile-details.component';

const Profile = (props) => {
  const { user } = props;
  const { currentUser } = user;
  
  return (
    <ProfileContainer>
      {
        currentUser !== null && !user.loading ?
        <>
          <ProfileImage />
          <ProfileDetails />
        </> :
        <Spinner size={25} loading={user.loading} />
      }
    </ProfileContainer>
  );
}

const mapStateToProps = (state) => ({
  user: state.user
});

export default connect(mapStateToProps)(Profile);
