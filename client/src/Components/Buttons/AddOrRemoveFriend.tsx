import { useAppDispatch } from '../../Hooks/useRedux';
import {
  startFriendRemove,
  startFriendRequestSend,
} from '../../Redux/Slices/friendSlice';

export const AddOrRemoveFriend = ({
  isFriend,
  id,
  isMe,
}: {
  isFriend: boolean;
  id: number;
  isMe: boolean;
}) => {
  const dispatch = useAppDispatch();

  return (
    <>
      {isFriend && !isMe ? (
        <button
          className='delete-friend'
          onClick={() => dispatch(startFriendRemove(id))}
        >
          Remove Friend
        </button>
      ) : (
        !isFriend &&
        !isMe && (
          <button
            className='send-request'
            onClick={() => dispatch(startFriendRequestSend(id))}
          >
            Send Friend Request
          </button>
        )
      )}
    </>
  );
};
