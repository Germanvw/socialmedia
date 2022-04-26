import { useAppDispatch } from '../../../Hooks/useRedux';
import {
  startFriendRemove,
  startFriendRequestSend,
} from '../../../Redux/Slices/friendSlice';

export const ContactHeader = ({
  user,
  isFriend,
}: {
  user: any;
  isFriend: boolean;
}) => {
  const {
    id,
    image,
    username,
    firstname,
    lastname,
    age,
    country,
    province,
    metaData,
  } = user;
  const { posts, likes, friends } = metaData;
  const dispatch = useAppDispatch();
  return (
    <div className='contact-header-body'>
      <div className='contact-image'>
        <img src={image} alt='profile-pic' />
      </div>
      <div className='contact-info'>
        <div>
          <p>{username}</p>
          <p>
            {firstname} {lastname}
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
          {isFriend ? (
            <button
              className='delete-friend'
              onClick={() => dispatch(startFriendRemove(parseInt(id)))}
            >
              Remove Friend
            </button>
          ) : (
            <button
              className='send-request'
              onClick={() => dispatch(startFriendRequestSend(parseInt(id)))}
            >
              Send Friend Request
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
