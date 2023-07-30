import { FC, FormEvent, useState } from "react";
import { Input } from "../Input";
import "./signInForm.scss";
import { useNavigate } from "react-router-dom";
import { PageRoutes } from "../../enums/routes.enum";
import Notiflix from "notiflix";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../redux/store";
import { signInUser } from "../../redux/auth/operations";
import { unwrapResult } from "@reduxjs/toolkit";

export const SignInForm: FC = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onEmailInputChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ): void => {
    setEmail(event.target.value);
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
      return Notiflix.Notify.warning(
        "Password must contain at least 3 characters and a maximum of 20 characters"
      );
    }

    const userData = {
      email,
      password,
    };

    const actionResult = await dispatch(signInUser(userData));
    const user = unwrapResult(actionResult);

    if (user?.token) {
      navigate(PageRoutes.Index);
    }
    setEmail("");
    setPassword("");

    navigate(PageRoutes.Index);
  };
  return (
    <form
      className="sign-in-form"
      autoComplete="off"
      onSubmit={handleFormSubmit}
    >
      <h2 className="sign-in-form__title">Sign In</h2>

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
        onChange={onPasswordInputChange}
        required={true}
      />
      <button data-test-id="auth-submit" className="button" type="submit">
        Sign In
      </button>
    </form>
  );
};
