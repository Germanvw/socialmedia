import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { PostItem } from './PostItem';
import { useAppSelector, useAppDispatch } from '../../Hooks/useRedux';
import { startFetchComments } from '../../Redux/Slices/commentSlice';
import { CommentItemProp } from '../../Interfaces/CommentInterfaces';
import { CommentItem } from './CommentItem';
import { CommentForm } from '../Forms/CommentForm';

export const PostWithComments = ({ post }: any) => {
  const { user } = useAppSelector((state) => state.auth);
  const { commentList, ammount } = useAppSelector((state) => state.comment);
  const { id } = useParams();
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (id) dispatch(startFetchComments(id));
  }, [id]);

  if (!id || !user) return <></>;
  return (
    <div>
      <PostItem feed={post} commentAmmount={ammount} />
      <CommentForm id={id} />
      <h2>Comments</h2>
      {ammount > 0 ? (
        commentList.map((item: CommentItemProp) => (
          <CommentItem comment={item} key={item.id} userId={user.id} />
        ))
      ) : (
        <p className='not-found-label'>No comments submited.</p>
      )}
    </div>
  );
};
