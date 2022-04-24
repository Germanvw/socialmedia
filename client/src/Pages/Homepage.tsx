import { CreatePost } from '../Components/Buttons/CreatePost';
import { FeedList } from '../Components/Feed/FeedList';
import { NotificationBar } from '../Components/Nav/NotificationBar/NotificationBar';
import { SearchUser } from '../Components/Nav/SearchUser';
import { Sidebar } from '../Components/Nav/Sidebar/Sidebar';
import { useEffect } from 'react';
import {
  startFriendRequestFetch,
  startFriendFetchAll,
} from '../Redux/Slices/friendSlice';
import { useAppDispatch, useAppSelector } from '../Hooks/useRedux';
import { startPostFetchAll } from '../Redux/Slices/postSlice';
import './homepage.scss';
import { PostCreateForm } from '../Components/Forms/PostCreateForm';

export const Homepage = () => {
  const { postList } = useAppSelector((state) => state.posts);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(startFriendFetchAll());
    dispatch(startFriendRequestFetch());
    dispatch(startPostFetchAll());
  }, [dispatch]);

  return (
    <div className='main-site'>
      <Sidebar />
      <div className='body'>
        <div className='header'>
          <SearchUser />
        </div>
        <div className='create-post'>
          <PostCreateForm />
        </div>
        <FeedList posts={postList} />
      </div>
      <NotificationBar />
    </div>
  );
};
