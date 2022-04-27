import { AiOutlineSearch } from 'react-icons/ai';

import './search.scss';

export const SearchUser = ({ value, handleChange }: any) => {
  return (
    <div className='navigation-user'>
      <input
        type='text'
        placeholder='Search...'
        value={value}
        onChange={handleChange}
      />
      <AiOutlineSearch />
    </div>
  );
};
