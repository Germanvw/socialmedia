import { UserDataProps } from '../../../constants/users';

export const SidebarHeader = ({ userData }: { userData: UserDataProps }) => {
  const image = '';
  const name = '';
  const adress = '';
  const data = { posts: 0, friends: 0, likes: 0 };
  return (
    <div className='profile-info'>
      <div className='profile-info-name'>
        <img src={image} alt='profile-pic' />
        <p className='username'>{name}</p>
        <p className='adress'>{adress}</p>
      </div>
      <div className='profile-info-meta'>
        <div className='meta-counter'>
          <p>{data.posts}</p>
          <p className='label'>Posts</p>
        </div>
        <div className='meta-counter'>
          <p>{data.friends}</p>
          <p className='label'>Followers</p>
        </div>
        <div className='meta-counter'>
          <p>{data.likes}</p>
          <p className='label'>Following</p>
        </div>
      </div>
    </div>
  );
};
