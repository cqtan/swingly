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
  selectCurrentUser
} from "../../../redux/user/user.selectors";

const ProfileDetails = props => {
  const { currentUser, userId, getUserById } = props;
  const [editFormOpen, setEditFormOpen] = useState(false);
  const user = getUserById(userId);

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
          {currentUser === user.id ? (
            <ProfileButton
              transparent
              flat
              onClick={() => setEditFormOpen(true)}
            >
              <FontAwesomeIcon icon="edit" />
            </ProfileButton>
          ) : (
            <ProfileButton transparent flat onClick={() => {}}>
              <FontAwesomeIcon icon="hat-wizard" />
            </ProfileButton>
          )}
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
  getUserById: selectUserById
});

export default connect(mapStateToProps)(ProfileDetails);
