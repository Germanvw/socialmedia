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
import { Template } from '../Components/Template/Template';
import { PostList } from '../Components/Post/PostList';
import { SearchUserWithResult } from '../Components/Search/SearchUserWithResult';
import { DynamicModal } from '../Components/Modal/DynamicModal';
import { IoIosAddCircle } from 'react-icons/io';

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
    <Template
      Component={
        <>
          <div className='header'>
            <SearchUserWithResult />
            <DynamicModal
              title='Change Password'
              type='Post'
              classN='btn-open-modal-post'
              svg={<IoIosAddCircle />}
            />
          </div>
          <PostList posts={postList} />
        </>
      }
    />
  );
};
