import { useAppDispatch, useAppSelector } from '../../Hooks/useRedux';
import { uiActions } from '../../Redux/Slices/uiSlice';

export const Switch = () => {
  const { darkTheme } = useAppSelector((state) => state.ui);
  const dispatch = useAppDispatch();
  const handleClick = (e: any) => {
    if (e.target.checked) {
      handleDark();
    } else {
      handleLight();
    }
  };

  const handleDark = () => {
    dispatch(uiActions.handleDarkTheme(true));
    localStorage.setItem('darkTheme', 'true');
  };

  const handleLight = () => {
    dispatch(uiActions.handleDarkTheme(false));
    localStorage.setItem('darkTheme', 'false');
  };

  return (
    <label className='switch'>
      <input type='checkbox' checked={darkTheme} onChange={handleClick} />
      <span className='slider round'></span>
    </label>
  );
};
