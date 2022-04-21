import { Link } from 'react-router-dom';
import { FriendItemProps } from '../../Interfaces/UserInterfaces';

export const UserHeader = ({
  user,
  label,
}: {
  user: FriendItemProps;
  label: string;
}) => {
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
    </div>
  );
};
