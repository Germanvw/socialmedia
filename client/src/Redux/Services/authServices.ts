import { fetchNoToken, fetchToken } from '../../Hooks/useFetch';
import { RegisterUser } from '../../Interfaces/UserInterfaces';

const register = async (user: RegisterUser) => {
  const req = await fetchNoToken('auth/register', user, 'POST');
  const answ = await req.json();
  if (answ.ok) {
    return answ;
  } else {
    throw new Error(answ.msg);
  }
};

const login = async (user: { email: string; password: string }) => {
  const req = await fetchNoToken('auth', user, 'POST');
  const answ = await req.json();
  if (answ.ok) {
    return answ;
  } else {
    throw new Error(answ.msg);
  }
};

const refreshToken = async () => {
  console.log('executed');
  const req = await fetchToken(`auth`, {});
  const answ = await req.json();
  if (answ.ok) {
    return answ;
  } else {
    throw new Error(answ.msg);
  }
};

export const authServices = {
  login,
  register,
  refreshToken,
};
