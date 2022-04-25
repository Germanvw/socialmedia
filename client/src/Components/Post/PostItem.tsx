import { useEffect, useState } from 'react';
import { Link, useLocation, useParams } from 'react-router-dom';
import { fetchToken } from '../../Hooks/useFetch';
import { useAppSelector, useAppDispatch } from '../../Hooks/useRedux';
import { UserHeader } from '../Contacts/UserHeader';
import { startPostDelete } from '../../Redux/Slices/postSlice';
import { authActions } from '../../Redux/Slices/authSlice';
import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai';
import { FaRegCommentAlt, FaTrashAlt } from 'react-icons/fa';

import './post.scss';

interface FeedItemProp {
  feed: any;
  commentAmmount?: number;
}

export const PostItem = ({ feed, commentAmmount }: FeedItemProp) => {
  const { id, image, text, likes, comments, created_at } = feed;
  const { user } = useAppSelector((state) => state.auth);
  const dispatch = useAppDispatch();
  const [liked, setLiked] = useState(false);
  const [favorite] = useState(false);
  const [likesCount, setLikesCount] = useState(likes);
  const location = useLocation();

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

  const handleDeleteWithRedirection = () => {
    if (location.pathname.includes('/post')) {
      dispatch(startPostDelete({ id, likesCount, redirect: true }));
    } else {
      dispatch(startPostDelete({ id, likesCount, redirect: false }));
    }
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
    <div className='post-item'>
      <UserHeader
        user={feed.user}
        label={feed.user.username}
        date={created_at}
      />
      <div className='img-post'>
        {image && <img src={image} alt='post-img' />}
      </div>
      <Link to={`/post/${id}`}>
        <p className='post-text'>{sliceText(text)}</p>
      </Link>
      <div className='post-meta'>
        <div className='post-options'>
          <button
            className={`btn-delete ${liked ? 'btn-liked' : ''}`}
            onClick={handleChangeLike}
          >
            {liked ? <AiFillHeart /> : <AiOutlineHeart />}
            <p>{likesCount}</p>
          </button>
          <Link to={`/post/${id}`}>
            <button className='btn-delete'>
              <FaRegCommentAlt />
              <p>{commentAmmount ? commentAmmount : comments}</p>
            </button>
          </Link>
        </div>
        <div className='margin-left d-flex'>
          {feed.user.id === user!.id && (
            <button
              onClick={handleDeleteWithRedirection}
              className='btn-delete'
            >
              <FaTrashAlt />
            </button>
          )}
          <button className={`btn-favorite ${favorite ? 'is-favorite' : ''}`}>
            <svg
              width='20'
              height='20'
              viewBox='0 0 20 20'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                d='M17.3334 1.54972e-05L2.66669 0V19.3333C2.66669 19.5896 2.81358 19.8232 3.04456 19.9342C3.27554 20.0452 3.5497 20.014 3.74982 19.8539L10 14.8538L16.2502 19.8539C16.4503 20.014 16.7245 20.0452 16.9555 19.9342C17.1865 19.8232 17.3334 19.5896 17.3334 19.3333V1.54972e-05Z'
                fill='#a5a3a9'
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};
