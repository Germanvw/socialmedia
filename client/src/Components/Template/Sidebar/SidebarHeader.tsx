import { Link } from 'react-router-dom';
import { useAppSelector } from '../../../Hooks/useRedux';
import './sidebar.scss';

interface SidebarHeaderProps {
  isOpen?: boolean;
}

export const SidebarHeader = ({ isOpen }: SidebarHeaderProps) => {
  const { user } = useAppSelector((state) => state.auth);
  const { id, image, firstname, lastname, province, country, metaData } = user!;
  const { code } = country;
  const { posts, friends, likes } = metaData!;

  const profileLink = `/user/${id}`;

  if (!user) return <></>;
  return (
    <div className='profile-info'>
      <div className='profile-info-name'>
        <Link to={profileLink}>
          <img src={image} alt='profile-pic' />
        </Link>
        {isOpen && (
          <>
            <Link to={profileLink}>
              <p className='username'>
                {firstname} {lastname}
              </p>
            </Link>
            <Link to={profileLink} className='center'>
              <p className='adress'>{`${province}, ${code}`}</p>
            </Link>
          </>
        )}
      </div>
      {isOpen && (
        <div className='profile-info-meta'>
          <div className='meta-counter'>
            <p>{posts}</p>
            <p className='label'>Posts</p>
          </div>
          <div className='meta-counter'>
            <p>{friends}</p>
            <p className='label'>Friends</p>
          </div>
          <div className='meta-counter'>
            <p>{likes}</p>
            <p className='label'>Likes</p>
          </div>
        </div>
      )}
    </div>
  );
};
