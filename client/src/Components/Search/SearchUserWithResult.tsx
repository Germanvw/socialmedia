import { useEffect, useState } from 'react';
import { AiOutlineSearch } from 'react-icons/ai';
import { Link, useNavigate } from 'react-router-dom';
import { useAppSelector } from '../../Hooks/useRedux';

import './search.scss';
import { handleFilter } from '../../Helpers/handleFilter';
import { fetchUserAll } from '../../Helpers/fetchUserAll';
import { UserAtFriendList } from '../../Interfaces/UserInterfaces';

export const SearchUserWithResult = () => {
  const { user } = useAppSelector((state) => state.auth);

  const [query, setQuery] = useState('');
  const [userList, setUserList] = useState([]);
  const [filteredList, setFilteredList] = useState([]);
  const navigate = useNavigate();
  const fetchUsers = async () => {
    const users: any = await fetchUserAll();

    const filteredMe = users.filter((contact: any) => contact.id !== user!.id);
    setUserList(filteredMe);
  };

  const redirectToUser = (id: number) => {
    setQuery('');
    navigate(`/user/${id}`);
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  useEffect(() => {
    const filteredArray = handleFilter(userList, query, true);
    setFilteredList(filteredArray);
  }, [query]);
  return (
    <div className='navigation-user'>
      <input
        type='text'
        placeholder='Search...'
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <AiOutlineSearch />
      <div className='results'>
        {filteredList.length > 0 &&
          filteredList.slice(0, 5).map((user: UserAtFriendList) => (
            <div className='result-item' key={user.id}>
              <button onClick={() => redirectToUser(user.id)}>
                {user.username}
              </button>
            </div>
          ))}
        {filteredList.length > 0 && (
          <div className='result-item'>
            <Link to='/users'>All results</Link>
          </div>
        )}
      </div>
    </div>
  );
};
