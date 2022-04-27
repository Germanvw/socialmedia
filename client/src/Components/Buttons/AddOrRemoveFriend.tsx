import { useAppDispatch } from '../../Hooks/useRedux';
import {
  startFriendRemove,
  startFriendRequestSend,
} from '../../Redux/Slices/friendSlice';

export const AddOrRemoveFriend = ({
  isFriend,
  id,
}: {
  isFriend: boolean;
  id: number;
}) => {
  const dispatch = useAppDispatch();

  return (
    <>
      {isFriend ? (
        <button
          className='delete-friend'
          onClick={() => dispatch(startFriendRemove(id))}
        >
          Remove Friend
        </button>
      ) : (
        <button
          className='send-request'
          onClick={() => dispatch(startFriendRequestSend(id))}
        >
          Send Friend Request
        </button>
      )}
    </>
  );
};
