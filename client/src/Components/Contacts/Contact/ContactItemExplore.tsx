import { isFriend } from '../../../Helpers/isFriend';
import { UserAtFriendList } from '../../../Interfaces/UserInterfaces';
import { AddOrRemoveFriend } from '../../Buttons/AddOrRemoveFriend';
import { UserHeader } from '../UserHeader';

interface ContactItemExploreProps {
  user: UserAtFriendList;
  friendList: UserAtFriendList[];
  isMe?: boolean;
}

export const ContactItemExplore = ({
  user,
  friendList,
  isMe = false,
}: ContactItemExploreProps) => {
  return (
    <div className='contact-item'>
      <UserHeader
        user={user}
        label={`${user.province}, ${user.country.code}`}
      ></UserHeader>
      <AddOrRemoveFriend
        isFriend={isFriend(user.id, friendList)}
        id={user.id}
        isMe={isMe}
      />
    </div>
  );
};
