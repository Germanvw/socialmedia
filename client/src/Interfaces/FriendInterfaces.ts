import { AcceptedProps, UserAtFriendList } from './UserInterfaces';

export interface RequestDataProps {
  id: number;
  state: AcceptedProps;
}

export interface FriendRequestListProps {
  requestData: RequestDataProps;
  user: UserAtFriendList;
}

export interface InitStateFriendProps {
  loading: boolean;
  friendList: UserAtFriendList[];
  friendRequestList: FriendRequestListProps[];
}
