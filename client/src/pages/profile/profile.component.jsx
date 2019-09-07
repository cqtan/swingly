import React from 'react';
import {
  ProfileContainer,
} from './profile.styles';
import { connect } from 'react-redux';
import ProfileImageSection from '../../components/profile-components/profile-image/profile-image-section.component';
import ProfileDetails from '../../components/profile-components/profile-details/profile-details.component';
import { createStructuredSelector } from 'reselect';
import { selectCurrentUser } from '../../redux/user/user.selectors';
import { Redirect } from 'react-router-dom';

const Profile = (props) => {
  const { currentUser } = props;
  
  return (
    <>
      { currentUser ?
        <ProfileContainer>
          <ProfileImageSection />
          <ProfileDetails />
        </ProfileContainer> :
        <Redirect to='/' />
      }
    </>
  );
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});

export default connect(mapStateToProps)(Profile);
