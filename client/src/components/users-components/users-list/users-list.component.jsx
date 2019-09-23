import React from "react";
import {
  UsersListContainer,
  UsersHeader,
  HeaderUsername,
  HeaderItem,
  UsersRow,
  RowUsername,
  RowItem
} from "./users-list.styles";
import { connect } from "react-redux";
import { compose } from "redux";
import { createStructuredSelector } from "reselect";
import { withRouter } from "react-router-dom";
import ProfileImage from "../../../ui/profile-image/profile-image.component";
import { toggleFollowedUser } from "../../../redux/user/user.actions";
import { selectIsActiveFilterById } from "../../../redux/user/user.selectors";
import { selectEventsByUserId } from "../../../redux/events/events.selectors";

const UsersList = props => {
  const {
    users,
    history,
    isFilter = false,
    toggleFollowedUser,
    isActiveFilterById,
    getEvents
  } = props;

  const handleUserRowClick = async userId => {
    if (isFilter) {
      await toggleFollowedUser(userId);
    } else {
      history.push(`/profile?user_id=${userId}`);
    }
  };

  const UsersRows = users.map((user, idx) => {
    const eventsCount = getEvents(user.id).length;

    return (
      <UsersRow
        key={idx}
        onClick={() => handleUserRowClick(user.id)}
        active={!isFilter ? true : isActiveFilterById(user.id)}
        isFilter={isFilter}
      >
        <RowItem>
          <ProfileImage key={idx} sm />
        </RowItem>
        <RowUsername>{user.username}</RowUsername>
        <RowItem>{eventsCount}</RowItem>
      </UsersRow>
    );
  });

  return (
    <UsersListContainer>
      <UsersHeader isFilter={isFilter}>
        <HeaderItem />
        <HeaderUsername>Users</HeaderUsername>
        <HeaderItem>
          Upcoming
          <br />
          Events
        </HeaderItem>
      </UsersHeader>
      {UsersRows}
    </UsersListContainer>
  );
};

const mapStateToProps = createStructuredSelector({
  isActiveFilterById: selectIsActiveFilterById,
  getEvents: selectEventsByUserId
});

const mapDispatchToProps = {
  toggleFollowedUser
};

export default compose(
  withRouter,
  connect(
    mapStateToProps,
    mapDispatchToProps
  )
)(UsersList);
