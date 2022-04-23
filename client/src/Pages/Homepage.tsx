import { CreatePost } from '../Components/Buttons/CreatePost';
import { FeedList } from '../Components/Feed/FeedList';
import { NotificationBar } from '../Components/Nav/NotificationBar/NotificationBar';
import { SearchUser } from '../Components/Nav/SearchUser';
import { Sidebar } from '../Components/Nav/Sidebar/Sidebar';
import { useEffect } from 'react';
import {
  startFetchFriendRequest,
  startFetchFriends,
} from '../Redux/Slices/friendSlice';
import { useAppDispatch, useAppSelector } from '../Hooks/useRedux';
import { startFetchAllPosts } from '../Redux/Slices/postSlice';
import './homepage.scss';

export const Homepage = () => {
  const { postList } = useAppSelector((state) => state.posts);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(startFetchFriends());
    dispatch(startFetchFriendRequest());
    dispatch(startFetchAllPosts());
  }, [dispatch]);

  return (
    <div className='main-site'>
      <Sidebar />
      <div className='body'>
        <div className='header'>
          <SearchUser />
          <div className='btn'>
            <CreatePost title='Create Post' />
          </div>
        </div>
        <FeedList posts={postList} />
      </div>
      <NotificationBar />
    </div>
  );
};
