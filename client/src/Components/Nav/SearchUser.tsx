import { useState } from 'react';

export const SearchUser = () => {
  const [query, setQuery] = useState('');

  return (
    <div className='navigation-user'>
      <svg
        width='15'
        height='16'
        viewBox='0 0 15 16'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <path
          d='M14.5 15L10.5 11M6.5 13C3.18629 13 0.5 10.3137 0.5 7C0.5 3.68629 3.18629 1 6.5 1C9.81371 1 12.5 3.68629 12.5 7C12.5 10.3137 9.81371 13 6.5 13Z'
          stroke='#1D1929'
        />
      </svg>
      <div className='btn'>
        <input
          type='text'
          placeholder='Search...'
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
      </div>
    </div>
  );
};
