import React from "react";
import { ProfileContainer } from "./profile.styles";
import { connect } from "react-redux";
import { compose } from 'redux';
import ProfileImageSection from "../../components/profile-components/profile-image/profile-image-section.component";
import ProfileDetails from "../../components/profile-components/profile-details/profile-details.component";
import { createStructuredSelector } from "reselect";
import { selectCurrentUser } from "../../redux/user/user.selectors";
import { Redirect } from "react-router-dom";
import { withRouter } from 'react-router-dom';
import queryString from 'query-string';
import ProfileBody from "../../components/profile-components/profile-body/profile-body.component";

const Profile = props => {
  const { history, currentUser } = props;

  const params = queryString.parse(history.location.search);
  const userId = params.user_id;

  return (
    <>
      {currentUser ? (
        <ProfileContainer>
          <ProfileImageSection userId={userId} />
          <ProfileDetails userId={userId} />
          {/* <ProfileEvents userId={userId} /> */}
          <ProfileBody userId={userId} />
        </ProfileContainer>
      ) : (
        <Redirect to="/" />
      )}
    </>
  );
};

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
});


export default compose(
  withRouter,
  connect(mapStateToProps)
)(Profile);
