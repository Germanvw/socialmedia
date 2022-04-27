import { ContactItemExplore } from '../../Components/Contacts/Contact/ContactItemExplore';
import { Template } from '../../Components/Template/Template';
import { fetchToken } from '../../Hooks/useFetch';
import { useEffect, useState } from 'react';
import { useAppSelector } from '../../Hooks/useRedux';
import { usePagination } from '../../Hooks/usePagination';
import { useFilterSearch } from '../../Hooks/useFilterSearch';
import { SearchUser } from '../../Components/Search/SearchUser';
import { UserDataProps } from '../../constants/users';
import { PaginationNav } from '../../Components/Template/Navigation/PaginationNav';
import {
  useFilterSearchProps,
  UsePaginationProps,
} from '../../Interfaces/GlobalInterfaces';

export const UserNavigation = () => {
  const { friendList } = useAppSelector((state) => state.friend);
  const { user } = useAppSelector((state) => state.auth);
  const [contactList, setContactList] = useState([]);

  const {
    perPage,
    handlePagination,
    pagination,
    handlePerPage,
    setPagination,
    setPerPage,
  }: UsePaginationProps = usePagination();

  const {
    filterInput,
    handleChange,
    paginatedArray,
    array,
  }: useFilterSearchProps = useFilterSearch(pagination, perPage, contactList);

  const fetchUserAll = async () => {
    const req = await fetchToken('users/', {});
    const { users } = await req.json();
    const withoutMe = users.filter(
      (item: UserDataProps) => item.id !== user!.id
    );
    setContactList(withoutMe);
  };
  useEffect(() => {
    fetchUserAll();
  }, []);
  return (
    <div>
      <Template
        Component={
          <div className='user-navigation'>
            <div className='header'>
              <SearchUser value={filterInput} handleChange={handleChange} />
            </div>
            <div className='user-list'>
              {paginatedArray.map((contact: any) => (
                <ContactItemExplore
                  key={contact.id}
                  user={contact}
                  friendList={friendList}
                />
              ))}{' '}
              <PaginationNav
                array={array}
                perPage={perPage}
                pagination={pagination}
                pagOptions={[10, 15, 20, 30]}
                setPagination={setPagination}
                handlePerPage={handlePerPage}
                handlePagination={handlePagination}
                setPerPage={setPerPage}
              />
            </div>
          </div>
        }
      />
    </div>
  );
};
