import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { fetchToken } from '../../Hooks/useFetch';
import { useAppSelector, useAppDispatch } from '../../Hooks/useRedux';
import { UserHeader } from '../Contacts/UserHeader';
import { startPostDelete } from '../../Redux/Slices/postSlice';

import './feed.scss';
import { authActions } from '../../Redux/Slices/authSlice';

interface FeedItemProp {
  feed: any;
  commentAmmount?: number;
}

export const FeedItem = ({ feed, commentAmmount }: FeedItemProp) => {
  const { id, image, text, likes, comments, created_at } = feed;
  const { user } = useAppSelector((state) => state.auth);
  const dispatch = useAppDispatch();
  const [liked, setLiked] = useState(false);
  const [likesCount, setLikesCount] = useState(likes);
  const sliceText = (text: string) => {
    if (text.length >= 197) {
      return (
        <>
          {text.slice(0, 194)} ...{' '}
          {
            <Link to={`/post/${id}`} className='bold'>
              read more
            </Link>
          }
        </>
      );
    }
    return text;
  };
  const fetchLikeStatus = async () => {
    const req = await fetchToken(`likes/${id}`, {});
    const answ = await req.json();

    if (answ.liked) {
      setLiked(true);
      getCurrentLikeCount();
    }
  };

  const getCurrentLikeCount = async () => {
    const req = await fetchToken(`likes/post/${id}`, {});
    const answ = await req.json();
    setLikesCount(answ.likes);
  };

  const handleChangeLike = async () => {
    const req = await fetchToken(
      `likes/${id}`,
      { post_author: feed.user.id },
      'POST'
    );
    const { author, ok, type } = await req.json();
    if (ok) {
      if (type === 'like' && author === user!.id) {
        dispatch(authActions.handleLikeQuantity(1));
      } else if (author === user!.id) {
        dispatch(authActions.handleLikeQuantity(-1));
      }
      setLiked(!liked);
    }
  };

  useEffect(() => {
    fetchLikeStatus();
    getCurrentLikeCount();
  }, [handleChangeLike]);

  return (
    <div className='feed-item'>
      <div className='header-feed-item'>
        <UserHeader
          user={feed.user}
          label={feed.user.username}
          date={created_at}
        />
      </div>
      <div className='img-post'>
        {image && <img src={image} alt='post-img' />}
      </div>
      <Link to={`/post/${id}`}>
        <p className='post-text'>{sliceText(text)}</p>
      </Link>
      <div className='hashtags'>
        {/* {post.hashtags &&
          post.hashtags.length > 0 &&
          post.hashtags?.map((hashtag: string) => (
            <p className='hashtag' key={hashtag}>
              {hashtag}
            </p>
          ))} */}
      </div>
      <div className='post-meta'>
        <div className='labels'>
          <button className='btn-delete' onClick={handleChangeLike}>
            <svg
              width='22'
              height='22'
              viewBox='0 0 22 22'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
              className={`${liked ? 'btn-liked' : ''} `}
            >
              <path
                d='M11 18L10.4697 18.5303C10.6103 18.671 10.8011 18.75 11 18.75C11.1989 18.75 11.3897 18.671 11.5303 18.5303L11 18ZM3.04737 10.0474L2.51704 10.5777L2.51704 10.5777L3.04737 10.0474ZM9.71403 3.38071L9.1837 3.91104L9.1837 3.91104L9.71403 3.38071ZM11 4.66667L10.4697 5.197C10.7626 5.48989 11.2374 5.48989 11.5303 5.197L11 4.66667ZM12.2859 3.38071L11.7556 2.85038L11.7556 2.85038L12.2859 3.38071ZM11.5303 17.4697L3.5777 9.51705L2.51704 10.5777L10.4697 18.5303L11.5303 17.4697ZM18.4223 9.51705L10.4697 17.4697L11.5303 18.5303L19.4829 10.5777L18.4223 9.51705ZM9.1837 3.91104L10.4697 5.197L11.5303 4.13634L10.2444 2.85038L9.1837 3.91104ZM11.5303 5.197L12.8163 3.91104L11.7556 2.85038L10.4697 4.13634L11.5303 5.197ZM15.6193 1.25C14.1701 1.25 12.7803 1.82567 11.7556 2.85038L12.8163 3.91104C13.5597 3.16764 14.5679 2.75 15.6193 2.75V1.25ZM19.5833 6.71405C19.5833 7.76538 19.1657 8.77365 18.4223 9.51705L19.4829 10.5777C20.5076 9.553 21.0833 8.1632 21.0833 6.71405H19.5833ZM21.0833 6.71405C21.0833 3.69634 18.637 1.25 15.6193 1.25V2.75C17.8086 2.75 19.5833 4.52476 19.5833 6.71405H21.0833ZM6.3807 2.75C7.43203 2.75 8.4403 3.16764 9.1837 3.91104L10.2444 2.85038C9.21966 1.82567 7.82986 1.25 6.3807 1.25V2.75ZM2.41666 6.71405C2.41666 4.52476 4.19142 2.75 6.3807 2.75V1.25C3.36299 1.25 0.916656 3.69634 0.916656 6.71405H2.41666ZM3.5777 9.51705C2.83429 8.77364 2.41666 7.76538 2.41666 6.71405H0.916656C0.916656 8.1632 1.49233 9.553 2.51704 10.5777L3.5777 9.51705Z'
                fill='#77757F'
              />
            </svg>
            <span>{likesCount}</span>
          </button>
          <Link to={`/post/${id}`}>
            <button>
              <svg
                width='20'
                height='20'
                viewBox='0 0 22 22'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  d='M16.3333 19L16.5685 18.2879L16.2415 18.1798L15.9465 18.3575L16.3333 19ZM19 16.3334L18.3682 15.9292L18.175 16.2312L18.2887 16.5712L19 16.3334ZM20.3333 20.3211L20.0981 21.0333C20.3676 21.1223 20.6643 21.0516 20.8646 20.8505C21.065 20.6494 21.1346 20.3525 21.0446 20.0833L20.3333 20.3211ZM15.9465 18.3575C14.6878 19.1153 12.6647 19.5711 11 19.5711V21.0711C12.858 21.0711 15.1682 20.5769 16.7202 19.6426L15.9465 18.3575ZM11 19.5711C6.25906 19.5711 2.41666 15.7306 2.41666 10.994H0.916656C0.916656 16.56 5.43158 21.0711 11 21.0711V19.5711ZM2.41666 10.994C2.41666 6.25736 6.25908 2.41669 11 2.41669V0.916687C5.43156 0.916687 0.916656 5.42802 0.916656 10.994H2.41666ZM11 2.41669C15.7409 2.41669 19.5833 6.25736 19.5833 10.994H21.0833C21.0833 5.42802 16.5684 0.916687 11 0.916687V2.41669ZM19.5833 10.994C19.5833 12.7592 19.1906 14.6438 18.3682 15.9292L19.6318 16.7375C20.6627 15.1261 21.0833 12.9251 21.0833 10.994H19.5833ZM16.0981 19.7122L20.0981 21.0333L20.5685 19.609L16.5685 18.2879L16.0981 19.7122ZM21.0446 20.0833L19.7113 16.0955L18.2887 16.5712L19.622 20.559L21.0446 20.0833Z'
                  fill='#77757F'
                />
              </svg>
              <span>{commentAmmount ? commentAmmount : comments}</span>
            </button>
          </Link>
        </div>
        <div className='margin-left d-flex'>
          {feed.user.id === user!.id && (
            <button
              onClick={() => dispatch(startPostDelete({ id, likesCount }))}
              className='btn-delete'
            >
              Delete
            </button>
          )}
          <button>
            <svg
              width='20'
              height='20'
              viewBox='0 0 20 20'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                d='M17.3334 1.54972e-05L2.66669 0V19.3333C2.66669 19.5896 2.81358 19.8232 3.04456 19.9342C3.27554 20.0452 3.5497 20.014 3.74982 19.8539L10 14.8538L16.2502 19.8539C16.4503 20.014 16.7245 20.0452 16.9555 19.9342C17.1865 19.8232 17.3334 19.5896 17.3334 19.3333V1.54972e-05Z'
                fill='#4D77FF'
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};
