import { useEffect } from 'react';
import { DropdownPaginationProps } from '../../Interfaces/GlobalInterfaces';

export const DropdownPagination = ({
  options,
  dwName,
  setPerPage,
  handleChange,
}: DropdownPaginationProps) => {
  useEffect(() => {
    setPerPage(options[0]!);
  }, [options[0]]);

  return (
    <select
      name={dwName}
      onChange={handleChange}
      className='dropdownPagination'
    >
      {options.map((value: number) => (
        <option key={value} value={value}>
          {value}
        </option>
      ))}
    </select>
  );
};
