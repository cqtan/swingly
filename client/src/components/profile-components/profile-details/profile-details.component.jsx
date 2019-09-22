import React, { useState } from "react";
import {
  ProfileDetailsContainer,
  ProfileTitle,
  ProfileRow,
  ProfileLabel,
  ProfileData,
  ProfileButton,
  ProfileDescription
} from "./profile-details.styles";
import { connect } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ProfileEdit from "../../profile-edit/profile-edit.component";
import { createStructuredSelector } from "reselect";
import {
  selectUserById,
  selectCurrentUser,
  selectCurrentUserFollowing
} from "../../../redux/user/user.selectors";
import FormButton from "../../../ui/form-elements/form-button/form-button.component";
import { followUser, unfollowUser } from "../../../redux/user/user.actions";

const ProfileDetails = props => {
  const {
    currentUser,
    userId,
    getUserById,
    following,
    followUser,
    unfollowUser
  } = props;
  const [editFormOpen, setEditFormOpen] = useState(false);
  const user = getUserById(userId);

  let DetailsButton = null;
  if (currentUser === user.id) {
    DetailsButton = (
      <ProfileButton transparent flat onClick={() => setEditFormOpen(true)}>
        <FontAwesomeIcon icon="edit" />
      </ProfileButton>
    );
  } else if (following.hasOwnProperty(userId)) {
    DetailsButton = (
      <FormButton deleteStyle onClick={() => unfollowUser(userId)}>
        <FontAwesomeIcon icon="minus" /> Unfollow
      </FormButton>
    );
  } else {
    DetailsButton = (
      <FormButton onClick={() => followUser(userId)}>
        <FontAwesomeIcon icon="plus" /> Follow
      </FormButton>
    );
  }

  return (
    <>
      <ProfileEdit
        isOpen={editFormOpen}
        onClose={() => setEditFormOpen(false)}
        user={user}
      />
      <ProfileDetailsContainer>
        <ProfileTitle>
          Details
          {DetailsButton}
        </ProfileTitle>
        <ProfileRow>
          <ProfileLabel>Username</ProfileLabel>
          <ProfileData>{user.username}</ProfileData>
        </ProfileRow>
        {currentUser === user.id && (
          <ProfileRow>
            <ProfileLabel>Email</ProfileLabel>
            <ProfileData>{user.email}</ProfileData>
          </ProfileRow>
        )}
        <ProfileRow>
          <ProfileLabel>Description</ProfileLabel>
        </ProfileRow>
        <ProfileRow>
          {user.description ? (
            <ProfileDescription>{user.description}</ProfileDescription>
          ) : (
            <ProfileDescription defaultText>
              Describe yourself!
            </ProfileDescription>
          )}
        </ProfileRow>
      </ProfileDetailsContainer>
    </>
  );
};

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  getUserById: selectUserById,
  following: selectCurrentUserFollowing
});

const mapDispatchToProps = {
  followUser,
  unfollowUser
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProfileDetails);
