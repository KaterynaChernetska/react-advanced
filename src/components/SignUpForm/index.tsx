import { FC, FormEvent, useState } from "react";
import { Input } from "../Input";
import "./signUpForm.scss";
import { useNavigate } from "react-router-dom";
import { PageRoutes } from "../../enums/routes.enum";
import { useDispatch } from "react-redux";
import { signUpNewUser } from "../../redux/auth/operations";
import { unwrapResult } from "@reduxjs/toolkit";
import { AppDispatch } from "../../redux/store";
import Notiflix from "notiflix";

export const SignUpForm: FC = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onEmailInputChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ): void => {
    setEmail(event.target.value);
  };

  const onFullNameChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ): void => {
    setFullName(event.target.value);
  };

  const onPasswordInputChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ): void => {
    setPassword(event.target.value);
  };

  const handleFormSubmit = async (
    event: FormEvent<HTMLFormElement>
  ): Promise<void> => {
    event.preventDefault();

    if (password.length < 3 || password.length > 20) {
      navigate(PageRoutes.SignUp);
      return Notiflix.Notify.warning(
        "Password must contain at least 3 characters and a maximum of 20 characters"
      );
    }

    const userData = {
      fullName,
      email,
      password,
    };
    
    const actionResult = await dispatch(signUpNewUser(userData));
    const user = unwrapResult(actionResult);

    if (user?.token) {
      navigate(PageRoutes.Index);
    }

    setFullName("");
    setEmail("");
    setPassword("");
  };

  return (
    <form
      className="sign-up-form"
      onSubmit={handleFormSubmit}
      autoComplete="off"
    >
      <h2 className="sign-up-form__title">Sign Up</h2>
      <Input
        heading={"Full name"}
        testId={"auth-full-name"}
        name={"full-name"}
        type={"text"}
        required={true}
        value={fullName}
        onChange={onFullNameChange}
      />
      <Input
        heading={"Email"}
        testId={"auth-email"}
        name={"email"}
        type={"email"}
        required={true}
        value={email}
        onChange={onEmailInputChange}
      />
      <Input
        name={"password"}
        testId={"auth-password"}
        type={"password"}
        heading={"Password"}
        value={password}
        autoComplete="new-password"
        onChange={onPasswordInputChange}
        required={true}
      />
      <button data-test-id="auth-submit" className="button" type="submit">
        Sign Up
      </button>
    </form>
  );
};
