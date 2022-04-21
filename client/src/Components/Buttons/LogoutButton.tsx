import { useAppDispatch } from '../../Hooks/useRedux';
import { authActions } from '../../Redux/Slices/authSlice';

export const LogoutButton = () => {
  const dispatch = useAppDispatch();

  const handleLogout = () => {
    dispatch(authActions.logout());
  };

  return (
    <button className='btn-logout' onClick={handleLogout}>
      <svg
        width='17'
        height='16'
        fill='#D2D1D4'
        xmlns='http://www.w3.org/2000/svg'
        viewBox='0 0 512 512'
      >
        <path d='M160 416H96c-17.67 0-32-14.33-32-32V128c0-17.67 14.33-32 32-32h64c17.67 0 32-14.33 32-32S177.7 32 160 32H96C42.98 32 0 74.98 0 128v256c0 53.02 42.98 96 96 96h64c17.67 0 32-14.33 32-32S177.7 416 160 416zM502.6 233.4l-128-128c-12.51-12.51-32.76-12.49-45.25 0c-12.5 12.5-12.5 32.75 0 45.25L402.8 224H192C174.3 224 160 238.3 160 256s14.31 32 32 32h210.8l-73.38 73.38c-12.5 12.5-12.5 32.75 0 45.25s32.75 12.5 45.25 0l128-128C515.1 266.1 515.1 245.9 502.6 233.4z' />
      </svg>
      Logout
    </button>
  );
};
