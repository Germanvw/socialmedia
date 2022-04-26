import { PostList } from '../../Components/Post/PostList';
import { Template } from '../../Components/Template/Template';
import { useAppSelector } from '../../Hooks/useRedux';
export const Favorites = () => {
  const { postListFav } = useAppSelector((state) => state.posts);
  return (
    <Template
      Component={
        <>
          <h1>Favorite List</h1>
          <PostList posts={postListFav} />
        </>
      }
    />
  );
};
