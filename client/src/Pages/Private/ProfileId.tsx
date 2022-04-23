import { FeedList, PostProp } from '../../Components/Feed/FeedList';
import { NotificationBar } from '../../Components/Nav/NotificationBar/NotificationBar';
import { SearchUser } from '../../Components/Nav/SearchUser';
import { Sidebar } from '../../Components/Nav/Sidebar/Sidebar';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchToken } from '../../Hooks/useFetch';
import { useAppSelector, useAppDispatch } from '../../Hooks/useRedux';
import {
  startFriendRemove,
  startFriendRequestSend,
} from '../../Redux/Slices/friendSlice';

export const ProfileId = () => {
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
    <div className='main-site'>
      <Sidebar />
      <div className='body'>
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
        <FeedList posts={posts} />
      </div>
      <NotificationBar />
    </div>
  );
};
