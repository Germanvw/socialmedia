import { TUserProp } from '../Contact/ContactItem';
import { UserHeader } from '../UserHeader';

import './styles.scss';

export const FriendRequestItem = ({ contact }: { contact: TUserProp }) => {
  const handleAcceptFriendRequet = () => {};
  const handleDeclineFriendRequest = () => {};
  return (
    <div className='friend-request-item'>
      <UserHeader user={contact} label='Friend Request Recived' />
      <div className='buttons'>
        <button className='btn-text-blue' onClick={handleAcceptFriendRequet}>
          Accept
        </button>
        <button className='btn-text-grey' onClick={handleDeclineFriendRequest}>
          Decline
        </button>
      </div>
    </div>
  );
};
