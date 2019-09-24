import React from "react";
import { UsersFilterContainer } from "./users-modal.styles";
import Modal from "../../../ui/modal/modal.component";
import UsersList from "../users-list/users-list.component";
import Backdrop from "../../../ui/backdrop/backdrop.component";

const UsersModal = props => {
  const {
    isOpen,
    onClose,
    title,
    pageName,
    users,
    isFilter,
    showEventsCount
  } = props;

  return (
    <>
      <Backdrop isOpen={isOpen} onClick={onClose} />
      <Modal
        title={title}
        isOpen={isOpen}
        pageName={pageName}
        transName={`${title.trim()}`}
      >
        <UsersFilterContainer>
          <UsersList
            users={users}
            isFilter={isFilter}
            showEventsCount={showEventsCount}
          />
        </UsersFilterContainer>
      </Modal>
    </>
  );
};

export default UsersModal;
