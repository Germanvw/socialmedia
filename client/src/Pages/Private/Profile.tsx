import { NotificationBar } from '../../Components/Nav/NotificationBar/NotificationBar';
import { Sidebar } from '../../Components/Nav/Sidebar/Sidebar';

export const Profile = () => {
  return (
    <div className='main-site'>
      <Sidebar />
      <div className='body'>profile</div>
      <NotificationBar />
    </div>
  );
};
