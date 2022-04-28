import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useAppSelector, useAppDispatch } from '../../Hooks/useRedux';
import { Template } from '../../Components/Template/Template';
import { PostList } from '../../Components/Post/PostList';
import { startPostFetchByUser } from '../../Redux/Slices/postSlice';

import './user.scss';
import { ContactHeader } from '../../Components/Contacts/Contact/ContactHeader';
import { fetchToken } from '../../Hooks/useFetch';
import { isFriend } from '../../Helpers/isFriend';
import { SearchUserWithResult } from '../../Components/Search/SearchUserWithResult';
import { FriendItemProps } from '../../Interfaces/UserInterfaces';

export const User = () => {
  const { friendList } = useAppSelector((state) => state.friend);
  const { postList } = useAppSelector((state) => state.posts);
  const { user } = useAppSelector((state) => state.auth);
  const dispatch = useAppDispatch();

  const { id } = useParams();
  const [contact, setContact] = useState<FriendItemProps | null>(null);
  const [isMe, setIsMe] = useState(false);

  const handleDisplay = (): void => {
    if (id && user) {
      if (parseInt(id) === user.id) {
        setIsMe(true);
        setContact(user);
      } else {
        setIsMe(false);
        fetchContact();
      }
    }
  };
  const fetchContact = async () => {
    const req = await fetchToken(`users/${id}`, {});
    const { user } = await req.json();
    setContact(user);
  };

  useEffect(() => {
    if (id) {
      dispatch(startPostFetchByUser(parseInt(id)));
      handleDisplay();
    }
  }, [id]);
  if (!contact) return <></>;
  return (
    <Template
      Component={
        <>
          <div className='header'>
            <SearchUserWithResult />
          </div>
          {id && contact && (
            <ContactHeader
              user={contact}
              isFriend={isFriend(parseInt(id), friendList)}
              isMe={isMe}
            />
          )}
          <PostList posts={postList} title={`@${contact!.username} posts`} />
        </>
      }
    />
  );
};
