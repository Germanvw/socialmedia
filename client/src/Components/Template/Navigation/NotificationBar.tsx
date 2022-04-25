import { ContactList } from '../../Contacts/Contact/ContactList';
import { FriendRequestList } from '../../Contacts/FriendRequest/FriendRequestList';
import './notificationbar.scss';

export const NotificationBar = () => {
  return (
    <div className='notification-nav'>
      <ContactList />
      <FriendRequestList />
    </div>
  );
};
