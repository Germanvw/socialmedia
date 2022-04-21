import React from 'react';
import { useAppDispatch } from '../../Hooks/useRedux';
import { startLogin } from '../../Redux/Slices/authSlice';

const userInfo = {
  email: 'user@mail.com',
  password: '123456',
};
export const Login = () => {
  const dispatch = useAppDispatch();

  const handleLogin = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    dispatch(startLogin(userInfo));
  };
  return (
    <div>
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};
