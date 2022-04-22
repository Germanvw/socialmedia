import { UserHeader } from '../Contacts/UserHeader';

export const CommentItem = ({ comment }: any) => {
  const { user, created_at } = comment;
  return (
    <div>
      <div className='feed-item'>
        <div className='header-feed-item'>
          <UserHeader user={user} label={`@${user.username}`} />
          <p>{comment.comment}</p>
          <p className='date'>{new Date(created_at).toLocaleDateString()}</p>
        </div>
      </div>
    </div>
  );
};
