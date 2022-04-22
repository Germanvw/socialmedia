import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchToken } from '../../Hooks/useFetch';
import { CommentItem } from './CommentItem';
import { FeedItem } from './FeedItem';

export const PostItem = ({ post }: any) => {
  const { id } = useParams();
  const [comments, setComments] = useState([]);

  useEffect(() => {
    fetchComments();
  }, [id]);

  const fetchComments = async () => {
    const req = await fetchToken(`comments/${id}`, {});
    const answ = await req.json();
    console.log(answ);
    setComments(answ.comments);
  };
  return (
    <div>
      <FeedItem feed={post} />
      <p>Comments</p>
      {comments.length > 0 ? (
        comments.map((comment: any) => (
          <CommentItem comment={comment} key={comment.id} />
        ))
      ) : (
        <p>0</p>
      )}
      <input type='text' />
      <button>Add comment</button>
    </div>
  );
};
