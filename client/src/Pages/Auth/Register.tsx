import { useAppDispatch } from '../../Hooks/useRedux';
import { startRegister } from '../../Redux/Slices/authSlice';
export const Register = () => {
  const dispatch = useAppDispatch();

  // const { loading } = useAppSelector((state) => state.auth);
  const userInfo = {
    username: 'username3',
    email: 'email3@mail.com',
    password: '123456',
    firstname: 'firstname3',
    lastname: 'lastname3',
    age: 34,
    country: 11,
    province: 'Buenos Aires',
    gender: 2,
  };
  const handleRegister = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();
    if (userInfo.password === '123456') {
      dispatch(startRegister(userInfo));
    }
  };
  return (
    <div>
      <h1>Register</h1>
      <button onClick={handleRegister}>Register</button>
    </div>
  );
};
