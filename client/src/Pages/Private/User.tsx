import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { SearchUser } from '../../Components/Search/SearchUser';
import { useAppSelector, useAppDispatch } from '../../Hooks/useRedux';
import {
  startFriendRemove,
  startFriendRequestSend,
} from '../../Redux/Slices/friendSlice';
import { TemplateBody } from '../../Components/Template/TemplateBody';
import { PostList } from '../../Components/Post/PostList';
import { startPostFetchByUser } from '../../Redux/Slices/postSlice';

export const User = () => {
  const { friendList, error } = useAppSelector((state) => state.friend);
  const { postList } = useAppSelector((state) => state.posts);
  const { user } = useAppSelector((state) => state.auth);
  const dispatch = useAppDispatch();

  const { id } = useParams();
  const [isMe, setIsMe] = useState(false);

  const isFriend = (id: string) => {
    return friendList.some((friend) => friend.id === parseInt(id));
  };

  const handleDisplay = (): void => {
    if (id && user) {
      if (parseInt(id) === user.id) {
        setIsMe(true);
      } else {
        setIsMe(false);
      }
    }
  };

  useEffect(() => {
    if (id) {
      dispatch(startFriendRequestSend(parseInt(id)));
      dispatch(startPostFetchByUser(parseInt(id)));
      handleDisplay();
    }
  }, [id]);
  return (
    <TemplateBody
      Component={
        <>
          <div className='header'>
            <SearchUser />
          </div>
          {id &&
            !isMe &&
            (isFriend(id) ? (
              <button
                className='delete-friend'
                onClick={() => dispatch(startFriendRemove(parseInt(id)))}
              >
                Remove Friend
              </button>
            ) : (
              <button
                className='send-request'
                onClick={() => dispatch(startFriendRequestSend(parseInt(id)))}
              >
                Send Friend Request
              </button>
            ))}
          {error && <p>{error}</p>}
          <PostList posts={postList} />
        </>
      }
    />
  );
};
