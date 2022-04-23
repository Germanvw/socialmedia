import { Link } from 'react-router-dom';
import { UserAtFriendList } from '../../Interfaces/UserInterfaces';

interface HeaderProps {
  user: UserAtFriendList;
  label: string;
  date?: string;
}

export const UserHeader = ({ user, label, date }: HeaderProps) => {
  const { id, firstname, lastname } = user;
  return (
    <div className='contact-item'>
      <div className='profile-pic'>
        <Link to={`/profile/${id}`}>
          <img src={user.image} alt='profile-pic' />
        </Link>
      </div>
      <div className='profile-info'>
        <div className='info'>
          <Link to={`/profile/${id}`}>
            {firstname} {lastname}
          </Link>
          <Link to={`/profile/${id}`} className='label'>
            {label}
          </Link>
        </div>
      </div>
      {date && (
        <div className='date'>{new Date(date).toLocaleDateString()}</div>
      )}
    </div>
  );
};
