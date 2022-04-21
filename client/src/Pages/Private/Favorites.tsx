import { NotificationBar } from '../../Components/Nav/NotificationBar/NotificationBar';
import { Sidebar } from '../../Components/Nav/Sidebar/Sidebar';

export const Favorites = () => {
  return (
    <div className='main-site'>
      <Sidebar />
      <div className='body'>favorites</div>
      <NotificationBar />
    </div>
  );
};
