import { PostList } from '../../Components/Post/PostList';
import { TemplateBody } from '../../Components/Template/TemplateBody';
import { useAppSelector } from '../../Hooks/useRedux';
export const Favorites = () => {
  const { postListFav } = useAppSelector((state) => state.posts);
  return (
    <TemplateBody
      Component={
        <>
          <h1>Favorite List</h1>
          <PostList posts={postListFav} />
        </>
      }
    />
  );
};
