import { FC } from "react";
import "./profileNavigation.scss";
import { Link, useNavigate } from "react-router-dom";
import { PageRoutes } from "../../enums/routes.enum";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../redux/store";
import { signOut } from "../../redux/auth/operations";

export const ProfileNavigation: FC = () => {
  const {
    loading,
    user: { fullName },
  } = useSelector((state: RootState) => state.auth);


  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();

  const onLogOutClick = () => {
    dispatch(signOut());
    navigate(PageRoutes.SignIn);
  };
  return (
    <ul data-test-id="header-profile-nav-list" className="profile-nav__list">
      <li
        data-test-id="header-profile-nav-username"
        className="profile-nav__item profile-nav__username"
      >
        {loading ? "Loading..." : fullName}
      </li>
      <li className="profile-nav__item">
        <Link
          onClick={onLogOutClick}
          data-test-id="header-profile-nav-sign-out"
          to={PageRoutes.SignIn}
          className="profile-nav__sign-out button"
        >
          Sign Out
        </Link>
      </li>
    </ul>
  );
};
