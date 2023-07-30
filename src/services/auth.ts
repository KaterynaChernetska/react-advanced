import { ApiMethods } from "../enums/api.enums";
import { Enpoint } from "../enums/endpoinds";
import { callApi } from "../helpers/apiHelper";
import {
  AuthUserReturnType,
  SignInUser,
  SignUpUser,
  User,
} from "../types/auth";

export const signUp = async ({
  fullName,
  email,
  password,
}: SignUpUser): Promise<AuthUserReturnType> => {
  const user = {
    fullName,
    email,
    password,
  };
  const User = await callApi(Enpoint.SIGN_UP, ApiMethods.POST, user);
  return User;
};

export const signIn = async ({
  email,
  password,
}: SignInUser): Promise<AuthUserReturnType> => {
  const user = {
    email,
    password,
  };
  const User = await callApi(Enpoint.SIGN_IN, ApiMethods.POST, user);
  return User;
};

export const loadUser = async (): Promise<User> => {
  const User = await callApi(Enpoint.USER, ApiMethods.GET);
  return User;
};

export const userSignOut = async (): Promise<boolean> => {
  const User = await callApi(Enpoint.USER, ApiMethods.DELETE);
  return User;
};

