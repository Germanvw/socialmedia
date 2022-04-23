import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { CommentItem } from './CommentItem';
import { FeedItem } from './FeedItem';
import { CommentPost } from './CommentPost';
import { useAppSelector, useAppDispatch } from '../../Hooks/useRedux';
import { startFetchComments } from '../../Redux/Slices/commentSlice';
import { CommentItemProp } from '../../Interfaces/CommentInterfaces';

export const PostItem = ({ post }: any) => {
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
      <FeedItem feed={post} commentAmmount={ammount} />
      <p>Comments</p>
      <CommentPost id={id} />
      {ammount > 0 ? (
        commentList.map((item: CommentItemProp) => (
          <CommentItem comment={item} key={item.id} userId={user.id} />
        ))
      ) : (
        <p>0</p>
      )}
    </div>
  );
};
