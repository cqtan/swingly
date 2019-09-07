import { firestore, getRootPath } from "../../firebase/firebase.utils"


export const fetchUsersArray = async () => {
  const usersSnap = await firestore.collection(`${getRootPath()}/data/users`).get();

  if (usersSnap.docs.length) {
    return arrayToObject(usersSnap.docs);
  } else {
    throw new Error('No Users found!');
  }
}

export const arrayToObject = (array) => {
  return array.reduce((prev, current) => {
    prev[current.data().id] = current.data();
    return prev;
  }, {});
}