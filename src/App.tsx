import { FC, lazy, Suspense, useEffect } from "react";
import { PageRoutes } from "./enums/routes.enum";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { useDispatch } from "react-redux";
import { Layout } from "./components/Layout";
import { Spinner } from "./components/Spinner";
import { PrivateRoute } from "./components/PrivateRoute";
import { loadUserInfo } from "./redux/auth/operations";
import { AppDispatch } from "./redux/store";
import { Storage } from "./enums/storage.enum";
import { getItemByKey } from "./helpers/storageHepleps";

const MainPage = lazy(() => import("./pages/MainPage/MainPage"));
const BookingsPage = lazy(() => import("./pages/BookingsPage/BookingsPage"));
const SignUpPage = lazy(() => import("./pages/SignUpPage/SignUpPage"));
const SignInPage = lazy(() => import("./pages/SignInPage/SignInPage"));
const TripPage = lazy(() => import("./pages/TripPage/TripPage"));

const App: FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const token = getItemByKey(Storage.USER_TOKEN);

  useEffect(() => {
    if (token) {
      dispatch(loadUserInfo());
    }
  }, [dispatch, token]);

  return (
    <Router>
      <Suspense fallback={<Spinner />}>
        <Routes>
          <Route path={PageRoutes.Index} element={<Layout />}>
            <Route
              index
              element={
                <PrivateRoute>
                  <MainPage />
                </PrivateRoute>
              }
            />
            <Route
              path={PageRoutes.Bookings}
              element={
                <PrivateRoute>
                  <BookingsPage />
                </PrivateRoute>
              }
            />
            <Route
              path={PageRoutes.TripId}
              element={
                <PrivateRoute>
                  <TripPage />
                </PrivateRoute>
              }
            />
            <Route path={PageRoutes.SignIn} element={<SignInPage />} />
            <Route path={PageRoutes.SignUp} element={<SignUpPage />} />
            <Route path="*" element={<Navigate to={PageRoutes.Index} />} />
          </Route>
        </Routes>
      </Suspense>
    </Router>
  );
};

export default App;
