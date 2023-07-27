import { FC } from "react";
import { Link } from "react-router-dom";
import { PageRoutes } from "../../enums/routes.enum";
import { SignInForm } from "../../components/SignInForm";
import './signInPage.scss'

const SignInPage: FC = () => {
  return (
    <main className="sign-in-page">
      <h1 className="visually-hidden">Travel App</h1>
      <SignInForm/>
      <span>
        Don't have an account?{' '}
        <Link
          data-test-id="auth-sign-up-link"
          to={PageRoutes.SignUp}
          className="sign-in-form__link"
        >
          Sign Up
        </Link>
      </span>
    </main>
  );
};
export default SignInPage;
