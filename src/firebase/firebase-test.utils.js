import {
  auth,
  firestore,
  getRootPath
} from './firebase.utils';

export const testUser = {
  email: 'user@test.com',
  password: 'secret_password'
};

export const createTestUser = async () => {
  const { user } = await auth.createUserWithEmailAndPassword(
    testUser.email,
    testUser.password
  );
  await auth.signOut();
  return user;
}

export const signInTestUser = async () => {
  await auth.signInWithEmailAndPassword(
    testUser.email,
    testUser.password
  );
}

export const deleteTestUser = async () => {
  const user = await auth.currentUser;
  await user.delete();
}

export const deleteUserFromStore = async (id) => {
  await firestore.doc(`${getRootPath()}/data/users/${id}`).delete();
}

export const signOutTestUser = async () => {
  await auth.signOut();
}