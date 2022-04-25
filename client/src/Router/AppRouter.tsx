import { Route, Routes } from 'react-router-dom';
import { unstable_HistoryRouter as HistoryRouter } from 'react-router-dom';
import { PrivateRoutes } from './PrivateRoutes';
import { PublicRoutes } from './PublicRoutes';
import { noTokenRoutes, tokenRoutes } from './routes';
import { useAppSelector, useAppDispatch } from '../Hooks/useRedux';
import { useEffect } from 'react';
import { startRefreshToken } from '../Redux/Slices/authSlice';
import { uiActions } from '../Redux/Slices/uiSlice';
import { createBrowserHistory } from 'history';
export const history = createBrowserHistory({ window });

export const AppRouter = () => {
  const { user } = useAppSelector((state) => state.auth);
  const { darkTheme } = useAppSelector((state) => state.ui);
  const dispatch = useAppDispatch();
  useEffect(() => {
    if (localStorage.getItem('x-token')) dispatch(startRefreshToken());
  }, [dispatch]);

  useEffect(() => {
    if (localStorage.getItem('darkTheme') === 'true') {
      dispatch(uiActions.handleDarkTheme(true));
    } else if (localStorage.getItem('darkTheme') === 'false') {
      dispatch(uiActions.handleDarkTheme(false));
    } else {
      localStorage.setItem('darkTheme', 'false');
    }
  }, []);
  return (
    <HistoryRouter history={history}>
      <div className='app' data-theme={darkTheme ? 'dark' : 'light'}>
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
    </HistoryRouter>
  );
};
