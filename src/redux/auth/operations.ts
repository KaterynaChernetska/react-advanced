/* eslint-disable @typescript-eslint/no-explicit-any */
import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  AuthUserReturnType,
  SignInUser,
  SignUpUser,
  User,
} from "../../types/auth";
import { Storage } from "../../enums/storage.enum";
import { removeItem, setItem } from "../../helpers/storageHepleps";
import { loadUser, signIn, signUp, userSignOut } from "../../services/auth";
import { actionTypes } from "../../enums/actionsTypes.enum";
import Notiflix from "notiflix";


export const signUpNewUser = createAsyncThunk<
  AuthUserReturnType | void,
  SignUpUser
>(
  actionTypes.SIGN_UP,
  async ({ fullName, email, password }: SignUpUser, { rejectWithValue }) => {
    try {
      const user = await signUp({
        fullName,
        email,
        password,
      });
      setItem(Storage.USER_TOKEN, user.token);
      return user;
    } catch (error: any) {
      Notiflix.Notify.failure("Oops! Something went wrong..");
      console.log(error.status);
      return rejectWithValue(error.status);
    }
  }
);

export const signInUser = createAsyncThunk<
  AuthUserReturnType | void,
  SignInUser
>(
  actionTypes.SIGN_IN,
  async ({ email, password }: SignInUser, { rejectWithValue }) => {
    try {
      const user = await signIn({ email, password });
      setItem(Storage.USER_TOKEN, user.token);
      return user;
    } catch (error: any) {
      Notiflix.Notify.failure("Oops! Something went wrong..");
      return rejectWithValue(error.status);
    }
  }
);

export const signOut = createAsyncThunk<void, void>(
  actionTypes.SIGN_OUT,
  async (_, { rejectWithValue }) => {
    try {
      await userSignOut();
      removeItem(Storage.USER_TOKEN);
    } catch (error: any) {
      Notiflix.Notify.failure("Oops! Something went wrong..");
      return rejectWithValue(error.status);
    }
  }
);

export const loadUserInfo = createAsyncThunk<User, void>(
  actionTypes.USER_INFO,
  async (_, { rejectWithValue }) => {
    try {
      const user = await loadUser();
      return user;
    } catch (error: any) {
      Notiflix.Notify.failure("Oops! Something went wrong..");
      return rejectWithValue(error.status);
    }
  }
);
