import { Homepage } from '../Pages/Homepage';
import {
  Login,
  Register,
  RestorePassword,
  Profile,
  Chat,
  Favorites,
  Post,
  User,
} from '../Pages';
interface Route {
  path: string;
  name: string;
  url?: string;
  icon?: string;
  Component: () => JSX.Element;
}

export interface uidProps {
  isAuth?: boolean;
}

export const tokenRoutes: Route[] = [
  {
    name: 'Post',
    path: '/post/:id',
    Component: Post,
  },
  {
    name: 'Profile',
    path: '/profile',
    Component: Profile,
  },
  {
    name: 'User',
    path: '/User/:id',
    Component: User,
  },
  {
    name: 'Favorites',
    path: '/favorites',
    Component: Favorites,
  },
  {
    name: 'Chat',
    path: '/chat',
    Component: Chat,
  },

  { name: 'Homepage', path: '/', Component: Homepage },
];

export const noTokenRoutes: Route[] = [
  {
    name: 'Login',
    path: '/login',
    Component: Login,
  },
  {
    name: 'Register',
    path: '/register',
    Component: Register,
  },
  {
    name: 'Restore Password',
    path: '/restore-password',
    Component: RestorePassword,
  },
];
