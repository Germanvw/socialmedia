import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { PrivateRoutes } from './PrivateRoutes';
import { PublicRoutes } from './PublicRoutes';
import { noTokenRoutes, tokenRoutes } from './routes';
import { useAppSelector, useAppDispatch } from '../Hooks/useRedux';
import { useEffect } from 'react';
import { startRefreshToken } from '../Redux/Slices/authSlice';

export const AppRouter = () => {
  const { user } = useAppSelector((state) => state.auth);
  const dispatch = useAppDispatch();

  const darkMode = false;

  useEffect(() => {
    if (localStorage.getItem('x-token')) dispatch(startRefreshToken());
  }, [dispatch]);
  return (
    <BrowserRouter>
      <div className='app' data-theme={darkMode ? 'dark' : 'light'}>
        <Routes>
          <Route element={<PrivateRoutes user={user} />}>
            {tokenRoutes.map(({ Component, path }) => (
              <Route key={path} path={path} element={<Component />} />
            ))}
          </Route>
          <Route element={<PublicRoutes user={user} />}>
            {noTokenRoutes.map(({ Component, path }) => (
              <Route key={path} path={path} element={<Component />} />
            ))}
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
};
