import React, { useState } from "react";
import {
  ProfileBodyContainer,
  ProfileToggle,
  ProfileButton,
  ToggleButton
} from "./profile-body.styles";
import { connect } from "react-redux";
import { compose } from "redux";
import { withRouter } from "react-router-dom";
import { createStructuredSelector } from "reselect";
import { selectFollowedUsersList, selectCurrentUser } from "../../../redux/user/user.selectors";
import ProfileEvents from "../profile-events/profile-events.component";
import UsersList from "../../users-components/users-list/users-list.component";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ProfileBody = props => {
  const { userId, users, history, currentUser } = props;
  const [isShowingFollowing, setShowingFollowing] = useState(false);


  let Body = (
    <>
      <ProfileToggle>
        <ToggleButton
          isActive={!isShowingFollowing}
          onClick={() => setShowingFollowing(false)}
        >
          My Events
        </ToggleButton>
        <ToggleButton
          isActive={isShowingFollowing}
          onClick={() => setShowingFollowing(true)}
        >
          Following
        </ToggleButton>
      </ProfileToggle>
      {!isShowingFollowing ? (
        <>
          <ProfileEvents userId={userId} />
          <ProfileButton onClick={() => history.push("/event-create")}>
            <FontAwesomeIcon icon="calendar-plus" />
            Create Event
          </ProfileButton>
        </>
      ) : (
        <>
          <UsersList users={users} showEventsCount={true} />
          <ProfileButton onClick={() => history.push("/users")}>
            <FontAwesomeIcon icon="users" />
            Add Users
          </ProfileButton>
        </>
      )}
    </>
  );

  if (userId !== currentUser) {
    Body = <ProfileEvents userId={userId} />
  }

  return (
    <ProfileBodyContainer>
      {Body}
    </ProfileBodyContainer>
  );
};

const mapStateToProps = createStructuredSelector({
  users: selectFollowedUsersList,
  currentUser: selectCurrentUser
});

const mapDispatchToProps = {};

export default compose(
  withRouter,
  connect(
    mapStateToProps,
    mapDispatchToProps
  )
)(ProfileBody);
