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
import { selectUpcomingEventsCountByUserId } from "../../../redux/events/events.selectors";
import { NoEventsMessage } from "../../events/events-view-agenda/events-view-agenda.styles";

const UsersList = props => {
  const {
    users,
    history,
    isFilter = false,
    showEventsCount = false,
    toggleFollowedUser,
    isActiveFilterById,
    getEventsCount
  } = props;

  const handleUserRowClick = async userId => {
    if (isFilter) {
      await toggleFollowedUser(userId);
    } else {
      history.push(`/profile?user_id=${userId}`);
    }
  };

  const UsersRows = users.map((user, idx) => {
    const eventsCount = getEventsCount(user.id);

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
        { showEventsCount && <RowItem>{eventsCount}</RowItem> }
      </UsersRow>
    );
  });

  return (
    <UsersListContainer>
      {showEventsCount &&
        <UsersHeader isFilter={isFilter}>
          <HeaderItem />
          <HeaderUsername>Users</HeaderUsername>
          {showEventsCount && <HeaderItem>Upcoming<br />Events</HeaderItem>}
        </UsersHeader>
      }
      {UsersRows.length ? (
        UsersRows
      ) : (
        <NoEventsMessage>
          No users to be displayed
        </NoEventsMessage>
      )}
    </UsersListContainer>
  );
};

const mapStateToProps = createStructuredSelector({
  isActiveFilterById: selectIsActiveFilterById,
  getEventsCount: selectUpcomingEventsCountByUserId
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
