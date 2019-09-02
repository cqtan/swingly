const fakeResponse = {
  username: 'bob',
  email: 'bob@test.com',
  password: '123123123'
};

const mockFirebase = {
  auth: jest.fn(() => mockFirebase ),
  firestore: jest.fn(() => mockFirebase),
  sendPasswordResetEmail: jest.fn(() => Promise.resolve(fakeResponse)),
  signInWithEmailAndPassword: jest.fn(() => Promise.resolve(fakeResponse)),
  createUserProfileDocument: jest.fn(() => Promise.resolve(fakeResponse)),

};

export { mockFirebase as default };
export const auth = mockFirebase.auth;
export const firestore = mockFirebase.firestore;