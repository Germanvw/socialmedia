import { useEffect } from 'react';
import {
  startFriendRequestFetch,
  startFriendFetchAll,
} from '../Redux/Slices/friendSlice';
import { useAppDispatch, useAppSelector } from '../Hooks/useRedux';
import {
  startPostFetchAll,
  startPostFetchFavorite,
} from '../Redux/Slices/postSlice';
import './homepage.scss';
import { TemplateBody } from '../Components/Template/TemplateBody';
import { PostList } from '../Components/Post/PostList';
import { SearchUser } from '../Components/Search/SearchUser';
import { AddPostBtn } from '../Components/Buttons/AddPostBtn';

export const Homepage = () => {
  const { postList } = useAppSelector((state) => state.posts);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(startFriendFetchAll());
    dispatch(startFriendRequestFetch());
    dispatch(startPostFetchAll());
    dispatch(startPostFetchFavorite());
  }, [dispatch]);

  return (
    <TemplateBody
      Component={
        <>
          <div className='header'>
            <SearchUser />
            <AddPostBtn />
          </div>
          <PostList posts={postList} />
        </>
      }
    />
  );
};
