import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchToken } from '../../Hooks/useFetch';
import { SearchUser } from '../../Components/Search/SearchUser';
import { useAppSelector, useAppDispatch } from '../../Hooks/useRedux';
import {
  startFriendRemove,
  startFriendRequestSend,
} from '../../Redux/Slices/friendSlice';
import { TemplateBody } from '../../Components/Template/TemplateBody';
import { PostList, PostProp } from '../../Components/Post/PostList';

export const User = () => {
  const { id } = useParams();
  const { friendList, error } = useAppSelector((state) => state.friend);
  const { user } = useAppSelector((state) => state.auth);
  const dispatch = useAppDispatch();
  const [posts, setPosts] = useState<PostProp | []>([]);
  const [isMe, setIsMe] = useState(false);

  const fetchPosts = async () => {
    const req = await fetchToken(`posts/user/${id}`, {});
    const answ = await req.json();
    setPosts(answ.posts);
  };

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
    fetchPosts();
    handleDisplay();
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
          <PostList posts={posts} />
        </>
      }
    />
  );
};
