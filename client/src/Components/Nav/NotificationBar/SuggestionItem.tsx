import { FriendRequestButton } from '../../Buttons/FriendRequestButton';
import { UserHeader } from '../../Contacts/UserHeader';
import { FriendItemProps } from '../../../Interfaces/UserInterfaces';

import '../../Contacts/contact.scss';

export const SuggestionItem = ({ user }: { user: FriendItemProps }) => {
  const locationLabel = user.province + user.country.code;
  return (
    <div className='contact-item'>
      <UserHeader user={user} label={locationLabel} />
      <FriendRequestButton id={user.id.toString()} />
    </div>
  );
};
