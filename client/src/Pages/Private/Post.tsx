import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { PostProp } from '../../Components/Post/PostList';
import { PostWithComments } from '../../Components/Post/PostWithComments';
import { SearchUser } from '../../Components/Search/SearchUser';
import { TemplateBody } from '../../Components/Template/TemplateBody';
import { fetchToken } from '../../Hooks/useFetch';

export const Post = () => {
  const { id } = useParams();

  const [post, setPost] = useState<PostProp | null>(null);

  const fetchPosts = async () => {
    const req = await fetchToken(`posts/${id}`, {});
    const answ = await req.json();
    setPost(answ.post[0]);
  };

  useEffect(() => {
    fetchPosts();
  }, [id]);
  if (post === null) return <></>;
  return (
    <TemplateBody
      Component={
        <>
          <div className='header'>
            <SearchUser />
          </div>
          <PostWithComments post={post} />
        </>
      }
    />
  );
};
