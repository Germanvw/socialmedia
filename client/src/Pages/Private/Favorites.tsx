import { PostList } from '../../Components/Post/PostList';
import { Template } from '../../Components/Template/Template';
import { useAppSelector } from '../../Hooks/useRedux';
export const Favorites = () => {
  const { postListFav } = useAppSelector((state) => state.posts);
  return (
    <Template
      Component={
        <>
          <PostList posts={postListFav} title={'Favorite Posts'} />
        </>
      }
    />
  );
};
