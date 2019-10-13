import {
  setCurrentUser,
  setUsers,
  signOut,
  signUp,
  signInWithEmail,
  editUser,
  deleteUser,
  signInWithProvider
} from "../user.actions";
import { UserActionTypes } from "../user.types";
import configureStore from "redux-mock-store";
import thunk from "redux-thunk";
import { auth, firestore } from "../../../firebase/firebase.utils";
import * as userUtils from "../user.utils";

describe("User Actions", () => {
  const middlewares = [thunk];
  const mockStore = configureStore(middlewares);
  const store = mockStore({});

  afterEach(() => {
    store.clearActions();
    jest.clearAllMocks();
  });

  describe("setCurrentUser", () => {
    let mockUserAuth = null;
    let mockUserRef = null;

    const applyMocks = () => {
      jest
        .spyOn(userUtils, "getCurrentUser")
        .mockImplementation(() => mockUserAuth);
      jest
        .spyOn(userUtils, "createUserProfileDocument")
        .mockImplementation(() => mockUserRef);
    };

    it("should dispatch USER_NOT_LOADING if user has not signed out beforehand", async () => {
      mockUserAuth = null;
      applyMocks();

      await store.dispatch(setCurrentUser());

      expect(store.getActions()[0].type).toBe(UserActionTypes.USER_LOADING);
      expect(store.getActions()[1].type).toBe(UserActionTypes.USER_NOT_LOADING);
    });

    it("should dispatch SET_CURRENT_USER_FAILED", async () => {
      mockUserAuth = true;
      mockUserRef = {
        get: () => {
          throw new Error("test error");
        }
      };
      applyMocks();

      await store.dispatch(setCurrentUser());

      expect(store.getActions()[0].type).toBe(UserActionTypes.USER_LOADING);
      expect(store.getActions()[1].type).toBe(
        UserActionTypes.SET_CURRENT_USER_FAILED
      );
    });

    it("should dispatch SET_CURRENT_USER_SUCCESS", async () => {
      const mockSnap = { data: () => true };
      mockUserAuth = true;
      mockUserRef = { get: () => mockSnap };
      applyMocks();

      await store.dispatch(setCurrentUser());

      expect(store.getActions()[0].type).toBe(UserActionTypes.USER_LOADING);
      expect(store.getActions()[1].type).toBe(
        UserActionTypes.SET_CURRENT_USER_SUCCESS
      );
    });
  });

  describe("setUsers", () => {
    let usersObj = null;

    const applyMocks = () => {
      jest.spyOn(userUtils, "fetchUsers").mockImplementation(() => usersObj);
    };

    it("SET_USERS_FAILED: if there are no users in the DB", async () => {
      applyMocks();
      await store.dispatch(setUsers());

      expect(store.getActions()[1].type).toBe(UserActionTypes.SET_USERS_FAILED);
    });

    it("SET_USERS_FAILED: if fetching users throws an error", async () => {
      usersObj = () => {
        throw Error("test_error");
      };
      await store.dispatch(setUsers());

      expect(store.getActions()[1].type).toBe(UserActionTypes.SET_USERS_FAILED);
    });

    it("SET_USERS_SUCCESS: if users were fetched", async () => {
      usersObj = {
        test_1: { name: "test_1" },
        test_2: { name: "test_2" }
      };

      await store.dispatch(setUsers());

      expect(store.getActions()[1].payload).toEqual(usersObj);
    });
  });

  describe("signInWithProvider", () => {
    let userMock = null;
    let userRefMock = null;
    let userSnapshotMock = null;

    const applyMocks = () => {
      jest.spyOn(userUtils, "signInWithGithub").mockImplementation(() => {
        return { user: null };
      });
      jest.spyOn(userUtils, "signInWithGoogle").mockImplementation(() => {
        return { user: null };
      });
      jest
        .spyOn(userUtils, "createUserProfileDocument")
        .mockImplementation(() => userRefMock);
    };

    it("SIGNIN_FAILED: when wrong signInMethod given", async () => {
      let signInMethodMock = "test";
      applyMocks();

      await store.dispatch(signInWithProvider(signInMethodMock));

      expect(store.getActions()[1].type).toBe(UserActionTypes.SIGNIN_FAILED);
    });

    it("SIGNIN_SUCCESS: when payload matches expected user id", async () => {
      userSnapshotMock = {
        data: () => {
          return { id: "test_id" };
        }
      };

      userRefMock = {
        get: () => userSnapshotMock
      };

      const expected = "test_id";
      applyMocks();

      await store.dispatch(signInWithProvider("google"));

      expect(store.getActions()[1].payload).toBe(expected);
      expect(store.getActions()[1].type).toBe(UserActionTypes.SIGNIN_SUCCESS);
    });
  });
});
