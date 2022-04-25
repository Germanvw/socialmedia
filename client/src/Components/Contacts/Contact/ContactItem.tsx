import { UserAtFriendList } from '../../../Interfaces/UserInterfaces';
import { ChatButton } from '../../Buttons/ChatButton';
import { UserHeader } from '../UserHeader';

import './contact.scss';

export const ContactItem = ({ user }: { user: UserAtFriendList }) => {
  return (
    <div className='contact-item'>
      <UserHeader
        user={user}
        label={`${user.province}, ${user.country.code}`}
      />
      <ChatButton id={user.id.toString()} />
    </div>
  );
};
