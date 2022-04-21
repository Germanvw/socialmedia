import { NotificationBar } from '../../Components/Nav/NotificationBar/NotificationBar';
import { Sidebar } from '../../Components/Nav/Sidebar/Sidebar';

export const Settings = () => {
  return (
    <div className='main-site'>
      <Sidebar />
      <div className='body'>settings</div>
      <NotificationBar />
    </div>
  );
};
