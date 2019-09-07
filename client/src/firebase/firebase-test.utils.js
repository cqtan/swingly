import {
  auth,
  firestore,
  getRootPath
} from './firebase.utils';

import { createUserProfileDocument } from '../redux/user/user.utils';

export const testUser = {
  email: 'user@test.com',
  password: 'secret_password',
  description: 'I am a test user!'
};

export const createTestUser = async () => {
  const { user } = await auth.createUserWithEmailAndPassword(
    testUser.email,
    testUser.password
  );
  await auth.signOut();
  return user;
}

export const createTestUserInStore = async (user) => {
  const userRef = await createUserProfileDocument(user);
  return userRef.get();
}

export const signInTestUser = async () => {
  try {
    const { user } = await auth.signInWithEmailAndPassword(
      testUser.email,
      testUser.password,
    );
    return user
  } catch (error) {
    return 'nope';
  }
}

export const deleteTestUser = async () => {
  if (auth.currentUser) {
    const user = await auth.currentUser;
    await user.delete();
    return user.uid;
  }
}

export const deleteUserFromStore = async (id) => {
  await firestore.doc(`${getRootPath()}/data/users/${id}`).delete();
}

export const deleteAllUsers = async () => {
  const usersSnap = await firestore.collection(`${getRootPath()}/data/users`).get();
  if (usersSnap) {
    usersSnap.forEach(doc => {
      // await doc.delete();
      // console.log('data_ ', doc.data());
      doc.delete();
    });
  }
  return usersSnap;
}

export const signOutTestUser = async () => {
  await auth.signOut();
}