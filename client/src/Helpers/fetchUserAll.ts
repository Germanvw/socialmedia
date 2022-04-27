import { fetchToken } from '../Hooks/useFetch';

export const fetchUserAll = async () => {
  const req = await fetchToken('users/', {});
  const { users } = await req.json();
  return users;
};
