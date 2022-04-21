import { NotificationBar } from '../../Components/Nav/NotificationBar/NotificationBar';
import { Sidebar } from '../../Components/Nav/Sidebar/Sidebar';

export const Chat = () => {
  return (
    <div className='main-site'>
      <Sidebar />
      <div className='body'>chat</div>
      <NotificationBar />
    </div>
  );
};
