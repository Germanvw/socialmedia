import { FeedList, PostProp } from '../../Components/Feed/FeedList';
import { NotificationBar } from '../../Components/Nav/NotificationBar/NotificationBar';
import { SearchUser } from '../../Components/Nav/SearchUser';
import { Sidebar } from '../../Components/Nav/Sidebar/Sidebar';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchToken } from '../../Hooks/useFetch';

export const ProfileId = () => {
  const { id } = useParams();
  const [posts, setPosts] = useState<PostProp | []>([]);
  useEffect(() => {
    fetchPosts();
  }, [id]);

  const fetchPosts = async () => {
    const req = await fetchToken(`posts/${id}`, {});
    const answ = await req.json();
    setPosts(answ.posts);
  };
  return (
    <div className='main-site'>
      <Sidebar />
      <div className='body'>
        <div className='header'>
          <SearchUser />
        </div>
        <FeedList posts={posts} />
      </div>
      <NotificationBar />
    </div>
  );
};
