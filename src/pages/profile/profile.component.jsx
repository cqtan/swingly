import React from 'react';
import {
  ProfileContainer,
  ProfileImageContainer,
  ProfileImage,
  ProfileDetails,
  ProfileRow,
  ProfileLabel,
  ProfileData,
  ProfileTitle,
  ProfileDescription,
  ProfileButton
} from './profile.styles';
import { connect } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Spinner from '../../ui/spinner/spinner.component';

const Profile = (props) => {
  const { user } = props;
  const { currentUser } = user;
  
  return (
    <>
      <ProfileContainer>
        {
          currentUser !== null && !user.loading ?
          <>
            <ProfileImageContainer>
              <ProfileImage src='http://lorempixel.com/400/200/cats/Meowser' />
            </ProfileImageContainer>
            <ProfileDetails>
              <ProfileTitle>
                Details
                <ProfileButton flat><FontAwesomeIcon icon='edit' /></ProfileButton>
              </ProfileTitle>
              <ProfileRow>
                <ProfileLabel>Username</ProfileLabel>
                <ProfileData>{currentUser.displayName}</ProfileData>
              </ProfileRow>
              <ProfileRow>
                <ProfileLabel>Email</ProfileLabel>
                <ProfileData>{currentUser.email}</ProfileData>
              </ProfileRow>
              {
                currentUser.description ?
                <>
                  <ProfileRow>
                    <ProfileLabel>Description</ProfileLabel>
                  </ProfileRow>
                  <ProfileRow>
                    <ProfileDescription>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veritatis asperiores nihil fugit reiciendis possimus blanditiis beatae, nobis dolor aliquam obcaecati culpa tempora laborum modi tenetur pariatur consectetur illum molestiae. Qui?</ProfileDescription>
                  </ProfileRow>
                </> :
                <>
                  <ProfileRow>
                    <ProfileLabel>Description</ProfileLabel>
                  </ProfileRow>
                  <ProfileRow>
                    <ProfileDescription>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veritatis asperiores nihil fugit reiciendis possimus blanditiis beatae, nobis dolor aliquam obcaecati culpa tempora laborum modi tenetur pariatur consectetur illum molestiae. Qui?</ProfileDescription>
                  </ProfileRow>
                </>
              }
            </ProfileDetails>
          </> :
          <Spinner size={25} loading={user.loading} />
        }
      </ProfileContainer>
    </>
  );
}


const mapStateToProps = (state) => ({
  user: state.user
});

export default connect(mapStateToProps)(Profile);
