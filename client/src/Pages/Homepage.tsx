import { useEffect } from 'react';
import {
  startFriendRequestFetch,
  startFriendFetchAll,
} from '../Redux/Slices/friendSlice';
import { useAppDispatch, useAppSelector } from '../Hooks/useRedux';
import { startPostFetchAll } from '../Redux/Slices/postSlice';
import './homepage.scss';
import { PostCreateForm } from '../Components/Forms/PostCreateForm';
import { TemplateBody } from '../Components/Template/TemplateBody';
import { PostList } from '../Components/Post/PostList';
import { SearchUser } from '../Components/Search/SearchUser';

export const Homepage = () => {
  const { postList } = useAppSelector((state) => state.posts);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(startFriendFetchAll());
    dispatch(startFriendRequestFetch());
    dispatch(startPostFetchAll());
  }, [dispatch]);

  return (
    <TemplateBody
      Component={
        <>
          <div className='header'>
            <SearchUser />
          </div>
          <div className='create-post'>
            <PostCreateForm />
          </div>
          <PostList posts={postList} />
        </>
      }
    />
  );
};
