import { FriendItemProps } from '../../../Interfaces/UserInterfaces';
import { UserHeader } from '../UserHeader';
import { useAppDispatch } from '../../../Hooks/useRedux';
import { startFriendRequestResponse } from '../../../Redux/Slices/friendSlice';
import { RequestDataProps } from '../../../Interfaces/FriendInterfaces';

import './styles.scss';

export const FriendRequestItem = ({
  user,
  requestData,
}: {
  user: FriendItemProps;
  requestData: RequestDataProps;
}) => {
  const { id } = requestData;
  const dispatch = useAppDispatch();
  // Friend request id.
  console.log(id);
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
