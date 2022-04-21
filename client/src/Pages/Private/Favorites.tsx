import { NotificationBar } from '../../Components/Nav/NotificationBar/NotificationBar';
import { Sidebar } from '../../Components/Nav/Sidebar/Sidebar';
import { userData } from '../../constants/users';

export const Favorites = () => {
  return (
    <div className='main-site'>
      <Sidebar userData={userData} />
      <div className='body'>favorites</div>
      <NotificationBar />
    </div>
  );
};
