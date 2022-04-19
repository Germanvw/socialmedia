import { Outlet, Navigate } from "react-router-dom";
import { uidProps } from "./routes";

export const PublicRoutes = ({ isAuth }: uidProps) => {
  return isAuth ? <Navigate to="/" /> : <Outlet />;
};
