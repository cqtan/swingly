import { 
  firestore, 
  getEnvironment,
  githubProvider,
  googleProvider,
  auth,
  getMainHost
} from "../../firebase/firebase.utils"


export const fetchUsers = async () => {
  const usersSnap = await firestore.collection(`${getEnvironment()}/data/users`).get();

  if (usersSnap.docs.length) {
    return arrayToObject(usersSnap.docs);
  } else {
    throw new Error('No Users found!');
  }
}

export const arrayToObject = (array) => {
  return array.reduce((prev, current) => {
    prev[current.data().id] = {
      ...current.data(),
      following: {
        ...current.data().following,
        [getMainHost()]: true
      }
    }
    return prev;
  }, {});
}

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`${getEnvironment()}/data/users/${userAuth.uid}`);
  
  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { uid, displayName, email } = userAuth;    
    const createdAt = new Date();
    try {
      await userRef.set({
        id: uid,
        username: displayName,
        email,
        createdAt,
        following: {},
        ...additionalData
      });
    } catch (error) {
      console.log('error creating user', error.message);
    }
  }
  return userRef;
};

export const getCurrentUser = () => {
  return new Promise((resolve, reject) => {
    const unsubscribe = auth.onAuthStateChanged(userAuth => {
      unsubscribe();
      resolve(userAuth);
    }, reject);
  });
}

// Always promt popup on sign up/in.
// Possible error onClick (restricted_client): Change name of consent screen.
githubProvider.setCustomParameters({ prompt: 'select_account' });
googleProvider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGithub = () => auth.signInWithPopup(githubProvider);
export const signInWithGoogle = () => auth.signInWithPopup(googleProvider);