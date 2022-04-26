import { useEffect } from 'react';
import { FaBars } from 'react-icons/fa';
import { BiLogOut } from 'react-icons/bi';
import { AiOutlineClose } from 'react-icons/ai';
import { navigationOptions } from '../../../constants/navigation';
import { NavLink } from 'react-router-dom';
import { useAppDispatch } from '../../../Hooks/useRedux';
import { authActions } from '../../../Redux/Slices/authSlice';
import { uiActions } from '../../../Redux/Slices/uiSlice';
import { SidebarHeader } from './SidebarHeader';
import { Switch } from '../../Buttons/Switch';
import { AddPostBtn } from '../../Buttons/AddPostBtn';
import './sidebar.scss';

export const Sidebar = ({
  sidebarOpen,
  darkTheme,
}: {
  sidebarOpen: boolean;
  darkTheme: boolean;
}) => {
  const dispatch = useAppDispatch();

  const handleClose = () => {
    dispatch(uiActions.handleSidebar(false));
    localStorage.setItem('sidebarOpen', 'false');
  };

  const handleOpen = () => {
    dispatch(uiActions.handleSidebar(true));
    localStorage.setItem('sidebarOpen', 'true');
  };

  useEffect(() => {
    if (localStorage.getItem('sidebarOpen') === 'true') {
      dispatch(uiActions.handleSidebar(true));
    } else {
      dispatch(uiActions.handleSidebar(false));
    }
  }, []);

  return (
    <div className='sidebar'>
      <div className={`sidebar-${sidebarOpen ? 'open' : 'close'}`}>
        <div className='sidebar-header'>
          <div className='icon'>
            {sidebarOpen ? (
              <AiOutlineClose onClick={handleClose} />
            ) : (
              <FaBars onClick={handleOpen} />
            )}
          </div>
          <div className='sidebar-header-show'>
            <SidebarHeader isOpen={sidebarOpen} />
          </div>
        </div>
        <nav className='navbar-sb'>
          <ul className='nav-items'>
            {navigationOptions.map(({ link, name, icon }) => (
              <li key={link} className='nav-item'>
                <NavLink
                  to={link}
                  className={({ isActive }) =>
                    isActive ? 'active' : 'inactive'
                  }
                >
                  {icon}
                  <p>{name}</p>
                </NavLink>
              </li>
            ))}
          </ul>
          <AddPostBtn />
          <ul className='nav-items'>
            <li className='nav-item'>
              <button onClick={() => dispatch(authActions.logout())}>
                <BiLogOut />
                <p>Sign Out</p>
              </button>
              <div className='center'>
                <Switch darkTheme={darkTheme} />
              </div>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};
