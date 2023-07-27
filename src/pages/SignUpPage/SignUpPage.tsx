import { FC } from "react";
import { Link } from "react-router-dom";
import { PageRoutes } from "../../enums/routes.enum";
import { SignUpForm } from "../../components/SignUpForm";
import './signUpPage.scss'

const SignUpPage: FC = () => {
  return (
    <main className="sign-in-page">
      <h1 className="visually-hidden">Travel App</h1>
      <SignUpForm/>
      <span>
      Already have an account?{' '}
        <Link
          data-test-id="auth-sign-in-link"
          to={PageRoutes.SignIn}
          className="sign-up-form__link"
        >
          Sign In
        </Link>
      </span>
    </main>
  );
};
export default SignUpPage;
