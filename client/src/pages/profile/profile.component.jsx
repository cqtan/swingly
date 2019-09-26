import React, { useEffect } from "react";
import { ProfileContainer } from "./profile.styles";
import { connect } from "react-redux";
import { compose } from "redux";
import ProfileImageSection from "../../components/profile-components/profile-image/profile-image-section.component";
import ProfileDetails from "../../components/profile-components/profile-details/profile-details.component";
import { createStructuredSelector } from "reselect";
import { selectCurrentUser } from "../../redux/user/user.selectors";
import { Redirect } from "react-router-dom";
import { withRouter } from "react-router-dom";
import queryString from "query-string";
import ProfileBody from "../../components/profile-components/profile-body/profile-body.component";
import {
  resetBodyStyles,
  setScrollPosForPage,
  saveScrollPosForPage
} from "../../redux/body-scroll/body-scroll.actions";

const Profile = props => {
  const {
    history,
    currentUser,
    resetBodyStyles,
    setScrollPosForPage,
    saveScrollPosForPage
  } = props;

  const params = queryString.parse(history.location.search);
  const userId = params.user_id;
  const pageName = "profilePage";

  useEffect(() => {
    resetBodyStyles();
    setScrollPosForPage(pageName);

    return () => {
      saveScrollPosForPage(pageName);
      resetBodyStyles();
    };
  }, [resetBodyStyles, setScrollPosForPage, saveScrollPosForPage]);

  return (
    <>
      {currentUser ? (
        <ProfileContainer>
          <ProfileImageSection userId={userId} />
          <ProfileDetails userId={userId} />
          <ProfileBody userId={userId} pageName={pageName} />
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

const mapDispatchToProps = {
  resetBodyStyles,
  setScrollPosForPage,
  saveScrollPosForPage
};

export default compose(
  withRouter,
  connect(
    mapStateToProps,
    mapDispatchToProps
  )
)(Profile);
