import * as React from "react";
import { Navigate } from "react-router-dom";
import { Storage } from "../../enums/storage.enum";
import { getItemByKey } from "../../helpers/storageHepleps";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { PageRoutes } from "../../enums/routes.enum";

interface PrivateRoutesProps {
  children: React.ReactNode | JSX.Element;
}

const PrivateRoute = ({ children }: PrivateRoutesProps) => {
  const token = getItemByKey(Storage.USER_TOKEN);
  const { errorCode } = useSelector((state: RootState) => state.auth);

  if (!token || errorCode === 401) {
    return <Navigate to={PageRoutes.SignIn} replace />;
  }
  return <>{children}</>;
};

export { PrivateRoute };
