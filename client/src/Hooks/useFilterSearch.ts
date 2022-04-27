import { useEffect, useState } from 'react';
import { handleFilter } from '../Helpers/handleFilter';
import { PaginationProps } from '../Interfaces/GlobalInterfaces';
import { UserAtFriendList } from '../Interfaces/UserInterfaces';

export const useFilterSearch = (
  pagination: PaginationProps,
  perPage: number,
  dbData: UserAtFriendList[]
) => {
  const [filterInput, setFilterInput] = useState('');
  const [array, setArray] = useState([]);
  const [paginatedArray, setPaginatedArray] = useState([]);

  const handleChange = ({ target }: any) => {
    setFilterInput(target.value);
  };

  const handleSlice = (array: any) => {
    return array.slice(
      (pagination.index - 1) * perPage,
      pagination.index * perPage
    );
  };

  useEffect(() => {
    const filtered = handleFilter(dbData, filterInput, false);
    setArray(filtered);
    setPaginatedArray(handleSlice(filtered));
  }, [dbData, filterInput]);

  useEffect(() => {
    setPaginatedArray(handleSlice(array));
  }, [pagination.index, perPage]);
  return { filterInput, handleChange, paginatedArray, array };
};
