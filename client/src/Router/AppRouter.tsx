import { BrowserRouter, Route, Routes } from "react-router-dom";
import { PrivateRoutes } from "./PrivateRoutes";
import { PublicRoutes } from "./PublicRoutes";
import { noTokenRoutes, publicRoutes, tokenRoutes } from "./routes";

export const AppRouter = () => {
  const darkMode = false;
  const isAuth = true;
  return (
    <BrowserRouter>
      <div className="app" data-theme={darkMode ? "dark" : "light"}>
        <Routes>
          <Route element={<PrivateRoutes isAuth={isAuth} />}>
            {tokenRoutes.map(({ Component, path }) => (
              <Route key={path} path={path} element={<Component />} />
            ))}
          </Route>
          <Route element={<PublicRoutes isAuth={isAuth} />}>
            {noTokenRoutes.map(({ Component, path }) => (
              <Route key={path} path={path} element={<Component />} />
            ))}
          </Route>
          {publicRoutes.map(({ Component, path }) => (
            <Route key={path} path={path} element={<Component />} />
          ))}
        </Routes>
      </div>
    </BrowserRouter>
  );
};
