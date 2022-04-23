import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { PostProp } from '../../Components/Feed/FeedList';
import { PostItem } from '../../Components/Feed/PostItem';
import { NotificationBar } from '../../Components/Nav/NotificationBar/NotificationBar';
import { SearchUser } from '../../Components/Nav/SearchUser';
import { Sidebar } from '../../Components/Nav/Sidebar/Sidebar';
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
    <div className='main-site'>
      <Sidebar />
      <div className='body'>
        <div className='header'>
          <SearchUser />
        </div>
        <PostItem post={post} />
      </div>
      <NotificationBar />
    </div>
  );
};
