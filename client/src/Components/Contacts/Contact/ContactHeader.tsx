import { AddOrRemoveFriend } from '../../Buttons/AddOrRemoveFriend';

export const ContactHeader = ({
  user,
  isFriend,
  isMe,
}: {
  user: any;
  isFriend: boolean;
  isMe: boolean;
}) => {
  const {
    id,
    image,
    username,
    firstname,
    lastname,
    age,
    gender,
    country,
    province,
    metaData,
  } = user;
  const { posts, likes, friends } = metaData;
  return (
    <div className='contact-header-body'>
      <div className='contact-image'>
        <img src={image} alt='profile-pic' />
      </div>
      <div className='main-info'>
        <div className='contact-info'>
          <div>
            <p>{username}</p>
            <p>
              {firstname} {lastname}
            </p>
            <p>
              Gender: <span>{gender.name}</span>
            </p>
          </div>
          <div className='location'>
            <p>
              Age: <span>{age}</span>
            </p>
            <p>
              Country: <span>{country.name}</span>
            </p>
            <p>
              Province: <span>{province}</span>
            </p>
          </div>
        </div>
        <div className='contact-meta'>
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
          <div className='btn-action'>
            <AddOrRemoveFriend id={id} isFriend={isFriend} isMe={isMe} />
          </div>
        </div>
      </div>
    </div>
  );
};
