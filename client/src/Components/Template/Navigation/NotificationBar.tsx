import { ContactList } from '../../Contacts/Contact/ContactList';
import { FriendRequestList } from '../../Contacts/FriendRequest/FriendRequestList';
import './navigation.scss';

export const NotificationBar = () => {
  return (
    <div className='notification-nav'>
      <ContactList />
      <FriendRequestList />
    </div>
  );
};
