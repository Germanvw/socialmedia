import { FriendItemProps } from '../../../Interfaces/UserInterfaces';
import { UserHeader } from '../UserHeader';
import { useAppDispatch } from '../../../Hooks/useRedux';
import { RequestDataProp } from './FriendRequestList';

import './styles.scss';
import { startFriendRequestResponse } from '../../../Redux/Slices/friendSlice';

export const FriendRequestItem = ({
  user,
  requestData,
}: {
  user: FriendItemProps;
  requestData: RequestDataProp;
}) => {
  const { id } = requestData;
  const dispatch = useAppDispatch();
  const handleAcceptFriendRequet = () => {
    dispatch(startFriendRequestResponse({ id, response: 1 }));
  };
  const handleDeclineFriendRequest = () => {
    // dispatch(startFriendRequestResponse(id,0))
  };
  return (
    <div className='friend-request-item'>
      <UserHeader user={user} label='Friend Request Recived' />
      <div className='buttons'>
        <button className='btn-text-blue' onClick={handleAcceptFriendRequet}>
          Accept
        </button>
        <button className='btn-text-grey' onClick={handleAcceptFriendRequet}>
          Decline
        </button>
      </div>
    </div>
  );
};
