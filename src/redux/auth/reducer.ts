import { createReducer, isAnyOf } from "@reduxjs/toolkit";
import { loadUserInfo, signInUser, signOut, signUpNewUser } from "./operations";
import { AuthUserReturnType, User } from "../../types/auth";

interface UserState {
  id: string;
  fullName: string;
  email: string;
  createdAt: string;
}

interface AuthState {
  loading: boolean;
  user: UserState;
  errorCode: null | number;
}

const initialUserState: UserState = {
  id: "",
  fullName: "",
  email: "",
  createdAt: "",
};

const initialState: AuthState = {
  loading: false,
  user: initialUserState,
  errorCode: null,
};

const reducer = createReducer(initialState, (builder) => {
  builder.addCase(loadUserInfo.fulfilled, (state, action) => {
    state.user = action.payload as User;
  });

  builder.addMatcher(
    isAnyOf(signUpNewUser.fulfilled, signInUser.fulfilled),
    (state, action) => {
      const { user } = action.payload as AuthUserReturnType;
      state.user = user;
    }
  );

  builder.addMatcher(
    isAnyOf(
      signUpNewUser.pending,
      signInUser.pending,
      loadUserInfo.pending,
      signOut.pending
    ),
    (state) => {
      state.loading = true;
      state.errorCode = null;
    }
  );

  builder.addMatcher(
    isAnyOf(
      signUpNewUser.rejected,
      signInUser.rejected,
      loadUserInfo.rejected,
      signOut.rejected
    ),
    (state, action) => {
      state.user = initialUserState;
      state.loading = false;
      state.errorCode = action.payload as number;
    }
  );

  builder.addMatcher(
    isAnyOf(
      signUpNewUser.fulfilled,
      signInUser.fulfilled,
      loadUserInfo.fulfilled,
      signOut.fulfilled
    ),
    (state) => {
      state.loading = false;
      state.errorCode = null;
    }
  );
});

export { reducer as authReducer};
