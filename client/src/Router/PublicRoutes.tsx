import { Outlet, Navigate } from 'react-router-dom';
import { UserPropRoute } from '../Interfaces/UserInterfaces';
export const PublicRoutes = ({ user }: UserPropRoute) => {
  return user !== null ? <Navigate to='/' /> : <Outlet />;
};
