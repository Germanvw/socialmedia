import { CommentItemProp } from '../../Interfaces/CommentInterfaces';
import { UserHeader } from '../Contacts/UserHeader';
import { useAppDispatch } from '../../Hooks/useRedux';
import { startDeleteComment } from '../../Redux/Slices/commentSlice';
import { FaTrashAlt } from 'react-icons/fa';

interface ICommentItemProps {
  comment: CommentItemProp;
  key: number;
  userId: number;
}
export const CommentItem = ({ comment, userId }: ICommentItemProps) => {
  const dispatch = useAppDispatch();
  const { user, created_at, user_id } = comment;

  const handleDeletePost = () => {
    dispatch(startDeleteComment(comment.id));
  };
  return (
    <div className='comment-item'>
      <div className='header-feed-item'>
        <UserHeader user={user} label={`@${user.username}`} date={created_at} />
        <p className='post-text'>{comment.comment}</p>
        {user_id === userId && (
          <div className='right'>
            <button className='btn-delete-comment' onClick={handleDeletePost}>
              <FaTrashAlt />
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
