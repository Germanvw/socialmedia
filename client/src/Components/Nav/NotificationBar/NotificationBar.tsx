import { SugestionList } from './SuggestionList';

import './styles.scss';
import { FriendRequestList } from '../../Contacts/FriendRequest/FriendRequestList';

export const NotificationBar = () => {
  return (
    <div className='notificiation-bar'>
      <FriendRequestList />
      <SugestionList />
    </div>
  );
};
