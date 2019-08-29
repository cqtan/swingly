import React from 'react';
import {
  ProfileContainer,
} from './profile.styles';
import { connect } from 'react-redux';
import Spinner from '../../ui/spinner/spinner.component';
import ProfileImage from '../../components/profile-components/profile-image/profile-image.component';
import ProfileDetails from '../../components/profile-components/profile-details/profile-details.component';
import { createStructuredSelector } from 'reselect';
import { selectCurrentUser, selectIsUserLoading } from '../../redux/user/user.selectors';

const Profile = (props) => {
  const { currentUser, isLoading } = props;
  
  return (
    <ProfileContainer>
      {
        currentUser !== null && !isLoading ?
        <>
          <ProfileImage />
          <ProfileDetails />
        </> :
        <Spinner size={25} loading={isLoading} />
      }
    </ProfileContainer>
  );
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  isLoading: selectIsUserLoading
});

export default connect(mapStateToProps)(Profile);
