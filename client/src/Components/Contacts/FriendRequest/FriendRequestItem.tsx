import { UserHeader } from '../UserHeader';
import { useAppDispatch } from '../../../Hooks/useRedux';
import { FriendRequestListProps } from '../../../Interfaces/FriendInterfaces';

import './styles.scss';
import { startFriendRequestResponse } from '../../../Redux/Slices/friendSlice';

export const FriendRequestItem = ({
  user,
  requestData,
}: FriendRequestListProps) => {
  const { id } = requestData;
  const dispatch = useAppDispatch();
  return (
    <div className='friend-request-item'>
      <UserHeader user={user} label='Friend Request Recived' />
      <div className='buttons'>
        <button
          className='btn-text-blue'
          onClick={() =>
            dispatch(startFriendRequestResponse({ id, response: 1 }))
          }
        >
          Accept
        </button>
        <button
          className='btn-text-grey'
          onClick={() =>
            dispatch(startFriendRequestResponse({ id, response: 0 }))
          }
        >
          Decline
        </button>
      </div>
    </div>
  );
};
