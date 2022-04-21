import { Outlet, Navigate } from 'react-router-dom';
import { UserPropRoute } from '../Interfaces/UserInterfaces';

export const PrivateRoutes = ({ user }: UserPropRoute) => {
  return user !== null ? <Outlet /> : <Navigate to='/login' />;
};
