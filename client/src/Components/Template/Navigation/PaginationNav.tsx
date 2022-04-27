import { PaginationNavInterface } from '../../../Interfaces/GlobalInterfaces';
import { PaginationButtons } from '../../Buttons/PaginationButtons';
import { DropdownPagination } from '../../Forms/DropdownPagination';

import './navigation.scss';

export const PaginationNav = ({
  array,
  perPage,
  pagination,
  pagOptions,
  setPagination,
  handlePerPage,
  handlePagination,
  setPerPage,
}: PaginationNavInterface) => {
  return (
    <div className='pagination-body'>
      <p className='pag-total'>{`${array && array.length} Users found`}</p>
      <div className='pagination'>
        <PaginationButtons
          perPage={perPage}
          howMany={array.length}
          handlePagination={handlePagination}
          pagination={pagination}
          setPagination={setPagination}
        />
      </div>
      <div className='perPage'>
        <DropdownPagination
          dwName='perPage'
          handleChange={handlePerPage}
          options={pagOptions}
          setPerPage={setPerPage}
        />
      </div>
    </div>
  );
};
