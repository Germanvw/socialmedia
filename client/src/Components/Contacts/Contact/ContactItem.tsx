import { FriendItemProps } from '../../../Interfaces/UserInterfaces';
import { ChatButton } from '../../Buttons/ChatButton';
import { UserHeader } from '../UserHeader';

import './../contact.scss';

export const ContactItem = ({ friend }: { friend: FriendItemProps }) => {
  return (
    <div className='contact-item'>
      <UserHeader
        user={friend}
        label={`${friend.province}, ${friend.country.code}`}
      />
      <ChatButton id={friend.id.toString()} />
    </div>
  );
};
